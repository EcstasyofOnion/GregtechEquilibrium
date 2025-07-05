// GT Sintering Oven recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('sintering')
        .category('sinter')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

// GT Electrolytic Cell recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('advanced_electrolyzation')
        .category('electrolytic_cell')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 3, 4)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

// GT Heat Exchanger recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('heat_exchange')
        .category('heat_exchanging')
        .setEUIO('in')
        .setMaxIOSize(1, 0, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

// GT Polymerization Tank recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('polymerization')
        .category('polymerization')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 3, 2)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})


// GT Fermentation Vat recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('fermentation')
        .category('fermentation')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 3, 3)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

// GT Fermentation Vat recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('large_steam_turbine')
        .category('steam_turbine')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 3, 3)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

// GT Pressure Swing Absorber recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('pressure_swing_absorber')
        .category('pressure_swing_absorbtion')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})



GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('sintering_oven', 'multiblock')
        .tooltips(Component.translatable('your.langfile.entry.here')) // 


        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('kubejs:structural_casing'))
        .recipeTypes('sintering')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('33333', '33333', '33333', '33333', '33333')
            .aisle('     ', ' AAA ', ' A A ', ' AAA ', '     ')
            .aisle('22222', '2AAA2', '2A A2', ' AAA ', '     ')
            .aisle('     ', ' AAA ', ' A A ', ' AAA ', '     ')
            .aisle('22222', '2AAA2', '2A A2', ' AAA ', '     ')
            .aisle('     ', ' AAA ', ' A A ', ' AAA ', '     ')
            .aisle('22222', '2AAA2', '2A A2', ' AAA ', '     ')
            .aisle('     ', ' AAA ', ' A A ', ' AAA ', '     ')
            .aisle('22222', '2AAA2', '2A A2', ' AAA ', '     ')
            .aisle('     ', ' AAA ', ' A A ', ' AAA ', '     ')
            .aisle('M1111', '11C11', '11111', '11111', '11111')
            .where(' ', Predicates.air())
            .where('A', Predicates.blocks("kubejs:sintering_bricks"))
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('1', Predicates.blocks("kubejs:structural_casing")
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
            )
            .where('3', Predicates.blocks("kubejs:structural_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1))
            )
            .where('2', Predicates.blocks("gtceu:steel_frame"))
        .build())
        .workableCasingRenderer('kubejs:block/structural_casing', 'gtceu:block/machines/sintering_oven', false);
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('electrolytic_cell_controller', 'multiblock')
        .tooltips(Component.translatable('your.langfile.entry.here')) // 


        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('gtceu:solid_machine_casing'))
        .recipeTypes('advanced_electrolyzation')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('M2222', '11111', '11111')
            .aisle('21112', '1AAA1', '1AAA1')
            .aisle('21112', '1AAA1', '1AAA1')
            .aisle('22222', '11C11', '11111')
            .where('A', Predicates.blocks("gtceu:steel_pipe_casing"))
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('1', Predicates.blocks("gtceu:solid_machine_casing"))
            .where('2', Predicates.blocks("gtceu:solid_machine_casing")
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY))
                )
        .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/machines/electrolytic_cell', false);
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('heat_exchanger', 'multiblock')
        .tooltips(Component.translatable('your.langfile.entry.here')) // 


        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('gtceu:solid_machine_casing'))
        .recipeTypes('heat_exchange')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('222', 'E2E', '121')
            .aisle('222', '232', '121')
            .aisle('222', '232', '121')
            .aisle('222', '232', '121')
            .aisle('222', '232', '121')
            .aisle('222', '232', '121')
            .aisle('222', '232', '121')
            .aisle('222', '232', '121')
            .aisle('222', 'DCD', '121')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('D', Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(2))
            .where('E', Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(2))
            .where('1', Predicates.blocks("gtceu:steel_frame"))
            .where('3', Predicates.blocks("gtceu:steel_pipe_casing"))
            .where('2', Predicates.blocks("gtceu:solid_machine_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                )
        .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/machines/heat_exchanger', false);
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('polymerization_tank', 'multiblock')
        .tooltips(Component.translatable('your.langfile.entry.here')) // 


        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('gtceu:solid_machine_casing'))
        .recipeTypes('polymerization')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('1 1', '222', '222', '222', '222')
            .aisle('   ', '2A2', '2A2', '2A2', '2A2')
            .aisle('1 1', '2C2', '222', '222', '222')
            .where(' ', Predicates.air())
            .where('A', Predicates.blocks("gtceu:steel_pipe_casing"))
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('1', Predicates.blocks("gtceu:steel_frame"))
            .where('2', Predicates.blocks("gtceu:solid_machine_casing")
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setPreviewCount(1))
                )
        .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/large_chemical_reactor', false);
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('fermentation_vat', 'multiblock')
        .tooltips(Component.translatable('your.langfile.entry.here')) // 


        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('gtceu:ulv_machine_casing'))
        .recipeTypes('fermentation')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('     ', '     ', ' 222 ', ' 222 ', ' 222 ', '     ')
            .aisle(' 1 1 ', ' 222 ', '2   2', '2   2', '2   2', ' 222 ')
            .aisle('     ', ' 222 ', '2   2', '2   2', '2   2', ' 2M2 ')
            .aisle(' 1 1 ', ' 222 ', '2   2', '2   2', '2   2', ' 222 ')
            .aisle('     ', '     ', ' 222 ', ' 2C2 ', ' 222 ', '     ')
            .where(' ', Predicates.air())
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.abilities(PartAbility.MUFFLER).setPreviewCount(1))
            .where('1', Predicates.blocks("gtceu:steel_frame"))
            .where('2', Predicates.blocks("gtceu:ulv_machine_casing")
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setPreviewCount(1))
                )
        .build())
        .workableCasingRenderer('gtceu:block/casings/voltage/ulv_machine_casing', 'gtceu:block/multiblock/large_chemical_reactor', false);
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('large_steam_turbine', 'multiblock')
        .tooltips(Component.translatable('your.langfile.entry.here')) // 


        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('gtceu:solid_machine_casing'))
        .recipeTypes('large_steam_turbine')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('322222224', '222222224', '3   2   4')
            .aisle('322222224', '3AAAABBB4', '322222224')
            .aisle('322222224', '3C2222224', '3   2   4')
            .where(' ', Predicates.air())
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('A', Predicates.blocks("kubejs:steel_turbine_block"))
            .where('B', Predicates.blocks("kubejs:copper_alternator_coil"))
            .where('2', Predicates.blocks("gtceu:steel_turbine_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                )
            .where('3', Predicates.blocks("gtceu:steel_turbine_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                )
            .where('4', Predicates.blocks("gtceu:steel_turbine_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
                )
        .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/machines/large_steam_turbine', false);
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('pressure_swing_absorber', 'multiblock')
        .tooltips(Component.translatable('your.langfile.entry.here')) // 


        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(() => Block.getBlock('gtceu:frostproof_machine_casing'))
        .recipeTypes('pressure_swing_absorber')
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('AAA', 'AAA', 'AAA', 'AAA')
            .aisle('AAA', 'ABA', 'ABA', 'AAA')
            .aisle('AAA', 'ACA', 'AAA', 'AAA')
            .where('C', Predicates.controller(Predicates.blocks(definition.get())))
            .where('A', Predicates.blocks("gtceu:frostproof_machine_casing"))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.MAINTENANCE))
            .where('B', Predicates.blocks("gtceu:steel_pipe_casing"))
        .build())
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_frostproof', 'gtceu:block/machines/pressure_swing_absorber', false);
})
