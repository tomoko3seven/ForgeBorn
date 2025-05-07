ServerEvents.recipes(event => {
//Removals
    event.remove({ output: 'minecraft:crafting_table' });
    event.remove({ output: 'minecraft:furnace' })
    event.remove({ output: 'minecraft:chest' })
    event.remove({ output: 'gtceu:stone_gear' })
    event.remove({ output: 'gtceu:wood_gear' })
    event.remove({ output: '#minecraft:wool' })
// Recipes for beggining
event.shaped(
    'minecraft:campfire', [
        ' S ',
        'S S',
        'SPS'
    ], {
        S: '#forge:rods/wooden',
        S: 'notreepunching:plant_fiber'
    }
);
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
event.shaped(`kubejs:cobblestone_bricks`, ["SCS", "CBC", "SCS"], {
    S: 'minecraft:cobblestone',
    C: 'minecraft:clay_ball',
    B: ['notreepunching:ceramic_water_bucket', '#forge:buckets/water']
  });
  event.recipes.gtceu.assembler('gtceu:assembler/cobblestone_bricks')
  .itemInputs('4x minecraft:cobblestone')
  .inputFluids('minecraft:water 200')
  .itemOutputs('4x kubejs:cobblestone_bricks')
  .EUt(GTValues.VA[GTValues.ULV])
  .duration(200)
event.shaped(Item.of('minecraft:furnace'), [
    'BCB',
    'GFG',
    'BCB'
], {
    C: 'minecraft:cobblestone',
    G: 'gtceu:stone_gear',
    B: 'kubejs:cobblestone_bricks',
    F: 'minecraft:flint',
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
//Steam
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

});