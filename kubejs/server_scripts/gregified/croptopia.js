ServerEvents.recipes(event => {
    event.remove({ output: 'croptopia:frying_pan' });
    event.shaped("croptopia:frying_pan", [
        'SH ',
        'FPP',
        ' PP'
      ], {
        P: '#forge:plates/steel',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files',
        S: 'gtceu:treated_wood_rod'
      }
    );
    event.remove({ output: 'croptopia:knife' });
    event.shaped('croptopia:knife', [
        ' PV',
        'FSH'
      ], {
        P: '#forge:plates/iron',
        H: '#forge:tools/screwdrivers',
        F: '#forge:tools/files',
        V: '#forge:screws/iron',
        S: 'gtceu:treated_wood_rod'
      }
    );
    event.remove({ output: 'croptopia:cooking_pot' });
    event.shaped('croptopia:cooking_pot', [
        'P P',
        'PHP',
        ' P '
      ], {
        P: '#forge:plates/steel',
        H: '#forge:tools/hammers'
      }
    );
});