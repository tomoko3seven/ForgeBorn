console.info('[ForgeBorn] - Loaded KubeJS Scripts for Occultism')
let yeet = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: itemName })
  })
  ServerEvents.tags('item', event => {
    event.add('c:hidden_from_recipe_viewers', itemName)

  })
}

yeet('occultism:miner_debug_unspecialized')
// yeet('occultism:miner_foliot_unspecialized')
yeet('occultism:miner_djinni_ores')
yeet('occultism:miner_afrit_deeps')
yeet('occultism:miner_marid_master')
yeet('occultism:ritual_dummy/craft_miner_afrit_deeps')
yeet('occultism:ritual_dummy/craft_miner_djinni_ores')
// yeet('occultism:ritual_dummy/craft_miner_foliot_unspecialized')
yeet('occultism:ritual_dummy/craft_miner_marid_master')

yeet('occultism:silver_ingot')
yeet('occultism:gold_dust')
yeet('occultism:copper_dust')
yeet('occultism:silver_dust')
yeet('occultism:obsidian_dust')
yeet('occultism:crushed_end_stone')
yeet('occultism:storage_stabilizer_tier3')
yeet('occultism:storage_stabilizer_tier4')

yeet('occultism:storage_remote_inert')
yeet('occultism:storage_remote')
yeet('occultism:stable_wormhole')
yeet('occultism:iron_dust')
yeet('occultism:book_of_calling_djinni_manage_machine')
yeet('occultism:ritual_dummy/summon_foliot_crusher')
yeet('occultism:ritual_dummy/summon_djinni_crusher')
yeet('occultism:ritual_dummy/summon_afrit_crusher')
yeet('occultism:ritual_dummy/summon_marid_crusher')
yeet('occultism:wormhole_frame')
yeet('occultism:satchel')

ServerEvents.tags('item', event => {
  event.remove('forge:ingots/silver', 'occultism:silver_ingot')
  event.remove('forge:dusts/iron', 'occultism:iron_dust')
  event.remove('forge:dusts/gold', 'occultism:gold_dust')
  event.remove('forge:dusts/copper', 'occultism:copper_dust')
  event.remove('forge:dusts/silver', 'occultism:silver_dust')
  event.remove('forge:dusts/obsidian', 'occultism:obsidian_dust')
  event.remove('forge:dusts/end_stone', 'occultism:crushed_end_stone')
})

ServerEvents.recipes(event => {
  event.remove({ type: 'occultism:crushing' })
  event.remove({ type: 'occultism:miner' })
  event.remove({ id: 'occultism:spirit_fire/spirit_attuned_gem' })
  event.remove({ id: 'occultism:crafting/chalk_red_impure' })
  event.remove({ id: 'occultism:crafting/chalk_purple_impure' })
  // event.recipes.occultism.spirit_trade('minecraft:rotten_flesh', 'minecraft:bone')
  event.recipes.occultism.spirit_fire('occultism:spirit_attuned_gem', 'gtceu:certus_quartz_gem')
  // event.recipes.occultism.crushing(
  //   '2x #forge:ores/iron',
  //   '#forge:tools/swords'
  // )
  event.shaped('occultism:chalk_white_impure', [
    'TC ',
    'TC ',
    'TC ',
  ], {
    T: 'gtceu:talc_dust',
    C: 'gtceu:ash_dust'
  })

  event.shaped('occultism:magic_lamp_empty', [
    ' C ',
    'CTC',
    ' CC',
  ], {
    T: 'gtceu:double_iesnium_plate',
    C: 'gtceu:double_silver_plate'
  })
  event.remove({ id: 'occultism:crafting/storage_controller' })
  //Iesnium Pickaxe
  event.remove({ id: 'occultism:crafting/iesnium_pickaxe' })
  event.shaped('occultism:iesnium_pickaxe', [
    'PII',
    'FSH',
    ' S '
  ], {
    P: 'gtceu:iesnium_plate',
    I: 'occultism:iesnium_ingot',
    S: '#forge:rods/wooden',
    F: '#forge:tools/files',
    H: '#forge:tools/hammers'
  })
  event.remove({ id: 'occultism:crafting/lens_frame' })
  event.shaped('occultism:lens_frame', [
    'PHP',
    'ILI',
    'SFS'
  ], {
    P: 'gtceu:silver_rod',
    I: 'occultism:otherstone_frame',
    S: 'gtceu:silver_plate',
    L: 'gtceu:silver_ring',
    F: '#forge:tools/files',
    H: '#forge:tools/hammers'
  })
  event.shaped('occultism:lenses', [
    ' C ',
    'IPI',
    'SFS'
  ], {
    P: 'gtceu:fine_gold_wire',
    I: 'occultism:spirit_attuned_gem',
    S: 'experienceobelisk:whisperglass',
    F: '#forge:tools/files',
    C: '#forge:tools/wire_cutters'
  })
  event.remove({ id: 'occultism:crafting/lenses' })
  event.remove({ id: 'occultism:crafting/chalk_white_impure' })
  event.remove({ id: 'occultism:spirit_fire/chalk_white' })
  event.remove({ id: 'occultism:crafting/magic_lamp_empty' })

  //not used rituals
  event.remove({ id: 'occultism:ritual/summon_marid_crusher' })
  event.remove({ id: 'occultism:ritual/summon_djinni_crusher' })
  event.remove({ id: 'occultism:ritual/possess_shulker' })
  event.remove({ id: 'occultism:ritual/summon_foliot_crusher' })
  event.remove({ id: 'occultism:ritual/summon_afrit_crusher' })
  event.remove({ id: 'occultism:ritual/possess_weak_shulker' })
  event.remove({ id: 'occultism:ritual/craft_stable_wormhole' })
  event.remove({ id: 'occultism:crafting/storage_remote_inert' })
  event.remove({ id: 'occultism:ritual/craft_storage_remote' })

	    event.recipes.occultism.ritual(
        'kubejs:runic_altar_core',
        [
          'forgeborncore:double_manasteel_plate',
          'forgeborncore:double_manasteel_plate',
          'forgeborncore:double_manasteel_plate',
          'forgeborncore:double_manasteel_plate',
          'undergarden:cloggrum_ingot',
          'undergarden:froststeel_ingot',
          'undergarden:forgotten_ingot',
          'undergarden:utherium_crystal'
        ],
        '#gtceu:circuits/lv',
        'occultism:rune_ritual'
      ).dummy("kubejs:dummy_ritual_thing").duration(20).id("occultism:forgeborn.fusion_ritual.runic_altar_core")

      event.recipes.occultism.ritual(
        '64x forgeborncore:spiritsteel_ingot',
        [
          'minecraft:rotten_flesh',
          'gtceu:steel_block',
          'occultism:iesnium_ingot',
          'gtceu:steel_block',
          'minecraft:rotten_flesh',
          'gtceu:steel_block',
          'occultism:iesnium_ingot',
          'gtceu:steel_block'
        ],
        'occultism:burnt_otherstone',
        'occultism:rune_ritual'
      ).dummy("kubejs:dummy_ritual_thing").duration(20).id("occultism:forgeborn.fusion_ritual.spirit_ingot")

    })