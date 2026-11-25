const CHARACTERS = [
  {
    "name": "Edelgard",
    "preferred": [
      {
        "name": "Armored Bear Stuffy",
        "stars": 3
      },
      {
        "name": "Carnation",
        "stars": 3
      },
      {
        "name": "Monarch Studies Book",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Board Game",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Goddess Statuette",
        "stars": 3
      },
      {
        "name": "Ceremonial Sword",
        "stars": 4
      }
    ]
  },
  {
    "name": "Hubert",
    "preferred": [
      {
        "name": "The History of Fódlan",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Board Game",
        "stars": 4
      },
      {
        "name": "Coffee Beans",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Gemstone Beads",
        "stars": 1
      },
      {
        "name": "Legends of Chivalry",
        "stars": 3
      },
      {
        "name": "Landscape Painting",
        "stars": 4
      }
    ]
  },
  {
    "name": "Dorothea",
    "preferred": [
      {
        "name": "Gemstone Beads",
        "stars": 1
      },
      {
        "name": "Stylish Hair Clip",
        "stars": 2
      },
      {
        "name": "Book of Sheet Music",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      }
    ],
    "disliked": [
      {
        "name": "Floral Adornment",
        "stars": 1
      },
      {
        "name": "Goddess Statuette",
        "stars": 3
      }
    ]
  },
  {
    "name": "Ferdinand",
    "preferred": [
      {
        "name": "Whetstone",
        "stars": 2
      },
      {
        "name": "Riding Boots",
        "stars": 3
      },
      {
        "name": "Tea Leaves",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      }
    ],
    "disliked": [
      {
        "name": "Blue Cheese",
        "stars": 4
      },
      {
        "name": "Coffee Beans",
        "stars": 4
      }
    ]
  },
  {
    "name": "Bernadetta",
    "preferred": [
      {
        "name": "Watering Can",
        "stars": 2
      },
      {
        "name": "Dapper Handkerchief",
        "stars": 2
      },
      {
        "name": "Armored Bear Stuffy",
        "stars": 3
      },
      {
        "name": "Book of Sheet Music",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Pitcher Plant",
        "stars": 3
      },
      {
        "name": "Landscape Painting",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Hunting Dagger",
        "stars": 2
      },
      {
        "name": "Training Weight",
        "stars": 3
      },
      {
        "name": "Ceremonial Sword",
        "stars": 4
      }
    ]
  },
  {
    "name": "Caspar",
    "preferred": [
      {
        "name": "Smoked Meat",
        "stars": 1
      },
      {
        "name": "Hunting Dagger",
        "stars": 2
      },
      {
        "name": "Whetstone",
        "stars": 2
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Training Weight",
        "stars": 3
      }
    ],
    "disliked": [
      {
        "name": "Floral Adornment",
        "stars": 1
      },
      {
        "name": "Fishing Float",
        "stars": 1
      },
      {
        "name": "Stylish Hair Clip",
        "stars": 2
      }
    ]
  },
  {
    "name": "Petra",
    "preferred": [
      {
        "name": "Smoked Meat",
        "stars": 1
      },
      {
        "name": "Hunting Dagger",
        "stars": 2
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Sunflower",
        "stars": 3
      },
      {
        "name": "Exotic Spices",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Arithmetic Textbook",
        "stars": 3
      },
      {
        "name": "Book of Crest Designs",
        "stars": 4
      }
    ]
  },
  {
    "name": "Linhardt",
    "preferred": [
      {
        "name": "Fishing Float",
        "stars": 1
      },
      {
        "name": "Tasty Baked Treat",
        "stars": 1
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Book of Crest Designs",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Hunting Dagger",
        "stars": 2
      },
      {
        "name": "Training Weight",
        "stars": 3
      }
    ]
  },
  {
    "name": "Monica",
    "preferred": [
      {
        "name": "Hunting Dagger",
        "stars": 2
      },
      {
        "name": "Arithmetic Textbook",
        "stars": 3
      },
      {
        "name": "The History of Fódlan",
        "stars": 3
      },
      {
        "name": "Monarch Studies Book",
        "stars": 3
      },
      {
        "name": "Carnation",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      }
    ],
    "disliked": [
      {
        "name": "Tasty Baked Treat",
        "stars": 1
      },
      {
        "name": "Ceremonial Sword",
        "stars": 4
      }
    ]
  },
  {
    "name": "Dimitri",
    "preferred": [
      {
        "name": "Whetstone",
        "stars": 2
      },
      {
        "name": "Riding Boots",
        "stars": 3
      },
      {
        "name": "Training Weight",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Ceremonial Sword",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Gemstone Beads",
        "stars": 1
      },
      {
        "name": "Armored Bear Stuffy",
        "stars": 3
      },
      {
        "name": "Book of Sheet Music",
        "stars": 3
      }
    ]
  },
  {
    "name": "Dedue",
    "preferred": [
      {
        "name": "Floral Adornment",
        "stars": 1
      },
      {
        "name": "Watering Can",
        "stars": 2
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Exotic Spices",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Book of Sheet Music",
        "stars": 3
      },
      {
        "name": "The History of Fódlan",
        "stars": 3
      }
    ]
  },
  {
    "name": "Felix",
    "preferred": [
      {
        "name": "Smoked Meat",
        "stars": 1
      },
      {
        "name": "Hunting Dagger",
        "stars": 2
      },
      {
        "name": "Training Weight",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Ceremonial Sword",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Tasty Baked Treat",
        "stars": 1
      },
      {
        "name": "Armored Bear Stuffy",
        "stars": 3
      },
      {
        "name": "Legends of Chivalry",
        "stars": 3
      }
    ]
  },
  {
    "name": "Mercedes",
    "preferred": [
      {
        "name": "Tasty Baked Treat",
        "stars": 1
      },
      {
        "name": "Gemstone Beads",
        "stars": 1
      },
      {
        "name": "Goddess Statuette",
        "stars": 3
      },
      {
        "name": "Armored Bear Stuffy",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Lavender",
        "stars": 3
      }
    ],
    "disliked": [
      {
        "name": "Whetstone",
        "stars": 2
      },
      {
        "name": "Ancient Coin",
        "stars": 3
      },
      {
        "name": "Riding Boots",
        "stars": 3
      }
    ]
  },
  {
    "name": "Ashe",
    "preferred": [
      {
        "name": "Tasty Baked Treat",
        "stars": 1
      },
      {
        "name": "Legends of Chivalry",
        "stars": 3
      },
      {
        "name": "Ancient Coin",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Violet",
        "stars": 3
      },
      {
        "name": "Exotic Spices",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Arithmetic Textbook",
        "stars": 3
      },
      {
        "name": "Monarch Studies Book",
        "stars": 3
      },
      {
        "name": "Board Game",
        "stars": 4
      }
    ]
  },
  {
    "name": "Annette",
    "preferred": [
      {
        "name": "Stylish Hair Clip",
        "stars": 2
      },
      {
        "name": "Arithmetic Textbook",
        "stars": 3
      },
      {
        "name": "Book of Sheet Music",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      }
    ],
    "disliked": [
      {
        "name": "Hunting Dagger",
        "stars": 2
      },
      {
        "name": "Coffee Beans",
        "stars": 4
      },
      {
        "name": "Ceremonial Sword",
        "stars": 4
      }
    ]
  },
  {
    "name": "Sylvain",
    "preferred": [
      {
        "name": "Dapper Handkerchief",
        "stars": 2
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Landscape Painting",
        "stars": 4
      },
      {
        "name": "Board Game",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Floral Adornment",
        "stars": 1
      },
      {
        "name": "Watering Can",
        "stars": 2
      },
      {
        "name": "Book of Crest Designs",
        "stars": 4
      }
    ]
  },
  {
    "name": "Ingrid",
    "preferred": [
      {
        "name": "Smoked Meat",
        "stars": 1
      },
      {
        "name": "Riding Boots",
        "stars": 3
      },
      {
        "name": "Legends of Chivalry",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      }
    ],
    "disliked": [
      {
        "name": "Gemstone Beads",
        "stars": 1
      },
      {
        "name": "Stylish Hair Clip",
        "stars": 2
      }
    ]
  },
  {
    "name": "Rodrigue",
    "preferred": [
      {
        "name": "Smoked Meat",
        "stars": 1
      },
      {
        "name": "Hunting Dagger",
        "stars": 2
      },
      {
        "name": "Whetstone",
        "stars": 2
      },
      {
        "name": "Riding Boots",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Blue Cheese",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Tasty Baked Treat",
        "stars": 1
      },
      {
        "name": "Gemstone Beads",
        "stars": 1
      }
    ]
  },
  {
    "name": "Claude",
    "preferred": [
      {
        "name": "Riding Boots",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Book of Crest Designs",
        "stars": 4
      },
      {
        "name": "Exotic Spices",
        "stars": 4
      },
      {
        "name": "Board Game",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Book of Sheet Music",
        "stars": 3
      },
      {
        "name": "Blue Cheese",
        "stars": 4
      }
    ]
  },
  {
    "name": "Hilda",
    "preferred": [
      {
        "name": "Gemstone Beads",
        "stars": 1
      },
      {
        "name": "Stylish Hair Clip",
        "stars": 2
      },
      {
        "name": "Dapper Handkerchief",
        "stars": 2
      },
      {
        "name": "Book of Sheet Music",
        "stars": 3
      },
      {
        "name": "Armored Bear Stuffy",
        "stars": 3
      },
      {
        "name": "Anemone",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      }
    ],
    "disliked": [
      {
        "name": "Training Weight",
        "stars": 3
      },
      {
        "name": "Legends of Chivalry",
        "stars": 3
      },
      {
        "name": "Ancient Coin",
        "stars": 3
      }
    ]
  },
  {
    "name": "Lorenz",
    "preferred": [
      {
        "name": "Floral Adornment",
        "stars": 1
      },
      {
        "name": "Rose",
        "stars": 3
      },
      {
        "name": "Book of Sheet Music",
        "stars": 3
      },
      {
        "name": "Tea Leaves",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      }
    ],
    "disliked": [
      {
        "name": "Hunting Dagger",
        "stars": 2
      },
      {
        "name": "Watering Can",
        "stars": 2
      },
      {
        "name": "Armored Bear Stuffy",
        "stars": 3
      }
    ]
  },
  {
    "name": "Raphael",
    "preferred": [
      {
        "name": "Tasty Baked Treat",
        "stars": 1
      },
      {
        "name": "Smoked Meat",
        "stars": 1
      },
      {
        "name": "Training Weight",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Blue Cheese",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Arithmetic Textbook",
        "stars": 3
      },
      {
        "name": "Book of Crest Designs",
        "stars": 4
      }
    ]
  },
  {
    "name": "Lysithea",
    "preferred": [
      {
        "name": "Tasty Baked Treat",
        "stars": 1
      },
      {
        "name": "Armored Bear Stuffy",
        "stars": 3
      },
      {
        "name": "Arithmetic Textbook",
        "stars": 3
      },
      {
        "name": "Lily",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Book of Crest Designs",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Training Weight",
        "stars": 3
      },
      {
        "name": "Legends of Chivalry",
        "stars": 3
      },
      {
        "name": "Coffee Beans",
        "stars": 4
      }
    ]
  },
  {
    "name": "Ignatz",
    "preferred": [
      {
        "name": "Goddess Statuette",
        "stars": 3
      },
      {
        "name": "Ancient Coin",
        "stars": 3
      },
      {
        "name": "Forget-me-nots",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Ceremonial Sword",
        "stars": 4
      },
      {
        "name": "Landscape Painting",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Training Weight",
        "stars": 3
      },
      {
        "name": "Monarch Studies Book",
        "stars": 3
      }
    ]
  },
  {
    "name": "Marianne",
    "preferred": [
      {
        "name": "Floral Adornment",
        "stars": 1
      },
      {
        "name": "Dapper Handkerchief",
        "stars": 2
      },
      {
        "name": "Armored Bear Stuffy",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Lily of the Valley",
        "stars": 3
      }
    ],
    "disliked": [
      {
        "name": "Smoked Meat",
        "stars": 1
      },
      {
        "name": "Hunting Dagger",
        "stars": 2
      }
    ]
  },
  {
    "name": "Leonie",
    "preferred": [
      {
        "name": "Fishing Float",
        "stars": 1
      },
      {
        "name": "Hunting Dagger",
        "stars": 2
      },
      {
        "name": "Training Weight",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      }
    ],
    "disliked": [
      {
        "name": "Stylish Hair Clip",
        "stars": 2
      },
      {
        "name": "Book of Crest Designs",
        "stars": 4
      }
    ]
  },
  {
    "name": "Holst",
    "preferred": [
      {
        "name": "Smoked Meat",
        "stars": 1
      },
      {
        "name": "Training Weight",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Exotic Spices",
        "stars": 4
      },
      {
        "name": "Board Game",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Floral Adornment",
        "stars": 1
      },
      {
        "name": "Book of Crest Designs",
        "stars": 4
      }
    ]
  },
  {
    "name": "Yuri",
    "preferred": [
      {
        "name": "Tasty Baked Treat",
        "stars": 1
      },
      {
        "name": "Goddess Statuette",
        "stars": 3
      },
      {
        "name": "Arithmetic Textbook",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Board Game",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Book of Sheet Music",
        "stars": 3
      },
      {
        "name": "Riding Boots",
        "stars": 3
      }
    ]
  },
  {
    "name": "Balthus",
    "preferred": [
      {
        "name": "Whetstone",
        "stars": 2
      },
      {
        "name": "Ancient Coin",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Ceremonial Sword",
        "stars": 4
      },
      {
        "name": "Blue Cheese",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Fishing Float",
        "stars": 1
      },
      {
        "name": "Watering Can",
        "stars": 2
      },
      {
        "name": "Armored Bear Stuffy",
        "stars": 3
      }
    ]
  },
  {
    "name": "Constance",
    "preferred": [
      {
        "name": "Lily of the Valley",
        "stars": 3
      },
      {
        "name": "Tea Leaves",
        "stars": 3
      },
      {
        "name": "Arithmetic Textbook",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Book of Crest Designs",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Blue Cheese",
        "stars": 4
      },
      {
        "name": "Exotic Spices",
        "stars": 4
      }
    ]
  },
  {
    "name": "Hapi",
    "preferred": [
      {
        "name": "Tasty Baked Treat",
        "stars": 1
      },
      {
        "name": "Smoked Meat",
        "stars": 1
      },
      {
        "name": "Hunting Dagger",
        "stars": 2
      },
      {
        "name": "Pitcher Plant",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Exotic Spices",
        "stars": 4
      },
      {
        "name": "Coffee Beans",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Training Weight",
        "stars": 3
      },
      {
        "name": "Monarch Studies Book",
        "stars": 3
      },
      {
        "name": "Legends of Chivalry",
        "stars": 3
      }
    ]
  },
  {
    "name": "Archbishop Rhea",
    "preferred": [
      {
        "name": "Goddess Statuette",
        "stars": 3
      },
      {
        "name": "Ancient Coin",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Landscape Painting",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Exotic Spices",
        "stars": 4
      }
    ],
    "footnote": "Recommended Gifts available but no Expeditions currently available. Possibly a future DLC pack."
  },
  {
    "name": "Seteth",
    "preferred": [
      {
        "name": "Fishing Float",
        "stars": 1
      },
      {
        "name": "Dapper Handkerchief",
        "stars": 2
      },
      {
        "name": "The History of Fódlan",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      }
    ],
    "disliked": [
      {
        "name": "Legends of Chivalry",
        "stars": 3
      },
      {
        "name": "Book of Crest Designs",
        "stars": 4
      }
    ]
  },
  {
    "name": "Flayn",
    "preferred": [
      {
        "name": "Tasty Baked Treat",
        "stars": 1
      },
      {
        "name": "Stylish Hair Clip",
        "stars": 2
      },
      {
        "name": "Dapper Handkerchief",
        "stars": 2
      },
      {
        "name": "Armored Bear Stuffy",
        "stars": 3
      },
      {
        "name": "Forget-me-nots",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      }
    ],
    "disliked": [
      {
        "name": "Whetstone",
        "stars": 2
      },
      {
        "name": "Blue Cheese",
        "stars": 4
      }
    ]
  },
  {
    "name": "Cyril",
    "preferred": [
      {
        "name": "Watering Can",
        "stars": 2
      },
      {
        "name": "Baby’s Breath",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      }
    ],
    "disliked": [
      {
        "name": "Monarch Studies Book",
        "stars": 3
      },
      {
        "name": "The History of Fódlan",
        "stars": 3
      },
      {
        "name": "Legends of Chivalry",
        "stars": 3
      }
    ],
    "footnote": "Recommended Gifts available but no Expeditions currently available. Possibly a future DLC pack."
  },
  {
    "name": "Shamir",
    "preferred": [
      {
        "name": "Hunting Dagger",
        "stars": 2
      },
      {
        "name": "Sunflower",
        "stars": 3
      },
      {
        "name": "Book of Sheet Music",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Exotic Spices",
        "stars": 4
      },
      {
        "name": "Coffee Beans",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Monarch Studies Book",
        "stars": 3
      },
      {
        "name": "Book of Crest Designs",
        "stars": 4
      },
      {
        "name": "Blue Cheese",
        "stars": 4
      }
    ]
  },
  {
    "name": "Catherine",
    "preferred": [
      {
        "name": "Whetstone",
        "stars": 2
      },
      {
        "name": "Training Weight",
        "stars": 3
      },
      {
        "name": "Legends of Chivalry",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Blue Cheese",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Gemstone Beads",
        "stars": 1
      },
      {
        "name": "Armored Bear Stuffy",
        "stars": 3
      },
      {
        "name": "Arithmetic Textbook",
        "stars": 3
      }
    ]
  },
  {
    "name": "Alois",
    "preferred": [
      {
        "name": "Floral Adornment",
        "stars": 1
      },
      {
        "name": "Sunflower",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      }
    ],
    "disliked": [
      {
        "name": "Monarch Studies Book",
        "stars": 3
      },
      {
        "name": "Exotic Spices",
        "stars": 4
      }
    ],
    "footnote": "Recommended Gifts available but no Expeditions currently available. Possibly a future DLC pack."
  },
  {
    "name": "Gilbert",
    "preferred": [
      {
        "name": "Fishing Float",
        "stars": 1
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Goddess Statuette",
        "stars": 3
      },
      {
        "name": "Ceremonial Sword",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Tasty Baked Treat",
        "stars": 1
      },
      {
        "name": "Dapper Handkerchief",
        "stars": 2
      }
    ],
    "footnote": "Recommended Gifts available but no Expeditions currently available. Possibly a future DLC pack."
  },
  {
    "name": "Jeritza",
    "preferred": [
      {
        "name": "Tasty Baked Treat",
        "stars": 1
      },
      {
        "name": "Whetstone",
        "stars": 2
      },
      {
        "name": "Hunting Dagger",
        "stars": 2
      },
      {
        "name": "Rose",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      }
    ],
    "disliked": [
      {
        "name": "Monarch Studies Book",
        "stars": 3
      },
      {
        "name": "Book of Crest Designs",
        "stars": 4
      },
      {
        "name": "Blue Cheese",
        "stars": 4
      }
    ]
  },
  {
    "name": "Manuela",
    "preferred": [
      {
        "name": "Gemstone Beads",
        "stars": 1
      },
      {
        "name": "Book of Sheet Music",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Goddess Statuette",
        "stars": 3
      },
      {
        "name": "Blue Cheese",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Smoked Meat",
        "stars": 1
      },
      {
        "name": "Riding Boots",
        "stars": 3
      },
      {
        "name": "Board Game",
        "stars": 4
      }
    ]
  },
  {
    "name": "Hanneman",
    "preferred": [
      {
        "name": "Dapper Handkerchief",
        "stars": 2
      },
      {
        "name": "Arithmetic Textbook",
        "stars": 3
      },
      {
        "name": "Tea Leaves",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Book of Crest Designs",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Blue Cheese",
        "stars": 4
      },
      {
        "name": "Exotic Spices",
        "stars": 4
      }
    ],
    "footnote": "Recommended Gifts available but no Expeditions currently available. Possibly a future DLC pack."
  },
  {
    "name": "Byleth (Male)",
    "preferred": [
      {
        "name": "Fishing Float",
        "stars": 1
      },
      {
        "name": "Hunting Dagger",
        "stars": 2
      },
      {
        "name": "Whetstone",
        "stars": 2
      },
      {
        "name": "The History of Fódlan",
        "stars": 3
      },
      {
        "name": "Training Weight",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      }
    ],
    "disliked": []
  },
  {
    "name": "Byleth (Female)",
    "preferred": [
      {
        "name": "Fishing Float",
        "stars": 1
      },
      {
        "name": "Hunting Dagger",
        "stars": 2
      },
      {
        "name": "Whetstone",
        "stars": 2
      },
      {
        "name": "The History of Fódlan",
        "stars": 3
      },
      {
        "name": "Training Weight",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      }
    ],
    "disliked": []
  },
  {
    "name": "Jeralt",
    "preferred": [
      {
        "name": "Smoked Meat",
        "stars": 1
      },
      {
        "name": "Fishing Float",
        "stars": 1
      },
      {
        "name": "Whetstone",
        "stars": 2
      },
      {
        "name": "Riding Boots",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Blue Cheese",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Book of Sheet Music",
        "stars": 3
      },
      {
        "name": "Goddess Statuette",
        "stars": 3
      }
    ]
  },
  {
    "name": "Anna",
    "preferred": [
      {
        "name": "Goddess Statuette",
        "stars": 3
      },
      {
        "name": "Forget-me-nots",
        "stars": 3
      },
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Coffee Beans",
        "stars": 4
      },
      {
        "name": "Blue Cheese",
        "stars": 4
      },
      {
        "name": "Landscape Painting",
        "stars": 4
      }
    ],
    "disliked": [
      {
        "name": "Fishing Float",
        "stars": 1
      },
      {
        "name": "Smoked Meat",
        "stars": 1
      }
    ],
    "footnote": "Recommended Gifts available but no Expeditions currently available. Possibly a future DLC pack."
  },
  {
    "name": "Gatekeeper",
    "preferred": [
      {
        "name": "Owl Feather",
        "stars": 3
      },
      {
        "name": "Book of Sheet Music",
        "stars": 3
      },
      {
        "name": "The History of Fódlan",
        "stars": 3
      }
    ],
    "disliked": [
      {
        "name": "Armored Bear Stuffy",
        "stars": 3
      }
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = CHARACTERS;
}
