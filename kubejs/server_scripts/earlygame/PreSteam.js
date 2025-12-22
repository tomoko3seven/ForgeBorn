ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:chest' })
    event.remove({ output: 'gtceu:stone_gear' })
    event.remove({ output: 'gtceu:wood_gear' })

    event.shapeless('minecraft:stick', [ // arg 1: output	//arg 2: the array of inputs
  '#minecraft:saplings'
])
    event.shapeless('gtceu:flint_axe', [
  'kubejs:plant_string',
  '#forge:rods/wooden',
  '#forge:gems/flint'
])
event.shapeless('kubejs:plant_string', [
  '3x kubejs:plant_fiber'
])

event.shaped(
    'gtceu:stone_gear', [
        'CSC',
        'S S',
        'CSC'
    ], {
        C: "minecraft:cobblestone",
        S: 'minecraft:stick',
    }
);
event.shaped(
    'gtceu:wood_gear', [
        'CSC',
        'S S',
        'CSC'
    ], {
        C: '#forge:rods/wooden',
        S: '#minecraft:planks',
    }
);
event.shaped(Item.of('minecraft:chest'), [
    'BCB',
    'GFG',
    'BCB'
], {
    C: '#minecraft:planks',
    G: 'gtceu:wood_gear',
    B: '#minecraft:logs',
    F: 'minecraft:flint',
});


event.shaped(
    'minecraft:campfire', [
        ' S ',
        'S S',
        'SPS'
    ], {
        S: '#forge:rods/wooden',
        S: 'kubejs:plant_fiber'
    }
);
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
event.remove({ output: 'twigs:cobblestone_bricks' })
event.shaped(
    'twigs:cobblestone_bricks', [
        'BCB',
        'BCB',
        'BCB'
    ], {
        B: 'gtceu:cobblestone_ingot',
        C: 'minecraft:clay_ball'
    }
);
event.remove({ output: 'minecraft:furnace' })
event.shaped(
    'minecraft:furnace', [
        'CCC',
        'GFG',
        'BBB'
    ], {
        B: 'twigs:cobblestone_bricks',
        F: 'minecraft:flint',
        G: 'gtceu:stone_gear',
        C: '#minecraft:stone_crafting_materials'
    }
);

event.shapeless('minecraft:white_wool', [ 
  'kubejs:wool_clutch',
  'kubejs:wool_clutch',
  'kubejs:wool_clutch',
  'kubejs:wool_clutch',
  'kubejs:needle'
])

event.recipes.farmersdelight.cutting(
        'kubejs:wool_clutch',
        '#forge:tools/knives', // tool
        [ // results
            'minecraft:string'
        ],
        // '' // sound
	);

/*event.shaped('gtceu:flint_axe', [
    ' S ',
    'SLS',
    '   '
], {
    L: 'minecraft:leather', 
    S: 'minecraft:string'
});*/
})