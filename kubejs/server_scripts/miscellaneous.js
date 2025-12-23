ServerEvents.recipes((event) => {
  event.remove({ mod: 'itemfilters' })
  // Travel Anchors
  /*event.remove({ id: "travelanchors:travel_anchor" });
  event.shaped(`travelanchors:travel_anchor`, ["SGS", "GPG", "SGS"], {
    S: "#forge:plates/black_steel",
    G: "#forge:plates/green_sapphire",
    P: "ender_pearl",
  });*/

  /*event.shaped(`kubejs:ender_hull`, ["SGS", "WCW", "   "], {
    P: 'gtceu:black_steel_plate',
    C: 'gtceu:platinum_single_cable',
    W: 'gtceu:ender_pearl_plate',
  });*/

  event.shaped(`kubejs:empty_ender_casing`, ["PPP", "PTP", "PPP"], {
    P: 'gtceu:black_steel_plate',
    T: '#forge:tools/wrenches',
  });

  /*event.remove({ id: "travelanchors:travel_staff" });
  event.shaped(`travelanchors:travel_staff`, ["  P", " R ", "R  "], {
    R: "#forge:rods/black_steel",
    P: 'gtceu:exquisite_green_sapphire_gem',
  });*/

  // Tool Belt
  /*event.remove({ id: "toolbelt:belt" });
  event.shaped("toolbelt:belt", ["SLS", "C C", "LIL"], {
    S: "minecraft:string",
    L: "minecraft:leather",
    I: "#forge:plates/steel",
    C: "#forge:screws/steel",*/

      /*event.remove({ id: "toolbelt:pouch" });
  event.shaped("toolbelt:pouch", [" G ", "LSL", "   "], {
    G: "#forge:rings/gold",
    L: "minecraft:leather",
    S: "#forge:plates/steel",
  });*/

  //Nether Remastered
    event.shaped('nether_remastered:seal_piece_1', [" P ", "PTP", " P "], {
    P: '#forge:plates/gold',
    T: 'kubejs:token_of_light'
  });
    event.shaped('nether_remastered:seal_piece_2', [" P ", "PTP", " P "], {
    P: '#forge:plates/gold',
    T: 'kubejs:token_of_darkness'
  });
/*  event.recipes.enderio.alloy_smelting(
      Item.of('nether_remastered:seal_piece_4', 1),
      [Item.of('#forge:plates/gold'), Ingredient.of('minecraft:netherrack')],
      1000,
      5.5
  );*/
/*      event.shaped('nether_remastered:seal_piece_3', [" P ", "PTP", " P "], {
    P: '#forge:plates/gold',
    T: 'actuallyadditions:void_crystal'
  });*/
  event.remove({ id: 'nether_remastered:seal_of_the_underworld_item' });
        event.shaped('nether_remastered:seal_of_the_underworld_item', ["QPW", "PTP", "EPR"], {
    P: '#forge:plates/gold',
    Q: 'nether_remastered:seal_piece_1',
    W: 'nether_remastered:seal_piece_2',
    E: 'nether_remastered:seal_piece_3',
    R: 'nether_remastered:seal_piece_4',
    T: 'minecraft:cake'
  });
  });
