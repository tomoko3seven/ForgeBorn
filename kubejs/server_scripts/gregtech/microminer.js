ServerEvents.recipes((event) => {
    const greg = event.recipes.gtceu;
          event.recipes.gtceu.microminer(`kubejs:t_one_first`)
              .itemInputs(`kubejs:microminer_t1`)
              .inputFluids("gtceu:rocket_fuel 1000")
              .itemOutputs("2000000x minecraft:iron_ore")
              .duration(1000)
              .EUt(400);
      });