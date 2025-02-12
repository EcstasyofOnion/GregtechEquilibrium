ServerEvents.recipes(event => {
	event.remove({ id: 'gtceu:assembler/vacuum_tube_plain' })
	event.remove({ id: 'gtceu:assembler/vacuum_tube_red_alloy' })
	event.remove({ id: 'gtceu:assembler/vacuum_tube_red_alloy_annealed' })
    event.remove({ id: 'gtceu:assembler/coil_cupronickel' })
    event.remove({ id: 'gtceu:electric_blast_furnace/sphalerite_metallurgy' })
})

ServerEvents.recipes(event => {
    //Vacuum Chamber
    event.recipes.gtceu.vacuum_ejection('gtceu:impure_bromine_gas')
        .inputFluids(
            Fluid.of('gtceu:steam', 250),
            Fluid.of('gtceu:chlorinated_brine', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:impure_bromine_gas', 500),
            Fluid.of('gtceu:wastewater_sludge', 500) 
        )
        .duration(120)
        .EUt(120)

    event.recipes.gtceu.vacuum_ejection('gtceu:deaerated_water')
        .inputFluids(
            Fluid.of('gtceu:demineralized_water', 1000),
            Fluid.of('gtceu:steam', 100)
        )
        .outputFluids(
            Fluid.of('gtceu:deaerated_water', 900)  
        )
        .duration(100)
        .EUt(30)

    event.recipes.gtceu.vacuum_ejection('gtceu:vacuum_tube')
        .itemInputs(
            'gtceu:glass_tube',
            'kubejs:vacuum_tube_components',
            'gtceu:steel_ring'
        )
        .itemOutputs(
            'gtceu:vacuum_tube'
        )
        .duration(200)
        .EUt(7)


    //Roaster
    event.recipes.gtceu.roasting('gtceu:zincite_dust')
        .itemInputs(
            'gtceu:sphalerite_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:oxygen', 2000)
        )
        .itemOutputs(
            '2x gtceu:zincite_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:zinc_flue_gas', 1000)  
        )
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.roasting('gtceu:zincite_dust2')
        .itemInputs(
            'gtceu:smithsonite_dust'
        )
        .itemOutputs(
            '2x gtceu:zincite_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:carbon_dioxide', 1000)  
        )
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.roasting('gtceu:green_liquor')
        .itemInputs(
            '2x gtceu:carbon_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:concentrated_black_liquor', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:carbon_dioxide', 2000),
            Fluid.of('gtceu:green_liquor', 1000)  
        )
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.roasting('gtceu:carbon_monoxide_1')
        .itemInputs(
            'kubejs:high_purity_carbon_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:oxygen', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:carbon_monoxide', 1000)
        )
        .circuit(1)
        .duration(80)
        .EUt(7)

    event.recipes.gtceu.roasting('gtceu:carbon_monoxide_2')
        .itemInputs(
            'gtceu:carbon_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:oxygen', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:carbon_monoxide', 1000)
        )
        .circuit(1)
        .duration(80)
        .EUt(7)

    event.recipes.gtceu.roasting('gtceu:carbon_monoxide_3')
        .itemInputs(
            'gtceu:coke_gem'
        )
        .inputFluids(
            Fluid.of('gtceu:oxygen', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:carbon_monoxide', 1000)
        )
        .circuit(1)
        .duration(80)
        .EUt(7)

    event.recipes.gtceu.roasting('gtceu:carbon_monoxide_4')
        .itemInputs(
            'gtceu:coke_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:oxygen', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:carbon_monoxide', 1000)
        )
        .circuit(1)
        .duration(80)
        .EUt(7)

    event.recipes.gtceu.roasting('gtceu:sodium_aluminate')
        .itemInputs(
            '5x gtceu:bauxite_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:sodium_hydroxide_solution', 2000)
        )
        .outputFluids(
            Fluid.of('gtceu:impure_sodium_aluminate_solution', 3000)
        )
        .duration(200)
        .EUt(16)

    event.recipes.gtceu.roasting('gtceu:cryolite')
        .itemInputs(
            '4x gtceu:aluminium_trifluoride_dust',
            '6x gtceu:sodium_fluoride_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:sodium_hydroxide_solution', 2000)
        )
        .itemOutputs(
            '10x gtceu:cryolite_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:impure_sodium_aluminate_solution', 3000)
        )
        .duration(180)
        .EUt(16)

    event.recipes.gtceu.roasting('gtceu:aluminium_alkoxide_solution')
        .inputFluids(
            Fluid.of('gtceu:oxygen', 3000),
            Fluid.of('gtceu:alfol_trialkylaluminium_mixture', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:aluminium_alkoxide_solution', 1000)
        )
        .duration(500)
        .EUt(30)

    event.recipes.gtceu.roasting('gtceu:aluminium_trifluoride')
        .itemInputs(
            '5x gtceu:alumina_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:hydrofluoric_acid', 6000)
        )
        .itemOutputs(
            '8x gtceu:aluminium_trifluoride_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:dense_steam', 9000)
        )
        .duration(300)
        .EUt(16)

    event.recipes.gtceu.roasting('gtceu:nickel_ii_oxide')
        .itemInputs(
            'gtceu:nickel_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:oxygen', 1000)
        )
        .itemOutputs(
            '2x gtceu:nickel_ii_oxide_dust'
        )
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.roasting('gtceu:rock_salt_solution_roasting')
        .itemInputs(
            '6x gtceu:potassium_carbonate_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:hydrochloric_acid', 2000)
        )
        .outputFluids(
            Fluid.of('gtceu:rock_salt_solution', 2000),
            Fluid.of('gtceu:carbon_dioxide', 1000)
        )
        .duration(120)
        .EUt(30)

    event.recipes.gtceu.roasting('gtceu:nickel_ii_bis_roasting')
        .inputFluids(
            Fluid.of('gtceu:nickel_ii_bis_solution', 2000)
        )
        .itemOutputs(
            'gtceu:nickel_ii_bis_dust',
            '10x gtceu:sodium_nitrate_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:dense_steam', 2000)
        )
        .duration(120)
        .EUt(480)

    event.recipes.gtceu.roasting('gtceu:nickel_chloride_roasting')
        .itemInputs(
            'gtceu:nickel_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:chlorine', 2000)
        )
        .itemOutputs(
            '3x gtceu:nickel_chloride_dust'
        )
        .duration(100)
        .EUt(30)

    //UV Light Box
    event.recipes.gtceu.lighting('gtceu:sterilized_water')
        .inputFluids(
            Fluid.of('gtceu:filtered_water', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:sterilized_water', 900)  
        )
        .duration(100)
        .EUt(30)

    //Batch Reactor
    event.recipes.gtceu.batch_reaction('gtceu:limestone_dust')
        .itemInputs(
            '2x gtceu:quicklime_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:green_liquor', 1000)
        )
        .itemOutputs(
            '5x gtceu:limestone_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:white_liquor', 1000)  
        )
        .duration(200)
        .EUt(30)

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

    event.recipes.gtceu.batch_reaction('gtceu:calcium_sulfate')
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

    event.recipes.gtceu.batch_reaction('gtceu:iron_sulfate')
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

    event.recipes.gtceu.batch_reaction('gtceu:iron_sulfate_2')
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

    event.recipes.gtceu.batch_reaction('gtceu:iron_ii_chloride')
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

    event.recipes.gtceu.batch_reaction('gtceu:sodium_bisulfate')
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

    event.recipes.gtceu.batch_reaction('gtceu:potassium_bisulfate')
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

    event.recipes.gtceu.batch_reaction('gtceu:wet_antimony_trifluoride')
        .itemInputs(
            '5x gtceu:antimony_trioxide_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:hydrofluoric_acid', 6000)
        )
        .itemOutputs(
            '8x gtceu:wet_antimony_trifluoride'
        )
        .duration(60)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('gtceu:arsine')
        .itemInputs(
            '4x gtceu:sodium_arsenide_dust'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 3000)
        )
        .itemOutputs(
            '9x gtceu:sodium_hyrdoxide_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:arsine_gas', 1000)  
        )
        .duration(120)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('gtceu:batch_aluminium_hydroxide1')
        .itemInputs(
            'gtceu:aluminium_alkoxide_mixture_dust'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 3000)
        )
        .itemOutputs(
            '7x gtceu:aluminium_hydroxide_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:ziegler_alfol_mixture', 1000)  
        )
        .duration(500)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('gtceu:batch_aluminium_hydroxide2')
        .itemInputs(
            '12x gtceu:rubidium_alum_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:sodium_hyrdoxide_solution', 4000)
        )
        .itemOutputs(
            '7x gtceu:aluminium_hydroxide_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:rubidium_hydroxide_solution', 4000)  
        )
        .notConsumable('gtceu:cupronickel_spring')
        .duration(80)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('gtceu:hydrogen_fluoride')
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
            Fluid.of('gtceu:hydrogen_fluoride_gas', 2000)  
        )
        .notConsumable('gtceu:cupronickel_spring')
        .duration(30)
        .EUt(7)

    event.recipes.gtceu.batch_reaction('gtceu:nickel_ii_nitrate')
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

    event.recipes.gtceu.batch_reaction('gtceu:nickel_ii_gigashit')
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

    event.recipes.gtceu.batch_reaction('gtceu:bis_nickel_gigashit')
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

    event.recipes.gtceu.batch_reaction('gtceu:bis_nickel_gigashit2')
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

    event.recipes.gtceu.batch_reaction('gtceu:carbon_bis_nickel_gigashit')
        .itemInputs(
            '#forge:dusts/zinc',
            'gtceu:dichloro_bis_nickel_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:carbon_monoxide', 2000)
        )
        .itemOutputs(
            'gtceu:dicarbonyl_bis_nickel_dust',
            '3x gtceu:zinc_chloride_dust'
        )
        .notConsumableFluid(
            Fluid.of('gtceu:tetrahydrofuran', 1000)
        )
        .duration(200)
        .EUt(480)

    event.recipes.gtceu.batch_reaction('gtceu:dichloro_bis_nickel_gigashit')
        .itemInputs(
            '3x gtceu:nickel_chloride_dust',
            '2x gtceu:triphenylphosphine_dust'
        )
        .itemOutputs(
            'gtceu:dichloro_bis_nickel_dust'
        )
        .notConsumableFluid(
            Fluid.of('gtceu:acetic_acid', 1000)
        )
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.batch_reaction('gtceu:triethylaluminium')
        .itemInputs(
            '2x #forge:dusts/aluminium'
        )
        .inputFluids(
            Fluid.of('gtceu:ethylene', 6000),
            Fluid.of('gtceu:hydrogen', 6000)
        )
        .outputFluids(
            Fluid.of('gtceu:triethylaluminium', 1000)  
        )
        .duration(200)
        .EUt(120)

    //Bubble Column Reactor
    event.recipes.gtceu.column_reaction('gtceu:column_sodium_fluoride')
        .inputFluids(
            Fluid.of('gtceu:sodium_hyrdoxide_solution', 50),
            Fluid.of('gtceu:hydrogen_fluoride_gas', 50) 
        )
        .outputFluids(
            Fluid.of('gtceu:sodium_fluoride_solution', 50)  
        )
        .duration(5)
        .EUt(16)

    event.recipes.gtceu.column_reaction('gtceu:column_hydrofluoric_acid')
        .inputFluids(
            Fluid.of('minecraft:water', 50),
            Fluid.of('gtceu:hydrogen_fluoride_gas', 50) 
        )
        .outputFluids(
            Fluid.of('gtceu:hydrofluoric_acid', 50)  
        )
        .duration(1)
        .EUt(7)

    //Crystallizer
    event.recipes.gtceu.crystallizer_crystallization('gtceu:aluminium_hydroxide1')
        .inputFluids(
            Fluid.of('gtceu:carbon_dioxide', 1000),
            Fluid.of('minecraft:water', 1000),
            Fluid.of('gtceu:sodium_aluminate_solution', 3000)
        )
        .itemOutputs(
            '14x gtceu:aluminium_hydroxide_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:impure_soda_ash_solution', 1000)  
        )
        .duration(300)
        .EUt(20)

    event.recipes.gtceu.crystallizer_crystallization('gtceu:aluminium_hydroxide2')
        .inputFluids(
            Fluid.of('minecraft:water', 1500),
            Fluid.of('gtceu:sodium_aluminate_solution', 1500)
        )
        .itemOutputs(
            '7x gtceu:aluminium_hydroxide_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:impure_sodium_hydroxide_solution', 1000)  
        )
        .notConsumable('gtceu:aluminium_hydroxide_dust')
        .duration(300)
        .EUt(16)

   //Continuous Stirred Tank Reactor 
    event.recipes.gtceu.stirred_tank_reaction('gtceu:alfol_trialkylaluminium_mixture')
        .inputFluids(
            Fluid.of('gtceu:diethyl_ether', 50),
            Fluid.of('gtceu:ethylene', 300),
            Fluid.of('gtceu:sodium_aluminate_solution', 1500)   
        )
        .outputFluids(
            Fluid.of('gtceu:alfol_trialkylaluminium_mixture', 50)  
        )
        .duration(10)
        .EUt(30)

    event.recipes.gtceu.stirred_tank_reaction('gtceu:diethyl_ether_solution')
        .inputFluids(
            Fluid.of('gtceu:sulfuric_acid', 50),
            Fluid.of('gtceu:ethanol', 100)   
        )
        .outputFluids(
            Fluid.of('gtceu:diethyl_ether_solution', 150)  
        )
        .duration(5)
        .EUt(30)

   //Trickle Bed Reactor 
    event.recipes.gtceu.trickle_bed_reaction('gtceu:1_5_cyclooctadiene')
        .inputFluids(
            Fluid.of('gtceu:butadiene', 100)
        )
        .outputFluids(
            Fluid.of('gtceu:1_5_cyclooctadiene', 50)  
        )
        .notConsumable('gtceu:dicarbonyl_bis_nickel_dust')
        .duration(10)
        .EUt(480)

    //Assembler
    event.recipes.gtceu.assembler('kubejs:structural_casing')
        .itemInputs(
            '4x gtceu:wrought_iron_plate'
        )
        .itemOutputs(
            '6x kubejs:structural_casing'
        )
        .circuit(2)
        .duration(240)
        .EUt(30)

    event.recipes.gtceu.assembler('gtceu:diode1')
        .itemInputs(
            '4x gtceu:fine_copper_wire',
            '1x gtceu:small_galena_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:glass', 144)
        )
        .itemOutputs(
            '1x gtceu:diode'
        )
        .duration(400)
        .EUt(30)

    event.recipes.gtceu.assembler('gtceu:diode2')
        .itemInputs(
            '4x gtceu:fine_annealed_copper_wire',
            '1x gtceu:small_galena_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:glass', 144)
        )
        .itemOutputs(
            '2x gtceu:diode'
        )
        .duration(400)
        .EUt(30)

    event.recipes.gtceu.assembler('gtceu:cupronickel_coil_assembler')
        .itemInputs(
            '8x gtceu:cupronickel_double_wire',
            '8x kubejs:mineral_wool',
            '8x gtceu:bronze_foil'
        )
        .inputFluids(
            Fluid.of('gtceu:tin_alloy', 144)
        )
        .itemOutputs(
            'gtceu:cupronickel_coil_block'
        )
        .duration(200)
        .EUt(30)

    //Extruder
    event.recipes.gtceu.extruder('gtceu:raw_electrode')
        .itemInputs(
            'kubejs:pitch_binder'
        )
        .itemOutputs(
            'gtceu:raw_electrode'
        )
        .notConsumable('gtceu:rod_extruder_mold')
        .duration(200)
        .EUt(30)

    //Distillery
    event.recipes.gtceu.distillery('gtceu:ultrapure_water_1')
        .inputFluids(
            Fluid.of('gtceu:deaerated_water', 100)
        )
        .outputFluids(
            Fluid.of('gtceu:ultrapure_water', 15)  
        )
        .duration(10)
        .EUt(50)

    event.recipes.gtceu.distillery('gtceu:ultrapure_water_2')
        .inputFluids(
            Fluid.of('gtceu:filtered_water', 100)
        )
        .outputFluids(
            Fluid.of('gtceu:ultrapure_water', 30)  
        )
        .duration(10)
        .EUt(40)

    event.recipes.gtceu.distillery('gtceu:ultrapure_water_3')
        .inputFluids(
            Fluid.of('gtceu:demineralized_water', 100)
        )
        .outputFluids(
            Fluid.of('gtceu:ultrapure_water', 5)  
        )
        .duration(10)
        .EUt(60)

    event.recipes.gtceu.distillery('gtceu:ultrapure_water_4')
        .inputFluids(
            Fluid.of('gtceu:sterilized_water', 100)
        )
        .outputFluids(
            Fluid.of('gtceu:ultrapure_water', 90)  
        )
        .duration(10)
        .EUt(30)

    event.recipes.gtceu.distillery('gtceu:sodium_hydroxide1')
        .inputFluids(
            Fluid.of('gtceu:crotonaldehyde_mixture', 1000)
        )
        .itemOutputs(
            '3x gtceu:sodium_hydroxide_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:crotonaldehyde', 1000)  
        )
        .duration(20)
        .EUt(30)

    event.recipes.gtceu.distillery('gtceu:sodium_hydroxide2')
        .inputFluids(
            Fluid.of('gtceu:sodium_hyrdoxide_solution', 1000)
        )
        .itemOutputs(
            '3x gtceu:sodium_hydroxide_dust'
        )
        .outputFluids(
            Fluid.of('minecraft:water', 1000)  
        )
        .duration(60)
        .EUt(16)

    event.recipes.gtceu.distillery('gtceu:sodium_hyrdoxide3')
        .inputFluids(
            Fluid.of('gtceu:diluted_sodium_hydroxide_solution', 2000)
        )
        .itemOutputs(
            '4x gtceu:sodium_hydroxide_dust'
        )
        .outputFluids(
            Fluid.of('minecraft:water', 2000)  
        )
        .duration(100)
        .EUt(120)

    event.recipes.gtceu.distillery('gtceu:aluminium_alkoxide_mixture_distillation')
        .inputFluids(
            Fluid.of('gtceu:aluminium_alkoxide_solution', 1000)
        )
        .itemOutputs(
            '1x gtceu:aluminium_alkoxide_mixture'
        )
        .outputFluids(
            Fluid.of('gtceu:diethyl_ether', 1000)  
        )
        .duration(500)
        .EUt(30)

    event.recipes.gtceu.distillery('gtceu:diethyl_ether_solution_distillation1')
        .inputFluids(
            Fluid.of('gtceu:diethyl_ether_solution', 120)
        )
        .outputFluids(
            Fluid.of('gtceu:sulfuric_acid', 40)  
        )
        .circuit(1)
        .duration(48)
        .EUt(22)

    event.recipes.gtceu.distillery('gtceu:diethyl_ether_solution_distillation2')
        .inputFluids(
            Fluid.of('gtceu:diethyl_ether_solution', 120)
        )
        .outputFluids(
            Fluid.of('minecraft:water', 40)  
        )
        .circuit(2)
        .duration(48)
        .EUt(22)

    event.recipes.gtceu.distillery('gtceu:diethyl_ether_solution_distillation3')
        .inputFluids(
            Fluid.of('gtceu:diethyl_ether_solution', 120)
        )
        .outputFluids(
            Fluid.of('gtceu:diethyl_ether', 40)  
        )
        .circuit(3)
        .duration(48)
        .EUt(22)

    event.recipes.gtceu.distillery('gtceu:sodium_fluoride_dust')
        .inputFluids(
            Fluid.of('gtceu:sodium_fluoride_solution', 1000)
        )
        .itemOutputs(
            '2x gtceu:sodium_fluoride_dust'
        )
        .outputFluids(
            Fluid.of('minecraft:water', 1000)  
        )
        .duration(200)
        .EUt(7)

    event.recipes.gtceu.distillery('gtceu:rock_salt_solution_distillery')
        .inputFluids(
            Fluid.of('gtceu:rock_salt_solution', 1000)
        )
        .itemOutputs(
            '2x gtceu:rock_salt_dust'
        )
        .outputFluids(
            Fluid.of('minecraft:water', 1000)  
        )
        .duration(60)
        .EUt(16)

    event.recipes.gtceu.distillery('gtceu:diluted_rock_salt_solution_distillery1')
        .inputFluids(
            Fluid.of('gtceu:diluted_rock_salt_solution', 80)
        )
        .outputFluids(
            Fluid.of('gtceu:rock_salt_solution', 40)  
        )
        .circuit(1)
        .duration(4)
        .EUt(4)

    event.recipes.gtceu.distillery('gtceu:diluted_rock_salt_solution_distillery2')
        .inputFluids(
            Fluid.of('gtceu:diluted_rock_salt_solution', 80)
        )
        .outputFluids(
            Fluid.of('minecraft:water', 40)  
        )
        .circuit(2)
        .duration(4)
        .EUt(4)

    event.recipes.gtceu.distillery('gtceu:nickel_ii_nitrate_solution_distillery')
        .inputFluids(
            Fluid.of('gtceu:nickel_ii_nitrate_solution', 1000)
        )
        .itemOutputs(
            '9x gtceu:nickel_ii_nitrate_dust'
        )
        .outputFluids(
            Fluid.of('minecraft:water', 1000)  
        )
        .duration(20)
        .EUt(30)

    //Mixer
    event.recipes.gtceu.mixer('gtceu:reduced_zinc_leach')
        .itemInputs(
            '2x gtceu:sphalerite_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:hot_zinc_leach', 16000)
        )
        .itemOutputs(
            '2x gtceu:sulfur_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:reduced_zinc_leach', 16000)  
        )
        .duration(400)
        .EUt(30)

    event.recipes.gtceu.mixer('gtceu:sulfuric_acid')
        .itemInputs(
            '2x gtceu:sphalerite_dust'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 1000),
            Fluid.of('gtceu:sulfur_trioxide', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:sulfuric_acid', 1000)  
        )
        .duration(40)
        .EUt(7)

    event.recipes.gtceu.mixer('kubejs:pitch_binder')
        .itemInputs(
            '4x gtceu:coke_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:coal_tar', 1000)
        )
        .itemOutputs(
            '4x kubejs:pitch_binder'
        )
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.mixer('kubejs:mixer_sodium_fluoride_solution')
        .itemInputs(
            '2x gtceu:sodium_fluoride_dust'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:sodium_fluoride_solution', 1000)  
        )
        .duration(20)
        .EUt(30)

    event.recipes.gtceu.mixer('gtceu:mixer_rock_salt_solution')
        .itemInputs(
            '2x gtceu:rock_salt_dust'
        ) 
        .inputFluids(
            Fluid.of('minecraft:water', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:rock_salt_solution', 1000)  
        )
        .duration(80)
        .EUt(7)

    //Compressor
    event.recipes.gtceu.compressor('gtceu:filtered_water')
        .inputFluids(
            Fluid.of('gtceu:deaerated_water', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:filtered_water', 900)  
        )
        .notConsumable(
            'kubejs:cellulose_acetate_mesh'
        )
        .duration(100)
        .EUt(30)

    //Centrifuge
    event.recipes.gtceu.centrifuge('gtceu:sugary_water')
        .itemInputs(
            'kubejs:sugar_cane_dust'
        )
        .inputFluids(
            Fluid.of('minecraft:water', 250)
        )
        .itemOutputs(
            'gtceu:wood_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:sugary_water', 250)  
        )
        .duration(100)
        .EUt(7)

    event.recipes.gtceu.centrifuge('gtceu:sodium_aluminate_purification')
        .inputFluids(
            Fluid.of('gtceu:impure_sodium_aluminate_solution', 3000)
        )
        .outputFluids(
            Fluid.of('gtceu:sodium_aluminate_solution', 3000),
            Fluid.of('gtceu:red_mud', 500)  
        )
        .duration(200)
        .EUt(16)

    event.recipes.gtceu.centrifuge('gtceu:bromine_purification')
        .inputFluids(
            Fluid.of('gtceu:impure_bromine_gas', 1000)
        )
        .chancedOutput(
            '1x gtceu:iodine_dust', 3300, 0
        )
        .outputFluids(
            Fluid.of('gtceu:bromine', 1000)  
        )
        .duration(120)
        .EUt(120)
})