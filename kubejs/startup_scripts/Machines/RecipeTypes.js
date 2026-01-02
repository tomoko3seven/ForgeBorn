// const $IO = Java.loadClass('com.gregtechceu.gtceu.api.capability.recipe.IO');

GTCEuStartupEvents.registry('gtceu:recipe_type', (event) => {
    // Multiblock Machines Recipes
    //Gregtania
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
        .setSound(GTSoundEntries.ARC);
    //GregTech
    event
        .create('bloomery')
        .category('forgeborn')
        .setMaxIOSize(2, 1, 0, 0)
        .setProgressBar(
            GuiTextures.PROGRESS_BAR_ARROW,
            FillDirection.LEFT_TO_RIGHT
        )
        .setSound(GTSoundEntries.FURNACE);
    event
        .create('primitive_drilling')
        .category('forgeborn')
        .setMaxIOSize(0, 20, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.NEUTRAL_MATTER_OVERLAY)
        .setEUIO('in')
        .setProgressBar(
            GuiTextures.PROGRESS_BAR_ARROW,
            FillDirection.LEFT_TO_RIGHT
        )
        .setSound(GTSoundEntries.MINER);
    event
        .create('rail_assembly')
        .category('forgeborn')
        .setMaxIOSize(3, 1, 1, 0)
        .setProgressBar(
            GuiTextures.PROGRESS_BAR_ARROW,
            FillDirection.LEFT_TO_RIGHT
        )
        .setSound(GTSoundEntries.ASSEMBLER);
    event
        .create('atomic_reconstruction')
        .category('forgeborn')
        .setMaxIOSize(1, 1, 0, 0)
        .setProgressBar(
            GuiTextures.PROGRESS_BAR_ARROW,
            FillDirection.LEFT_TO_RIGHT
        )
        .setSound(GTSoundEntries.REPLICATOR);
    event
        .create('tree_simulator')
        .category('forgeborn')
        .setMaxIOSize(1, 1, 1, 0)
        .setProgressBar(
            GuiTextures.PROGRESS_BAR_ARROW,
            FillDirection.LEFT_TO_RIGHT
        )
        .setSound(GTSoundEntries.CHEMICAL);
    event
        .create('crystal_chamber')
        .category('forgeborn')
        .setMaxIOSize(1, 1, 1, 0)
        .setProgressBar(
            GuiTextures.PROGRESS_BAR_ARROW,
            FillDirection.LEFT_TO_RIGHT
        )
        .setSound(GTSoundEntries.CHEMICAL);

    // Simple-Machines Recipes
    //Gregtania
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
        .setSound(GTSoundEntries.ASSEMBLER);
    //Forestry
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
    //GregTech
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
        .setSound(GTSoundEntries.MIXER);

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
