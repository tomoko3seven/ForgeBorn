// The list of main items
StartupEvents.registry('item', (event) => {
  // If you want to specify a different texture location you can do that too, like this:
  event.create("ancient_key").maxStackSize(1);
  event.create("runic_altar_core").maxStackSize(1);
  event.create("greg_icon");
  //Early Game Content
  event.create('ingot_form').maxStackSize(1)
  event.create("needle").maxStackSize(1).maxDamage(50);
  event.create("wool_clutch").maxStackSize(64);
  //Microverse Miners
  event.create("microminer_t1")/*.texture('assets/item/microverse/microminer_t1')*/;
  // MOVE LATER
  event.create("magebloom_fiber_cloth").maxStackSize(64);
  // Infinity
  event.create('undone_infinity_ingot').maxStackSize(64)

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