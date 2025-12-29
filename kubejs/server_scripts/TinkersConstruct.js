ServerEvents.recipes((event) => {
    event.remove({ output: 'tconstruct:seared_brick' });
    event.smelting('tconstruct:seared_brick', 'kubejs:seared_bricks_raw');

    event.shaped(
        '8x kubejs:seared_bricks_raw',
        [
            'GGG',
            'GBG',
            'GGG',
        ],
        {
            G: 'tconstruct:grout',
            B: 'gtceu:brick_wooden_form',
        }
    );
    event.replaceOutput(
        { output: 'tconstruct:steel_ingot' },
        'tconstruct:steel_ingot',
        'gtceu:steel_ingot'
    );
    event.replaceOutput(
        { output: 'tconstruct:cobalt_ingot' },
        'tconstruct:cobalt_ingot',
        'gtceu:cobalt_ingot'
    );
    event.replaceOutput(
        { output: 'forestry:ingot_bronze' },
        'forestry:ingot_bronze',
        'gtceu:bronze_ingot'
    );
    event.replaceOutput(
        { output: 'forestry:ingot_tin' },
        'forestry:ingot_tin',
        'gtceu:tin_ingot'
    );
    event.remove({ id: 'forestry:ingot_bronze_alloying' });
});
