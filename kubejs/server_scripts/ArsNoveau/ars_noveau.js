ServerEvents.recipes((event) => {
    event.remove({ id: 'ars_nouveau:novice_spell_book' });
    event.remove({ id: 'ars_nouveau:enchanting_apparatus' });
    event.remove({ id: 'ars_nouveau:imbuement_chamber' });
    event.remove({ id: 'ars_nouveau:arcane_pedestal' });
    event.remove({ id: 'ars_nouveau:source_jar' });
    event.remove({ id: 'ars_nouveau:arcane_core' });
    event.remove({ id: 'ars_nouveau:scribes_table' });

    event.shaped(
        'ars_nouveau:scribes_table',
        [
            'PLP',
            'TGT',
            'A A',
        ],
        {
            P: 'gtceu:archwood_plate',
            L: 'kubejs:magebloom_fiber_cloth',
            T: 'gtceu:treated_wood_fence',
            G: 'gtceu:managold_plate',
            A: '#forge:logs/archwood',
        }
    );

    event.shaped(
        'ars_nouveau:enchanting_apparatus',
        [
            'GDG',
            'OCT',
            'GDG',
        ],
        {
            D: 'gtceu:sourcemetall_plate',
            T: 'naturesaura:token_euphoria',
            O: 'kubejs:token_of_light',
            G: 'gtceu:managold_plate',
            C: '#gtceu:circuits/lv',
        }
    );
    event.shaped(
        'ars_nouveau:arcane_core',
        [
            'SDS',
            'GAG',
            'SDS',
        ],
        {
            D: 'gtceu:sourcemetall_plate',
            S: 'ars_nouveau:sourcestone',
            A: 'ars_nouveau:abjuration_essence',
            G: 'gtceu:managold_plate',
        }
    );
    event.shaped(
        'ars_nouveau:imbuement_chamber',
        [
            'WGW',
            'W W',
            'WGW',
        ],
        {
            W: 'gtceu:archwood_plate',
            G: 'gtceu:managold_plate',
        }
    );
    event.shaped(
        'ars_nouveau:arcane_pedestal',
        [
            'SQS',
            ' S ',
            'GSG',
        ],
        {
            S: 'ars_nouveau:sourcestone',
            G: 'gtceu:managold_plate',
            Q: 'botania:quartz_mana',
        }
    );
    event.shaped(
        'ars_nouveau:source_jar',
        [
            'SGS',
            'M M',
            'SGS',
        ],
        {
            S: 'gtceu:archwood_plate',
            G: 'gtceu:managold_plate',
            M: 'botania:mana_glass',
        }
    );

    event.custom({
        type: 'ars_nouveau:enchanting_apparatus',
        keepNbtOfReagent: false,
        output: {
            item: 'kubejs:magebloom_fiber_cloth',
        },
        pedestalItems: [
            {
                item: 'ars_nouveau:magebloom_fiber',
            },
            {
                item: 'ars_nouveau:magebloom_fiber',
            },
            {
                item: 'ars_nouveau:magebloom_fiber',
            },
            {
                item: 'ars_nouveau:magebloom_fiber',
            },
        ],
        reagent: [
            {
                item: 'forbidden_arcanus:cloth',
            },
        ],
        sourceCost: 200,
    });

    event.recipes.gtceu
        .macerator('gtceu:macerator/sourcegem_to_dust')
        .itemInputs('ars_nouveau:source_gem')
        .itemOutputs('kubejs:sourcegem_dust')
        .EUt(GTValues.VA[GTValues.MV])
        .duration(90);
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
});
