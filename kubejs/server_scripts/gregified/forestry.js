ServerEvents.recipes((event) => {
    event.remove({ mod: '@forestry' });
    event.remove({ id: 'forestry:worktable' });
    event.remove({ id: 'forestry:ingot_bronze' });
    event.remove({ output: 'gtceu:phenolic_circuit_board' });
    event.remove({ id: 'forestry:carpenter' });
    event.remove({ id: 'forestry:sturdy_machine' });

    event.shaped(
        'forestry:sturdy_machine',
        [
            'AAA',
            'ABA',
            'AAA',
        ],
        {
            A: '#forge:plates/bronze',
            B: '#forge:tools/wrenches',
        }
    );

    event.shaped(
        'forestry:carpenter',
        [
            'ABA',
            'CDC',
            'AEA',
        ],
        {
            A: 'gtceu:double_bronze_plate',
            B: '#gtceu:circuits/ulv',
            C: 'minecraft:glass',
            D: 'gtceu:ulv_machine_hull',
            E: 'forestry:sturdy_machine',
        }
    );

    event.shaped(
        'forestry:worktable',
        [
            'PBP',
            'DCD',
            'PHP',
        ],
        {
            D: '#forge:double_plates/bronze',
            P: '#forge:plates/bronze',
            H: 'minecraft:chest',
            B: 'minecraft:book',
            C: 'minecraft:crafting_table',
        }
    );
});
