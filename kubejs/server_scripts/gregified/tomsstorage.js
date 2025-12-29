ServerEvents.recipes((event) => {
    event.remove({ output: 'toms_storage:ts.storage_terminal' });
    event.remove({ output: 'toms_storage:ts.inventory_hopper_basic' });
    event.remove({ output: 'toms_storage:ts.level_emitter' });
    event.remove({ output: 'toms_storage:ts.paint_kit' });
    event.remove({ output: 'toms_storage:ts.tag_item_filter' });
    event.remove({ output: 'toms_storage:ts.item_filter' });
    event.remove({ output: 'toms_storage:ts.polymorphic_item_filter' });
    event.remove({ output: 'toms_storage:ts.wireless_terminal' });
    event.remove({ output: 'toms_storage:ts.adv_wireless_terminal' });
    event.remove({ output: 'toms_storage:ts.inventory_connector' });
    event.remove({ output: 'toms_storage:ts.wireless_terminal' });
    event.remove({ output: 'toms_storage:ts.adv_wireless_terminal' });
    event.remove({ output: 'toms_storage:ts.inventory_connector' });
    event.remove({ output: 'toms_storage:ts.open_crate' });
    event.remove({ output: 'toms_storage:ts.inventory_proxy' });
    event.remove({ output: 'toms_storage:ts.crafting_terminal' });
    event.remove({ id: 'toms_storage:trim' });

    event.recipes.gtceu
        .assembler('gtceu:assembler/ts.storage_terminal')
        .itemInputs(
            '4x botania:livingwood',
            '2x gtceu:lv_robot_arm',
            '2x #gtceu:circuits/lv',
            '4x gtceu:nickel_double_wire',
            'ironchest:iron_chest'
        )
        .inputFluids('gtceu:red_alloy 500')
        .itemOutputs('toms_storage:ts.storage_terminal')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(600);

    event.recipes.gtceu
        .assembler('gtceu:assembler/ts.inventory_connector')
        .itemInputs(
            '4x botania:livingwood',
            '2x gtceu:lv_conveyor_module',
            '2x minecraft:comparator',
            '4x gtceu:nickel_double_wire',
            'minecraft:chest'
        )
        .itemOutputs('toms_storage:ts.inventory_connector')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    event.recipes.gtceu
        .assembler('gtceu:assembler/ts.trim')
        .itemInputs(
            '4x botania:livingwood',
            '2x gtceu:tin_small_item_pipe',
            'framedblocks:framed_cube',
            'minecraft:chest'
        )
        .itemOutputs('toms_storage:ts.trim')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(150);

    event.recipes.gtceu
        .assembler('gtceu:assembler/ts.open_crate')
        .itemInputs(
            '6x botania:livingwood',
            '1x gtceu:tin_small_item_pipe',
            'gtceu:lv_conveyor_module',
            'minecraft:dropper'
        )
        .itemOutputs('toms_storage:ts.open_crate')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(240);

    event.recipes.gtceu
        .assembler('gtceu:assembler/ts.inventory_cable')
        .itemInputs(
            '4x botania:livingwood',
            '2x #forge:rods/wood',
            'gtceu:tin_small_item_pipe'
        )
        .itemOutputs('6x toms_storage:ts.inventory_cable')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(100);

    event.recipes.gtceu
        .assembler('gtceu:assembler/ts.inventory_proxy')
        .itemInputs(
            '4x botania:livingwood',
            '2x gtceu:tin_small_item_pipe',
            '2x gtceu:lv_conveyor_module',
            'minecraft:chest'
        )
        .itemOutputs('toms_storage:ts.inventory_proxy')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(210);

    event.recipes.gtceu
        .assembler('gtceu:assembler/ts.crafting_terminal')
        .itemInputs(
            'toms_storage:ts.storage_terminal',
            'forestry:worktable',
            '#gtceu:circuits/lv',
            'gtceu:computer_monitor_cover',
            '4x gtceu:nickel_double_wire'
        )
        .inputFluids('gtceu:red_alloy 850')
        .itemOutputs('toms_storage:ts.crafting_terminal')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(180);
});
