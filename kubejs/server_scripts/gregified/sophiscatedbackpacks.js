ServerEvents.recipes(event => {
    event.remove({ output: 'sophisticatedbackpacks:backpack' });
    event.remove({ output: 'sophisticatedbackpacks:copper_backpack' });
    event.remove({ output: 'sophisticatedbackpacks:iron_backpack' });
    event.remove({ output: 'sophisticatedbackpacks:gold_backpack' });
    event.remove({ output: 'sophisticatedbackpacks:diamond_backpack' });
    event.shaped('sophisticatedbackpacks:backpack', [
        'RLR',
        'SCS',
        'LHL'
      ], {
        R: '#forge:rods/iron',
        L: '#forge:leather',
        S: '#forge:string',
        C: 'minecraft:chest',
        H: '#forge:tools/hammers'
      }
    );
    event.shaped('sophisticatedbackpacks:copper_backpack', [
        'PPP',
        'FBH',
        'PPP'
      ], {
        P: '#forge:double_plates/copper',
        F: '#forge:tools/files',
        B: "sophisticatedbackpacks:backpack",
        H: '#forge:tools/hammers'
      }
    );
    event.shaped('sophisticatedbackpacks:iron_backpack', [
        ' PH',
        'PBP',
        'FP '
      ], {
        P: '#forge:plates/iron',
        F: '#forge:tools/files',
        B: 'sophisticatedbackpacks:copper_backpack',
        H: '#forge:tools/hammers'
      }
    );
    event.shaped('sophisticatedbackpacks:iron_backpack', [
        'PPP',
        'FBH',
        'PPP'
      ], {
        P: '#forge:double_plates/iron',
        F: '#forge:tools/files',
        B: 'sophisticatedbackpacks:backpack',
        H: '#forge:tools/hammers'
      }
    );
    event.shaped('sophisticatedbackpacks:gold_backpack', [
        'PPP',
        'FBH',
        'PPP'
      ], {
        P: '#forge:double_plates/gold',
        F: '#forge:tools/files',
        B: 'sophisticatedbackpacks:iron_backpack',
        H: '#forge:tools/hammers'
      }
    );
    event.shaped('sophisticatedbackpacks:diamond_backpack', [
        'PPP',
        'FBH',
        'PPP'
      ], {
        P: '#forge:plates/diamond',
        F: '#forge:tools/files',
        B: 'sophisticatedbackpacks:gold_backpack',
        H: '#forge:tools/hammers'
      }
    );
});