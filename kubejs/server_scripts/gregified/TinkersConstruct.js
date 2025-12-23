ServerEvents.recipes(event => {
event.remove({ output: 'tconstruct:seared_brick' })
event.remove({ output: 'tconstruct:smeltery_controller' })


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
event.shaped('tconstruct:smeltery_controller', [
      'GCG',
      'CWC',
      'GCG'
    ], {
      G: '#tconstruct:smeltery_bricks',
      W: '#gtceu:tools/crafting_wrenches',
      C: '#forge:double_plates/copper'
    }
  );
})