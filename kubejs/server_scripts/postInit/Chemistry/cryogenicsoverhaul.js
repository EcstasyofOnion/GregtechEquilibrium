ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:vacuum_freezer/liquid_oxygen' })
})

ServerEvents.recipes(event => {
    event.recipes.gtceu.fluid_compression('gtceu:oxygen_compression')
        .inputFluids(
            Fluid.of('gtceu:oxygen', 1280)
        )
        .outputFluids(
            Fluid.of('gtceu:hot_high_pressure_oxygen', 1280)
        )
        .duration(100)
        .EUt(30)

    event.recipes.gtceu.fluid_decompression('gtceu:oxygen_compression')
        .inputFluids(
            Fluid.of('gtceu:cold_high_pressure_oxygen', 1280)
        )
        .outputFluids(
            Fluid.of('gtceu:liquid_oxygen', 20)
        )
        .duration(20)
        .EUt(7)

    event.recipes.gtceu.heat_exchange('gtceu:oxygen_exchange1')
        .inputFluids(
            Fluid.of('minecraft:water', 1000),
            Fluid.of('gtceu:hot_high_pressure_oxygen', 10000)
        )
        .outputFluids(
            Fluid.of('gtceu:warm_water', 1000),
            Fluid.of('gtceu:high_pressure_oxygen', 10000)
        )
        .duration(7)

    event.recipes.gtceu.heat_exchange('gtceu:oxygen_exchange2')
        .inputFluids(
            Fluid.of('gtceu:salt_water', 1000),
            Fluid.of('gtceu:hot_high_pressure_oxygen', 10000)
        )
        .outputFluids(
            Fluid.of('gtceu:warm_saltwater', 1000),
            Fluid.of('gtceu:high_pressure_oxygen', 10000)
        )
        .duration(10)

    event.recipes.gtceu.heat_exchange('gtceu:oxygen_exchange3')
        .inputFluids(
            Fluid.of('gtceu:lubricant', 1000),
            Fluid.of('gtceu:hot_high_pressure_oxygen', 10000)
        )
        .outputFluids(
            Fluid.of('gtceu:warm_lubricant', 1000),
            Fluid.of('gtceu:high_pressure_oxygen', 10000)
        )
        .duration(5)

    event.recipes.gtceu.heat_exchange('gtceu:oxygen_exchange4')
        .inputFluids(
            Fluid.of('gtceu:sodium_potassium', 2000),
            Fluid.of('gtceu:hot_high_pressure_oxygen', 10000)
        )
        .outputFluids(
            Fluid.of('gtceu:warm_sodium_potassium', 2000),
            Fluid.of('gtceu:high_pressure_oxygen', 10000)
        )
        .duration(5)

    event.recipes.gtceu.heat_exchange('gtceu:oxygen_exchange5')
        .inputFluids(
            Fluid.of('gtceu:ethylene_glycol', 2000),
            Fluid.of('gtceu:hot_high_pressure_oxygen', 10000)
        )
        .outputFluids(
            Fluid.of('gtceu:warm_ethylene_glycol', 2000),
            Fluid.of('gtceu:high_pressure_oxygen', 10000)
        )
        .duration(4)

    event.recipes.gtceu.heat_exchange('gtceu:oxygen_exchange6')
        .inputFluids(
            Fluid.of('gtceu:polychlorinated_biphenyl', 1000),
            Fluid.of('gtceu:hot_high_pressure_oxygen', 10000)
        )
        .outputFluids(
            Fluid.of('gtceu:warm_polychlorinated_biphenyl', 1000),
            Fluid.of('gtceu:high_pressure_oxygen', 10000)
        )
        .duration(3)

    event.recipes.gtceu.heat_exchange('gtceu:cold_oxygen_exchange1')
        .inputFluids(
            Fluid.of('gtceu:cold_ammonia', 1000),
            Fluid.of('gtceu:high_pressure_oxygen', 10000)
        )
        .outputFluids(
            Fluid.of('gtceu:ammonia', 1000),
            Fluid.of('gtceu:cold_high_pressure_oxygen', 10000)
        )
        .duration(7)

    event.recipes.gtceu.heat_exchange('gtceu:cold_oxygen_exchange2')
        .inputFluids(
            Fluid.of('gtceu:cold_propane', 1000),
            Fluid.of('gtceu:high_pressure_oxygen', 10000)
        )
        .outputFluids(
            Fluid.of('gtceu:propane', 1000),
            Fluid.of('gtceu:cold_high_pressure_oxygen', 10000)
        )
        .duration(10)

    event.recipes.gtceu.heat_exchange('gtceu:cold_oxygen_exchange3')
        .inputFluids(
            Fluid.of('gtceu:cold_carbon_dioxide', 3000),
            Fluid.of('gtceu:high_pressure_oxygen', 10000)
        )
        .outputFluids(
            Fluid.of('gtceu:carbon_dioxide', 3000),
            Fluid.of('gtceu:cold_high_pressure_oxygen', 10000)
        )
        .duration(12)

    event.recipes.gtceu.heat_exchange('gtceu:cold_oxygen_exchange4')
        .inputFluids(
            Fluid.of('gtceu:cold_trichlorofluoromethane', 1000),
            Fluid.of('gtceu:high_pressure_oxygen', 10000)
        )
        .outputFluids(
            Fluid.of('gtceu:trichlorofluoromethane', 1000),
            Fluid.of('gtceu:cold_high_pressure_oxygen', 10000)
        )
        .duration(3)

    event.recipes.gtceu.heat_exchange('gtceu:cold_oxygen_exchange5')
        .inputFluids(
            Fluid.of('gtceu:cold_dichlorodifluoromethane', 1000),
            Fluid.of('gtceu:high_pressure_oxygen', 10000)
        )
        .outputFluids(
            Fluid.of('gtceu:dichlorofluoromethane', 1000),
            Fluid.of('gtceu:cold_high_pressure_oxygen', 10000)
        )
        .duration(3)

    event.recipes.gtceu.heat_exchange('gtceu:cold_oxygen_exchange6')
        .inputFluids(
            Fluid.of('gtceu:cold_chlorotrifluoromethane', 1000),
            Fluid.of('gtceu:high_pressure_oxygen', 10000)
        )
        .outputFluids(
            Fluid.of('gtceu:chlorotrifluoromethane', 1000),
            Fluid.of('gtceu:cold_high_pressure_oxygen', 10000)
        )
        .duration(3)

    event.recipes.gtceu.heat_exchange('gtceu:cold_oxygen_exchange7')
        .inputFluids(
            Fluid.of('gtceu:cold_chlorodifluoromethane', 1000),
            Fluid.of('gtceu:high_pressure_oxygen', 10000)
        )
        .outputFluids(
            Fluid.of('gtceu:chlorodifluoromethane', 1000),
            Fluid.of('gtceu:cold_high_pressure_oxygen', 10000)
        )
        .duration(3)
})