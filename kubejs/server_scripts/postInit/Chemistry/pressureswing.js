ServerEvents.recipes(event => {
})

ServerEvents.recipes(event => {
    event.recipes.gtceu.pressure_swing_absorber('gtceu:pressure_swing_absorber_salt1')
        .inputFluids(
            Fluid.of('gtceu:saltwater', 10000)
        )
        .itemOutputs(
            '20x gtceu:salt'
        )
        .outputFluids(
            Fluid.of('minecraft:water', 10000)
        )
        .notConsumable('kubejs:cellulose_acetate_mesh')
        .duration(80)
        .EUt(480)

    event.recipes.gtceu.pressure_swing_absorber('gtceu:pressure_swing_absorber_salt2')
        .inputFluids(
            Fluid.of('gtceu:concentrated_saltwater', 10000)
        )
        .itemOutputs(
            '40x gtceu:salt'
        )
        .outputFluids(
            Fluid.of('minecraft:water', 10000)
        )
        .notConsumable('kubejs:cellulose_acetate_mesh')
        .duration(80)
        .EUt(480)


    event.recipes.gtceu.pressure_swing_absorber('gtceu:pressure_swing_absorber_salt3')
        .inputFluids(
            Fluid.of('gtceu:hypersaline_water', 5000)
        )
        .itemOutputs(
            '40x gtceu:salt'
        )
        .outputFluids(
            Fluid.of('minecraft:water', 5000)
        )
        .notConsumable('kubejs:cellulose_acetate_mesh')
        .duration(40)
        .EUt(480)


    event.recipes.gtceu.pressure_swing_absorber('gtceu:pressure_swing_absorber_air')
        .inputFluids(
            Fluid.of('gtceu:air', 10000)
        )
        .outputFluids(
            Fluid.of('gtceu:nitrogen', 7808),
            Fluid.of('gtceu:oxygen', 2095)
        )
        .notConsumable('kubejs:zeolite_membrane')
        .duration(100)
        .EUt(64)


    event.recipes.gtceu.pressure_swing_absorber('gtceu:pressure_swing_absorber_hydrogen_vapor')
        .inputFluids(
            Fluid.of('gtceu:acidic_hydrogen_vapor', 9000)
        )
        .outputFluids(
            Fluid.of('gtceu:hydrogen', 8000),
            Fluid.of('gtceu:carbon_dioxide', 1000)
        )
        .notConsumable('5x gtceu:molecular_sieve_dust')
        .duration(100)
        .EUt(64)
})