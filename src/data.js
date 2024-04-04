const t = traits => Object.fromEntries(traits.split(', ').map(e => [e, e]))


export const sets = [
  {
    name: 'Entrance',
    traits: t(`entrance`),
    entities: [
      {name: 'Jo Schwartz', traits: t(`human, mechanic`)},
      {name: 'Lita Maroon', traits: t(`human, administrator`)},
      {name: 'Jaque Salls', traits: t(`human, hunter, rifle`)},
    ]
  },
  {
    name: 'administration',
    traits: t(``),
    entities: []
  },
  {
    name: 'velociraptor enclosure',
    traits: t(`enclosure`),
    entities: [
      {name: 'A-A-A', traits: t(`dinosaur`)},
    ]
  },
  {
    name: 'riding a T-rex',
    traits: t(`grappling`),
    entities: [
      {name: 'HRAH', traits: t(`dinosaur`)},
    ]
  },
]


export const actions = []
