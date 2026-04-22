ServerEvents.tags('item', (event) => {
  event.remove("forge:ingots/steel", "ad_astra:steel_ingot");
  event.remove("forge:ingots/steel", "tconstruct:steel_ingot");
  event.add('forge:ingots/andesite_alloy', 'create:andesite_alloy');
});

ServerEvents.tags('block', (event) => {
    /*event.add("#forge:blocks/terra_steel", 'botania:terrasteel_block');*/
    /*event.add('#forge:blocks/mana_steel', 'botania:manasteel_block');
  event.add('#forge:blocks/elementium', 'botania:elementium_block');
  event.add('#forge:blocks/terra_steel', 'gtceu:terra_steel_block');
  event.add('#forge:blocks/mana_steel', 'gtceu:mana_steel_block');
  event.add('#forge:blocks/elementium', 'gtceu:elementium_block');*/
});
