// The list of main items
StartupEvents.registry('item', (event) => {
  // If you want to specify a different texture location you can do that too, like this:
  event.create("ancient_key").maxStackSize(1);
  event.create("greg_icon");
  event.create("microminer_t1").texture('assets:item/microverse/microminer_t1');

  // Infinity
  event.create('undone_infinity_ingot').maxStackSize(64)

  /* Infinity Tools
  event.create('infinity_power_unit').rarity("epic").maxStackSize(1)
  event.create('infinity_file').rarity("epic").maxStackSize(1)
  event.create('infinity_hammer').rarity("epic").maxStackSize(1)
  event.create('infinity_screwdriver').rarity("epic").maxStackSize(1)
  event.create('infinity_wrench').rarity("epic").maxStackSize(1)
  event.create('infinity_wire_cutter').rarity("epic").maxStackSize(1)
  */
  function Circuit(theme, type, volt) {
    event.create(`${theme}_${type}`)
        .textureJson({ layer0: `kubejs:item/circuits/${theme}_${type}` })
        .tag(`gtceu:circuits/${volt}`)
}

function Mainframe(theme, volt) {
    event.create(`${theme}_processor_mainframe`)
        .textureJson({ layer0: `kubejs:item/circuits/${theme}_processor_mainframe_base`, layer1: `kubejs:item/circuits/${theme}_processor_mainframe_lights` })
        .tag(`gtceu:circuits/${volt}`)
}

function Unit(theme) {
    event.create(`${theme}_processing_unit`)
        .textureJson({ layer0: `kubejs:item/circuits/${theme}_processing_unit` })
    event.create(`${theme}_circuit_board`)
        .textureJson({ layer0: `kubejs:item/circuits/${theme}_circuit_board` })
}

Unit('matter')
Circuit('matter', 'processor', "zpm")
Circuit('matter', 'processor_assembly', "uv")
Circuit('matter', 'processor_computer', "uhv")
Mainframe('matter', "uev")

Unit('infinity')
Circuit('infinity', 'processor', "uv")
Circuit('infinity', 'processor_assembly', "uhv")
Circuit('infinity', 'processor_computer', "uev")
Mainframe('infinity', "uiv")

Unit('godium')
Circuit('godium', 'processor', "uhv")
Circuit('godium', 'processor_assembly', "uev")
Circuit('godium', 'processor_computer', "uiv")
Mainframe('godium', "max")


});

Platform.mods.kubejs.name = "ForgeBorn";