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
      P: 'gtceu:treated_wood_planks',
      M: '#forge:tools/mallets',
      H: '#forge:tools/hammers',
      T: 'gtceu:treated_wood_fence',
      F: '#forge:tools/files'
  });
});
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
