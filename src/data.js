export const sets = [
  {
    "name": "Nesting Grounds",
    "traits": ["dense"],
    "entities": [
      {"name": "Mother Raptor", "traits": ["dinosaur", "protective"]},
      {"name": "Dinosaur Egg", "traits": ["egg", "fragile"]}
    ]
  },
  {
    "name": "Research Lab",
    "traits": ["secure"],
    "entities": [
      {"name": "Doctor Dale", "traits": ["human", "cautious"]},
      {"name": "Engineer Ellie", "traits": ["human", "inventive"]}
    ]
  }
]

export const actions = {
  distract: {
    assert: "inventive",
    refute: "dead",
    apply:  "distracted",
  },
  secure: {
    assert: "cautious",
    refute: "dead",
    apply:  "secured",
  },
  slash: {
    assert: "dinosaur",
    refute: "distracted",
    apply:  "dead",
  },
}

export const possible = ({subject: {traits}, action: {assert, refute}}) =>
  !traits.find(t => t===refute) && traits.find(t => t===assert)

export const perform = ()=>{} //TODO
