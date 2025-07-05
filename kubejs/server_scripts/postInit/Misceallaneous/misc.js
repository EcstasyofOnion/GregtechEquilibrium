ServerEvents.recipes(event => {
    event.remove({ id: 'ae2:network/blocks/controller' })
    event.remove({ id: 'ae2:network/blocks/storage_drive' })
    event.remove({ id: 'ae2:network/blocks/storage_chest' })
    event.remove({ id: 'ae2:network/parts/panels_semi_dark_monitor' })
})

ServerEvents.recipes(event => {
    event.recipes.gtceu.centrifuge('mineral_wool1')
        .inputFluids(
            Fluid.of('minecraft:lava', 1000)
        )
        .itemOutputs(
            '16x kubejs:mineral_wool_sheet'
        )
        .notConsumable('gtceu:steel_rod')
        .duration(500)
        .EUt(30)

    event.recipes.gtceu.centrifuge('mineral_wool2')
        .inputFluids(
            Fluid.of('gtceu:chilled_lava', 1000)
        )
        .itemOutputs(
            '16x kubejs:mineral_wool_sheet'
        )
        .notConsumable('gtceu:steel_rod')
        .duration(400)
        .EUt(30)

    event.recipes.gtceu.extruder('kjs:raw_electrode')
        .itemInputs(
            'kubejs:pitch_binder'
        )
        .itemOutputs(
            'kubejs:raw_electrode'
        )
        .notConsumable('gtceu:rod_extruder_mold')
        .duration(200)
        .EUt(30)

})
