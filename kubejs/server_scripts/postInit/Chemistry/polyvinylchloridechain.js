ServerEvents.recipes(event => {
    event.recipes.gtceu.stirred_tank_reaction('gtceu:vinyl_chloride1')
        .inputFluids(
            Fluid.of('gtceu:ethylene', 50),
            Fluid.of('gtceu:chlorine', 100)
        )
        .outputFluids(
            Fluid.of('gtceu:vinyl_chloride', 50),
            Fluid.of('gtceu:hydrogen_chloride', 50)
        ) 
        .duration(5)
        .EUt(30)

    event.recipes.gtceu.stirred_tank_reaction('gtceu:vinyl_chloride2')
        .inputFluids(
            Fluid.of('gtceu:oxygen', 50),
            Fluid.of('gtceu:hydrogen_chloride', 50),
            Fluid.of('gtceu:ethylene', 50)
        )
        .outputFluids(
            Fluid.of('gtceu:vinyl_chloride', 50),
            Fluid.of('minecraft:water', 50)
        ) 
        .duration(10)
        .EUt(30)   

    event.recipes.gtceu.stirred_tank_reaction('gtceu:vinyl_chloride3')
        .inputFluids(
            Fluid.of('gtceu:chlorine', 200),
            Fluid.of('gtceu:ethane', 50)
        )
        .outputFluids(
            Fluid.of('gtceu:vinyl_chloride', 50),
            Fluid.of('gtceu:hydrogen_chloride', 150)
        ) 
        .duration(10)
        .EUt(30)

    event.recipes.gtceu.stirred_tank_reaction('gtceu:vinyl_chloride4')
        .inputFluids(
            Fluid.of('gtceu:oxygen', 100),
            Fluid.of('gtceu:hydrogen_chloride', 50),
            Fluid.of('gtceu:ethane', 50)
        )
        .outputFluids(
            Fluid.of('gtceu:vinyl_chloride', 50),
            Fluid.of('minecraft:water', 100)
        ) 
        .duration(10)
        .EUt(30)   

    event.recipes.gtceu.stirred_tank_reaction('gtceu:potassium_bisulfate_solution')
        .inputFluids(
            Fluid.of('gtceu:sulfuric_acid', 50),
            Fluid.of('gtceu:rock_salt_solution', 50) 
        )
        .outputFluids(
            Fluid.of('gtceu:hydrogen_chloride', 50),
            Fluid.of('gtceu:potassium_bisulfate_solution', 50)
        ) 
        .duration(1)
        .EUt(30)   

    event.recipes.gtceu.trickle_bed_reaction('gtceu:vinyl_chloride_trickle')
        .inputFluids(
            Fluid.of('gtceu:hydrogen_chloride', 50),
            Fluid.of('gtceu:acetylene', 50)
        )
        .outputFluids(
            Fluid.of('gtceu:vinyl_chloride', 50)
        ) 
        .notConsumable('gtceu:mercury_ii_chloride_dust')
        .duration(5)
        .EUt(30)   
            
    event.recipes.gtceu.autoclave('gtceu:vinyl_chloride_suspension')
        .inputFluids(
            Fluid.of('minecraft:water', 1000),
            Fluid.of('gtceu:vinyl_chloride', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:vinyl_chloride_suspension', 2000)
        )
        .duration(160)
        .EUt(30)

    event.recipes.gtceu.distillery('gtceu:potassium_bisulfate_dust_distill')
        .inputFluids(
            Fluid.of('gtceu:potassium_bisulfate_solution', 1000)
        )
        .itemOutputs(
            '7x gtceu:potassium_bisulfate_dust'
        )
        .outputFluids(
            Fluid.of('minecraft:water', 1000)
        )
        .duration(60)
        .EUt(30)

    event.recipes.gtceu.advanced_electrolyzation('gtceu:potassium_persulfate_dust')
        .itemInputs(
            'gtceu:tiny_potassium_persulfate_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:potassium_bisulfate', 2016)
        )
        .itemOutputs(
            '12x gtceu:potassium_persulfate_dust'
        )
        .outputFluids(
            Fluid.of('gtceu:hydrogen', 2000)
        )
        .notConsumable('kubejs:graphite_electrode')
        .notConsumable('gtceu:iron_rod')
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.polymerization('gtceu:polyvinyl_chloride_suspension')
        .itemInputs(
            'gtceu:tiny_potassium_persulfate_dust'
        )
        .inputFluids(
            Fluid.of('gtceu:vinyl_chloride_suspension', 2000)
        )
        .outputFluids(
            Fluid.of('gtceu:polyvinyl_chloride_suspension', 2000)
        )
        .duration(300)
        .EUt(60)

    event.recipes.gtceu.drying('gtceu:pvc_pulp')
        .inputFluids(
            Fluid.of('gtceu:polyvinyl_chloride_suspension', 2000)
        )
        .itemOutputs(
            'gtceu:polyvinyl_chloride_dust'
        )
        .outputFluids(
            Fluid.of('minecraft:water', 1000)
        )
        .duration(260)
        .EUt(30)
})