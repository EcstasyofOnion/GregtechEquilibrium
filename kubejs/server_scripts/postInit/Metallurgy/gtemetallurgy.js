ServerEvents.recipes(event => {
    event.replaceOutput(
        { type: 'minecraft:smelting' },
        'minecraft:iron_ingot',
        'gtceu:pig_iron_ingot'
    )
   event.replaceOutput(
        { type: 'minecraft:blasting' },
        'minecraft:iron_ingot',
        'gtceu:pig_iron_ingot'
    )
   event.replaceOutput(
        { type: 'enderio:alloy_smelter' },
        'minecraft:iron_ingot',
        'gtceu:pig_iron_ingot'
    )
    event.replaceOutput(
        { type: 'gtceu:electric_blast_furnace' },
        'minecraft:iron_ingot',
        'gtceu:pig_iron_ingot'
    )
	event.replaceOutput(
		{ type: 'gtceu:primitive_blast_furnace' },
		'minecraft:iron_ingot',
		'gtceu:pig_iron_ingot'
	)
})

ServerEvents.recipes(event => {
    event.smelting('gtceu:magnetic_iron_ingot', 'minecraft:iron_ingot')
    event.smelting('gtceu:wrought_iron_ingot', 'minecraft:iron_ingot')
    event.recipes.gtceu.forge_hammer('gtceu:wrought_iron_ingot')
        .itemInputs(
            'gtceu:pig_iron_ingot'
        )
        .itemOutputs(
            'gtceu:wrought_iron_ingot'
        )
        .duration(20)
        .EUt(7)

    event.recipes.gtceu.primitive_blast_furnace('a1')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '4x gtceu:high_purity_carbon_dust'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '4x gtceu:tiny_ash_dust'
        )
        .duration(480)

    event.recipes.gtceu.primitive_blast_furnace('a2')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '4x gtceu:carbon_dust'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '4x gtceu:tiny_ash_dust'
        )
        .duration(480)

    event.recipes.gtceu.primitive_blast_furnace('a3')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '4x gtceu:coke'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '4x gtceu:tiny_ash_dust'
        )
        .duration(960)

    event.recipes.gtceu.primitive_blast_furnace('a4')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '4x gtceu:coke_dust'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '4x gtceu:tiny_ash_dust'
        )
        .duration(960)

    event.recipes.gtceu.primitive_blast_furnace('a5')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '4x gtceu:anthracite'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '4x gtceu:tiny_ash_dust'
        )
        .duration(960)

    event.recipes.gtceu.primitive_blast_furnace('a6')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '4x gtceu:anthracite_dust'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '4x gtceu:tiny_ash_dust'
        )
        .duration(960)

    event.recipes.gtceu.primitive_blast_furnace('a7')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '8x gtceu:lignite_coke'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '8x gtceu:tiny_ash_dust'
        )
        .duration(1440)

    event.recipes.gtceu.primitive_blast_furnace('a8')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '8x gtceu:lignite_coke_dust'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '8x gtceu:tiny_ash_dust'
        )
        .duration(1440)

    event.recipes.gtceu.primitive_blast_furnace('a9')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '8x minecraft:coal'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '8x gtceu:tiny_dark_ash_dust'
        )
        .duration(1920)

    event.recipes.gtceu.primitive_blast_furnace('a10')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '8x gtceu:coal_dust'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '8x gtceu:tiny_dark_ash_dust'
        )
        .duration(1920)

    event.recipes.gtceu.primitive_blast_furnace('a11')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '8x minecraft:charcoal'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '8x gtceu:tiny_dark_ash_dust'
        )
        .duration(1920)

    event.recipes.gtceu.primitive_blast_furnace('a12')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '8x gtceu:charcoal_dust'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '8x gtceu:tiny_dark_ash_dust'
        )
        .duration(1920)

    event.recipes.gtceu.primitive_blast_furnace('b1')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '4x gtceu:high_purity_carbon_dust'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '4x gtceu:tiny_ash_dust'
        )
        .duration(480)

    event.recipes.gtceu.primitive_blast_furnace('b2')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '4x gtceu:carbon_dust'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '4x gtceu:tiny_ash_dust'
        )
        .duration(480)

    event.recipes.gtceu.primitive_blast_furnace('b3')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '4x gtceu:coke'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '4x gtceu:tiny_ash_dust'
        )
        .duration(960)

    event.recipes.gtceu.primitive_blast_furnace('b4')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '4x gtceu:coke_dust'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '4x gtceu:tiny_ash_dust'
        )
        .duration(960)

    event.recipes.gtceu.primitive_blast_furnace('b5')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '4x gtceu:anthracite'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '4x gtceu:tiny_ash_dust'
        )
        .duration(960)

    event.recipes.gtceu.primitive_blast_furnace('b6')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '4x gtceu:anthracite_dust'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '4x gtceu:tiny_ash_dust'
        )
        .duration(960)

    event.recipes.gtceu.primitive_blast_furnace('b7')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '8x gtceu:lignite_coke'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '8x gtceu:tiny_ash_dust'
        )
        .duration(1440)

    event.recipes.gtceu.primitive_blast_furnace('b8')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '8x gtceu:lignite_coke_dust'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '8x gtceu:tiny_ash_dust'
        )
        .duration(1440)

    event.recipes.gtceu.primitive_blast_furnace('b9')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '8x minecraft:coal'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '8x gtceu:tiny_dark_ash_dust'
        )
        .duration(1920)

    event.recipes.gtceu.primitive_blast_furnace('b10')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '8x gtceu:coal_dust'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '8x gtceu:tiny_dark_ash_dust'
        )
        .duration(1920)

    event.recipes.gtceu.primitive_blast_furnace('b11')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '8x minecraft:charcoal'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '8x gtceu:tiny_dark_ash_dust'
        )
        .duration(1920)

    event.recipes.gtceu.primitive_blast_furnace('b12')
        .itemInputs(
            '2x gtceu:magnetite_dust',
            '8x gtceu:charcoal_dust'
        )
        .itemOutputs(
            '6x gtceu:pig_iron_ingot',
            '8x gtceu:tiny_dark_ash_dust'
        )
        .duration(1920)

})