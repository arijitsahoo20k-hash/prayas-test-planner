import React, { useEffect, useState, useMemo } from "react";
import TopBar from "./components/TopBar.jsx";
import Hero from "./components/Hero.jsx";
import FilterBar from "./components/FilterBar.jsx";
import TestCalendar from "./components/TestCalendar.jsx";
import UpcomingList from "./components/UpcomingList.jsx";
import InstallPrompt from "./components/InstallPrompt.jsx";
import { Sparkle } from "./icons/Icons.jsx";
import { TESTS } from "./data/testPlanner.js";
import { todayKey, cursorFromKey } from "./utils/date.js";

export default function App() {
  const today = todayKey();
  const nextTest = useMemo(() => TESTS.find((t) => t.date >= today) || TESTS[TESTS.length - 1], [today]);

  const [filter, setFilter] = useState("all");
  const [cursor, setCursor] = useState(() => cursorFromKey(nextTest.date));
  const [selectedKey, setSelectedKey] = useState(nextTest.date);

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
  }, [filter]);

  const selectTest = (test) => {
    setCursor(cursorFromKey(test.date));
    setSelectedKey(test.date);
    const el = document.getElementById("tp-calendar-anchor");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="glow-mesh" />
      <div className="grain" />

      <TopBar onInstallClick={handleInstall} canInstall={!!deferredPrompt} />
      <Hero tests={TESTS} onSelectTest={selectTest} />

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
        <Sparkle size={12} /> Built for the Prayas 2.0 batch · every date, every chapter, one tap away
      </footer>

      <InstallPrompt visible={showInstall} onInstall={handleInstall} onDismiss={handleDismiss} />
    </>
  );
}
