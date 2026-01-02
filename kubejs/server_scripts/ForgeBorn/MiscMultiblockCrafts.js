ServerEvents.recipes((event) => {
    //Lava Furnace
    event.recipes.gtceu
        .lava_furnace()
        .itemInputs('#forge:normal_stone')
        .outputFluids('minecraft:lava 1000')
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(20 * 10);
    //Primitive Drilling - Earth
    event.recipes.gtceu
        .primitive_drilling(`drilling_earth`)
        .perTick(true)
        .inputFluids('gtceu:drilling_fluid 150')
        .perTick(false)
        .dimension('minecraft:overworld')
        .itemOutputsRanged('gtceu:raw_nickel', 1, 3)
        .itemOutputsRanged('gtceu:raw_graphite', 1, 3)
        .itemOutputsRanged('gtceu:raw_diamond', 1, 3)
        .itemOutputsRanged('gtceu:raw_coal', 1, 3)
        .itemOutputsRanged('gtceu:raw_redstone', 1, 3)
        .itemOutputsRanged('gtceu:raw_lapis', 1, 3)
        .itemOutputsRanged('minecraft:raw_gold', 1, 3)
        .itemOutputsRanged('minecraft:raw_copper', 1, 3)
        .itemOutputsRanged('minecraft:raw_iron', 1, 3)
        .itemOutputsRanged('gtceu:raw_cassiterite', 1, 3)
        .itemOutputsRanged('gtceu:raw_gypsum', 1, 3)
        .itemOutputsRanged('gtceu:raw_green_sapphire', 1, 3)
        .itemOutputsRanged('gtceu:raw_realgar', 1, 3)
        .itemOutputsRanged('gtceu:raw_chromite', 1, 3)
        .itemOutputsRanged('gtceu:raw_cobaltite', 1, 3)
        .itemOutputsRanged('gtceu:raw_rock_salt', 1, 3)
        .itemOutputsRanged('gtceu:raw_salt', 1, 3)
        .itemOutputsRanged('gtceu:raw_lepidolite', 1, 3)
        .itemOutputsRanged('gtceu:raw_spodumene', 1, 3)
        .itemOutputsRanged('gtceu:raw_cinnabar', 1, 3)
        .itemOutputsRanged('gtceu:raw_apatite', 1, 3)
        .itemOutputsRanged('gtceu:raw_sapphire', 1, 3)
        .itemOutputsRanged('gtceu:raw_crystallyne', 1, 3)
        .duration(20 * 50)
        .EUt(GTValues.VA[GTValues.MV], 4);
    // Industrial Bloomery
    let greg = event.recipes.gtceu;

    // Define constants
    let IRON_INGOTS = 36;
    let IRON_BLOCKS = 4;
    let WROUGHT_IRON_INGOTS = 36;
    let WROUGHT_IRON_BLOCKS = 4;
    let STEEL_INGOTS = 36;
    let STEEL_BLOCKS = 4;

    let COAL_COUNT = 63;
    let CHARCOAL_COUNT = 63;
    let COKE_COUNT = 36;

    let COAL_BLOCKS = 7;
    let CHARCOAL_BLOCKS = 7;
    let COKE_BLOCKS = 4;

    let eu = 8;

    // Durations in ticks (1s = 20t)
    let DURATIONS = {
        coal: {
            iron_ingot: 1800, // 90s
            iron_block: 1800, // 90s (same as ingot)
            wrought_ingot: 800, // 40s
            wrought_block: 800, // 40s (same as ingot)
        },
        charcoal: {
            iron_ingot: 1800, // 90s
            iron_block: 1800, // 90s (same as ingot)
            wrought_ingot: 800, // 40s
            wrought_block: 800, // 40s (same as ingot)
        },
        coke: {
            iron_ingot: 1500, // 75s
            iron_block: 1500, // 75s (same as ingot)
            wrought_ingot: 600, // 30s
            wrought_block: 600, // 30s (same as ingot)
        },
    };

    let FUEL_TYPES = {
        coal: {
            items: [
                'minecraft:coal',
                'gtceu:coal_dust',
            ],
            blocks: ['minecraft:coal_block'],
        },
        coke: {
            items: [
                'gtceu:coke_gem',
                'gtceu:coke_dust',
            ],
            blocks: ['gtceu:coke_block'],
        },
        charcoal: {
            items: [
                'minecraft:charcoal',
                'gtceu:charcoal_dust',
            ],
            blocks: ['gtceu:charcoal_block'],
        },
    };

    // Get fuel type keys for iteration
    let fuelKeys = Object.keys(FUEL_TYPES);

    for (let k = 0; k < fuelKeys.length; k++) {
        let fuelType = fuelKeys[k];
        let fuelData = FUEL_TYPES[fuelType];
        let dur = DURATIONS[fuelType];

        // --- Iron Ingot Recipes ---
        for (let i = 0; i < fuelData.items.length; i++) {
            let fuelItem = fuelData.items[i];
            let fuelCount = fuelType === 'coke' ? COKE_COUNT : COAL_COUNT;
            greg.bloomery('kubejs:steel_' + fuelType + '_iron_ingot_item_' + i)
                .itemInputs(
                    IRON_INGOTS + 'x minecraft:iron_ingot',
                    fuelCount + 'x ' + fuelItem
                )
                .itemOutputs(STEEL_INGOTS + 'x gtceu:steel_ingot')
                .duration(dur.iron_ingot)
                .EUt(eu);
        }
        for (let i = 0; i < fuelData.blocks.length; i++) {
            let fuelBlock = fuelData.blocks[i];
            let blockCount =
                fuelType === 'coke'
                    ? COKE_BLOCKS
                    : fuelType === 'charcoal'
                      ? CHARCOAL_BLOCKS
                      : COAL_BLOCKS;
            greg.bloomery('kubejs:steel_' + fuelType + '_iron_ingot_block_' + i)
                .itemInputs(
                    IRON_INGOTS + 'x minecraft:iron_ingot',
                    blockCount + 'x ' + fuelBlock
                )
                .itemOutputs(STEEL_INGOTS + 'x gtceu:steel_ingot')
                .duration(dur.iron_ingot)
                .EUt(eu);
        }

        // --- Iron Block Recipes ---
        for (let i = 0; i < fuelData.items.length; i++) {
            let fuelItem = fuelData.items[i];
            let fuelCount = fuelType === 'coke' ? COKE_COUNT : COAL_COUNT;
            greg.bloomery('kubejs:steel_' + fuelType + '_iron_block_item_' + i)
                .itemInputs(
                    IRON_BLOCKS + 'x minecraft:iron_block',
                    fuelCount + 'x ' + fuelItem
                )
                .itemOutputs(STEEL_BLOCKS + 'x gtceu:steel_block')
                .duration(dur.iron_block)
                .EUt(eu);
        }
        for (let i = 0; i < fuelData.blocks.length; i++) {
            let fuelBlock = fuelData.blocks[i];
            let blockCount =
                fuelType === 'coke'
                    ? COKE_BLOCKS
                    : fuelType === 'charcoal'
                      ? CHARCOAL_BLOCKS
                      : COAL_BLOCKS;
            greg.bloomery('kubejs:steel_' + fuelType + '_iron_block_block_' + i)
                .itemInputs(
                    IRON_BLOCKS + 'x minecraft:iron_block',
                    blockCount + 'x ' + fuelBlock
                )
                .itemOutputs(STEEL_BLOCKS + 'x gtceu:steel_block')
                .duration(dur.iron_block)
                .EUt(eu);
        }

        // --- Wrought Iron Ingot Recipes ---
        for (let i = 0; i < fuelData.items.length; i++) {
            let fuelItem = fuelData.items[i];
            let fuelCount = fuelType === 'coke' ? COKE_COUNT : COAL_COUNT;
            greg.bloomery(
                'kubejs:steel_' + fuelType + '_wrought_ingot_item_' + i
            )
                .itemInputs(
                    WROUGHT_IRON_INGOTS + 'x gtceu:wrought_iron_ingot',
                    fuelCount + 'x ' + fuelItem
                )
                .itemOutputs(STEEL_INGOTS + 'x gtceu:steel_ingot')
                .duration(dur.wrought_ingot)
                .EUt(eu);
        }
        for (let i = 0; i < fuelData.blocks.length; i++) {
            let fuelBlock = fuelData.blocks[i];
            let blockCount =
                fuelType === 'coke'
                    ? COKE_BLOCKS
                    : fuelType === 'charcoal'
                      ? CHARCOAL_BLOCKS
                      : COAL_BLOCKS;
            greg.bloomery(
                'kubejs:steel_' + fuelType + '_wrought_ingot_block_' + i
            )
                .itemInputs(
                    WROUGHT_IRON_INGOTS + 'x gtceu:wrought_iron_ingot',
                    blockCount + 'x ' + fuelBlock
                )
                .itemOutputs(STEEL_INGOTS + 'x gtceu:steel_ingot')
                .duration(dur.wrought_ingot)
                .EUt(eu);
        }

        // --- Wrought Iron Block Recipes ---
        for (let i = 0; i < fuelData.items.length; i++) {
            let fuelItem = fuelData.items[i];
            let fuelCount = fuelType === 'coke' ? COKE_COUNT : COAL_COUNT;
            greg.bloomery(
                'kubejs:steel_' + fuelType + '_wrought_block_item_' + i
            )
                .itemInputs(
                    WROUGHT_IRON_BLOCKS + 'x gtceu:wrought_iron_block',
                    fuelCount + 'x ' + fuelItem
                )
                .itemOutputs(STEEL_BLOCKS + 'x gtceu:steel_block')
                .duration(dur.wrought_block)
                .EUt(eu);
        }
        for (let i = 0; i < fuelData.blocks.length; i++) {
            let fuelBlock = fuelData.blocks[i];
            let blockCount =
                fuelType === 'coke'
                    ? COKE_BLOCKS
                    : fuelType === 'charcoal'
                      ? CHARCOAL_BLOCKS
                      : COAL_BLOCKS;
            greg.bloomery(
                'kubejs:steel_' + fuelType + '_wrought_block_block_' + i
            )
                .itemInputs(
                    WROUGHT_IRON_BLOCKS + 'x gtceu:wrought_iron_block',
                    blockCount + 'x ' + fuelBlock
                )
                .itemOutputs(STEEL_BLOCKS + 'x gtceu:steel_block')
                .duration(dur.wrought_block)
                .EUt(eu);
        }
    }
    //Atomic Reconstruction
    //prettier-ignore
    const alloys = [
        { input: 'minecraft:redstone_block', output: 'gtceu:restonia_block', duration: 5 },
        { input: 'gtceu:raw_lapis_block', output: 'gtceu:palis_block', duration: 5 },
        { input: 'vibrant_alloy', output: 0x7cff00, duration: 5 },
        { input: 'redstone_alloy', output: 0xb00000, duration: 5 },
        { input: 'conductive_alloy', output: 0x6b6b6b, duration: 5 },
        { input: 'pulsating_alloy', output: 0x00ff9c, duration: 5 },
        { input: 'soularium', output: 0x4b2a1f, duration: 5 },
    ];
    event.recipes.gtceu
        .atomic_reconstruction()
        .itemInputs('minecraft:redstone_block')
        .itemOutputs('gtceu:restonia_block')
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.MV], 2);
});
