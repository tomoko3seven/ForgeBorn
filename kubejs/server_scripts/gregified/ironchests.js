ServerEvents.recipes((event) => {
    event.remove({ output: 'ironchest:iron_chest' });
    event.remove({ output: 'ironchest:gold_chest' });
    event.remove({ output: 'ironchest:diamond_chest' });
    event.remove({ output: 'ironchest:crystal_chest' });
    event.remove({ output: 'ironchest:obsidian_chest' });

    event.remove({ output: 'ironchest:wood_to_iron_chest_upgrade' });
    event.remove({ output: 'ironchest:iron_to_gold_chest_upgrade' });
    event.remove({ output: 'ironchest:gold_to_diamond_chest_upgrade' });
    event.remove({ output: 'ironchest:diamond_to_crystal_chest_upgrade' });
    event.remove({ output: 'ironchest:diamond_to_obsidian_chest_upgrade' });
    // screw off copper
    event.remove({ output: 'ironchest:copper_chest' });
    event.remove({ output: 'ironchest:copper_to_iron_chest_upgrade' });
    event.remove({ output: 'ironchest:wood_to_copper_chest_upgrade' });

    //New crafts registry
    //Crafting Table
    event.shaped(
        'ironchest:iron_chest',
        [
            'DPD',
            'PCP',
            'DPD',
        ],
        {
            P: '#forge:plates/iron',
            D: '#forge:double_plates/iron',
            C: 'minecraft:chest',
        }
    );
    event.shaped(
        'ironchest:gold_chest',
        [
            'DPD',
            'PCP',
            'DPD',
        ],
        {
            P: '#forge:plates/gold',
            D: '#forge:double_plates/gold',
            C: 'ironchest:iron_chest',
        }
    );
    event.shaped(
        'ironchest:wood_to_iron_chest_upgrade',
        [
            'DPD',
            'PCP',
            'DPD',
        ],
        {
            P: '#forge:plates/iron',
            D: '#forge:double_plates/iron',
            C: '#forge:plates/paper',
        }
    );
    event.shaped(
        'ironchest:wood_to_iron_chest_upgrade',
        [
            'DPD',
            'PCP',
            'DPD',
        ],
        {
            P: '#forge:plates/gold',
            D: '#forge:double_plates/gold',
            C: '#forge:plates/paper',
        }
    );
    //GregTech
    event.recipes.gtceu
        .assembler('iron_chest_iron')
        .itemInputs(
            '4x #forge:plates/iron',
            '4x #forge:double_plates/iron',
            '#forge:chests'
        )
        .itemOutputs('ironchest:iron_chest')
        .duration(60)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu
        .assembler('ironchest:gold_chest')
        .itemInputs(
            '4x #forge:plates/gold',
            '4x #forge:double_plates/gold',
            'ironchest:iron_chest'
        )
        .itemOutputs('ironchest:gold_chest')
        .duration(60)
        .EUt(GTValues.VA[GTValues.LV]);
    event.recipes.gtceu
        .assembler('ironchest:diamond_chest')
        .itemInputs('8x #forge:plates/diamond', 'ironchest:gold_chest')
        .itemOutputs('ironchest:diamond_chest')
        .duration(60)
        .EUt(GTValues.VA[GTValues.MV]);
});
