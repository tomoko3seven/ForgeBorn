ServerEvents.recipes((event) => {

  event.remove({ output: "architects_palette:abyssaline" });
  event.recipes.gtceu
    .mixer("abyssaline")
    .itemInputs("gtceu:obsidian_dust", "minecraft:prismarine_shard")
    .itemOutputs("2x architects_palette:abyssaline")
    .EUt(2)
    .duration(20);

  event.recipes.gtceu
    .construction_core("abyssaline")
    .itemInputs("gtceu:obsidian_dust", "minecraft:prismarine_shard")
    .itemOutputs("12x architects_palette:abyssaline")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);
});
