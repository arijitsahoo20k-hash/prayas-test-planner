// ============================================================
//  Prayas Test Planner — data for both batches
// ============================================================

// ── Prayas 1.0 · 2027 (from the PDF you uploaded) ───────────
export const BATCH_1 = {
  id: "prayas1",
  name: "Prayas 1.0",
  tagline: "JEE Main + Advanced · 2027 attempt",
  year: "2027",
};

export const TESTS_1 = [
  {
    id: "p1t1", name: "Short Test-1", date: "2026-05-17", type: "part", track: "main", pattern: "Short Test",
    subjects: {
      physics: ["Mathematical Tools (Complete Chapter)", "Error in Measurements (Complete Chapter)", "Motion in a Straight Line — Introduction, position, displacement, speed, velocity, acceleration, graphs"],
      chemistry: ["Some Basic Concepts of Chemistry (Complete Chapter)"],
      maths: ["Basic Mathematics", "Number System", "Wavy Curve Method", "Logarithm"]
    }
  },
  {
    id: "p1t2", name: "JEE Main-1", date: "2026-05-31", type: "part", track: "main", pattern: "JEE Main",
    subjects: {
      physics: ["Motion in a Straight Line (Complete Chapter)", "Motion in a Plane (Complete Chapter)", "Relative Motion (Complete Chapter)"],
      chemistry: ["Redox Reaction (Complete Chapter)", "Solutions (Complete Chapter)"],
      maths: ["Basic Mathematics (Complete Chapter)", "Quadratic Equations (Complete Chapter)"]
    }
  },
  {
    id: "p1t3", name: "JEE Main-2", date: "2026-06-14", type: "part", track: "main", pattern: "JEE Main",
    subjects: {
      physics: ["Laws of Motion (Complete Chapter)", "Work, Energy and Power — Introduction of Work, Work done by constant/variable force, Graphical Interpretation, Kinetic energy, Conservative/Non-conservative force, Potential energy, Work-Kinetic Energy theorem"],
      chemistry: ["Chemical Kinetics (Complete Chapter)"],
      maths: ["Sequence and Series (Complete Chapter)"]
    }
  },
  {
    id: "p1t4", name: "JEE Advanced-1", date: "2026-06-28", type: "part", track: "advanced", pattern: "JEE Advanced",
    subjects: {
      physics: ["Mathematical Tools (Complete Chapter)", "Error in Measurements (Complete Chapter)", "Motion in a Straight Line (Complete Chapter)", "Motion in a Plane (Complete Chapter)", "Relative Motion (Complete Chapter)", "Laws of Motion (Complete Chapter)", "Work, Energy and Power (Complete Chapter)"],
      chemistry: ["Some Basic Concepts of Chemistry (Complete Chapter)", "Redox Reaction (Complete Chapter)", "Solutions (Complete Chapter)", "Chemical Kinetics (Complete Chapter)", "Thermodynamics (Complete Chapter)"],
      maths: ["Basic Mathematics (Complete Chapter)", "Quadratic Equations (Complete Chapter)", "Sequence and Series (Complete Chapter)", "Trigonometric Functions (Complete Chapter)", "Trigonometric Equation (Complete Chapter)"]
    }
  },
  {
    id: "p1t5", name: "JEE Main-3", date: "2026-07-12", type: "part", track: "main", pattern: "JEE Main",
    subjects: {
      physics: ["Circular Motion (Complete Chapter)", "Centre of Mass & System of Particles (Complete Chapter)"],
      chemistry: ["Chemical Equilibrium (Complete Chapter)", "Ionic Equilibrium (Complete Chapter)", "Structure of Atom (Complete Chapter)"],
      maths: ["Permutations and Combinations (Complete Chapter)", "Binomial Theorem (Complete Chapter)"]
    }
  },
  {
    id: "p1t6", name: "JEE Main-4", date: "2026-07-26", type: "part", track: "main", pattern: "JEE Main",
    subjects: {
      physics: ["Rotational Motion (Complete Chapter)"],
      chemistry: ["Electrochemistry (Complete Chapter)"],
      maths: ["Straight Lines (Complete Chapter)"]
    }
  },
  {
    id: "p1t7", name: "JEE Advanced-2", date: "2026-08-23", type: "part", track: "advanced", pattern: "JEE Advanced",
    subjects: {
      physics: ["Circular Motion (Complete Chapter)", "Centre of Mass & System of Particles (Complete Chapter)", "Rotational Motion (Complete Chapter)"],
      chemistry: ["Chemical Equilibrium (Complete Chapter)", "Ionic Equilibrium (Complete Chapter)", "Structure of Atom (Complete Chapter)", "Electrochemistry (Complete Chapter)", "Classification of Elements and Periodicity in Properties (Complete Chapter)"],
      maths: ["Permutations and Combinations (Complete Chapter)", "Binomial Theorem (Complete Chapter)", "Straight Lines (Complete Chapter)", "Circles (Complete Chapter)", "Conic Sections: Parabola (Complete Chapter)", "Conic Sections: Ellipse (Complete Chapter)"]
    }
  },
  {
    id: "p1t8", name: "JEE Main-5", date: "2026-09-06", type: "part", track: "main", pattern: "JEE Main",
    subjects: {
      physics: ["Oscillations (Complete Chapter)", "Ray Optics and Optical Instruments (Complete Chapter)", "Dual Nature (Complete Chapter)", "Atoms (Complete Chapter)", "Nuclei (Complete Chapter)"],
      chemistry: ["Chemical Bonding and Molecular Structure (Complete Chapter)"],
      maths: ["Conic Sections: Hyperbola (Complete Chapter)", "Determinants (Complete Chapter)"]
    }
  },
  {
    id: "p1t9", name: "AITS-2", date: "2026-09-20", type: "part", track: "main", pattern: "Main", cumulative: true,
    subjects: {
      physics: ["Centre of Mass & System of Particles", "Rotational Motion"],
      chemistry: ["Solutions", "Thermodynamics & Thermochemistry"],
      maths: ["Trigonometric Functions", "Sequence and Series"]
    }
  },
  {
    id: "p1t10", name: "AITS-3", date: "2026-09-27", type: "part", track: "advanced", pattern: "Advanced", cumulative: true,
    subjects: {
      physics: ["Motion in a Straight Line", "Motion in a Plane", "Laws of Motion", "Work, Energy and Power", "Centre of Mass & System of Particles", "Rotational Motion"],
      chemistry: ["Some Basic Concepts of Chemistry", "Redox Reactions", "Solutions", "Thermodynamics & Thermochemistry"],
      maths: ["Basic Maths", "Sets", "Quadratic Equations", "Trigonometric Functions", "Sequence and Series", "Trigonometric Equation"]
    }
  },
  {
    id: "p1t11", name: "JEE Main-6", date: "2026-10-11", type: "part", track: "main", pattern: "JEE Main",
    subjects: {
      physics: ["Thermal Properties of Matter (Complete Chapter)", "Kinetic Theory (Complete Chapter)", "Thermodynamics (Complete Chapter)", "Mechanical Properties of Solids (Complete Chapter)", "Mechanical Properties of Fluids (Complete Chapter)"],
      chemistry: ["Some Basic Principles and Techniques: IUPAC Nomenclature (Complete Chapter)", "Some Basic Principles and Techniques: GOC (Complete Chapter)"],
      maths: ["Matrices (Complete Chapter)", "Sets (Complete Chapter)", "Relations and Functions (Complete Chapter)", "Inverse Trigonometric Functions (Complete Chapter)", "Limit, Continuity and Differentiability (Complete Chapter)"]
    }
  },
  {
    id: "p1t12", name: "AITS-4", date: "2026-11-01", type: "part", track: "main", pattern: "Main", cumulative: true,
    subjects: {
      physics: ["Mechanical Properties of Solids", "Mechanical Properties of Fluids", "Thermal Properties of Matter", "Kinetic Theory", "Thermodynamics", "Oscillations"],
      chemistry: ["Equilibrium", "Electrochemistry", "Organic Chemistry - IUPAC Nomenclature"],
      maths: ["Determinants", "Matrices", "Relations and Functions", "Straight Lines"]
    }
  },
  {
    id: "p1t13", name: "JEE Advanced-3", date: "2026-11-22", type: "part", track: "advanced", pattern: "JEE Advanced",
    subjects: {
      physics: ["Oscillations (Complete Chapter)", "Ray Optics and Optical Instruments (Complete Chapter)", "Dual Nature (Complete Chapter)", "Atoms (Complete Chapter)", "Nuclei (Complete Chapter)", "Thermal Properties of Matter (Complete Chapter)", "Kinetic Theory (Complete Chapter)", "Thermodynamics (Complete Chapter)", "Mechanical Properties of Solids (Complete Chapter)", "Mechanical Properties of Fluids (Complete Chapter)"],
      chemistry: ["Chemical Bonding and Molecular Structure (Complete Chapter)", "IUPAC Nomenclature (Complete Chapter)", "GOC (Complete Chapter)", "Isomerism (Complete Chapter)", "Hydrocarbon (Complete Chapter)", "Haloalkanes and Haloarenes (Complete Chapter)"],
      maths: ["Conic Sections: Hyperbola (Complete Chapter)", "Determinants (Complete Chapter)", "Matrices (Complete Chapter)", "Sets (Complete Chapter)", "Relations and Functions (Complete Chapter)", "Inverse Trigonometric Functions (Complete Chapter)", "Limit, Continuity and Differentiability (Complete Chapter)", "Method of Differentiation (Complete Chapter)", "Application of Derivatives (Complete Chapter)"]
    }
  },
  {
    id: "p1t14", name: "JEE Main-7", date: "2026-12-06", type: "part", track: "main", pattern: "JEE Main",
    subjects: {
      physics: ["Electric Charges and Fields & Potential (Complete Chapter)", "Gravitation (Complete Chapter)", "Current Electricity (Complete Chapter)", "Electrostatic Potential and Capacitance (Complete Chapter)", "Moving Charges and Magnetism (Complete Chapter)"],
      chemistry: ["Alcohols, Phenols and Ethers (Complete Chapter)", "Aldehydes, Ketones and Carboxylic Acids (Complete Chapter)", "Amines (Complete Chapter)", "Biomolecules (Complete Chapter)"],
      maths: ["Indefinite Integration (Complete Chapter)", "Definite Integration (Complete Chapter)", "Application of Integrals (Complete Chapter)", "Differential Equation (Complete Chapter)", "Vector Algebra (Complete Chapter)"]
    }
  },
  {
    id: "p1t15", name: "AITS-5", date: "2026-12-13", type: "part", track: "main", pattern: "Main", cumulative: true,
    subjects: {
      physics: ["Gravitation", "Electric Charges and Fields", "Electrostatic Potential and Capacitance", "Current Electricity", "Moving Charges and Magnetism", "Magnetism and Matter"],
      chemistry: ["Organic Chemistry - Isomerism", "Chemical Kinetics", "Organic Chemistry - GOC", "Structure of Atom", "Hydrocarbons"],
      maths: ["Inverse Trigonometric Functions", "Continuity and Differentiability", "Method of Differentiation", "Application of Derivatives", "Circles", "Indefinite Integration", "Definite Integration"]
    }
  },
  {
    id: "p1t16", name: "AITS-6", date: "2026-12-20", type: "part", track: "advanced", pattern: "Advanced", cumulative: true,
    subjects: {
      physics: ["Mechanical Properties of Solids", "Mechanical Properties of Fluids", "Thermal Properties of Matter", "Kinetic Theory", "Thermodynamics", "Gravitation", "Oscillations", "Electric Charges and Fields", "Electrostatic Potential and Capacitance", "Current Electricity", "Moving Charges and Magnetism", "Magnetism and Matter"],
      chemistry: ["Equilibrium", "Electrochemistry", "IUPAC Nomenclature", "Isomerism", "Chemical Kinetics", "GOC", "Structure of Atom", "Hydrocarbons"],
      maths: ["Determinants", "Matrices", "Relations and Functions", "Inverse Trigonometric Functions", "Continuity and Differentiability", "Method of Differentiation", "Application of Derivatives", "Straight Lines", "Circles", "Indefinite Integration", "Definite Integration"]
    }
  },
  {
    id: "p1t17", name: "JEE Main-8", date: "2026-12-27", type: "full", track: "main", pattern: "JEE Main",
    subjects: {
      physics: ["Magnetism and Matter (Complete Chapter)", "Electromagnetic Induction (Complete Chapter)", "Alternating Current (Complete Chapter)", "Waves (Complete Chapter)", "Electromagnetic Waves (Complete Chapter)"],
      chemistry: ["Coordination Compounds (Complete Chapter)"],
      maths: ["Three Dimensional Geometry (Complete Chapter)", "Complex Number (Complete Chapter)"]
    }
  },
  {
    id: "p1t18", name: "AITS-7", date: "2027-01-10", type: "part", track: "main", pattern: "Main", cumulative: true,
    subjects: {
      physics: ["Waves", "Electromagnetic Induction", "Alternating Current", "Electromagnetic Waves", "Ray Optics and Optical Instruments", "Wave Optics", "Dual Nature of Radiation and Matter", "Atoms"],
      chemistry: ["Haloalkanes and Haloarenes", "Alcohols, Phenols and Ethers", "Aldehydes, Ketones and Carboxylic Acids", "Amines", "Biomolecules", "Purification and Analysis of Organic Compounds", "Classification of Elements and Periodicity in Properties"],
      maths: ["Vector Algebra", "Three-Dimensional Geometry", "Application of Integrals", "Differential Equations", "Conic Sections: Parabola", "Conic Sections: Ellipse", "Conic Sections: Hyperbola", "Binomial Theorem", "Permutations and Combinations", "Probability", "Statistics", "Complex Number"]
    }
  },
  { id: "p1t19", name: "AITS-8", date: "2027-01-13", type: "full", track: "main", pattern: "Main", fullSyllabus: true },
  { id: "p1t20", name: "AITS-9", date: "2027-01-17", type: "full", track: "main", pattern: "Main", fullSyllabus: true },
  { id: "p1t21", name: "AITS-10", date: "2027-01-20", type: "full", track: "main", pattern: "Main", fullSyllabus: true },
  { id: "p1t22", name: "AITS-11", date: "2027-02-14", type: "full", track: "main", pattern: "Main", fullSyllabus: true },
  { id: "p1t23", name: "AITS-12", date: "2027-02-28", type: "full", track: "main", pattern: "Main", fullSyllabus: true },
  { id: "p1t24", name: "AITS-13", date: "2027-03-07", type: "full", track: "advanced", pattern: "Advanced", fullSyllabus: true },
  { id: "p1t25", name: "AITS-14", date: "2027-03-14", type: "full", track: "main", pattern: "Main", fullSyllabus: true },
  { id: "p1t26", name: "AITS-15", date: "2027-03-21", type: "full", track: "main", pattern: "Main", fullSyllabus: true },
  { id: "p1t27", name: "AITS-16", date: "2027-03-28", type: "full", track: "main", pattern: "Main", fullSyllabus: true },
  { id: "p1t28", name: "AITS-17", date: "2027-04-18", type: "full", track: "advanced", pattern: "Advanced", fullSyllabus: true },
  { id: "p1t29", name: "AITS-18", date: "2027-04-25", type: "full", track: "advanced", pattern: "Advanced", fullSyllabus: true },
  { id: "p1t30", name: "AITS-19", date: "2027-05-02", type: "full", track: "advanced", pattern: "Advanced", fullSyllabus: true },
  { id: "p1t31", name: "AITS-20", date: "2027-05-09", type: "full", track: "advanced", pattern: "Advanced", fullSyllabus: true },
  { id: "p1t32", name: "AITS-21", date: "2027-05-12", type: "full", track: "advanced", pattern: "Advanced", fullSyllabus: true },
];

// ── Prayas 2.0 · 2027 ───────────────────────────────────────
export const BATCH_2 = {
  id: "prayas2",
  name: "Prayas 2.0",
  tagline: "JEE Main + Advanced · 2027 attempt",
  year: "2027",
};

export const TESTS_2 = [
  {
    id: "t1", name: "JEE Main-1", date: "2026-06-28", type: "part", track: "main", pattern: "JEE Main",
    subjects: {
      physics: ["Mathematical Tools"],
      chemistry: ["Some Basic Concepts of Chemistry — Nature & Classification of Matter", "Properties of Matter & Measurement, SI Units", "Uncertainty in Measurement", "Laws of Chemical Combinations", "Dalton's Atomic Theory, Atomic Mass, Gram Atomic Mass"],
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
    id: "t6", name: "AITS-2", date: "2026-09-20", type: "part", track: "main", pattern: "Main", cumulative: true,
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
    id: "t9", name: "AITS-4", date: "2026-11-01", type: "part", track: "main", pattern: "Main", cumulative: true,
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
    id: "t12", name: "AITS-5", date: "2026-12-13", type: "part", track: "main", pattern: "Main", cumulative: true,
    subjects: {
      physics: ["Gravitation", "Electric Charges and Fields", "Electrostatic Potential and Capacitance", "Current Electricity", "Moving Charges and Magnetism", "Magnetism and Matter"],
      chemistry: ["Organic Chemistry — Isomerism", "Chemical Kinetics", "Organic Chemistry — GOC", "Structure of Atom", "Hydrocarbons"],
      maths: ["Inverse Trigonometric Functions", "Continuity and Differentiability", "Method of Differentiation", "Application of Derivatives", "Circles", "Indefinite Integration", "Definite Integration"]
    }
  },
  {
    id: "t13", name: "AITS-6", date: "2026-12-20", type: "part", track: "advanced", pattern: "Advanced", cumulative: true,
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
    id: "t15", name: "AITS-7", date: "2027-01-10", type: "part", track: "main", pattern: "Main", cumulative: true,
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
  { id: "t29", name: "AITS-21", date: "2027-05-12", type: "full", track: "advanced", pattern: "Advanced", fullSyllabus: true },
];

// legacy compat
export const BATCH_NAME = BATCH_2.name;
export const BATCH_TAGLINE = BATCH_2.tagline;
export const TESTS = TESTS_2;
