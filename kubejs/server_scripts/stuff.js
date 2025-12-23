/*building gadgets, torchmaster, elevators, simple lights, paragliders, trash cans*/
ServerEvents.recipes(event => {
event.remove({ output: '@nopunching' })
//Angel Ring
event.remove({ output: '@angelring' })
/*event.recipes.botania.runic_altar('angelring:angel_ring', ['kubejs:basic_botanical_circuit', 'kubejs:basic_botanical_circuit', 'kubejs:wind_tablet', 
        'kubejs:wind_tablet', Item.of('botania:brew_vial').withNBT({Potion: "botania:feather_feet",}), 'minecraft:feather', 'minecraft:feather', '#forge:rings/rose_gold', 'minecraft:phantom_membrane'], 15000)*/
//TORCHMASTER
event.remove({ output: 'torchmaster:megatorch' })
event.recipes.botania.runic_altar('torchmaster:megatorch', ['regions_unexplored:brimwood_log', 'regions_unexplored:brimwood_log', 'extendedcrafting:luminessence_block', 'gtceu:rose_gold_block', 'gtceu:rose_gold_block'], 3000)
event.remove({ output: 'torchmaster:dreadlamp' })
event.recipes.botania.runic_altar('torchmaster:dreadlamp', ['gtceu:obsidian_plate', 'gtceu:obsidian_plate', 'extendedcrafting:luminessence_block', 'gtceu:dense_obsidian_plate', 'gtceu:dense_obsidian_plate', 'kubejs:lurking_soul'], 3000)
event.remove({ output: 'torchmaster:feral_flare_lantern' })
event.recipes.botania.runic_altar('torchmaster:feral_flare_lantern', ['gtceu:steel_ring', 'gtceu:steel_ring', 'extendedcrafting:luminessence_block', 'gtceu:steel_ring', 'gtceu:steel_ring'], 5000)
//BULDING GADGETS

//Backpacks
event.remove({ output: 'usefulbackpacks:backpack_small' })
    event.shaped('usefulbackpacks:backpack_small', [
    'RIR',
    'LSL',
    'LLL'
], {
    R: 'kubejs:rope',
    I: 'gtceu:iron_ring', 
    L: 'kubejs:tanned_leather',
    S: 'minecraft:string'
});
    event.shaped('usefulbackpacks:backpack_medium', [
    'RIR',
    'LSL',
    'LLL'
], {
    R: 'kubejs:rope',
    I: 'gtceu:iron_ring', 
    L: 'kubejs:tanned_leather',
    S: 'usefulbackpacks:backpack_small'
});
    event.shaped('usefulbackpacks:backpack_large', [
    'RIR',
    'LSL',
    'LLL'
], {
    R: 'kubejs:rope',
    I: 'gtceu:iron_ring', 
    L: 'kubejs:tanned_leather',
    S: 'usefulbackpacks:backpack_medium'
});


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

  /*event.shaped(`kubejs:empty_ender_casing`, ["PPP", "PTP", "PPP"], {
    P: 'gtceu:black_steel_plate',
    T: '#forge:tools/wrenches',
  });*/

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
// Chisel
  /*event.shaped(
    'chisel:chisel', [
        'P  ',
        'S  ',
        '   '
    ], {
        P: '#forge:plates/iron',
        S: '#forge:rods/wooden',
    }
);*/
});