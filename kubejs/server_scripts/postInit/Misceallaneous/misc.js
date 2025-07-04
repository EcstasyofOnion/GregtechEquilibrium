ServerEvents.recipes(event => {
    event.remove({ id: 'ae2:network/blocks/controller' })
    event.remove({ id: 'ae2:network/blocks/storage_drive' })
    event.remove({ id: 'ae2:network/blocks/storage_chest' })
    event.remove({ id: 'ae2:network/parts/panels_semi_dark_monitor' })
})

ServerEvents.recipes(event => {
    event.recipes.gtceu.centrifuge('mineral_wool')
        .inputFluids(
            Fluid.of('minecraft:lava', 1000)
        )
        .itemOutputs(
            '16x kubejs:mineral_wool_sheet'
        )
        .notConsumable('gtceu:steel_rod')
        .duration(500)
        .EUt(30)

    event.recipes.gtceu.centrifuge('mineral_wool')
        .inputFluids(
            Fluid.of('gtceu:chilled_lava', 1000)
        )
        .itemOutputs(
            '16x kubejs:mineral_wool_sheet'
        )
        .notConsumable('gtceu:steel_rod')
        .duration(400)
        .EUt(30)

    event.recipes.gtceu.extruder('raw_electrode')
        .itemInputs(
            'kubejs:pitch_binder'
        )
        .itemOutputs(
            'gtceu:rod_extruder_mold'
        )
        .notConsumable('gtceu:steel_rod')
        .duration(200)
        .EUt(30)

})
