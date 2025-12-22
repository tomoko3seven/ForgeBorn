ServerEvents.recipes((event) => {
    const { naturesaura } = event.recipes
    event.remove({ output: 'naturesaura:infused_iron' });
    event.remove({ output: 'naturesaura:tainted_gold' });
    event.remove({ output: 'naturesaura:sky_ingot' });
    event.remove({ output: 'naturesaura:depth_ingot' });

    event.remove({ output: 'naturesaura:wood_stand' });
    event.shaped('naturesaura:wood_stand', [
        ' G ',
        'SWH',
        '   '
      ], {
        G: 'naturesaura:gold_leaf',
        H: '#forge:tools/hammers',
        W: '#minecraft:logs',
        S: '#forge:tools/saws'
      }
    );
        event.remove({ output: 'naturesaura:offering_table' });
        event.shaped('naturesaura:offering_table', [
        'SIS',
        'FTO',
        'HWL'
      ], {
        S: 'naturesaura:infused_stone',
        F: 'naturesaura:token_fear',
        T: 'naturesaura:wood_stand',
        O: 'naturesaura:token_sorrow',
        W: '#minecraft:oak_logs',
        H: '#forge:tools/hammers',
        I: 'botania:manasteel_ingot',
        L: '#forge:tools/files'
      }
    );
    event.remove({ output: 'naturesaura:calling_spirit' });
        event.shaped('3x naturesaura:calling_spirit', [
        ' I ',
        'FTO',
        ' W '
      ], {
        I: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}'),
        F: 'forgeborncore:taintedgold_dust',
        T: 'minecraft:diamond',
        O: 'forgeborncore:infusediron_dust',
        W: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
      }
    );


    // Natural Altar (output，input，aura-optional，time-optional, catalyst-optional)
    /*naturesaura.altar('forgeborncore:infusediron_ingot', 'minecraft:iron_ingot', 500, 50)
    naturesaura.altar('forgeborncore:taintedgold_ingot', 'minecraft:gold_ingot', 800, 10)*/


    // Altar of Birthing (entity，input，aura-optional，t ime-optional)
    //naturesaura.animal_spawner('creeper', ['gunpowder', 'green_dye'], 10000, 120)

    // Offering Table (output，input，start-item)
    /*naturesaura.offering('forgeborncore:skyingot_ingot', 'forgeborncore:infusediron_ingot', 'naturesaura:calling_spirit')
        naturesaura.offering('2x forgeborncore:skyingot_ingot', 'forgeborncore:taintedgold_ingot', 'naturesaura:calling_spirit')*/

    // Tree Ritual（output，input，sapling-optional, time-optional）
    event.remove({ output: 'naturesaura:nature_altar' });
    naturesaura.tree_ritual('naturesaura:nature_altar', ['minecraft:stone', 'minecraft:stone', 'minecraft:moss_block', 'minecraft:azalea', 'naturesaura:token_joy',
        'naturesaura:token_joy', 'kubejs:omnipetal', 'minecraft:stone'
    ], 'oak_sapling', 60)
    naturesaura.tree_ritual('kubejs:token_of_light', ['minecraft:torch', 'minecraft:torch', 'minecraft:sunflower', 'ars_nouveau:green_archwood_log', 'naturesaura:token_joy',
        'botania:pure_daisy', 'kubejs:cloth', 'minecraft:string'
    ], 'oak_sapling', 15)
    naturesaura.tree_ritual('kubejs:token_of_darkness', ['malum:runewood_log', 'malum:runewood_log', '#forge:dusts/gunpowder', 'botania:black_mystical_flower', 'naturesaura:token_joy',
        'kubejs:cloth', 'minecraft:torch', 'minecraft:string'
    ], 'oak_sapling', 15)

    naturesaura.tree_ritual('4x minecraft:soul_sand', ['minecraft:brown_concrete_powder', 'kubejs:token_of_darkness', 'minecraft:brown_concrete_powder', 'kubejs:lurking_soul', 'minecraft:brown_concrete_powder',
        'kubejs:lurking_soul', 'minecraft:brown_concrete_powder', 'kubejs:lurking_soul'
    ], 'oak_sapling', 30)
})