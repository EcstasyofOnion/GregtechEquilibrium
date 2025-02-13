ServerEvents.recipes(event => {
	event.remove([{ type: 'minecraft:smelting', output: 'minecraft:iron_ingot' }, { type: 'minecraft:blasting', output: 'minecraft:iron_ingot' }])
})

ServerEvents.recipes(event => {
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
    event.smelting('minecraft:iron_ingot1')
        .itemInputs(
            'gtceu:magnetic_iron_ingot'
        )
        .itemOutputs(
            'minecraft:iron_ingot'
        )

    event.smelting('minecraft:iron_ingot2')
        .itemInputs(
            'gtceu:wrought_iron_ingot'
        )
        .itemOutputs(
            'minecraft:iron_ingot'
        )

    event.recipes.gtceu.forge_hammer('gtceu:wrought_iron_ingot')
        .itemInputs(
            'gtceu:pig_iron_ingot'
        )
        .itemOutputs(
            'gtceu:wrought_iron_ingot'
        )
        .duration(20)
        .EUt(7)

})