ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:cutter/cut_silicon_boule_water' })
    event.remove({ id: 'gtceu:cutter/cut_silicon_boule_distilled_water' })
    event.remove({ id: 'gtceu:cutter/cut_silicon_boule' })
    event.remove({ id: 'gtceu:electric_blast_furnace/silicon_boule' })
})


ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer('gtceu:silicon_dioxide_slurry1')
        .itemInputs(
            'gtceu:tiny_potassium_hydroxide_dust',
            '30x gtceu:silicon_dioxide_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:demineralized_water', 10000)
        )
        .outputFluids(
            Fluid.of('gtceu:silicon_dioxide_slurry', 10000)  
        )
        .duration(200)
        .EUt(120)

    event.recipes.gtceu.mixer('gtceu:silicon_dioxide_slurry2')
        .itemInputs(
            'gtceu:sodium_hydroxide_dust',
            '3x gtceu:silicon_dioxide_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:ultrapure_water', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:silicon_dioxide_slurry', 1000)  
        )
        .duration(200)
        .EUt(64)

    event.recipes.gtceu.forming_press('kubejs:crucible_mold')   
        .itemInputs(
            'gtceu:empty_mold'
        )    
        .itemOutputs(
            'kubejs:crucible_mold'
        )
        .notConsumable('kubejs:crucible_mold')
        .duration(120)
        .EUt(22)

    event.recipes.gtceu.vacuum_ejection('gtceu:quartz_crucible')   
        .inputFluids(
            Fluid.of('gtceu:silicon_dioxide', 1008)
        )
        .itemOutputs(
            'kubejs:quartz_crucible'
        )
        .notConsumable('kubejs:crucible_mold')
        .duration(1440)
        .EUt(30)

    event.recipes.gtceu.mixer('gtceu:water_treatment_acid1')   
        .inputFluids(
            Fluid.of('gtceu:hydrofluoric_acid', 500),
            Fluid.of('gtceu:hydrochloric_acid', 500)
        )
        .outputFluids(
            Fluid.of('gtceu:water_treatment_acid', 1000)  
        )
        .circuit(1)
        .duration(600)
        .EUt(64)

    event.recipes.gtceu.mixer('gtceu:water_treatment_acid2') 
        .inputFluids(
            Fluid.of('gtceu:acetic_acid', 100),
            Fluid.of('gtceu:hydrochloric_acid', 450),
            Fluid.of('gtceu:hydrofluoric_acid', 450)
        )
        .outputFluids(
            Fluid.of('gtceu:water_treatment_acid', 1000)  
        )
        .circuit(2)
        .duration(200)
        .EUt(64)

    event.recipes.gtceu.roasting('gtceu:silicon_tetrachloride1')
        .itemInputs(
            'gtceu:silicon_dust'
        )     
        .inputFluids(
            Fluid.of('gtceu:chlorine', 4000)
        )
        .outputFluids(
            Fluid.of('gtceu:silicon_tetrachloride', 1000)  
        )
        .duration(80)
        .EUt(30)

    event.recipes.gtceu.roasting('gtceu:trichlorosilane')
        .itemInputs(
            'gtceu:silicon_dust'
        )     
        .inputFluids(
            Fluid.of('gtceu:hydrogen', 4000),
            Fluid.of('gtceu:silicon_tetrachloride', 3000)
        )
        .outputFluids(
            Fluid.of('gtceu:silicon_trichlorosilane', 1000)
        )
        .duration(200)
        .EUt(120)

    event.recipes.gtceu.roasting('gtceu:trichlorosilane2')
        .itemInputs(
            'gtceu:silicon_dust'
        )     
        .inputFluids(
            Fluid.of('gtceu:hydrogen_chloride', 3000)
        )
        .outputFluids(
            Fluid.of('gtceu:trichlorosilane', 1000),
            Fluid.of('gtceu:hydrogen', 2000)  
        )
        .duration(80)
        .EUt(30)

    event.recipes.gtceu.distillery('gtceu:purified_silicon_tetrachloride')
        .inputFluids(
            Fluid.of('gtceu:silicon_tetrachloride', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:purified_silicon_tetrachloride', 1000)  
        )
        .duration(100)
        .EUt(30)

    event.recipes.gtceu.distillery('gtceu:purified_trichlorosilane')
        .inputFluids(
            Fluid.of('gtceu:trichlorosilane', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:purified_trichlorosilane', 1000)  
        )
        .duration(100)
        .EUt(30)

    event.recipes.gtceu.roasting('gtceu:high_purity_silicon1')
        .itemInputs(
            '2x #forge:dusts/zinc'
        )
        .inputFluids(
            Fluid.of('gtceu:purified_silicon_tetrachloride', 1000)
        )
        .itemOutputs(
            'gtceu:high_purity_silicon_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:zinc_chloride', 864)  
        )
        .duration(100)
        .EUt(30)

    event.recipes.gtceu.roasting('gtceu:high_purity_silicon2')
       .itemInputs(
            '#forge:dusts/zinc'
        )
        .inputFluids(
            Fluid.of('gtceu:purified_trichlorosilane', 1000)
        )
        .itemOutputs(
            'gtceu:high_purity_silicon_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:zinc_chloride', 432),
            Fluid.of('gtceu:hydrogen_chloride', 1000)  
        )
        .duration(100)
        .EUt(30)

    event.recipes.gtceu.autoclave('gtceu:silicon_seed_crystal')
       .itemInputs(
            'gtceu:high_purity_silicon_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:distilled_water', 1000)
        )
        .chancedOutput(
            '1x kubejs:silicon_seed_crystal', 1000, 500
        )
        .duration(1200)
        .EUt(30)

    event.recipes.gtceu.crystallizer_crystallization('gtceu:unrefined_silicon_boule1')
       .itemInputs(
            'kubejs:silicon_seed_crystal'
        )
        .inputFluids(
            Fluid.of('gtceu:high_purity_silicon', 4608)
        )
        .itemOutputs(
            'kubejs:unrefined_silicon_boule'
        )
        .notConsumable('kubejs:quartz_crucible')
        .circuit(1)
        .duration(9000)
        .EUt(120)

    event.recipes.gtceu.crystallizer_crystallization('gtceu:unrefined_silicon_boule2')
       .itemInputs(
            'kubejs:silicon_seed_crystal'
        )
        .inputFluids(
            Fluid.of('gtceu:high_purity_silicon', 4608)
        )
        .itemOutputs(
            'kubejs:unrefined_silicon_boule'
        )
        .notConsumable('kubejs:quartz_crucible')
        .notConsumableFluid(
            Fluid.of('gtceu:argon', 8000)
        )
        .circuit(2)
        .duration(6750)
        .EUt(120)
    
    event.recipes.gtceu.zone_refinement('gtceu:silicon_boule')
        .itemInputs(
            'kubejs:unrefined_silicon_boule'
        )
        .itemOutputs(
            'gtceu:silicon_boule'
        )
        .duration(120)
        .EUt(30)

    event.recipes.gtceu.cutter('gtceu:raw_silicon_wafer')
        .itemInputs(
            'gtceu:silicon_boule'
        )
        .inputFluids(
            Fluid.of('gtceu:ultrapure_water', 500)
        )
        .itemOutputs(
            '14x kubejs:raw_silicon_wafer',
            'kubejs:silicon_seed_crystal'
        )
        .outputFluids(
            Fluid.of('gtceu:acidic_wastewater', 50)  
        )
        .duration(4500)
        .EUt(64)

    event.recipes.gtceu.chemical_bath('gtceu:treated_silicon_wafer')
        .itemInputs(
            'kubejs:raw_silicon_wafer'
        )
        .inputFluids(
            Fluid.of('gtceu:water_treatment_acid', 50)
        )
        .itemOutputs(
            'kubejs:acid_treated_silicon_wafer'
        )
        .outputFluids(
            Fluid.of('gtceu:acidic_wastewater', 50)  
        )
        .duration(225)
        .EUt(64)

    event.recipes.gtceu.polishing('gtceu:silicon_wafer')
        .itemInputs(
            'kubejs:acid_treated_silicon_wafer'
        )
        .inputFluids(
            Fluid.of('gtceu:silicon_dioxide_slurry', 50)
        )
        .itemOutputs(
            'gtceu:silicon_wafer'
        )
        .duration(200)
        .EUt(30)
})