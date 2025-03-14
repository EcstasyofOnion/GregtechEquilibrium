ServerEvents.recipes(event => {
	event.remove({ id: 'gtceu:chemical_reactor/polyethylene_from_oxygen' })
    event.remove({ id: 'gtceu:chemical_reactor/polyethylene_from_air' })
    event.remove({ id: 'gtceu:large_chemical_reactor/polyethylene_from_oxygen' })
    event.remove({ id: 'gtceu:large_chemical_reactor/polyethylene_from_air' })
    event.remove({ id: 'gtceu:large_chemical_reactor/polyethylene_from_tetrachloride_oxygen' })
    event.remove({ id: 'gtceu:large_chemical_reactor/polyethylene_from_tetrachloride_air' })
    event.remove({ id: 'gtceu:arc_furnace/arc_polyethylene_block' })
})


ServerEvents.recipes(event => {
    event.recipes.gtceu.arc_furnace('gtceu:polyethylene_block_arc')
       .inputFluids(
            Fluid.of('gtceu:oxygen', 13)
        )
        .itemInputs(
            'gtceu:polyethylene_block'
        )
        .itemOutputs(
            '10x gtceu:tiny_ash_dust'
        )
        .duration(8)
        .EUt(30)

    event.recipes.gtceu.stirred_tank_reaction('gtceu:stirred_ethylene1')
        .inputFluids(
            Fluid.of('gtceu:ethanol_water_azeotrope', 100),
            Fluid.of('gtceu:hot_sulfuric_acid', 90)
        )
        .outputFluids(
            Fluid.of('gtceu:ethylene', 90),
            Fluid.of('gtceu:diluted_sulfuric_acid', 180)
        )
        .duration(5)
        .EUt(30)

    event.recipes.gtceu.stirred_tank_reaction('gtceu:stirred_ethylene2')
        .inputFluids(
            Fluid.of('gtceu:ethanol', 100),
            Fluid.of('gtceu:hot_sulfuric_acid', 100)
        )
        .outputFluids(
            Fluid.of('gtceu:ethylene', 100),
            Fluid.of('gtceu:diluted_sulfuric_acid', 200)
        )
        .duration(5)
        .EUt(30)

	    event.recipes.gtceu.polymerization('gtceu:polyethylene1')
        .inputFluids(
            Fluid.of('gtceu:ethylene', 2000)
        )
        .itemOutputs(
            'gtceu:polyethylene_dust'
        )
        .circuit(1)
        .duration(300)
        .EUt(30)

	    event.recipes.gtceu.polymerization('gtceu:polyethylene2')
        .inputFluids(
            Fluid.of('gtceu:ethylene', 1500)
        )
        .itemOutputs(
            'gtceu:polyethylene_dust'
        )
        .notConsumable('gtceu:philips_catalyst_dust')
        .circuit(2)
        .duration(150)
        .EUt(30)

	    event.recipes.gtceu.polymerization('gtceu:polyethylene3')
        .inputFluids(
            Fluid.of('gtceu:ethylene', 1250)
        )
        .itemOutputs(
            'gtceu:polyethylene_dust'
        )
        .notConsumable('gtceu:ziegler_natta_catalyst_dust')
        .circuit(3)
        .duration(75)
        .EUt(30)

	    event.recipes.gtceu.polymerization('gtceu:polyethylene4')
        .inputFluids(
            Fluid.of('gtceu:ethylene', 1000)
        )
        .itemOutputs(
            'gtceu:polyethylene_dust'
        )
        .notConsumable('gtceu:kraminsky_catalyst_dust')
        .circuit(4)
        .duration(30)
        .EUt(30)
})