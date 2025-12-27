ServerEvents.recipes(event => {
    event.remove({ mod: "ironfurnaces" })

    function furnaceCrafting(u,o,a,b,c) {
        event.shaped(o, [
            'BAB',
            'ACA',
            'BAB'
        ], {
            A: a,
            B: b,
            C: c
        })

        event.shaped(u, [
            'BAB',
            'ASA',
            'ABA'
        ], {
            A: a,
            B: b,
            S: '#forge:planks'
        })
    }

    function furnaceAssembling(u,o,a,c) {
        let cleanID = o.split(':')[1] 

        event.recipes.gtceu.assembler(`kubejs:assembler/${cleanID}`)
            .itemInputs(a, c)
            .itemOutputs(o)
            .EUt(GTValues.VA[GTValues.LV])
            .duration(400)

        event.recipes.gtceu.assembler(`kubejs:assembler/${cleanID}_upgrade`)
            .itemInputs(a, '#forge:planks')
            .itemOutputs(u)
            .EUt(GTValues.VA[GTValues.LV])
            .duration(400)
    }

    // VANILLA: iron    gold    diamond emerald obsidian        netherite
    // CHANGED: iron    gold    steel   diamond cloggrumsteel   aluminum?

    furnaceCrafting('ironfurnaces:upgrade_iron', 'ironfurnaces:iron_furnace', 'gtceu:iron_plate', 'gtceu:iron_double_late', 'minecraft:furnace')
    furnaceCrafting('ironfurnaces:upgrade_gold', 'ironfurnaces:gold_furnace', 'gtceu:gold_plate', 'gtceu:gold_double_plate', 'ironfurnaces:iron_furnace')
    furnaceCrafting('ironfurnaces:upgrade_diamond', 'ironfurnaces:diamond_furnace', 'gtceu:steel_plate', 'gtceu:steel_double_plate', 'ironfurnaces:gold_furnace')
    furnaceAssembling('ironfurnaces:upgrade_emerald', 'ironfurnaces:emerald_furnace', '8x gtceu:diamond_plate', 'ironfurnaces:diamond_furnace')
    furnaceAssembling('ironfurnaces:upgrade_obsidian', 'ironfurnaces:obsidian_furnace', '8x gtceu:cloggrumsteel_plate', 'ironfurnaces:emerald_furnace')
    furnaceAssembling('ironfurnaces:upgrade_netherite', 'ironfurnaces:netherite_furnace', '8x gtceu:aluminium_plate', 'ironfurnaces:obsidian_furnace')
})