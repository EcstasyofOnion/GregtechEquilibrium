
// GT Vacuum Chamber recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('vacuum_ejection')
        .category('vacuum')
        .setEUIO('in')
        .setMaxIOSize(4, 1, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

// Roaster recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('roasting')
        .category('roast')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

// Bubble Column Reactor recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('column_reaction')
        .category('column_reactor')
        .setEUIO('in')
        .setMaxIOSize(4, 1, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

//Light Box recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('lighting')
        .category('light')
        .setEUIO('in')
        .setMaxIOSize(4, 1, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

//Batch Reactor recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('batch_reaction')
        .category('batch_reactor')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 3, 3)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

//Crystallizer recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('crystallizer_crystallization')
        .category('crystallizer')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 3, 3)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

//Continuous Stirred Tank Reactor recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('stirred_tank_reaction')
        .category('tank_reaction')
        .setEUIO('in')
        .setMaxIOSize(1, 0, 4, 2)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

//Trickle Bed Reactor recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('trickle_bed_reaction')
        .category('trickle_reaction')
        .setEUIO('in')
        .setMaxIOSize(1, 0, 4, 2)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

//Fluid Compressor recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
  event.create('fluid_compression')
    .category('compression')                   
    .setEUIO('in')                     
    .setMaxIOSize(0, 0, 1, 1)             
    .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.ELECTROLYZER)
})

//Fluid Decompressor recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
  event.create('fluid_decompression')
    .category('decompresion')                   
    .setEUIO('in')                     
    .setMaxIOSize(0, 0, 1, 1)             
    .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.ELECTROLYZER)
})





// GT Vacuum Chamber machine
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('vacuum_chamber', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Vacuum Chamber`)
                .recipeType('vacuum_ejection')
        )
    })	

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('steam_vacuum_chamber', 'steam')
        .hasHighPressure(true)
        .definition((hp, builder) => 
            builder
                .recipeType("vacuum_ejection")
        )
    })


// GT Roaster machine
    GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('roaster', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Roaster`)
                .recipeType('roasting')
                .workableTieredHullRenderer(GTCEu.id("block/machines/roaster"))
        )
    })  

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('steam_roaster', 'steam')
        .hasHighPressure(true)
        .definition((hp, builder) => 
            builder
                .recipeType("roasting")
        )
    })


// GT Light Box machine
    GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('light_box', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} UV Light Box`)
                .recipeType('lighting')
        )
    })  


// GT Batch Reactor machine
    GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('batch_reactor', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Batch Reactor`)
                .recipeType('batch_reaction')
        )
    })  

// GT Bubble Column Reactor machine
    GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('bubble_column_reactor', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Bubble Column Reactor`)
                .recipeType('column_reaction')
        )
    })  

// GT Crystallizer machine
    GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('crystallizer', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Crystallizer`)
                .recipeType('crystallizer_crystallization')
        )
    })  

// GT Continuous Stirred Tank Reactor machine
    GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('continuous_stirred_tank_reactor', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Continuous Stirred Tank Reactor`)
                .recipeType('stirred_tank_reaction')
        )
    })  

// GT Continuous Stirred Tank Reactor machine
    GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('trickle_bed_reactor', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Trickle Bed Reactor`)
                .recipeType('trickle_bed_reaction')
        )
    })  

// GT Fluid Compressor machine
    GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('fluid_compressor', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Fluid Compressor`)
                .recipeType('fluid_compression')
        )
    })  

// GT Fluid Decompressor machine
    GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('fluid_decompressor', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Fluid Decompressor`)
                .recipeType('fluid_decompression')
        )
    })  
