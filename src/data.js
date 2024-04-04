// traits
[
  // set
  'entrance',
  'administration',
  'enclosure',

  // entity human
  'human',
  'mechanic',
  'administrator',
  'hunter',
  'rifle',

  // entity dinosaur
  'dinosaur',
].map(e => eval(`const ${e} = 'e'`))


export const sets = [
  {
    name: 'Entrance',
    traits: {entrance},
    entities: [
      {name: 'Jo Schwartz', traits: {human, mechanic}},
      {name: 'Lita Maroon', traits: {human, administrator}},
      {name: 'Jaque Salls', traits: {human, hunter, rifle}},
    ]
  },
  {
    name: 'administration',
    traits: {},
    entities: []
  },
  {
    name: 'velociraptor enclosure',
    traits: {enclosure},
    entities: [
      {name: 'A-A-A', traits: {dinosaur}},
    ]
  },
  {
    name: 'riding a T-rex',
    traits: {grappling},
    entities: [
      {name: 'HRAH', traits: {dinosaur}},
    ]
  },
]


export const actions = []
