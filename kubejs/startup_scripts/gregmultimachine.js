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
        .workableCasingRenderer(
            "kubejs:block/structural_casing",
            "gtceu:block/multiblock/large_chemical_reactor",
            false
        )
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
        .workableCasingRenderer(
            "gtceu:block/machine_casing_solid",
            "gtceu:block/multiblock/large_chemical_reactor",
            false
        )
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
        .workableCasingRenderer(
            "gtceu:block/machine_casing_solid",
            "gtceu:textures/block/machines/multiblocks/heat_exchanger",
            false
        )
})