// priority: 0

ServerEvents.recipes((event) => {
    // ---------------------------------------------------------
    // Circuits
    // ---------------------------------------------------------
    event.recipes.gtceu
        .circuit_assembler('basic_botanical_circuit')
        .itemInputs(
            'kubejs:mana_infused_livingrock_circuit_board',
            'kubejs:mmc_chip',
            '2x gtceu:annealed_manasteel_bolt',
            '2x gtceu:fine_manasteel_wire'
        )
        .inputFluids('gtceu:mana_soldering_alloy 74')
        .itemOutputs('kubejs:basic_botanical_circuit')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(300);

    // Livingrock Circuit Board
    event.recipes.gtceu
        .assembler('gtceu:assembler/livingrock_circuit_board')
        .itemInputs('8x gtceu:manasteel_foil', 'gtceu:livingrock_plate')
        .inputFluids('kubejs:dense_mana 200')
        .itemOutputs('kubejs:livingrock_circuit_board')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200);

    // Infused Livingrock Board
    event.recipes.botania.mana_infusion(
        'kubejs:mana_infused_livingrock_circuit_board',
        'kubejs:livingrock_circuit_board',
        3000
    );

    event.recipes.gtceu
        .mana_infuser('livingrock_circuit_board_best')
        .itemInputs('kubejs:livingrock_circuit_board')
        .itemOutputs('kubejs:mana_infused_livingrock_circuit_board')
        .inputFluids('kubejs:dense_mana 300')
        .duration(20)
        .EUt(GTValues.VA[GTValues.MV]);

    // Mana Chip (ULV)
    event.recipes.gtceu
        .assembler('kubejs:mana_chip')
        .itemInputs(
            '2x gtceu:manasteel_plate',
            '2x gtceu:manasteel_foil',
            '2x gtceu:manasteel_bolt',
            '2x gtceu:fine_copper_wire'
        )
        .inputFluids('kubejs:dense_mana 100')
        .itemOutputs('kubejs:mana_chip')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(200);

    // Wafers & Chips
    event.recipes.botania.mana_infusion(
        'kubejs:livingrock_wafer',
        'gtceu:livingrock_plate',
        1000
    );

    event.recipes.gtceu
        .mana_infuser('livingrock_wafer_best')
        .itemInputs('gtceu:livingrock_plate')
        .itemOutputs('kubejs:livingrock_wafer')
        .inputFluids('kubejs:dense_mana 100')
        .duration(20)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu
        .mana_pulse_infuser('kubejs:mana_multithreaded_computation_wafer')
        .notConsumable('gtceu:utherium_lens')
        .itemInputs('16x kubejs:livingrock_wafer')
        .inputFluids('kubejs:dense_mana 1600')
        .itemOutputs('16x kubejs:mana_multithreaded_computation_wafer')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(600);

    // Wafer Cutting
    event.recipes.gtceu
        .cutter('kubejs:mana_multithreaded_computation_wafer_water')
        .itemInputs('kubejs:mana_multithreaded_computation_wafer')
        .inputFluids('minecraft:water 337')
        .itemOutputs('8x kubejs:mmc_chip')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(280);

    event.recipes.gtceu
        .cutter('kubejs:mana_multithreaded_computation_wafer_distilled_water')
        .itemInputs('kubejs:mana_multithreaded_computation_wafer')
        .inputFluids('gtceu:distilled_water 253')
        .itemOutputs('8x kubejs:mmc_chip')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200);

    event.recipes.gtceu
        .cutter('kubejs:mana_multithreaded_computation_wafer_lubricant')
        .itemInputs('kubejs:mana_multithreaded_computation_wafer')
        .inputFluids('gtceu:lubricant 84')
        .itemOutputs('8x kubejs:mmc_chip')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(120);

    // ---------------------------------------------------------
    // Mana Materials & Fabrics
    // ---------------------------------------------------------
    event.recipes.gtceu
        .autoclave('gtceu:autoclave/mana_infused_fibers')
        .itemInputs('4x botania:mana_string')
        .inputFluids('gtceu:manasteel 40')
        .itemOutputs('kubejs:mana_infused_fibers')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(90);

    event.recipes.gtceu
        .compressor('gtceu:compressor/mana_infused_mesh')
        .itemInputs('2x kubejs:mana_infused_fibers')
        .itemOutputs('kubejs:mana_infused_mesh')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(70);

    event.recipes.gtceu
        .mana_pulse_infuser('gtceu:assembler/manaweave_cloth')
        .notConsumable('kubejs:mana-filled_idol')
        .itemInputs(
            '3x kubejs:mana_infused_mesh',
            '2x gtceu:manasteel_foil',
            '2x botania:mana_string'
        )
        .inputFluids('kubejs:dense_mana 100')
        .itemOutputs('botania:manaweave_cloth')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200);

    event.recipes.botania.mana_infusion(
        'kubejs:mana-filled_idol',
        'kubejs:token_of_light',
        100000
    );

    // ---------------------------------------------------------
    // Casings
    // ---------------------------------------------------------
    event.recipes.gtceu
        .assembler('gtceu:manasteel_livingrock_casing')
        .itemInputs('12x #forge:plates/manasteel')
        .itemInputs('botania:livingrock_bricks')
        .circuit(6)
        .inputFluids('kubejs:dense_mana 100')
        .itemOutputs('kubejs:manasteel_livingrock_casing')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200);

    event.recipes.gtceu
        .assembler('gtceu:terrasteel_livingwood_casing')
        .itemInputs('6x #forge:plates/livingwood')
        .itemInputs('gtceu:terrasteel_frame')
        .circuit(6)
        .inputFluids('kubejs:dense_mana 100')
        .itemOutputs('kubejs:terrasteel_livingwood_casing')
        .EUt(GTValues.VA[GTValues.HV])
        .duration(200);

    event.remove({ output: 'gtceu:mv_machine_casing' });
    event.recipes.gtceu
        .mana_pulse_infuser('mv_casing')
        .itemInputs('4x botania:manaweave_cloth')
        .itemInputs('4x gtceu:aluminium_plate')
        .inputFluids('kubejs:dense_mana 100')
        .itemOutputs('gtceu:mv_machine_casing')
        .circuit(8)
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    // ---------------------------------------------------------
    // Manual Mana Infusion Recipes
    // ---------------------------------------------------------
    const infusionRecipes = [
        [
            'kubejs:pure_mana_dust',
            '#botania:mana_dusts',
            50000,
        ],
        [
            'botania:quartz_mana',
            'gtceu:quartzite_gem',
            500,
        ],
        [
            'gtceu:managold_ingot',
            '#forge:ingots/gold',
            5000,
        ],
        [
            'botania:mana_string',
            'ars_nouveau:magebloom_fiber',
            1250,
        ],
        [
            'botania:manasteel_ingot',
            'gtceu:blue_alloy_ingot',
            3000,
        ],
        [
            'botania:mana_powder',
            'gtceu:lazurite_dust',
            400,
        ],
    ];

    infusionRecipes.forEach((recipe) => {
        let outputItem = recipe[0];
        let inputItem = recipe[1];
        let manaCost = recipe[2];
        let recipeId = outputItem.replace(':', '_').replace('#', '');

        event.recipes.botania
            .mana_infusion(outputItem, inputItem, manaCost)
            .id(`kubejs:botania_infusion/${recipeId}`);

        event.recipes.gtceu
            .mana_infuser(`botania_conversion/${recipeId}`)
            .itemInputs(inputItem)
            .itemOutputs(outputItem)
            .inputFluids(`kubejs:dense_mana ${Math.floor(manaCost / 10)}`)
            .duration(20)
            .EUt(GTValues.VA[GTValues.MV]);
    });

    // ---------------------------------------------------------
    // Dynamic Mana Infusion Scanner
    // ---------------------------------------------------------
    event.forEachRecipe({ type: 'botania:mana_infusion' }, (recipe) => {
        let json = recipe.json;
        if (json.has('catalyst')) return;

        let outputItem = Item.of(json.get('output'));
        if (outputItem.id === 'botania:manasteel_block') return;

        if (recipe.getId().includes('kubejs')) return;

        let inputItem = Ingredient.of(json.get('input'));
        let manaCost = json.get('mana').asInt;
        let uniqueId = recipe.getId().replace(':', '_').replace('/', '_');

        event.recipes.gtceu
            .mana_infuser(`botania_conversion/${uniqueId}`)
            .itemInputs(inputItem)
            .inputFluids(
                `kubejs:dense_mana ${Math.floor(Math.max(1, manaCost / 10))}`
            )
            .itemOutputs(outputItem)
            .EUt(GTValues.VA[GTValues.MV])
            .duration(20);
    });

    // ---------------------------------------------------------
    // Fluid & GT Machine Recipes
    // ---------------------------------------------------------

    // Dense Mana
    event.recipes.gtceu
        .chemical_reactor('dense_mana')
        .inputFluids('blasmatech:mana 1000')
        .outputFluids('kubejs:dense_mana 100')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(120);

    // GT Mana Infuser (Manasteel)
    event.recipes.gtceu
        .mana_infuser('manasteel_ingot_best')
        .itemInputs('gtceu:blue_alloy_ingot')
        .itemOutputs('botania:manasteel_ingot')
        .inputFluids(Fluid.of('kubejs:dense_mana', 300))
        .duration(20)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.botania.mana_infusion(
        'botania:manasteel_ingot',
        'gtceu:blue_alloy_ingot',
        2700 * 10
    );
    event.recipes.gtceu
        .mana_infuser('manasteel_block_best')
        .itemInputs('gtceu:blue_alloy_block')
        .itemOutputs('botania:manasteel_block')
        .inputFluids(Fluid.of('kubejs:dense_mana', 2700))
        .duration(20)
        .EUt(GTValues.VA[GTValues.MV]);

    // GT Runic Assembler
    event.recipes.gtceu
        .runic_assembler('black_quartz')
        .itemInputs('8x minecraft:quartz', 'gtceu:coke_gem')
        .itemOutputs('botania:quartz_dark')
        .inputFluids(Fluid.of('kubejs:dense_mana', 50))
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);

    event.recipes.gtceu
        .runic_assembler('manasteel_reinforced_plating')
        .itemInputs(
            '2x #forge:double_plates/manasteel',
            'botania:manaweave_cloth'
        )
        .itemOutputs('kubejs:manasteel_reinforced_plating')
        .inputFluids(Fluid.of('kubejs:dense_mana', 300))
        .duration(20)
        .EUt(GTValues.VA[GTValues.MV]);

    // Mana Pool in Assembler
    event.recipes.gtceu
        .assembler('gtceu:assembler/mana_pool')
        .itemInputs(
            '5x gtceu:livingrock_plate',
            '5x botania:polished_livingrock',
            'kubejs:mana_core'
        )
        .itemOutputs('botania:mana_pool')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(400);

    // Runic Altar Machine in Assembler
    event.recipes.gtceu
        .assembler('gtceu:assembler/runic_altar')
        .itemInputs(
            '8x gtceu:livingrock_plate',
            '3x botania:livingrock',
            'kubejs:advanced_mana_core'
        )
        .inputFluids('kubejs:dense_mana 400')
        .itemOutputs('botania:runic_altar')
        .EUt(GTValues.VA[GTValues.LV])
        .duration(300);
});
