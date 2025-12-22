ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;

  event.remove({ id: "minecraft:blaze_powder" });
  event.remove({ id: "gtceu:shapeless/blaze_rod_to_powder" });
  event.remove({ id: "minecraft:ender_eye" });
  event.remove({ output: /minecraft:\w+_bed/ });

   let colors = [
    "white", "orange", "magenta", "light_blue", "yellow", "lime",
    "pink", "gray", "light_gray", "cyan", "purple", "blue",
    "brown", "green", "red", "black"
];
colors.forEach(color => {
  event.shaped(`minecraft:${color}_bed`, [
      'WWW',
      'TPT',
      'MHF'
  ], {
      W: `minecraft:${color}_wool`, 
      P: '#minecraft:planks',
      M: '#forge:tools/mallets',
      H: '#forge:tools/hammers',
      T: 'gtceu:treated_wood_fence',
      F: '#forge:tools/files'
  });
});

  // Skeleton Skull
  greg
    .assembler("gtceu:skeleton_skull")
    .itemInputs("minecraft:bone")
    .itemOutputs("skeleton_skull")
    .duration(100)
    .EUt(4);
  // Bones
  greg
    .extractor("gtceu:bones")
    .itemInputs("#minecraft:dirt")
    .itemOutputs("bone")
    .duration(100)
    .EUt(8);

  // Slimeballs
  greg
    .chemical_bath("gtceu:slimeball_bath")
    .itemInputs("#forge:dusts/asbestos")
    .inputFluids("gtceu:glue 250")
    .itemOutputs("slime_ball")
    .duration(200)
    .EUt(24);
  greg
    .centrifuge("gtceu:slimeballs_centrifuge")
    .itemInputs("slime_ball")
    .outputFluids("gtceu:glue 250")
    .itemOutputs("#forge:dusts/asbestos")
    .duration(200)
    .EUt(24);

  // Sponge
  greg
    .compressor("gtceu:spongebob")
    .itemInputs("2x #forge:foils/polycaprolactam")
    .itemOutputs("sponge")
    .duration(200)
    .EUt(2);

  // Fire Resistance
  event.shapeless(
    Item.of("minecraft:potion").withNBT({
      Potion: "minecraft:fire_resistance",
    }),
    [
      Item.of("minecraft:potion").withNBT({
        Potion: "minecraft:water",
      }),
      "#forge:dusts/sugar",
      "#forge:dusts/stone",
      "#forge:dusts/lead",
    ]
  );
  event.shapeless(
    Item.of("minecraft:potion").withNBT({
      Potion: "minecraft:long_fire_resistance",
    }),
    [
      Item.of("minecraft:potion").withNBT({
        Potion: "minecraft:water",
      }),
      "#forge:dusts/redstone",
      "#forge:dusts/sugar",
      "#forge:dusts/stone",
      "#forge:dusts/lead",
    ]
  );


});
