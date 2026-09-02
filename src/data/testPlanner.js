// Prayas 2.0 · 2027 — Test Planner data
// Extracted from the official Prayas 2.0 2027 Test Planner PDF.
// track: "main" | "advanced"  ·  type: "part" | "full"

export const BATCH_NAME = "Prayas 2.0 · 2027";
export const BATCH_TAGLINE = "JEE Main + Advanced, January 2027 attempt";

export const TESTS = [
  {
    id: "t1", name: "JEE Main-1", date: "2026-06-28", type: "part", track: "main", pattern: "JEE Main",
    subjects: {
      physics: ["Mathematical Tools"],
      chemistry: [
        "Some Basic Concepts of Chemistry — Nature & Classification of Matter",
        "Properties of Matter & Measurement, SI Units",
        "Uncertainty in Measurement",
        "Laws of Chemical Combinations",
        "Dalton's Atomic Theory, Atomic Mass, Gram Atomic Mass"
      ],
      maths: ["Basic Mathematics"]
    }
  },
  {
    id: "t2", name: "JEE Main-2", date: "2026-07-12", type: "part", track: "main", pattern: "JEE Main",
    subjects: {
      physics: ["Motion in a Straight Line", "Motion in a Plane"],
      chemistry: ["Some Basic Concepts of Chemistry"],
      maths: ["Quadratic Equations"]
    }
  },
  {
    id: "t3", name: "JEE Advanced-1", date: "2026-07-26", type: "part", track: "advanced", pattern: "JEE Advanced",
    subjects: {
      physics: ["Mathematical Tools", "Motion in a Straight Line", "Motion in a Plane"],
      chemistry: ["Some Basic Concepts of Chemistry", "Redox Reaction"],
      maths: ["Basic Mathematics", "Quadratic Equations"]
    }
  },
  {
    id: "t4", name: "JEE Main-3", date: "2026-08-23", type: "part", track: "main", pattern: "JEE Main",
    subjects: {
      physics: ["Laws of Motion", "Work, Energy and Power", "Circular Motion"],
      chemistry: ["Structure of Atom", "Classification of Elements & Periodicity", "Chemical Bonding & Molecular Structure"],
      maths: ["Sequence and Series", "Trigonometric Functions", "Trigonometric Equations"]
    }
  },
  {
    id: "t5", name: "JEE Main-4", date: "2026-09-06", type: "part", track: "main", pattern: "JEE Main",
    subjects: {
      physics: ["Centre of Mass & System of Particles"],
      chemistry: ["Solutions"],
      maths: ["Permutations and Combinations", "Binomial Theorem"]
    }
  },
  {
    id: "t6", name: "AITS-2", date: "2026-09-20", type: "part", track: "main", pattern: "Main",
    cumulative: true,
    subjects: {
      physics: ["Centre of Mass & System of Particles", "Rotational Motion"],
      chemistry: ["Solutions", "Thermodynamics & Thermochemistry"],
      maths: ["Trigonometric Functions", "Sequence and Series"]
    }
  },
  {
    id: "t7", name: "JEE Advanced-2", date: "2026-10-04", type: "part", track: "advanced", pattern: "JEE Advanced",
    subjects: {
      physics: ["Laws of Motion", "Work, Energy and Power", "Circular Motion", "Centre of Mass & System of Particles"],
      chemistry: ["Structure of Atom", "Classification of Elements & Periodicity", "Chemical Bonding & Molecular Structure", "Solutions"],
      maths: ["Sequence and Series", "Trigonometric Functions", "Trigonometric Equations", "Permutations and Combinations", "Binomial Theorem"]
    }
  },
  {
    id: "t8", name: "JEE Main-5", date: "2026-10-18", type: "part", track: "main", pattern: "JEE Main",
    subjects: {
      physics: ["Rotational Motion", "Mechanical Properties of Solids", "Thermal Properties of Matter", "Kinetic Theory", "Thermodynamics", "Mechanical Properties of Fluids", "Oscillations"],
      chemistry: ["Chemical Kinetics", "Thermodynamics", "Chemical Equilibrium", "Ionic Equilibrium", "Electrochemistry"],
      maths: ["Straight Lines", "Circles", "Conic Sections: Parabola", "Conic Sections: Ellipse", "Conic Sections: Hyperbola", "Determinants"]
    }
  },
  {
    id: "t9", name: "AITS-4", date: "2026-11-01", type: "part", track: "main", pattern: "Main",
    cumulative: true,
    subjects: {
      physics: ["Mechanical Properties of Solids", "Mechanical Properties of Fluids", "Thermal Properties of Matter", "Kinetic Theory", "Thermodynamics", "Oscillations"],
      chemistry: ["Equilibrium", "Electrochemistry", "Organic Chemistry — IUPAC Nomenclature"],
      maths: ["Determinants", "Matrices", "Relations and Functions", "Straight Lines"]
    }
  },
  {
    id: "t10", name: "JEE Main-6", date: "2026-11-22", type: "part", track: "main", pattern: "JEE Main",
    subjects: {
      physics: ["Waves", "Electric Charges and Fields", "Gravitation"],
      chemistry: ["Basic Principles & Techniques: IUPAC Nomenclature", "Basic Principles & Techniques: GOC"],
      maths: ["Matrices", "Sets", "Relations and Functions", "Inverse Trigonometric Functions"]
    }
  },
  {
    id: "t11", name: "JEE Advanced-3", date: "2026-12-06", type: "part", track: "advanced", pattern: "JEE Advanced",
    subjects: {
      physics: ["Rotational Motion", "Mechanical Properties of Solids", "Thermal Properties of Matter", "Kinetic Theory", "Thermodynamics", "Mechanical Properties of Fluids", "Oscillations", "Waves", "Electric Charges and Fields", "Gravitation"],
      chemistry: ["Chemical Kinetics", "Thermodynamics", "Chemical Equilibrium", "Ionic Equilibrium", "Electrochemistry", "Basic Principles & Techniques: IUPAC Nomenclature", "Basic Principles & Techniques: GOC"],
      maths: ["Straight Lines", "Circles", "Conic Sections: Parabola", "Conic Sections: Ellipse", "Conic Sections: Hyperbola", "Determinants", "Matrices", "Sets", "Relations and Functions", "Inverse Trigonometric Functions"]
    }
  },
  {
    id: "t12", name: "AITS-5", date: "2026-12-13", type: "part", track: "main", pattern: "Main",
    cumulative: true,
    subjects: {
      physics: ["Gravitation", "Electric Charges and Fields", "Electrostatic Potential and Capacitance", "Current Electricity", "Moving Charges and Magnetism", "Magnetism and Matter"],
      chemistry: ["Organic Chemistry — Isomerism", "Chemical Kinetics", "Organic Chemistry — GOC", "Structure of Atom", "Hydrocarbons"],
      maths: ["Inverse Trigonometric Functions", "Continuity and Differentiability", "Method of Differentiation", "Application of Derivatives", "Circles", "Indefinite Integration", "Definite Integration"]
    }
  },
  {
    id: "t13", name: "AITS-6", date: "2026-12-20", type: "part", track: "advanced", pattern: "Advanced",
    cumulative: true,
    subjects: {
      physics: ["Mechanical Properties of Solids", "Mechanical Properties of Fluids", "Thermal Properties of Matter", "Kinetic Theory", "Thermodynamics", "Gravitation", "Oscillations", "Electric Charges and Fields", "Electrostatic Potential and Capacitance", "Current Electricity", "Moving Charges and Magnetism", "Magnetism and Matter"],
      chemistry: ["Equilibrium", "Electrochemistry", "Organic Chemistry — IUPAC Nomenclature", "Organic Chemistry — Isomerism", "Chemical Kinetics", "Organic Chemistry — GOC", "Structure of Atom", "Hydrocarbons"],
      maths: ["Determinants", "Matrices", "Relations and Functions", "Inverse Trigonometric Functions", "Continuity and Differentiability", "Method of Differentiation", "Application of Derivatives", "Straight Lines", "Circles", "Indefinite Integration", "Definite Integration"]
    }
  },
  {
    id: "t14", name: "JEE Main-7", date: "2026-12-27", type: "full", track: "main", pattern: "JEE Main",
    subjects: {
      physics: ["Electrostatic Potential and Capacitance", "Current Electricity", "Moving Charges and Magnetism", "Magnetism and Matter", "Electromagnetic Induction", "Alternating Current", "Electromagnetic Waves"],
      chemistry: ["Basic Principles & Techniques: Isomerism", "Hydrocarbon", "Haloalkanes and Haloarenes", "Alcohols, Phenols and Ethers", "Coordination Compounds"],
      maths: ["Method of Differentiation", "Limit, Continuity and Differentiability", "Indefinite Integration", "Application of Derivatives", "Definite Integration", "Application of Integrals", "Differential Equations"]
    }
  },
  {
    id: "t15", name: "AITS-7", date: "2027-01-10", type: "part", track: "main", pattern: "Main",
    cumulative: true,
    subjects: {
      physics: ["Waves", "Electromagnetic Induction", "Alternating Current", "Electromagnetic Waves", "Ray Optics and Optical Instruments", "Wave Optics", "Dual Nature of Radiation and Matter", "Atoms"],
      chemistry: ["Haloalkanes and Haloarenes", "Alcohols, Phenols and Ethers", "Aldehydes, Ketones and Carboxylic Acids", "Amines", "Biomolecules", "Purification and Analysis of Organic Compounds", "Classification of Elements & Periodicity"],
      maths: ["Vector Algebra", "Three-Dimensional Geometry", "Application of Integrals", "Differential Equations", "Conic Sections: Parabola", "Conic Sections: Ellipse", "Conic Sections: Hyperbola", "Binomial Theorem", "Permutations and Combinations", "Probability", "Statistics", "Complex Numbers"]
    }
  },
  { id: "t16", name: "AITS-8", date: "2027-01-13", type: "full", track: "main", pattern: "Main", fullSyllabus: true },
  { id: "t17", name: "AITS-9", date: "2027-01-17", type: "full", track: "main", pattern: "Main", fullSyllabus: true },
  { id: "t18", name: "AITS-10", date: "2027-01-20", type: "full", track: "main", pattern: "Main", fullSyllabus: true },
  { id: "t19", name: "AITS-11", date: "2027-02-14", type: "full", track: "main", pattern: "Main", fullSyllabus: true },
  { id: "t20", name: "AITS-12", date: "2027-02-28", type: "full", track: "main", pattern: "Main", fullSyllabus: true },
  { id: "t21", name: "AITS-13", date: "2027-03-07", type: "full", track: "advanced", pattern: "Advanced", fullSyllabus: true },
  { id: "t22", name: "AITS-14", date: "2027-03-14", type: "full", track: "main", pattern: "Main", fullSyllabus: true },
  { id: "t23", name: "AITS-15", date: "2027-03-21", type: "full", track: "main", pattern: "Main", fullSyllabus: true },
  { id: "t24", name: "AITS-16", date: "2027-03-28", type: "full", track: "main", pattern: "Main", fullSyllabus: true },
  { id: "t25", name: "AITS-17", date: "2027-04-18", type: "full", track: "advanced", pattern: "Advanced", fullSyllabus: true },
  { id: "t26", name: "AITS-18", date: "2027-04-25", type: "full", track: "advanced", pattern: "Advanced", fullSyllabus: true },
  { id: "t27", name: "AITS-19", date: "2027-05-02", type: "full", track: "advanced", pattern: "Advanced", fullSyllabus: true },
  { id: "t28", name: "AITS-20", date: "2027-05-09", type: "full", track: "advanced", pattern: "Advanced", fullSyllabus: true },
  { id: "t29", name: "AITS-21", date: "2027-05-12", type: "full", track: "advanced", pattern: "Advanced", fullSyllabus: true }
];
