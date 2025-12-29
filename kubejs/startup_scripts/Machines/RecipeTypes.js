const $IO = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.IO');

GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    // Multiblock Machines Recipes
    event
        .create('mana_pulse_infuser')
        .category('forgeborn')
        .setMaxIOSize(6, 2, 1, 1) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.NEUTRAL_MATTER_OVERLAY)
        .setEUIO('in')
        .setProgressBar(
            GuiTextures.PROGRESS_BAR_ARROW,
            FillDirection.LEFT_TO_RIGHT
        )
        .setSound(GTSoundEntries.ELECTROLYZER);

    // Simple-Machines Recipes
    event
        .create('mana_infuser')
        .category('forgeborn')
        .setMaxIOSize(1, 1, 1, 1) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.NEUTRAL_MATTER_OVERLAY)
        .setEUIO('in')
        .setProgressBar(
            GuiTextures.PROGRESS_BAR_ARROW,
            FillDirection.LEFT_TO_RIGHT
        )
        .setSound(GTSoundEntries.ELECTROLYZER);

    event
        .create('botanical_purification_chamber')
        .category('forgeborn')
        .setMaxIOSize(6, 4, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.NEUTRAL_MATTER_OVERLAY)
        .setEUIO('in')
        .setProgressBar(
            GuiTextures.PROGRESS_BAR_ARROW,
            FillDirection.LEFT_TO_RIGHT
        )
        .setSound(GTSoundEntries.ELECTROLYZER);

    event
        .create('runic_assembler')
        .category('forgeborn')
        .setMaxIOSize(8, 2, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.NEUTRAL_MATTER_OVERLAY)
        .setEUIO('in')
        .setProgressBar(
            GuiTextures.PROGRESS_BAR_ARROW,
            FillDirection.LEFT_TO_RIGHT
        )
        .setSound(GTSoundEntries.ELECTROLYZER);

    event
        .create('squeezer')
        .category('forgeborn')
        .setMaxIOSize(4, 2, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.NEUTRAL_MATTER_OVERLAY)
        .setEUIO('in')
        .setProgressBar(
            GuiTextures.PROGRESS_BAR_ARROW,
            FillDirection.LEFT_TO_RIGHT
        )
        .setSound(GTSoundEntries.CENTRIFUGE);

    event
        .create('culinary_assembler')
        .category('forgeborn')
        .setEUIO('in')
        .setMaxIOSize(9, 3, 3, 0) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(
            GuiTextures.PROGRESS_BAR_ARROW,
            FillDirection.LEFT_TO_RIGHT
        )
        .setSound(GTSoundEntries.REPLICATOR);

    event
        .create('crystallizer')
        .category('forgeborn')
        .setEUIO('in')
        .setMaxIOSize(9, 3, 3, 0) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(
            GuiTextures.PROGRESS_BAR_ARROW,
            FillDirection.LEFT_TO_RIGHT
        )
        .setSound(GTSoundEntries.REPLICATOR);

    event
        .create('laser_welder')
        .category('forgeborn')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 0, 0) //Max Item in, max item out, max fluid in, max fluid out (in slots)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(
            GuiTextures.PROGRESS_BAR_ARROW,
            FillDirection.LEFT_TO_RIGHT
        )
        .setSound(GTSoundEntries.ELECTROLYZER);
});
