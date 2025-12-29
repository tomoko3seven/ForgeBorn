ServerEvents.recipes((event) => {
    const flowers_crafts = [
        { flower: 'botania:white_mystical_flower', amount: 8 },
        { flower: 'botania:light_gray_mystical_flower', amount: 8 },
        { flower: 'botania:gray_mystical_flower', amount: 8 },
        { flower: 'botania:black_mystical_flower', amount: 8 },
        { flower: 'botania:brown_mystical_flower', amount: 8 },
        { flower: 'botania:red_mystical_flower', amount: 8 },
        { flower: 'botania:orange_mystical_flower', amount: 8 },
        { flower: 'botania:yellow_mystical_flower', amount: 8 },
        { flower: 'botania:lime_mystical_flower', amount: 8 },
        { flower: 'botania:green_mystical_flower', amount: 8 },
        { flower: 'botania:cyan_mystical_flower', amount: 8 },
        { flower: 'botania:light_blue_mystical_flower', amount: 8 },
        { flower: 'botania:blue_mystical_flower', amount: 8 },
        { flower: 'botania:purple_mystical_flower', amount: 8 },
        { flower: 'botania:magenta_mystical_flower', amount: 8 },
        { flower: 'botania:pink_mystical_flower', amount: 8 },
    ];

    flowers_crafts.forEach((a) => {
        let recipeId = `cloche/${a.flower.replace(':', '_')}`;

        event.recipes.gtceu
            .cloche(recipeId)
            .notConsumable(a.flower)
            .inputFluids('minecraft:water 1000')
            .itemOutputs(`${a.amount}x ${a.flower}`)
            .EUt(GTValues.VA[GTValues.ULV])
            .duration(20 * 5);
    });
});
