ServerEvents.recipes((event) => {
    event.remove({ id: 'gtceu:shaped/electronic_circuit_mv' });

    event.shaped(
        'kubejs:basic_mechanical_parts',
        [
            'FFR',
            'PCG',
            '   ',
        ],
        {
            F: '#forge:fine_wires/tin',
            G: '#forge:gears/cobalt_brass',
            R: 'gtceu:sticky_resin',
            P: 'gtceu:potin_tiny_fluid_pipe',
            C: 'gtceu:nickel_single_wire',
        }
    );
    event.recipes.gtceu
        .assembler('efb')
        .itemInputs(
            'gtceu:heatproof_machine_casing',
            '6x kubejs:basic_mechanical_parts',
            '3x #gtceu:circuits/lv',
            '2x gtceu:lv_alloy_smelter',
            '12x gtceu:tin_single_cable'
        )
        .itemOutputs('gtceu:electric_blast_furnace')
        .EUt(32)
        .duration(20 * 15);

    event.recipes.extendedcrafting
        .shaped_table(
            'gtceu:good_electronic_circuit',
            [
                'DPD',
                'CBC',
                'WCW',
            ],
            {
                D: 'gtceu:diode',
                P: 'gtceu:steel_plate',
                C: 'gtceu:basic_electronic_circuit',
                B: 'gtceu:phenolic_printed_circuit_board',
                W: 'gtceu:copper_single_wire',
            }
        )
        .id('kubejs:extended/electronic_circuit_mv');
});
