ServerEvents.recipes(event => {
// Recipes for beggining
event.shaped(
    'minecraft:crafting_table', [
        'FF ',
        'WW ',
        '   '
    ], {
        W: '#minecraft:logs',
        F: 'minecraft:flint',
    }
);
event.shaped(`kubejs:cobblestone_bricks`, ["SCS", "CBC", "SCS"], {
    S: 'minecraft:cobblestone',
    C: 'minecraft:clay_ball',
    B: ['notreepunching:ceramic_water_bucket', '#forge:buckets/water']
  });
event.shaped(Item.of('minecraft:furnace'), [
    'CCC',
    'CRC',
    'DDD'
], {
    C: 'minecraft:cobblestone',
    D: '#forge:stone',
    R: 'gtceu:raw_coal',
});
//Pre-Steam
event.shaped(Item.of('minecraft:white_wool'), [
    'AA ',
    'AA ',
    ' B '
], {
    A: 'kubejs:wool_clutch', 
    B: Item.of('kubejs:needle', '{Damage:0}') 
}).damageIngredient('kubejs:needle'); 

  event.custom({
    type: 'minecraft:smelting',
    ingredient: { item: 'minecraft:iron_ore' },
    result: 'minecraft:iron_ingot',
    experience: 0.7,
    cookingtime: 200,
    conditions: [
        {
            type: 'forge:mod_loaded',
            modid: 'gtceu'
        }
    ]
}).id('kubejs:custom_furnace_smelting')
//Steam
event.shaped(
    'minecraft:campfire', [
        ' S ',
        'S S',
        'SPS'
    ], {
        S: '#forge:rods/wooden',
        P: '#forge:gems/coke',
    }
);
//LV
event.shaped(
    'kubejs:needle', [
        'BS ',
        'F  ',
        '   '
    ], {
        F: '#forge:tools/files',
        S: '#forge:tools/saws',
        B: 'minecraft:bone',
    }
);
//MV
event.shaped(
    'minecraft:spyglass', [
        'L  ',
        'R  ',
        '   '
    ], {
        L: 'gtceu:glass_lens',
        R: 'gtceu:copper_tiny_fluid_pipe',
    }
);
//HV
event.shaped('minecraft:white_bed', [
    'WWW',
    'FMF',
    '   '
  ], {
    B: 'minecraft:white_wool',
    M: '#forge:tools/mallets',
    F: '#forge:fences/wooden'
  }
);
});