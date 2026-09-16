var APP_DATA = {
  "scenes": [
    {
      "id": "0-couloir-porte-dentre",
      "name": "Couloir porte d'entrée",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.0326941181888536,
        "pitch": 0.14868646384319817,
        "fov": 1.4615790688026125
      },
      "linkHotspots": [
        {
          "yaw": 0.2601263752039351,
          "pitch": 0.828588363602826,
          "rotation": 0,
          "target": "1-cuisine"
        },
        {
          "yaw": 2.020693383921568,
          "pitch": 0.5751587078408651,
          "rotation": 0,
          "target": "2-couloir-sdb"
        },
        {
          "yaw": -0.9450754307503004,
          "pitch": 0.5954931877562935,
          "rotation": 0,
          "target": "9-rsidence_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cuisine",
      "name": "Cuisine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.16250983200341373,
        "pitch": 0.1041695585009137,
        "fov": 1.4615790688026125
      },
      "linkHotspots": [
        {
          "yaw": -2.816260832959408,
          "pitch": 0.9126059051498103,
          "rotation": 0,
          "target": "0-couloir-porte-dentre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-couloir-sdb",
      "name": "Couloir SDB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.3886513288971081,
        "pitch": 0.1540354257645138,
        "fov": 1.4615790688026125
      },
      "linkHotspots": [
        {
          "yaw": 0.2894322303277015,
          "pitch": 0.8222665429282188,
          "rotation": 6.283185307179586,
          "target": "3-sdb"
        },
        {
          "yaw": -0.9517250278954208,
          "pitch": 0.7844769007280448,
          "rotation": 6.283185307179586,
          "target": "0-couloir-porte-dentre"
        },
        {
          "yaw": 2.1650735232446525,
          "pitch": 0.7787375832790886,
          "rotation": 0,
          "target": "4-salon-cot-couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sdb",
      "name": "SDB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.005945481658661933,
        "pitch": 0.09348550121878318,
        "fov": 1.4615790688026125
      },
      "linkHotspots": [
        {
          "yaw": -2.596052250826947,
          "pitch": 1.0628673210675554,
          "rotation": 0,
          "target": "2-couloir-sdb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-salon-cot-couloir",
      "name": "Salon coté couloir",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.1637402792224325,
        "pitch": 0.05148988106845209,
        "fov": 1.4615790688026125
      },
      "linkHotspots": [
        {
          "yaw": -0.13762201902464177,
          "pitch": 0.7480921161113052,
          "rotation": 0,
          "target": "2-couloir-sdb"
        },
        {
          "yaw": 1.3323510212967609,
          "pitch": 0.5827471592624534,
          "rotation": 0,
          "target": "5-salon-cot-placard"
        },
        {
          "yaw": 2.3550677841663834,
          "pitch": 0.7418484011739928,
          "rotation": 0,
          "target": "6-salon-centre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-salon-cot-placard",
      "name": "Salon coté placard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 3.122396532259894,
        "pitch": 0.2518198608742672,
        "fov": 1.4615790688026125
      },
      "linkHotspots": [
        {
          "yaw": -3.019428660220335,
          "pitch": 0.6338480861806843,
          "rotation": 0,
          "target": "6-salon-centre"
        },
        {
          "yaw": -2.1877392500672794,
          "pitch": 0.6270727910874285,
          "rotation": 0,
          "target": "4-salon-cot-couloir"
        },
        {
          "yaw": 2.935351628536859,
          "pitch": 0.3952664088995945,
          "rotation": 0,
          "target": "7-salon-cot-fentre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-salon-centre",
      "name": "Salon centre",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.8835330854301908,
        "pitch": 0.1529235766997914,
        "fov": 1.4615790688026125
      },
      "linkHotspots": [
        {
          "yaw": -0.46402342771892435,
          "pitch": 0.5327381636967665,
          "rotation": 0,
          "target": "5-salon-cot-placard"
        },
        {
          "yaw": -1.5178351071666452,
          "pitch": 0.600702219331243,
          "rotation": 0,
          "target": "4-salon-cot-couloir"
        },
        {
          "yaw": 2.5752194732351246,
          "pitch": 0.6728247288596272,
          "rotation": 0,
          "target": "7-salon-cot-fentre"
        },
        {
          "yaw": 2.3381286385457507,
          "pitch": 0.10090394788687718,
          "rotation": 0,
          "target": "8-terrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-salon-cot-fentre",
      "name": "Salon coté fenêtre",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.39423100360965435,
        "pitch": 0.12020581367312744,
        "fov": 1.4615790688026125
      },
      "linkHotspots": [
        {
          "yaw": -0.6379672728126167,
          "pitch": 0.6008102592614577,
          "rotation": 0,
          "target": "6-salon-centre"
        },
        {
          "yaw": 1.8274902596573295,
          "pitch": 0.20772542596212773,
          "rotation": 0,
          "target": "8-terrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-terrasse",
      "name": "Terrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.543020658157694,
        "pitch": -0.19498404539916336,
        "fov": 1.4615790688026125
      },
      "linkHotspots": [
        {
          "yaw": -0.17914561779310034,
          "pitch": 0.3695045900360441,
          "rotation": 0,
          "target": "9-rsidence_1"
        },
        {
          "yaw": 0.41077547156146466,
          "pitch": 0.5147672977375439,
          "rotation": 0,
          "target": "10-rsidence_2"
        },
        {
          "yaw": 1.1083871552639177,
          "pitch": 0.47683218115002646,
          "rotation": 0,
          "target": "11-rsidence_3"
        },
        {
          "yaw": 2.658734965276933,
          "pitch": 0.26824167781484043,
          "rotation": 0,
          "target": "7-salon-cot-fentre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-rsidence_1",
      "name": "Résidence_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -2.1801426477049546,
        "pitch": -0.05736376595696413,
        "fov": 1.4615790688026125
      },
      "linkHotspots": [
        {
          "yaw": -0.3823426838465167,
          "pitch": 0.30150121123343254,
          "rotation": 0,
          "target": "8-terrasse"
        },
        {
          "yaw": 0.0007579996243833875,
          "pitch": 0.3262173952346217,
          "rotation": 0,
          "target": "0-couloir-porte-dentre"
        },
        {
          "yaw": -3.0162755820892286,
          "pitch": 0.14039196935995335,
          "rotation": 0,
          "target": "10-rsidence_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-rsidence_2",
      "name": "Résidence_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 2.7191756412882073,
        "pitch": -0.018935894411402643,
        "fov": 1.4615790688026125
      },
      "linkHotspots": [
        {
          "yaw": 2.8101664227947847,
          "pitch": 0.23162505494119046,
          "rotation": 0,
          "target": "9-rsidence_1"
        },
        {
          "yaw": -3.0573415630051777,
          "pitch": 0.26148888499915657,
          "rotation": 0,
          "target": "11-rsidence_3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-rsidence_3",
      "name": "Résidence_3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 1.7158486708362988,
        "pitch": -0.0667753580134054,
        "fov": 1.4615790688026125
      },
      "linkHotspots": [
        {
          "yaw": 2.0476771648421517,
          "pitch": 0.06314551287422354,
          "rotation": 0,
          "target": "9-rsidence_1"
        },
        {
          "yaw": 1.1213768255352683,
          "pitch": -0.30282728573451934,
          "rotation": 0,
          "target": "8-terrasse"
        },
        {
          "yaw": 0.9633378047246595,
          "pitch": 0.0628895701520289,
          "rotation": 0,
          "target": "0-couloir-porte-dentre"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Rue du Relais - Pessac",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
