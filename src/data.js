import { reactive } from 'vue'


export const sets = [
  reactive({
    "name": "Nesting Grounds",
    "traits": ["dense"],
    "entities": [
      {"name": "Mother Raptor", "traits": ["dinosaur", "protective"]},
      {"name": "Dinosaur Egg", "traits": ["egg", "fragile"]}
    ]
  }),
  reactive({
    "name": "Research Lab",
    "traits": ["secure"],
    "entities": [
      {"name": "Doctor Dale", "traits": ["human", "cautious"]},
      {"name": "Engineer Ellie", "traits": ["human", "inventive"]}
    ]
  }),
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
  !traits.find(t => t===refute || t==="dead") && traits.find(t => t===assert)

export const perform = ({action: {apply}, object}) => object.traits.push(apply)
