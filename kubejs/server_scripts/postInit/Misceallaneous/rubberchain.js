ServerEvents.recipes(event => {
})

ServerEvents.recipes(event => {
    event.recipes.gtceu.vulcanizing('gtceu:rubber_sheet_vulcanization1')
        .itemInputs(
            '4x gtceu:latex_dust',
            '1x gtceu:sulfur_dust'
        )
        .itemOutputs(
            '4x gtceu:rubber_plate'
        )
        .notConsumable('gtceu:zincite_dust')
        .notConsumable('gtceu:plate_extruder_mold')
        .duration(400)
        .EUt(7)

    event.recipes.gtceu.vulcanizing('gtceu:rubber_sheet_vulcanization2')
        .itemInputs(
            '4x gtceu:latex_dust',
            '1x gtceu:sulfur_dust'
        )
        .itemOutputs(
            '4x gtceu:rubber_plate'
        )
        .notConsumable('gtceu:magnesia_dust')
        .notConsumable('gtceu:plate_extruder_mold')
        .duration(400)
        .EUt(7)

    event.recipes.gtceu.vulcanizing('gtceu:rubber_sheet_vulcanization3')
        .itemInputs(
            '4x gtceu:latex_dust',
            '1x gtceu:sulfur_dust'
        )
        .itemOutputs(
            '4x gtceu:rubber_plate'
        )
        .notConsumable('gtceu:plate_extruder_mold')
        .circuit(2)
        .duration(800)
        .EUt(7)

    event.recipes.gtceu.vulcanizing('gtceu:rubber_ring_vulcanization1')
        .itemInputs(
            '4x gtceu:latex_dust',
            '1x gtceu:sulfur_dust'
        )
        .itemOutputs(
            '16x gtceu:rubber_ring'
        )
        .notConsumable('gtceu:zincite_dust')
        .notConsumable('gtceu:ring_extruder_mold')
        .duration(400)
        .EUt(7)

    event.recipes.gtceu.vulcanizing('gtceu:rubber_ring_vulcanization2')
        .itemInputs(
            '4x gtceu:latex_dust',
            '1x gtceu:sulfur_dust'
        )
        .itemOutputs(
            '16x gtceu:rubber_ring'
        )
        .notConsumable('gtceu:magnesia_dust')
        .notConsumable('gtceu:ring_extruder_mold')
        .duration(400)
        .EUt(7)

    event.recipes.gtceu.vulcanizing('gtceu:rubber_ring_vulcanization3')
        .itemInputs(
            '4x gtceu:latex_dust',
            '1x gtceu:sulfur_dust'
        )
        .itemOutputs(
            '16x gtceu:rubber_ring'
        )
        .notConsumable('gtceu:ring_extruder_mold')
        .circuit(2)
        .duration(800)
        .EUt(7)

    event.recipes.gtceu.vulcanizing('gtceu:rubber_foil_vulcanization1')
        .itemInputs(
            '4x gtceu:latex_dust',
            '1x gtceu:sulfur_dust'
        )
        .itemOutputs(
            '16x gtceu:rubber_foil'
        )
        .notConsumable('gtceu:zincite_dust')
        .notConsumable('gtceu:foil_extruder_mold')
        .duration(400)
        .EUt(7)

    event.recipes.gtceu.vulcanizing('gtceu:rubber_foil_vulcanization2')
        .itemInputs(
            '4x gtceu:latex_dust',
            '1x gtceu:sulfur_dust'
        )
        .itemOutputs(
            '16x gtceu:rubber_foil'
        )
        .notConsumable('gtceu:magnesia_dust')
        .notConsumable('gtceu:foil_extruder_mold')
        .duration(400)
        .EUt(7)

    event.recipes.gtceu.vulcanizing('gtceu:rubber_foil_vulcanization3')
        .itemInputs(
            '4x gtceu:latex_dust',
            '1x gtceu:sulfur_dust'
        )
        .itemOutputs(
            '16x gtceu:rubber_foil'
        )
        .notConsumable('gtceu:foil_extruder_mold')
        .circuit(2)
        .duration(800)
        .EUt(7)


    event.recipes.gtceu.vulcanizing('gtceu:rubber_bar_vulcanization1')
        .itemInputs(
            '4x gtceu:latex_dust',
            '1x gtceu:sulfur_dust'
        )
        .itemOutputs(
            '4x gtceu:rubber_ingot'
        )
        .notConsumable('gtceu:zincite_dust')
        .notConsumable('gtceu:ingot_extruder_mold')
        .duration(400)
        .EUt(7)

    event.recipes.gtceu.vulcanizing('gtceu:rubber_bar_vulcanization2')
        .itemInputs(
            '4x gtceu:latex_dust',
            '1x gtceu:sulfur_dust'
        )
        .itemOutputs(
            '4x gtceu:rubber_ingot'
        )
        .notConsumable('gtceu:magnesia_dust')
        .notConsumable('gtceu:ingot_extruder_mold')
        .duration(400)
        .EUt(7)

    event.recipes.gtceu.vulcanizing('gtceu:rubber_bar_vulcanization3')
        .itemInputs(
            '4x gtceu:latex_dust',
            '1x gtceu:sulfur_dust'
        )
        .itemOutputs(
            '4x gtceu:rubber_ingot'
        )
        .notConsumable('gtceu:ingot_extruder_mold')
        .circuit(2)
        .duration(800)
        .EUt(7)
})
