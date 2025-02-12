ServerEvents.recipes(event => {
    event.remove({ id: 'ae2:network/blocks/controller' })
    event.remove({ id: 'ae2:network/blocks/storage_drive' })
    event.remove({ id: 'ae2:network/blocks/storage_chest' })
    event.remove({ id: 'ae2:network/parts/panels_semi_dark_monitor' })
})

ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('ae2:me_controller1')
        .itemInputs(
            'gtceu:ev_machine_hull',
            '#gtceu:circuits/ev',
            '2x gtceu:titanium_plate',
            '2x gtceu:fine_gold_wire',
            '4x gtceu:exquisite_fluix'
        )
        .inputFluids(
            Fluid.of('gtceu:tin', 144)
        )
        .itemOutputs(
            'ae2:controller'
        )
        .duration(200)
        .EUt(1920)

    event.recipes.gtceu.assembler('ae2:controller2')
        .itemInputs(
            'gtceu:ev_machine_hull',
            '#gtceu:circuits/ev',
            '2x gtceu:titanium_plate',
            '2x gtceu:fine_gold_wire',
            '4x gtceu:exquisite_fluix'
        )
        .inputFluids(
            Fluid.of('gtceu:soldering_alloy', 72)
        )
        .itemOutputs(
            'ae2:controller'
        )
        .duration(200)
        .EUt(1920)

    event.shaped(
        Item.of('ae2:drive'), [
        'ABA',
        'C C',
        'ABA'
    ],
    {
      A: 'gtceu:titanium_plate',
      B: '#gtceu:circuits/ev',
      C: 'ae2:fluix_glass_cable'
    })

    event.shaped(
        Item.of('ae2:chest'), [
        'ABA',
        'C D',
        'EFE'
    ],
    {
      A: 'gtceu:glass_plate',
      B: 'ae2:terminal',
      C: 'ae2:formation_core',
      D: 'ae2:annihilation_core',
      E: 'gtceu:titanium_plate',
      F: '#gtceu:circuits/ev'
    })

    event.shaped(
        Item.of('ae2:semi_dark_monitor'), [
        'ABA'
    ],
    {
       A: 'ae2:fluix_glass_cable',
       B: 'gtceu:computer_monitor_cover'
    })

})
