ServerEvents.recipes(event => {
  event.remove({ output: 'farmersdelight:cooking_pot' });
  event.remove({ output: 'farmersdelight:stove' });
    event.shaped('farmersdelight:stove', [
        'PPP',
        'WCW',
        'WHW'
      ], {
        P: 'gtceu:steel_rod',
        W: 'minecraft:bricks',
        H: '#forge:tools/hammers',
        C: 'minecraft:campfire'
      }
    );
    event.shaped('farmersdelight:cooking_pot', [
        'L L',
        'PHP',
        'PPP'
      ], {
        P: 'gtceu:steel_plate',
        H: '#forge:tools/hammers',
        L: 'minecraft:leather'
      }
    );
    event.remove({ output: 'farmersdelight:skillet' });
    event.shaped("farmersdelight:skillet", [
        ' PP',
        'FPP',
        'SH '
      ], {
        P: '#forge:plates/steel',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files',
        S: 'gtceu:treated_wood_rod'
      }
    );
    //Knifes
    event.remove({ output: "farmersdelight:iron_knife" });
    event.shaped("farmersdelight:iron_knife", [
      'FIH',
      ' S ',
      '   '
    ], {
      I: '#forge:plates/iron',
      H: '#forge:tools/hammers',
      F: '#forge:tools/files',
      S: 'gtceu:treated_wood_rod'
    }
  );
  event.remove({ output: "farmersdelight:golden_knife" });
  event.shaped("farmersdelight:golden_knife", [
    'FIH',
    ' S ',
    '   '
  ], {
    I: '#forge:plates/gold',
    H: '#forge:tools/hammers',
    F: '#forge:tools/files',
    S: 'gtceu:treated_wood_rod'
  }
);
event.remove({ output: "farmersdelight:diamond_knife" });
event.shaped("farmersdelight:diamond_knife", [
  'FIH',
  ' S ',
  '   '
], {
  I: '#forge:plates/diamond',
  H: '#forge:tools/hammers',
  F: '#forge:tools/files',
  S: 'gtceu:treated_wood_rod'
}
);
event.remove({ output: "farmersdelight:netherite_knife" });
event.shaped("farmersdelight:netherite_knife", [
  'FIH',
  ' S ',
  '   '
], {
  I: 'minecraft:netherite_ingot',
  H: '#forge:tools/hammers',
  F: '#forge:tools/files',
  S: 'gtceu:treated_wood_rod'
}
);
});