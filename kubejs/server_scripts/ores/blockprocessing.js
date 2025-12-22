ServerEvents.recipes(event => {
    event.recipes.gtceu.centrifuge('kubejs:blacksand')
        .itemInputs('1x biomesoplenty:black_sand')
        .itemOutputs('1x gtceu:tiny_gold_dust', '1x gtceu:tiny_magnetite_dust', 'gtceu:tiny_biotite_dust', 'gtceu:tiny_hematite_dust', 'gtceu:tiny_rutile_dust')
        .duration(100)
        .EUt(5)
})