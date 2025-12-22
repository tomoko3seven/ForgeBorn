
ServerEvents.recipes(event => {

    event.remove({output: /functionalstorage:.*grade/});
    event.remove({output: /functionalstorage:fluid.*/});
    event.remove({output: "functionalstorage:ender_drawer"});
    event.remove({output: "functionalstorage:storage_controller"});
    event.remove({output: "functionalstorage:controller_extension"});
    event.remove({output: "functionalstorage:armory_cabinet"});
    event.remove({output: "functionalstorage:compacting_drawer"});
    event.remove({output: "functionalstorage:simple_compacting_drawer"});
    event.remove({output: "functionalstorage:framed_storage_controller"});
    event.remove({output: "functionalstorage:framed_controller_extension"});
    event.remove({output: "functionalstorage:compacting_framed_drawer"});
    event.remove({output: "functionalstorage:framed_simple_compacting_drawer"});
    event.remove({output: "functionalstorage:collector_upgrade"});
    event.remove({output: "functionalstorage:puller_upgrade"});
    event.remove({output: "functionalstorage:pusher_upgrade"});
    event.remove({output: 'functionalstorage:linking_tool'});
    event.remove({output: 'functionalstorage:configuration_tool'});

    event.recipes.gtceu.forge_hammer("blank_upgrade")
    .itemInputs('gtceu:double_tin_plate')
    .itemOutputs('kubejs:blank_upgrade')
    .EUt(GTValues.VA[GTValues.ULV])
    .duration(20*3)

    event.recipes.gtceu.assembler("kubejs:linking_tool")
    .itemInputs('#forge:plates/polyethylene', '#gtceu:circuits/ulv')
    .inputFluids('gtceu:blue_dye 90')
    .itemOutputs('functionalstorage:linking_tool')
    .EUt(GTValues.VA[GTValues.MV])
    .duration(20*4)

    event.recipes.gtceu.assembler('kubejs:configuration_tool')
    .itemInputs('#forge:plates/polyethylene', '#gtceu:circuits/ulv')
    .inputFluids('gtceu:green_dye 90')
    .itemOutputs('functionalstorage:configuration_tool')
    .EUt(GTValues.VA[GTValues.MV])
    .duration(20*4)

    event.shaped(Item.of('functionalstorage:copper_upgrade'), [
        ' C ',
        'CTC',
        ' C '
    ], {
        C: 'gtceu:stainless_steel_plate',
        T: 'kubejs:blank_upgrade'
    });

    event.shaped(Item.of('functionalstorage:iron_downgrade'), [
        ' C ',
        'DTD',
        ' C '
    ], {
        C: 'gtceu:iron_plate',
        D: 'gtceu:double_iron_plate',
        T: 'kubejs:blank_upgrade'
    });

    event.shaped(Item.of('functionalstorage:void_upgrade'), [
        ' O ',
        'OSO',
        ' O '
    ], {
        O: 'gtceu:obsidian_plate',
        S: 'kubejs:blank_upgrade'
    });

    event.shaped(Item.of('functionalstorage:puller_upgrade'), [
        ' C ',
        'TRT',
        ' T '
    ], {
        C: 'gtceu:lv_conveyor_module',
        T: 'gtceu:tin_plate',
        R: 'kubejs:blank_upgrade'
    });

    event.shaped(Item.of('functionalstorage:pusher_upgrade'), [
        ' T ',
        'TRT',
        ' C '
    ], {
        C: 'gtceu:lv_conveyor_module',
        T: 'gtceu:tin_plate',
        R: 'kubejs:blank_upgrade'
    });

    event.shaped(Item.of('functionalstorage:storage_controller'), [
        'PPP',
        'GCG',
        'SPS'
    ], {
        S: 'minecraft:stone',
        G: '#forge:glass',
        P: 'gtceu:iron_plate',
        C: '#gtceu:circuits/lv'
    });

    event.shaped(Item.of('2x functionalstorage:ender_drawer'), [
        'OOO',
        'GPG',
        'OCO'
    ], {
        O: 'minecraft:obsidian',
        G: '#forge:glass',
        P: 'minecraft:ender_pearl',
        C: '#gtceu:circuits/lv'
    });

});