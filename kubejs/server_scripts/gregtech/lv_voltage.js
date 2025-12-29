ServerEvents.recipes(event => {
event.remove({ id: 'gtceu:shaped/electronic_circuit_mv' });

event.shaped('kubejs:basic_mechanical_parts', [
        "FFR",
        "PCG",
        "   "
    ], {
        F: '#forge:fine_wires/tin',
        G: '#forge:gears/cobalt_brass',
        R: 'gtceu:sticky_resin',
        P: 'gtceu:potin_tiny_fluid_pipe',
        C: 'gtceu:nickel_single_wire'
    });





event.recipes.extendedcrafting.shaped_table('gtceu:good_electronic_circuit', [
        "DPD",
        "CBC",
        "WCW",
    ], {
        D: 'gtceu:diode',
        P: 'gtceu:steel_plate',
        C: 'gtceu:basic_electronic_circuit',
        B: 'gtceu:phenolic_printed_circuit_board',
        W: 'gtceu:copper_single_wire'
    }).id("kubejs:extended/electronic_circuit_mv");
});