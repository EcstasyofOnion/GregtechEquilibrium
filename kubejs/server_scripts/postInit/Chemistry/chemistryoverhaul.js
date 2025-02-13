ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:electrolyzer/water_electrolysis' })
    event.remove({ id: 'gtceu:electrolyzer/acetic_acid_electrolysis' })
    event.remove({ id: 'gtceu:electrolyzer/chloromethane_electrolysis' })
    event.remove({ id: 'gtceu:large_chemical_reactor/indium_concentrate_seperation' })
    event.remove({ id: 'gtceu:large_chemical_reactor/indium_concentrate_seperation_4x' })
    event.remove({ id: 'gtceu:chemical_bath/tungstic_acid_from_tungstate' })
    event.remove({ id: 'gtceu:centrifuge/overheated_bromine_sulfate_gas' })
    event.remove({ id: 'gtceu:chemical_reactor/sulfuric_acid_from_sulfide' })
    event.remove({ id: 'gtceu:chemical_reactor/sulfuric_acid_from_trioxide' })
    event.remove({ id: 'gtceu:distillation_tower/naqudaria_waste_seperation' })
    event.remove({ id: 'gtceu:distillation_tower/enriched_naqudaria_waste_seperation' })
    event.remove({ id: 'gtceu:mixer/sulfuric_acid' })
    event.remove({ id: 'gtceu:large_chemical_reactor/ethylene_from_glycerol' })
    event.remove({ id: 'gtceu:large_chemical_reactor/ethylene_from_ethanol' })
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

    event.recipes.gtceu.roasting('gtceu:hydrochloric_acid_roasting')
        .itemInputs(
            '4x gtceu:salt_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:sulfuric_acid', 1000)
        )
        .itemOutputs(
            '7x gtceu:sodium_sulfate_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:hydrochloric_acid', 1000)
        )
        .duration(60)
        .EUt(30)

    //Batch Reactor
    event.recipes.gtceu.batch_reaction('gtceu:hexafluorosilicic_acid')
        .itemInputs(
            '3x gtceu:silicon_dioxide_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:hydrofluoric_acid', 6000)
        )
        .itemOutputs(
            '5x gtceu:limestone_dust'
        )
        .outputFluids( 
            Fluid.of('gtceu:diluted_hexafluorosilicic_acid', 9000)  
        )
        .duration(160)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('gtceu:aluminium_chloride_solution')
        .inputFluids(
            Fluid.of('gtceu:hydrochloric_acid', 3000),
            Fluid.of('gtceu:diethylaluminium_acetylacetonate', 1000)
        )
        .outputFluids( 
            Fluid.of('gtceu:aluminium_chloride_solution', 3000),
            Fluid.of('gtceu:acetylacetone', 1000), 
            Fluid.of('gtceu:ethylene', 2000)  
        )
        .duration(160)
        .EUt(30)

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
    event.recipes.gtceu.mixer('gtceu:sulfuric_acid_mixer')
        .inputFluids(
            Fluid.of('minecraft:water', 1000),
            Fluid.of('gtceu:sulfur_trioxide', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:sulfuric_acid', 1000)
        )
        .duration(40)
        .EUt(7)

    event.recipes.gtceu.mixer('gtceu:grain_solution1')
        .itemInputs(
            '2x gtceu:wheat_dust'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:grain_solution', 1000)
        )
        .circuit(4)
        .duration(100)
        .EUt(30)

    event.recipes.gtceu.mixer('gtceu:grain_solution2')
        .itemInputs(
            '2x croptopia:flour'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:grain_solution', 1000)
        )
        .circuit(4)
        .duration(100)
        .EUt(30)
})