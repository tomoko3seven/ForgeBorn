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
event.shaped(`kubejs:cobblestone_bricks`, ["SCS", "CBC", "SCS"], {
    S: 'minecraft:cobblestone',
    C: 'minecraft:clay_ball',
    B: ['notreepunching:ceramic_water_bucket', '#forge:buckets/water']
  });
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
event.shaped(
    'botania:apothecary_default', [
        'CBC',
        'MCH',
        'CCC'
    ], {
        C: 'kubejs:cobblestone_bricks',
        B: 'botania:white_petal_block',
        M: '#forge:tools/mallets',
        H: '#forge:tools/hammers',
    }
);
event.shaped(
    'botania:mana_pool', [
        'L L',
        'LLL',
        'BCB'
    ], {
        L: 'botania:livingrock',
        C: '#gtceu:circuits/lv',
        B: 'botania:white_petal_block',
    }
);
event.shaped(
    'botania:mana_spreader', [
        'LLL',
        'RGE',
        'LLL'
    ], {
        L: '#botania:livingwood_logs',
        R: '#forge:double_plates/red_alloy',
        G: 'minecraft:gold_block',
        E: '#forge:flawless_gems/emerald',
    }
);
event.shaped(
    'ars_nouveau:enchanting_apparatus', [
        'MOM',
        'GCG',
        'MOM'
    ], {
        O: 'minecraft:obsidian',
        M: 'forgeborncore:manasteel_plate',
        G: '#forge:double_plates/gold',
        C: 'forgeborncore:lv_botanical_circuit',
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