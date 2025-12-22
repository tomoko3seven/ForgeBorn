ServerEvents.recipes(event => {
event.remove({ output: 'tconstruct:seared_brick' })
event.smelting('tconstruct:seared_brick', 'kubejs:seared_bricks_raw')

event.shaped('8x kubejs:seared_bricks_raw', [
      'GGG',
      'GBG',
      'GGG'
    ], {
      G: 'tconstruct:grout',
      B: 'gtceu:brick_wooden_form'
    }
  );
})