ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:electrolyzer/water_electrolysis' })
    event.remove({ id: 'gtceu:electrolyzer/acetic_acid_electrolysis' })
    event.remove({ id: 'gtceu:electrolyzer/chloromethane_electrolysis' })
    event.remove({ id: 'gtceu:chemical_reactor/indium_concentrate_seperation' })
    event.remove({ id: 'gtceu:chemical_reactor/indium_concentrate_seperation_4x' })
    event.remove({ id: 'gtceu:chemical_bath/tungstic_acid_from_tungstate' })
    event.remove({ id: 'gtceu:centrifuge/overheated_bromine_sulfate_gas' })
    event.remove({ id: 'gtceu:chemical_reactor/sulfuric_acid_from_sulfide' })
    event.remove({ id: 'gtceu:chemical_reactor/sulfuric_acid_from_trioxide' })
    event.remove({ id: 'gtceu:distillation_tower/naqudaria_waste_seperation' })
    event.remove({ id: 'gtceu:distillation_tower/enriched_naqudaria_waste_seperation' })
    event.remove({ id: 'gtceu:mixer/sulfuric_acid' })
})


ServerEvents.recipes(event => {
    //Roaster
    event.recipes.gtceu.roasting('gtceu:iron_iii_roasting')
        .itemInputs(
            'gtceu:iron_iii_sulfate_dust'
        )
        .itemOutputs(
            'gtceu:banded_iron_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:sulfur_trioxide', 3000)
        )
        .duration(160)
        .EUt(7)

    //Vacuum Chamber
    event.recipes.gtceu.electrolyzer('gtceu:water_electrolysis')
        .inputFluids(
            Fluid.of('minecraft:water', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:hydrogen', 2000),
            Fluid.of('gtceu:oxygen', 1000) 
        )
        .notConsumable('gtceu:iron_rod')
        .notConsumable('gtceu:nickel_rod')
        .duration(120)
        .EUt(120)

    //Mixer
    event.recipes.gtceu.electrolyzer('gtceu:sulfuric_acid_mixer')
        .inputFluids(
            Fluid.of('minecraft:water', 1000),
            Fluid.of('gtceu:sulfur_trioxide', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:sulfuric_acid', 1000)
        )
        .duration(40)
        .EUt(7)
})