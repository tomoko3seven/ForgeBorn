const $IO = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.IO')

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('mana_infuser')
    .category('forgeborn')
    .setMaxIOSize(1, 1, 1, 1) //Max Item in, max item out, max fluid in, max fluid out (in slots)
    .setSlotOverlay(false, false, GuiTextures.NEUTRAL_MATTER_OVERLAY)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.ELECTROLYZER)
})