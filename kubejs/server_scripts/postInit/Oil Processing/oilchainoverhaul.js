ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:chemical_reactor/steam_cracked_butadiene' })
    event.remove({ id: 'gtceu:large_chemical_reactor/steam_cracked_butadiene' })
    event.remove({ id: 'gtceu:cracker/steam_crack_butadiene' })
    event.remove({ id: 'gtceu:distillation_tower/distill_steam_cracked_butadiene' })
    event.remove({ id: 'gtceu:distillation_tower/distill_hydro_cracked_butadiene' })
    event.remove({ id: 'gtceu:distillery/distill_steam_cracked_butadiene_to_methane' })
    event.remove({ id: 'gtceu:distillery/distill_steam_cracked_butadiene_to_ethylene' })
    event.remove({ id: 'gtceu:distillery/distill_steam_cracked_butadiene_to_propene' })
    event.remove({ id: 'gtceu:distillation_tower/distill_lightly_steam_cracked_naphtha' })
    event.remove({ id: 'gtceu:distillation_tower/distill_severely_steam_cracked_naphtha' })
    event.remove({ id: 'gtceu:distillation_tower/distill_lightly_steam_cracked_gas' })
    event.remove({ id: 'gtceu:distillation_tower/distill_severely_steam_cracked_gas' })
    event.remove({ id: 'gtceu:distillation_tower/distill_steam_cracked_ethane' })
    event.remove({ id: 'gtceu:distillation_tower/distill_steam_cracked_butene' })
    event.remove({ id: 'gtceu:distillation_tower/distill_wood_gas' })
    event.remove({ id: 'gtceu:distillation_tower/distill_lightly_steam_cracked_light_fuel' })
    event.remove({ id: 'gtceu:distillation_tower/distill_severely_steam_cracked_light_fuel' })
    event.remove({ id: 'gtceu:distillation_tower/distill_lightly_steam_cracked_heavy_fuel' })
    event.remove({ id: 'gtceu:distillation_tower/distill_severely_steam_cracked_heavy_fuel' })
    event.remove({ id: 'gtceu:distillation_tower/distill_steam_cracked_propene' })
    event.remove({ id: 'gtceu:distillation_tower/distill_hydro_cracked_propene' })
    event.remove({ id: 'gtceu:distillation_tower/distill_steam_cracked_propane' })
    event.remove({ id: 'gtceu:distillation_tower/distill_steam_cracked_butene' })
    event.remove({ id: 'gtceu:distillation_tower/distill_steam_cracked_butane' })
})

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

    event.recipes.gtceu.distillation_tower('gtceu:severely_steam_cracked_naphtha_tower_distillation')
        .inputFluids(
            Fluid.of('gtceu:severely_steam_cracked_naphtha', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:ethane', 65),
            Fluid.of('gtceu:ethylene', 500),
            Fluid.of('gtceu:methane', 500),
            Fluid.of('gtceu:butadiene', 50),
            Fluid.of('gtceu:propane', 15),
            Fluid.of('gtceu:propene', 300),
            Fluid.of('gtceu:benzene', 100),
            Fluid.of('gtceu:c5_fraction', 350),
            Fluid.of('gtceu:butene', 50),
            Fluid.of('gtceu:kerosene', 25),
            Fluid.of('gtceu:gasoline', 50),
            Fluid.of('gtceu:toluene', 20)
        )
        .duration(400)
        .EUt(60)

    event.recipes.gtceu.distillation_tower('gtceu:lightly_steam_cracked_naphtha_tower_distillation')
        .inputFluids(
            Fluid.of('gtceu:lightly_steam_cracked_naphtha', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:ethane', 35),
            Fluid.of('gtceu:ethylene', 200),
            Fluid.of('gtceu:methane', 200),
            Fluid.of('gtceu:butadiene', 150),
            Fluid.of('gtceu:propane', 15),
            Fluid.of('gtceu:propene', 200),
            Fluid.of('gtceu:benzene', 150),
            Fluid.of('gtceu:c5_fraction', 150),
            Fluid.of('gtceu:butene', 80),
            Fluid.of('gtceu:kerosene', 75),
            Fluid.of('gtceu:gasoline', 150),
            Fluid.of('gtceu:toluene', 40)
        )
        .duration(400)
        .EUt(60)

    event.recipes.gtceu.distillation_tower('gtceu:steam_cracked_ethane_distillation')
        .inputFluids(
            Fluid.of('gtceu:steam_cracked_ethane', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:methane', 50),
            Fluid.of('gtceu:hydrogen', 50),
            Fluid.of('gtceu:butadiene', 50),
            Fluid.of('gtceu:propene', 50),
            Fluid.of('gtceu:ethylene', 800)
        )
        .duration(160)
        .EUt(60)

    event.recipes.gtceu.distillation_tower('gtceu:steam_cracked_propane_distillation')
        .inputFluids(
            Fluid.of('gtceu:steam_cracked_propane', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:methane', 150),
            Fluid.of('gtceu:hydrogen', 150),
            Fluid.of('gtceu:butadiene', 50),
            Fluid.of('gtceu:propene', 150),
            Fluid.of('gtceu:ethylene', 500)
        )
        .duration(160)
        .EUt(60)

    event.recipes.gtceu.distillation_tower('gtceu:steam_cracked_butane_distillation')
        .inputFluids(
            Fluid.of('gtceu:steam_cracked_propane', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:methane', 150),
            Fluid.of('gtceu:hydrogen', 100),
            Fluid.of('gtceu:butadiene', 150),
            Fluid.of('gtceu:propene', 250),
            Fluid.of('gtceu:ethylene', 350)
        )
        .duration(160)
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
            Fluid.of('gtceu:butane', 100),
            Fluid.of('gtceu:propane', 100),
            Fluid.of('gtceu:ethane', 100)
        )
        .duration(100)
        .EUt(60)
})
