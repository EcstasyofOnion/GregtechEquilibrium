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
    event.recipes.gtceu.batch_reaction('a1batch_calcite_dust')
        .itemInputs(
            '2x gtceu:quicklime_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:green_liquor', 1000)
        )
        .itemOutputs(
            '5x gtceu:calcite_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:white_liquor', 1000)  
        )
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('batch_high_purity_boron')
        .inputFluids(
            Fluid.of('gtceu:hydrogen', 3000),
            Fluid.of('gtceu:boron_trichloride', 1000)
        )
        .itemOutputs(
            'gtceu:high_purity_boron_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:hydrogen_chloride', 3000)  
        )
        .duration(100)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('a2batch_chlorided_alumina')
        .itemInputs(
            '5x gtceu:supported_platinum_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:hydrogen_chloride', 100)
        )
        .itemOutputs(
            'gtceu:chlorided_alumina_dust'
        )
        .duration(100)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('a3batch_sulfated_metal_oxide')
        .itemInputs(
            '3x gtceu:zirconium_dioxide_dust',
            'gtceu:ammonium_hexachloroplatinate_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:aluminium_sulfate_solution', 6000)
        )
        .itemOutputs(
            'gtceu:sulfated_metal_oxide_dust'
        )
        .duration(100)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('a4batch_diluted_sodium_silicate')
        .itemInputs(
            '3x gtceu:silicon_dioxide_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:dense_steam', 1000),
            Fluid.of('gtceu:sodium_hydroxide_solution', 2000)
        )
        .outputFluids( 
            Fluid.of('gtceu:diluted_sodium_silicate_solution', 4000)  
        )
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('a5batch_sodium_aluminate')
        .itemInputs(
            '2x #forge:dusts/aluminium'
        )
        .inputFluids(
            Fluid.of('gtceu:sodium_hydroxide_solution', 2000)
        )
        .itemOutputs(
            '8x gtceu:sodium_aluminate_dust'
        )
        .outputFluids( 
            Fluid.of('gtceu:hydrogen', 6000)  
        )
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('a6batch_bromopropane')
        .inputFluids(
            Fluid.of('gtceu:propene', 1000),
            Fluid.of('gtceu:hydrobromic_acid', 1000)
        )
        .outputFluids( 
            Fluid.of('gtceu:n_bromopropane', 1000),
            Fluid.of('minecraft:water', 1000)  
        )
        .notConsumable('gtceu:lv_emitter')
        .notConsumableFluid(
            Fluid.of('gtceu:hydrogen_peroxide_solution', 50)
        )
        .duration(5)
        .EUt(120)

    event.recipes.gtceu.batch_reaction('a7batch_tetrapropylammonium')
        .inputFluids(
            Fluid.of('gtceu:tripropylamine', 1000),
            Fluid.of('gtceu:n_bromopropane', 1000)
        )
        .itemOutputs(
            'gtceu:tetrapropylammonium_bromide_dust'
        )
        .duration(5)
        .EUt(120)

    event.recipes.gtceu.batch_reaction('a8batch_nickel_ii_nitrate')
        .itemInputs(
            '2x gtceu:nickel_ii_oxide_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:nitric_acid', 2000)
        )
        .outputFluids(
            Fluid.of('gtceu:nickel_ii_nitrate_solution', 1000)  
        )
        .duration(20)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('gtceu:a9batch_nickel_ii_gigashit')
        .itemInputs(
            '9x gtceu:nickel_ii_nitrate_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:sodium_hydroxide_solution', 2000),
            Fluid.of('gtceu:acetylacetone', 2000)
        )
        .outputFluids(
            Fluid.of('gtceu:nickel_ii_bis_solution', 2000)  
        )
        .duration(120)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('gtceu:a10batch_bis_nickel_gigashit')
        .itemInputs(
            'gtceu:nickel_ii_bis_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:triethylaluminium', 2000),
            Fluid.of('gtceu:1_5_cyclooctadiene', 2000)
        )
        .itemOutputs(
            'gtceu:bis_nickel_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:ethane', 1000),
            Fluid.of('gtceu:ethylene', 1000),  
            Fluid.of('gtceu:diethylaluminium_acetylacetonate', 2000)
        )
        .duration(120)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('gtceu:a11batch_aluminium_chloride_solution')
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

    event.recipes.gtceu.batch_reaction('gtceu:a12batch_aluminium_chloride_solution')
        .itemInputs(
            'gtceu:triphenylphosphine_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:phosphorus_trichloride', 500)
        )
        .outputFluids( 
            Fluid.of('gtceu:chlorodiphenylphosphine', 1500)
        )
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('gtceu:a13batch_bis_nickel_gigashit2')
        .itemInputs(
            'gtceu:bis_nickel_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:ethylene_glycol', 1000),
            Fluid.of('gtceu:diphenylphosphinoacetic_acid', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:shell_higher_olefin_catalyst_solution', 1000)
        )
        .duration(200)
        .EUt(480)

    event.recipes.gtceu.batch_reaction('gtceu:a14batch_cobalt_nitrate_solution')
        .itemInputs(
            '2x gtceu:cobalt_oxide_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:nitric_acid', 2000)
        )
        .outputFluids(
            Fluid.of('gtceu:cobalt_nitrate_solution', 1000)
        )
        .duration(60)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('gtceu:a15batch_hzsm_five')
        .itemInputs(
            '6x gtceu:silicon_dioxide_dust',
            '51x gtceu:aluminium_sulfate_dust',
            'gtceu:sodium_hydroxide_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:n_butylamine', 100),
            Fluid.of('gtceu:demineralized_water', 1800),
            Fluid.of('gtceu:ethanol', 100)
        )
        .itemOutputs(
            'gtceu:hzsm_five_dust'
        )
        .duration(500)
        .EUt(480)

    event.recipes.gtceu.batch_reaction('gtceu:a16batch_fischer_tropsch_catalyst_solution')
        .itemInputs(
            '3x gtceu:silicon_dioxide_dust',
            '2x gtceu:potassium_carbonate_dust',
            'gtceu:alumina_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:iron_iii_nitrate_solution', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:low_temperature_fischer_tropsch_catalyst_solution', 1000)
        )
        .duration(100)
        .EUt(120)

    event.recipes.gtceu.batch_reaction('gtceu:a17batch_zinc_carbonate')
        .itemInputs(
            '3x gtceu:zinc_chloride_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:soda_ash_solution', 1000)
        )
        .itemOutputs(
            '5x gtceu:zinc_carbonate_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:concentrated_salt_water', 1000)
        )
        .duration(100)
        .EUt(120)

    event.recipes.gtceu.batch_reaction('gtceu:a18batch_copper_carbonate')
        .itemInputs(
            '3x gtceu:copper_ii_chloride_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:soda_ash_solution', 1000)
        )
        .itemOutputs(
            '5x gtceu:copper_carbonate_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:concentrated_salt_water', 1000)
        )
        .duration(100)
        .EUt(120)

    event.recipes.gtceu.batch_reaction('gtceu:a19batch_hexafluorosilicic_acid')
        .itemInputs(
            '3x gtceu:silicon_dioxide_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:hydrofluoric_acid', 6000)
        )
        .outputFluids( 
            Fluid.of('gtceu:diluted_hexafluorosilicic_acid', 9000)  
        )
        .duration(160)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('gtceu:a20batch_hydrogen_fluoride')
        .itemInputs(
            '3x gcyr:fluorite_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:sulfuric_acid', 1000)
        )
        .itemOutputs(
            '6x gtceu:calcium_sulfate_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:hydrogen_fluoride', 2000)  
        )
        .duration(30)
        .EUt(7)

    event.recipes.gtceu.batch_reaction('gtceu:a21batch_iron_sulfate')
        .itemInputs(
            '2x gtceu:iron_ii_sulfide_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:sulfuric_acid', 1000)
        )
        .itemOutputs(
            '6x gtceu:iron_sulfate_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:hydrogen_sulfide', 1000)  
        )
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('gtceu:a22batch_iron_sulfate_2')
        .itemInputs(
            '#forge:dusts/iron'
        )
        .inputFluids(
            Fluid.of('gtceu:sulfuric_acid', 1000)
        )
        .itemOutputs(
            '6x gtceu:iron_sulfate_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:hydrogen', 2000)  
        )
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('gtceu:a23batch_iron_ii_chloride')
        .itemInputs(
            '2x gtceu:iron_ii_sulfide_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:hydrochloric_acid', 2000)
        )
        .itemOutputs(
            '3x gtceu:iron_ii_chloride'
        )
        .outputFluids(
            Fluid.of('gtceu:hydrogen_sulfide', 1000)  
        )
        .duration(30)
        .EUt(7)

    event.recipes.gtceu.batch_reaction('gtceu:a24batch_sodium_bisulfate')
        .itemInputs(
            '7x gtceu:sodium_sulfate_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:sulfuric_acid', 1000)
        )
        .itemOutputs(
            '14x gtceu:sodium_bisulfate_dust'
        )
        .duration(120)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('gtceu:a25batch_potassium_bisulfate')
        .itemInputs(
            '5x gtceu:saltpeter_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:sulfuric_acid', 1000)
        )
        .itemOutputs(
            '7x gtceu:potassium_bisulfate_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:nitric_acid', 1000)  
        )
        .duration(60)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('gtceu:a26batch_wet_antimony_trifluoride')
        .itemInputs(
            '5x gtceu:antimony_trioxide_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:hydrofluoric_acid', 6000)
        )
        .itemOutputs(
            '8x gtceu:wet_antimony_trifluoride_dust'
        )
        .duration(60)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('gtceu:a27batch_calcium_chloride_solution')
        .itemInputs(
            '2x gtceu:calcium_sulfide_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:hydrochloric_acid', 2000)
        )
        .outputFluids(
            Fluid.of('gtceu:calcium_chloride_solution', 1000),
            Fluid.of('gtceu:hydrogen_sulfide', 1000)  
        )
        .duration(80)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('gtceu:a28batch_calcium_chloride_solution')
        .inputFluids(
            Fluid.of('gtceu:diluted_sulfuric_acid', 2000),
            Fluid.of('gtceu:calcium_chloride_solution', 1000)
        )
        .itemOutputs(
            '6x gtceu:calcium_sulfate_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:hydrochloric_acid', 2000)
        )
        .duration(60)
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

    //Fermentation Vat   
    event.recipes.gtceu.fermentation('gtceu:impure_ethanol1')
        .itemInputs(
            '24x minecraft:sugar'
        )
        .inputFluids(
            Fluid.of('gtceu:grain_solution', 1000),
            Fluid.of('minecraft:water', 16000)
        )
        .outputFluids(
            Fluid.of('gtceu:impure_ethanol', 16000)
        )
        .circuit(3)
        .duration(2400)
        .EUt(16)

    event.recipes.gtceu.fermentation('gtceu:impure_ethanol2')
        .inputFluids(
            Fluid.of('gtceu:grain_solution', 1000),
            Fluid.of('gtceu:mash', 16000)
        )
        .outputFluids(
            Fluid.of('gtceu:impure_ethanol', 16000)
        )
        .circuit(2)
        .duration(2400)
        .EUt(16)

    //Distillation Tower
    event.recipes.gtceu.distillation_tower('gtceu:ethanol_azeotrope_tower')
        .inputFluids(
            Fluid.of('gtceu:impure_ethanol', 2000)
        )
        .itemOutputs(
            'gtceu:wood_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:fusel_oil', 20),
            Fluid.of('minecraft:water', 1280),
            Fluid.of('gtceu:ethanol_water_azeotrope', 700)
        )
        .duration(50)
        .EUt(30)
})