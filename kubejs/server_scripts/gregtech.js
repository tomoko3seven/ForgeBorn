ServerEvents.recipes(event => {
  //Steam
  event.remove({ output: 'gtceu:lp_steam_extractor' })
    event.remove({ id: 'gtceu:shaped/bronze_bricks_hull' });
    event.remove({ id: 'gtceu:shaped/bronze_hull' });
    event.shaped('gtceu:bronze_brick_casing', [
        'PPP',
        'DHD',
        'BBB'
      ], {
        B: "minecraft:bricks",
        H: '#forge:tools/hammers',
        D: '#forge:double_plates/bronze',
        P: '#forge:plates/bronze'
      }
    );
    event.remove('gtceu:bronze_machine_casing');
    event.shaped("gtceu:bronze_machine_casing", [
        'PPP',
        'DHD',
        'PPP'
      ], {
        H: '#forge:tools/hammers',
        D: '#forge:double_plates/bronze',
        P: '#forge:plates/bronze'
      }
    );
    event.shaped("gtceu:bronze_machine_casing", [
        'PPP',
        'DHD',
        'PPP'
      ], {
        H: '#forge:tools/hammers',
        D: '#forge:plates/iron',
        P: '#forge:plates/bronze'
      }
    );
    //High-pressure
    event.remove({ output: 'gtceu:hp_steam_compressor' })
    event.remove({ output: 'gtceu:hp_steam_forge_hammer' })
    event.remove({ output: 'gtceu:hp_steam_macerator' })
    event.remove({ output: 'gtceu:hp_steam_furnace' })
    event.remove({ output: 'gtceu:hp_steam_alloy_smelter' })
    event.remove({ output: 'gtceu:hp_steam_rock_crusher' })
    event.remove({ output: 'gtceu:lp_steam_miner' })
    event.remove({ output: 'gtceu:hp_steam_miner' })
    event.remove({ output: 'gtceu:hp_steam_extractor' })
    event.remove({ id: 'gtceu:shaped/hp_steam_solid_boiler' });
    event.shaped('gtceu:hp_steam_rock_crusher', [
      'SSS',
      'PIP',
      'SCS'
    ], {
      P: '#forge:plates/steel',
      I: 'gtceu:lp_steam_rock_crusher',
      C: 'gtceu:firebricks',
      S: 'gtceu:steel_gear'
    }
  );
    event.shaped('gtceu:hp_steam_alloy_smelter', [
      'SPS',
      'SIS',
      'SCS'
    ], {
      P: 'gtceu:tin_alloy_small_fluid_pipe',
      I: 'gtceu:lp_steam_alloy_smelter',
      C: 'gtceu:firebricks',
      S: '#forge:plates/steel'
    }
  );
    event.shaped('gtceu:hp_steam_furnace', [
      'PSP',
      'SIS',
      'PCP'
    ], {
      P: 'gtceu:tin_alloy_small_fluid_pipe',
      I: 'gtceu:lp_steam_furnace',
      C: 'gtceu:firebricks',
      S: '#forge:plates/steel'
    }
  );
    event.shaped('gtceu:hp_steam_macerator', [
      'PPP',
      'SIS',
      'PCP'
    ], {
      P: '#forge:plates/steel',
      I: 'gtceu:lp_steam_macerator',
      C: 'gtceu:firebricks',
      S: 'gtceu:steel_gear'
    }
  );
  event.shaped('gtceu:hp_steam_forge_hammer', [
    'SSS',
    'PIP',
    'SCS'
  ], {
    P: 'gtceu:tin_alloy_small_fluid_pipe',
    I: 'gtceu:lp_steam_forge_hammer',
    C: 'gtceu:firebricks',
    S: '#forge:plates/steel'
  }
);
  event.shaped('gtceu:hp_steam_compressor', [
    'PSP',
    'SIS',
    'PCP'
  ], {
    P: 'gtceu:tin_alloy_small_fluid_pipe',
    I: 'gtceu:lp_steam_compressor',
    C: 'gtceu:firebricks',
    S: '#forge:plates/steel'
  }
);
    event.shaped('gtceu:hp_steam_extractor', [
      'PSP',
      'SIS',
      'PCP'
    ], {
      P: 'gtceu:tin_alloy_small_fluid_pipe',
      I: 'minecraft:piston',
      C: 'gtceu:steel_brick_casing',
      S: '#forge:plates/steel'
    }
  );
    event.shaped('gtceu:hp_steam_solid_boiler', [
      'SSS',
      'SWS',
      'CFC'
    ], {
      W: '#forge:tools/wrenches',
      F: 'minecraft:furnace',
      C: 'gtceu:firebricks',
      S: '#forge:plates/steel'
    }
  );
  event.shaped('gtceu:steel_brick_casing', [
    'SSS',
    'SHS',
    'CCC'
  ], {
    H: '#forge:tools/hammers',
    C: 'gtceu:firebricks',
    S: '#forge:plates/steel'
  }
);
    //LV
    event.remove({ output: 'gtceu:lv_machine_casing' })
    event.remove({ id: 'gtceu:shaped/lv_machine_casing' });
    event.remove({ id: 'gtceu:shaped/lv_machine_casing' });
    event.shaped('gtceu:lv_machine_casing', [
      'PSP',
      'SWS',
      'PSP'
    ], {
      W: '#forge:tools/wrenches',
      S: 'forgeborncore:spiritsteel_plate',
      P: '#forge:double_plates/steel'
    }
  );
  event.shaped('gtceu:lv_hermetic_casing', [
    'PSP',
    'SWS',
    'PSP'
  ], {
    W: 'gtceu:polyethylene_large_fluid_pipe',
    S: 'forgeborncore:spiritsteel_plate',
    P: '#forge:double_plates/steel'
  }
);
});