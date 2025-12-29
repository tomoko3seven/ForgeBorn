ServerEvents.recipes((event) => {
    event.recipes.gtceu
        .electric_blast_furnace('sourcemetall')
        .itemInputs('2x gtceu:sourcemetall_dust', 'gtceu:aluminium_dust')
        .itemOutputs('gtceu:sourcemetall_ingot')
        .blastFurnaceTemp(1300)
        .duration(20 * 30)
        .EUt(GTValues.VA[GTValues.MV]);
});
