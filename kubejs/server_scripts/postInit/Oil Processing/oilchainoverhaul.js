ServerEvents.recipes(event => {
    event.recipes.gtceu.distillation_tower('gtceu:fuel_oil_tower_distillation')
        .inputFluids(
            Fluid.of('gtceu:fuel_oil', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:propane', 150),
            Fluid.of('gtceu:ethane', 100),
            Fluid.of('gtceu:methane', 100),
            Fluid.of('gtceu:hexane', 300),
            Fluid.of('gtceu:pentane', 250),
            Fluid.of('gtceu:butane', 200)
        )
        .duration(160)
        .EUt(60)

    event.recipes.gtceu.distillation_tower('gtceu:diesel_tower_distillation')
        .inputFluids(
            Fluid.of('gtceu:diesel', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:propane', 200),
            Fluid.of('gtceu:ethane', 100),
            Fluid.of('gtceu:methane', 100),
            Fluid.of('gtceu:hexane', 150),
            Fluid.of('gtceu:pentane', 200),
            Fluid.of('gtceu:butane', 200)
        )
        .duration(400)
        .EUt(60)   

    event.recipes.gtceu.distillation_tower('gtceu:kerosene_tower_distillation')
        .inputFluids(
            Fluid.of('gtceu:kerosene', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:propane', 250),
            Fluid.of('gtceu:ethane', 200),
            Fluid.of('gtceu:methane', 100),
            Fluid.of('gtceu:hexane', 100),
            Fluid.of('gtceu:pentane', 150),
            Fluid.of('gtceu:butane', 250)
        )
        .duration(400)
        .EUt(60)

    event.recipes.gtceu.distillation_tower('gtceu:naphtha_tower_distillation')
        .inputFluids(
            Fluid.of('gtceu:naphtha', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:propane', 300),
            Fluid.of('gtceu:ethane', 250),
            Fluid.of('gtceu:methane', 150),
            Fluid.of('gtceu:hexane', 100),
            Fluid.of('gtceu:pentane', 150),
            Fluid.of('gtceu:butane', 200)
        )
        .duration(400)
        .EUt(60)

    event.recipes.gtceu.distillation_tower('gtceu:gasoline_tower_distillation')
        .inputFluids(
            Fluid.of('gtceu:gasoline', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:propane', 200),
            Fluid.of('gtceu:ethane', 300),
            Fluid.of('gtceu:methane', 250),
            Fluid.of('gtceu:hexane', 100),
            Fluid.of('gtceu:pentane', 100),
            Fluid.of('gtceu:butane', 150)
        )
        .duration(400)
        .EUt(60)

    event.recipes.gtceu.distillation_tower('gtceu:natural_gas_tower_distillation')
        .inputFluids(
            Fluid.of('gtceu:natural_gas', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:methane', 750),
            Fluid.of('gtceu:butane', 100)
            Fluid.of('gtceu:propane', 100),
            Fluid.of('gtceu:ethane', 100)
        )
        .duration(100)
        .EUt(60)
})
