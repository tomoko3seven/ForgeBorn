ServerEvents.recipes(event => {
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "output": {
          "item": 'kubejs:magebloom_fiber_cloth'
        },
        "pedestalItems": [
          {
            "item": 'ars_nouveau:magebloom_fiber'
          },
          {
            "item": 'ars_nouveau:magebloom_fiber'
          },
          {
            "item": 'ars_nouveau:magebloom_fiber'
          },
          {
            "item": 'ars_nouveau:magebloom_fiber'
          }
        ],
        "reagent": [
          {
            "item": 'forbidden_arcanus:cloth'
          }
        ],
        /*"sourceCost": 200*/
      })
      //Shaped
      /*event.remove({ output: "farmersdelight:iron_knife" });
      event.shaped("farmersdelight:iron_knife", [
        'FIH',
        ' S ',
        '   '
      ], {
        I: '#forge:plates/iron',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files',
        S: 'gtceu:treated_wood_rod'
      }
    );*/
})