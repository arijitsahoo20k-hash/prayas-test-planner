import React, { useEffect, useState, useMemo } from "react";
import TopBar from "./components/TopBar.jsx";
import Hero from "./components/Hero.jsx";
import FilterBar from "./components/FilterBar.jsx";
import TestCalendar from "./components/TestCalendar.jsx";
import UpcomingList from "./components/UpcomingList.jsx";
import InstallPrompt from "./components/InstallPrompt.jsx";
import BatchSelector from "./components/BatchSelector.jsx";
import { Sparkle } from "./icons/Icons.jsx";
import { BATCH_1, TESTS_1, BATCH_2, TESTS_2 } from "./data/testPlanner.js";
import { todayKey, cursorFromKey } from "./utils/date.js";

const BATCH_MAP = {
  prayas1: { meta: BATCH_1, tests: TESTS_1 },
  prayas2: { meta: BATCH_2, tests: TESTS_2 },
};

const LS_KEY = "tp-batch";

export default function App() {
  // ── batch state — persisted in localStorage ──
  const [batchId, setBatchId] = useState(() => {
    return localStorage.getItem(LS_KEY) || null;
  });

  const batch = batchId ? BATCH_MAP[batchId] : null;
  const TESTS = batch ? batch.tests : [];
  const BATCH_META = batch ? batch.meta : null;

  // Apply batch accent to <html> data attribute
  useEffect(() => {
    if (batchId) {
      document.documentElement.setAttribute("data-batch", batchId);
    } else {
      document.documentElement.removeAttribute("data-batch");
    }
  }, [batchId]);

  const today = todayKey();
  const nextTest = useMemo(
    () => TESTS.find((t) => t.date >= today) || TESTS[TESTS.length - 1],
    [TESTS, today]
  );

  const [filter, setFilter] = useState("all");
  const [cursor, setCursor] = useState(() =>
    nextTest ? cursorFromKey(nextTest.date) : cursorFromKey(today)
  );
  const [selectedKey, setSelectedKey] = useState(nextTest?.date || today);

  // Update cursor/selected when batch changes
  useEffect(() => {
    if (nextTest) {
      setCursor(cursorFromKey(nextTest.date));
      setSelectedKey(nextTest.date);
    }
  }, [batchId]);

  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      if (!sessionStorage.getItem("tp-install-dismissed")) setShowInstall(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setShowInstall(false);
  };

  const handleDismiss = () => {
    setShowInstall(false);
    sessionStorage.setItem("tp-install-dismissed", "1");
  };

  const filteredTests = useMemo(() => {
    if (filter === "all") return TESTS;
    if (filter === "full") return TESTS.filter((t) => t.type === "full");
    return TESTS.filter((t) => t.track === filter);
  }, [filter, TESTS]);

  const selectTest = (test) => {
    setCursor(cursorFromKey(test.date));
    setSelectedKey(test.date);
    const el = document.getElementById("tp-calendar-anchor");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSelectBatch = (id) => {
    localStorage.setItem(LS_KEY, id);
    setBatchId(id);
    setFilter("all");
  };

  const handleSwitchBatch = () => {
    setBatchId(null);
    localStorage.removeItem(LS_KEY);
  };

  // Show batch selector if no batch chosen
  if (!batchId) {
    return <BatchSelector onSelect={handleSelectBatch} />;
  }

  return (
    <>
      <div className="glow-mesh" />
      <div className="grain" />

      <TopBar
        batchName={BATCH_META.name}
        onInstallClick={handleInstall}
        canInstall={!!deferredPrompt}
        onSwitchBatch={handleSwitchBatch}
      />

      <Hero tests={TESTS} batchTagline={BATCH_META.tagline} onSelectTest={selectTest} />

      <div className="wrap" id="tp-calendar-anchor">
        <section>
          <div className="tp-section-head">
            <div>
              <div className="tp-section-kicker">Full schedule</div>
              <h2 className="tp-section-title">Test calendar</h2>
              <p className="tp-section-sub">Tap any marked date to see the exact syllabus for that test.</p>
            </div>
            <FilterBar value={filter} onChange={setFilter} />
          </div>

          <TestCalendar
            tests={filteredTests}
            cursor={cursor}
            setCursor={setCursor}
            selectedKey={selectedKey}
            setSelectedKey={setSelectedKey}
            filter={filter}
          />
        </section>
      </div>

      <div className="wrap">
        <section>
          <div className="tp-section-kicker">Don't miss one</div>
          <h2 className="tp-section-title">Upcoming tests</h2>
          <p className="tp-section-sub">The next few tests on your calendar, closest first.</p>
          <UpcomingList tests={filteredTests} selectedKey={selectedKey} onSelect={selectTest} />
        </section>
      </div>

      <footer>
        <Sparkle size={12} /> Built for {BATCH_META.name} · every date, every chapter, one tap away
      </footer>

      <InstallPrompt visible={showInstall} onInstall={handleInstall} onDismiss={handleDismiss} />
    </>
  );
}
