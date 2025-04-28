ServerEvents.recipes(event => {
    event.remove({ output: 'botania:manasteel_ingot' })
    event.remove({ output: 'botania:mana_powder' })
//Mana-pool
event.recipes.botania.mana_infusion('botania:manasteel_ingot', 'gtceu:blue_alloy_ingot', 3000)
event.recipes.botania.mana_infusion('botania:mana_powder', 'gtceu:lazurite_dust', 400)
});