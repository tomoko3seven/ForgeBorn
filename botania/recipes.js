ServerEvents.recipes(event => {
    event.shaped('kubejs:runic_altar_core', [
        'FMC',
        'MIM',
        'OMU'
      ], {
        F: 'undergarden:froststeel_ingot',
        C: 'undergarden:cloggrum_ingot',
        I: '#gtceu:circuits/lv',
        O: 'undergarden:forgotten_ingot',
        U: 'undergarden:utherium_crystal',
        M: 'forgeborncore:manasteel_plate'
      }
    );
    event.shaped('botania:runic_altar', [
        'LLL',
        'LCL',
        'MSH'
      ], {
        L: 'botania:polished_livingrock',
        C: 'kubejs:runic_altar_core',
        S: 'botania:polished_livingrock_slab',
        H: '#forge:tools/hammers',
        M: '#forge:tools/mallets'
      }
    );
});