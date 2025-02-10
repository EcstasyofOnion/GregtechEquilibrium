ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:large_chemical_reactor/indium_concentrate_seperation' })
    event.remove({ id: 'gtceu:large_chemical_reactor/indium_concentrate_seperation_4' })
})

ServerEvents.recipes(event => {
//Sintering Oven
    event.recipes.gtceu.sintering('gtceu:graphite1')
        .itemInputs(
            'kubejs:raw_electrode'
        )
        .inputFluids(
            Fluid.of('gtceu:methane', 100),
            Fluid.of('gtceu:oxygen', 80)
        )
        .itemOutputs(
            'kubejs:graphite_electrode'
        )
        .outputFluids(
            Fluid.of('gtceu:carbon_dioxide', 50)  
        )
        .duration(150)
        .EUt(30)

    event.recipes.gtceu.sintering('gtceu:graphite2')
        .itemInputs(
            'kubejs:raw_electrode'
        )
        .inputFluids(
            Fluid.of('gtceu:syngas', 100),
            Fluid.of('gtceu:oxygen', 80)
        )
        .itemOutputs(
            'kubejs:graphite_electrode'
        )
        .outputFluids(
            Fluid.of('gtceu:carbon_dioxide', 50)  
        )
        .duration(150)
        .EUt(30)

    event.recipes.gtceu.sintering('gtceu:graphite3')
        .itemInputs(
            'kubejs:raw_electrode'
        )
        .inputFluids(
            Fluid.of('gtceu:methane', 100),
            Fluid.of('gtceu:air', 100)
        )
        .itemOutputs(
            'kubejs:graphite_electrode'
        )
        .outputFluids(
            Fluid.of('gtceu:carbon_dioxide', 50)  
        )
        .duration(150)
        .EUt(30)

    event.recipes.gtceu.sintering('gtceu:graphite4')
        .itemInputs(
            'kubejs:raw_electrode'
        )
        .inputFluids(
            Fluid.of('gtceu:syngas', 100),
            Fluid.of('gtceu:air', 100)
        )
        .itemOutputs(
            'kubejs:graphite_electrode'
        )
        .outputFluids(
            Fluid.of('gtceu:carbon_dioxide', 50)  
        )
        .duration(150)
        .EUt(30)

    event.recipes.gtceu.sintering('gtceu:cement1')
        .itemInputs(
            'gtceu:clay_dust',
            'gtceu:limestone_dust',
            'gtceu:tiny_gypsum_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:refinery_gas', 10),
            Fluid.of('gtceu:oxygen', 8)
        )
        .itemOutputs(
            'kubejs:hot_cement_clinker'
        )
        .outputFluids(
            Fluid.of('gtceu:carbon_dioxide', 5)  
        )
        .circuit(2)
        .duration(80)
        .EUt(7)

//Electrolytic Cell
        event.recipes.gtceu.advanced_electrolyzation('gtceu:sodium_hydroxide_electrolyzation')
        .inputFluids(
            Fluid.of('minecraft:water', 2000),
            Fluid.of('gtceu:salt_water', 2000)
        )
        .outputFluids(
            Fluid.of('gtceu:chlorine', 1000), 
            Fluid.of('gtceu:hydrogen', 1000),
            Fluid.of('gtceu:diluted_saltwater', 2000),
            Fluid.of('gtceu:sodium_hydroxide_solution', 1000) 
        )
        .notConsumable(
            'gtceu:nickel_rod'
        )
        .notConsumable(
            'kubejs:graphite_electrode'
        )
        .duration(720)
        .EUt(30)

        event.recipes.gtceu.advanced_electrolyzation('gtceu:potassium_hydroxide_electrolyzation')
        .inputFluids(
            Fluid.of('minecraft:water', 2000),
            Fluid.of('gtceu:rock_salt_solution', 2000)
        )
        .outputFluids(
            Fluid.of('gtceu:chlorine', 1000), 
            Fluid.of('gtceu:hydrogen', 1000),
            Fluid.of('gtceu:diluted_rock_salt_solution', 2000),
            Fluid.of('gtceu:potassium_hydroxide_solution', 1000) 
        )
        .notConsumable(
            'gtceu:nickel_rod'
        )
        .notConsumable(
            'kubejs:graphite_electrode'
        )
        .duration(720)
        .EUt(30)

        event.recipes.gtceu.advanced_electrolyzation('gtceu:aluminium_electrolyzation')
        .itemInputs(
            '10x gtceu:alumina_dust',
            'gtceu:aluminium_trifluoride_dust',
            '3x gtceu:coke_dust'
        )
        .itemOutputs(
            '4x gtceu:aluminium_ingot'
        )
        .outputFluids(
            Fluid.of('gtceu:hydrogen_fluoride', 750), 
            Fluid.of('gtceu:carbon_dioxide', 3000)
        )
        .notConsumableFluid(
            Fluid.of('gtceu:cryolite', 2592)
        )
        .duration(300)
        .EUt(40)

        event.recipes.gtceu.advanced_electrolyzation('gtceu:aluminium_ingot_electro')
        .itemInputs(
            '10x gtceu:alumina_dust',
            'gtceu:aluminium_trifluoride_dust',
            '3x gtceu:carbon_dust'
        )
        .itemOutputs(
            '4x gtceu:aluminium_ingot'
        )
        .outputFluids(
            Fluid.of('gtceu:hydrogen_fluoride', 750), 
            Fluid.of('gtceu:carbon_dioxide', 3000)
        )
        .notConsumableFluid(
            Fluid.of('gtceu:cryolite', 2592)
        )
        .duration(300)
        .EUt(40)

//Electric Blast Furnace
        event.recipes.gtceu.electric_blast_furnace('gtceu:alumina_blasting')
        .itemInputs(
            '14x gtceu:aluminium_hydroxide_dust'
        )
        .itemOutputs(
            '5x gtceu:alumina_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:dense_steam', 3000)
        )
        .duration(100)
        .EUt(40)

//Distillation Tower
   event.recipes.gtceu.distillation_tower('gtceu:diethyl_ether_solution_distillation_tower')
        .inputFluids(
            Fluid.of('gtceu:diethyl_ether_solution', 3000)
        )
        .outputFluids(
            Fluid.of('gtceu:sulfuric_acid', 1000),
            Fluid.of('minecraft:water', 1000),
            Fluid.of('gtceu:diethyl_ether', 1000)
        )
        .duration(600)
        .EUt(90)

   event.recipes.gtceu.distillation_tower('gtceu:diluted_rock_salt_solution_distillation_tower')
        .inputFluids(
            Fluid.of('gtceu:diluted_rock_salt_solution', 2000)
        )
        .outputFluids(
            Fluid.of('gtceu:rock_salt_solution', 1000),
            Fluid.of('minecraft:water', 1000)
        )
        .duration(60)
        .EUt(16)


   event.recipes.gtceu.pyrolyse_oven('gtceu:isopropenyl_acetate')
        .inputFluids(
            Fluid.of('gtceu:isopropenyl_acetate', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:acetylacetone', 1000)
        )
        .duration(400)
        .EUt(120)

})