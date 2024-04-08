export const sets = [
  {
    "name": "Nesting Grounds",
    "traits": ["dense", "hidden", "guarded"],
    "entities": [
      {"name": "Mother Velociraptor", "traits": ["dinosaur", "aggressive", "protective", "alert"]},
      {"name": "Rare Dinosaur Egg", "traits": ["egg", "fragile", "valuable"]}
    ]
  },
  {
    "name": "Research Lab",
    "traits": ["secure", "high-tech", "staffed"],
    "entities": [
      {"name": "Dr. Jane", "traits": ["human", "smart", "resourceful", "cautious"]},
      {"name": "Engineer Ellie", "traits": ["human", "inventive", "mechanical", "quick"]}
    ]
  }
]

// all are assumed to refute "dead"
export const actions =  {
  distract: {
    assert: ["inventive"],
    apply: ["distracted"],
    repeal: ["alert"]
  },
  secure: {
    assert: ["smart", "resourceful"],
    apply: ["secured"],
    repeal: ["fragile"]
  },
  deliver: {
    assertTarget: ["secured"],
    apply: ["delivered"],
  },
  slash: {
    assert: ["dinosaur"],
    refute: ["distracted"],
    apply: ["dead"],
  },
}
