const questions = [
  {
    "question": "1. The causative organism of measles is:",
    "options": [
      "Poxvirus",
      "Papovirus",
      "Picornavirus",
      "Paramyxovirus"
    ],
    "correct": 3
  },
  {
    "question": "2. In the life cycle of a bacteriophage, the lysozymes are required in which of the following steps of infection process?",
    "options": [
      "Genome injection",
      "Penetration",
      "Replication",
      "Adsorption"
    ],
    "correct": 1
  },
  {
    "question": "3. What of the following virus contains single stranded DNA?",
    "options": [
      "Adeno virus",
      "Pox virus",
      "Parvo virus",
      "Herpes virus"
    ],
    "correct": 2
  },
  {
    "question": "4. The provirus of HIV is structurally and chemically made up of:",
    "options": [
      "ssRNA",
      "dsRNA",
      "dsDNA",
      "ssDNA"
    ],
    "correct": 2
  },
  {
    "question": "5. What does the term bacteriophage refer to?",
    "options": [
      "A virus that infects bacteria",
      "A bacterium that infects virus",
      "A virus which behaves as bacteria",
      "Combination of bacterium and virion"
    ],
    "correct": 0
  },
  {
    "question": "6. How many tail fibrils are attached to the end plate of a bacteriophage?",
    "options": [
      "2",
      "4",
      "6",
      "8"
    ],
    "correct": 2
  },
  {
    "question": "7. Infection is caused by a viroid:",
    "options": [
      "Hepatitis A",
      "Hepatitis D",
      "Mad cow disease",
      "Mysterious brain infection"
    ],
    "correct": 1
  },
  {
    "question": "8. Capsid, the protective coat of a virus, is made up of subunits known as capsomeres:",
    "options": [
      "Lipid",
      "Protein",
      "RNA",
      "DNA"
    ],
    "correct": 1
  },
  {
    "question": "9. In a virus, a combined structure formed by core (nucleic acid) and capsid is:",
    "options": [
      "Envelope",
      "Capsomers",
      "Nucleocapsid",
      "Prion"
    ],
    "correct": 2
  },
  {
    "question": "10. Lysogenic viruses are also known as:",
    "options": [
      "Enveloped Phage",
      "Virulent Phage",
      "Bacteriophage",
      "Prophage"
    ],
    "correct": 3
  },
  {
    "question": "11. Among following, ____ enzyme is naturally found in human immunodeficiency virus (HIV):",
    "options": [
      "Ligase",
      "RNA polymerase",
      "Reverse transcriptase",
      "DNA polymerase"
    ],
    "correct": 2
  },
  {
    "question": "12. Choose the cell which lacks endoplasmic reticulum:",
    "options": [
      "Muscle cell",
      "Bacteria",
      "Virus",
      "Neuron"
    ],
    "correct": 1
  },
  {
    "question": "13. Genetic recombination in bacteria can occur through:",
    "options": [
      "Conjugation",
      "Transformation",
      "Transduction",
      "All given"
    ],
    "correct": 3
  },
  {
    "question": "14. What is the sequence of steps in which a bacteriophage attacks bacteria and injects its DNA?",
    "options": [
      "Landing → Tail contraction → Penetration → DNA Injection",
      "Tail contraction → Landing → Penetration → DNA Injection",
      "Penetration → Landing → Tail contraction → DNA Injection",
      "Landing → Penetration → Tail contraction → DNA Injection"
    ],
    "correct": 0
  },
  {
    "question": "15. Name the enveloped RNA virus that causes infusion hepatitis:",
    "options": [
      "HBV",
      "HCV",
      "HAV",
      "None of these"
    ],
    "correct": 1
  },
  {
    "question": "16. Herpes simplex is caused by _____ virus:",
    "options": [
      "Enveloped DNA",
      "Glycogen",
      "RNA tumor",
      "Both B and C"
    ],
    "correct": 0
  },
  {
    "question": "17. Chemically, viruses are made up of:",
    "options": [
      "Nucleic acid only",
      "Nucleic acid and protein",
      "Protein only",
      "Core and coat"
    ],
    "correct": 1
  },
  {
    "question": "18. The genetic code of ____ is bound by a lipid membrane:",
    "options": [
      "Enterovirus",
      "Hepatitis A virus",
      "Flu virus",
      "Polio virus"
    ],
    "correct": 2
  },
  {
    "question": "19. Viruses cannot ____:",
    "options": [
      "Mutate",
      "Excrete",
      "Infect bacteria",
      "Metabolize"
    ],
    "correct": 1
  },
  {
    "question": "20. Human immunodeficiency virus (HIV) particles are surrounded with a coat known as the viral envelope or membrane made up of:",
    "options": [
      "Sulpholipid",
      "Glycolipid",
      "Lipoprotein",
      "Glycoprotein"
    ],
    "correct": 2
  },
  {
    "question": "21. Which of the following pairs of diseases is caused by a virus?",
    "options": [
      "Measles and mumps",
      "Syphilis and TB",
      "Aids and typhoid",
      "Tetanus and cholera"
    ],
    "correct": 0
  },
  {
    "question": "22. Which of the following is not related to enveloped viruses?",
    "options": [
      "They survive for a short time",
      "Their envelope is sensitive to sunlight",
      "They are tolerant to disinfectants",
      "Envelope is derived from host"
    ],
    "correct": 2
  },
  {
    "question": "23. The genome of most animals and higher plants is:",
    "options": [
      "DNA",
      "RNA",
      "Both DNA and RNA",
      "Either DNA or RNA"
    ],
    "correct": 0
  },
  {
    "question": "24. HIV contains:",
    "options": [
      "Two RNAs",
      "A single RNA",
      "DNA and RNA",
      "DNA"
    ],
    "correct": 0
  },
  {
    "question": "25. Phage-virus secretes an enzyme \"lysozyme\" from its:",
    "options": [
      "Tail region",
      "Head region",
      "Neck region",
      "Capsule region"
    ],
    "correct": 0
  },
  {
    "question": "26. The shape of polio virus is:",
    "options": [
      "Polyhedral shape",
      "Rod shape",
      "Tadpole shape",
      "Golf ball shape"
    ],
    "correct": 0
  },
  {
    "question": "27. The enzyme \"Reverse transcriptase\" present in HIV-virus is:",
    "options": [
      "50 molecules per virion",
      "40 molecules per virion",
      "30 molecules per virion",
      "20 molecules per virion"
    ],
    "correct": 0
  },
  {
    "question": "28. Genome of which of the following consists of single molecules of DNA?",
    "options": [
      "HAV",
      "HBV",
      "HCV",
      "HIV"
    ],
    "correct": 1
  },
  {
    "question": "29. Corona virus is an enveloped virus. Hand sanitizers and surface cleaners were recommended to avoid the COVID epidemic. Which property of corona virus made these products effective?",
    "options": [
      "Lipid envelope sensitivity",
      "ss RNA genome",
      "Heat sensitivity",
      "Hypotonicity"
    ],
    "correct": 0
  },
  {
    "question": "30. Which of the following virus has a double-stranded DNA genome?",
    "options": [
      "Rubella",
      "HIV",
      "Influenza",
      "Smallpox"
    ],
    "correct": 3
  },
  {
    "question": "31. All viruses are:",
    "options": [
      "Autotrophs",
      "Heterotrophs",
      "Parasites",
      "Predators"
    ],
    "correct": 2
  },
  {
    "question": "32. Herpes is a virus that enters the human body and remains dormant in the nervous system. Which of the following statements correctly describes herpes?",
    "options": [
      "While it remains dormant, the virus is in its lysogenic cycle",
      "During an outbreak the virus is in the lytic cycle",
      "Herpes integrates itself into the DNA of the cell",
      "All of the above"
    ],
    "correct": 3
  },
  {
    "question": "33. Assembly of HIV proteins around genome occur in:",
    "options": [
      "Nucleus",
      "Cytoplasm",
      "Membrane surface",
      "Nucleolus"
    ],
    "correct": 1
  },
  {
    "question": "34. The DNA form of a retroviral genome becomes ____ inside host nucleus:",
    "options": [
      "Pro-phage",
      "Pro-HIV",
      "Retro-virion",
      "Provirus"
    ],
    "correct": 3
  },
  {
    "question": "35. Which of the following is not a characteristic of viruses?",
    "options": [
      "They can reproduce independently",
      "They consist of genetic material in a protein coat",
      "They require a host cell to replicate",
      "They are obligate parasites"
    ],
    "correct": 0
  },
  {
    "question": "36. The term \"virion\" refers to:",
    "options": [
      "A virus that is inside a host cell",
      "The complete, infectious virus particle outside a host cell",
      "The genetic material of a virus only",
      "A type of bacteria"
    ],
    "correct": 1
  },
  {
    "question": "37. Viruses that infect plants often have:",
    "options": [
      "dsDNA genomes",
      "ssDNA genomes",
      "ssRNA genomes",
      "dsRNA genomes"
    ],
    "correct": 2
  },
  {
    "question": "38. What is the primary function of the viral capsid?",
    "options": [
      "To replicate viral DNA",
      "To protect the viral genome from environmental damage",
      "To produce energy for the virus",
      "To synthesize proteins for the host cell"
    ],
    "correct": 1
  },
  {
    "question": "39. Which of the following describes the lytic cycle?",
    "options": [
      "The virus DNA integrates into the host genome and remains dormant",
      "The virus replicates and eventually causes the host cell to burst",
      "The virus only infects eukaryotic cells",
      "The virus does not damage the host cell"
    ],
    "correct": 1
  },
  {
    "question": "40. Retroviruses are unique because they:",
    "options": [
      "Contain only DNA",
      "Use reverse transcriptase to convert RNA to DNA",
      "Do not have a protein coat",
      "Infect only plants"
    ],
    "correct": 1
  },
  {
    "question": "41. Prions are distinct from viruses because they:",
    "options": [
      "Contain RNA",
      "Are composed only of protein",
      "Are composed only of DNA",
      "Require a host cell to reproduce"
    ],
    "correct": 1
  },
  {
    "question": "42. Which of the following is true regarding viral specificity?",
    "options": [
      "All viruses infect all types of cells",
      "Viruses are specific to certain types of cells or hosts",
      "Viruses can only infect bacteria",
      "Viruses have no specificity"
    ],
    "correct": 1
  },
  {
    "question": "43. The process by which a virus enters a host cell by fusing its envelope with the cell membrane is called:",
    "options": [
      "Endocytosis",
      "Membrane fusion",
      "Injection",
      "Lysis"
    ],
    "correct": 1
  },
  {
    "question": "44. The DNA copy of HIV integrated into the host chromosome is known as:",
    "options": [
      "Virion",
      "Prophage",
      "Provirus",
      "Nucleocapsid"
    ],
    "correct": 2
  },
  {
    "question": "45. Which enzyme is responsible for integrating HIV DNA into the host genome?",
    "options": [
      "Reverse transcriptase",
      "Integrase",
      "Protease",
      "Ligase"
    ],
    "correct": 1
  },
  {
    "question": "46. HIV contains:",
    "options": [
      "One molecule of ssRNA",
      "Two identical molecules of ssRNA",
      "dsRNA",
      "dsDNA"
    ],
    "correct": 1
  },
  {
    "question": "47. Which enzyme synthesizes DNA from RNA in retroviruses?",
    "options": [
      "DNA polymerase",
      "RNA polymerase",
      "Reverse transcriptase",
      "Helicase"
    ],
    "correct": 2
  },
  {
    "question": "48. Which one is absent in all viruses?",
    "options": [
      "Protein coat",
      "Nucleic acid",
      "Ribosomes",
      "Enzymes"
    ],
    "correct": 2
  },
  {
    "question": "49. The infective, complete virus particle outside the host cell is called:",
    "options": [
      "Capsomere",
      "Provirus",
      "Virion",
      "Nucleocapsid"
    ],
    "correct": 2
  },
  {
    "question": "50. The first step in bacteriophage infection is:",
    "options": [
      "Penetration",
      "DNA injection",
      "Adsorption",
      "Replication"
    ],
    "correct": 2
  },
  {
    "question": "51. A dormant bacteriophage DNA integrated into bacterial chromosome is called:",
    "options": [
      "Provirus",
      "Virion",
      "Prophage",
      "Nucleocapsid"
    ],
    "correct": 2
  },
  {
    "question": "52. Which viral structure determines host specificity?",
    "options": [
      "Capsid proteins and surface spikes",
      "Viral DNA",
      "Reverse transcriptase",
      "Tail sheath only"
    ],
    "correct": 0
  },
  {
    "question": "53. Assembly of HIV proteins around its genome occurs primarily at the:",
    "options": [
      "Nucleus",
      "Cytoplasm near plasma membrane",
      "Golgi apparatus",
      "Lysosome"
    ],
    "correct": 1
  },
  {
    "question": "54. Which of the following enzymes is NOT associated with HIV?",
    "options": [
      "Reverse transcriptase",
      "Integrase",
      "Protease",
      "Lysozyme"
    ],
    "correct": 3
  },
  {
    "question": "55. The release of bacteriophages from a bacterial cell occurs by:",
    "options": [
      "Budding",
      "Exocytosis",
      "Lysis",
      "Fusion"
    ],
    "correct": 2
  },
  {
    "question": "56. Which of the following is correctly matched?",
    "options": [
      "Prion — RNA only",
      "Viroid — Protein only",
      "Prion — Protein only",
      "Viroid — DNA only"
    ],
    "correct": 2
  },
  {
    "question": "57. Which stage immediately follows reverse transcription in HIV replication?",
    "options": [
      "Translation",
      "Integration into host DNA",
      "Assembly",
      "Budding"
    ],
    "correct": 1
  },
  {
    "question": "58. The envelope of HIV is derived from the:",
    "options": [
      "Viral capsid",
      "Host plasma membrane",
      "Host nucleus",
      "Bacterial membrane"
    ],
    "correct": 1
  },
  {
    "question": "59. Which one is common to all viruses?",
    "options": [
      "RNA genome",
      "Lipid envelope",
      "Protein capsid",
      "Reverse transcriptase"
    ],
    "correct": 2
  },
  {
    "question": "60. During the lysogenic cycle, viral DNA becomes part of the host chromosome and is called:",
    "options": [
      "Virion",
      "Prophage",
      "Capsomere",
      "Envelope"
    ],
    "correct": 1
  },
  {
    "question": "61. Which viral component protects the genome from environmental damage?",
    "options": [
      "Envelope",
      "Ribosome",
      "Capsid",
      "Integrase"
    ],
    "correct": 2
  },
  {
    "question": "62. Enveloped viruses enter host cells mainly by:",
    "options": [
      "Lysis",
      "Injection",
      "Membrane fusion",
      "Binary fission"
    ],
    "correct": 2
  },
  {
    "question": "63. Which one is NOT a characteristic of viruses?",
    "options": [
      "Obligate intracellular parasites",
      "Possess either DNA or RNA",
      "Reproduce independently",
      "Lack metabolism"
    ],
    "correct": 2
  }
];
