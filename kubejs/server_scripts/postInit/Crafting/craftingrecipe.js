ServerEvents.recipes(event => {
	event.remove({ id: 'gtceu:shaped/vacuum_tube' })
    event.remove({ id: 'gtceu:shaped/electric_blast_furnace' })
    event.remove({ id: 'gtceu:shaped/pyrolyse_oven' })
    event.remove({ id: 'gtceu:shaped/wood_tank_valve' })
})

ServerEvents.recipes(event => {
	//Machine Recipes
	event.shaped(
 	 Item.of('gtceu:lp_steam_vacuum_chamber'), [
 	 	'AAA',
 	 	'BCD',
 	 	'AAA'
  	],
  	{
  	  A: 'gtceu:bronze_small_fluid_pipe',
  	  B: 'gtceu:ulv_electric_pump',
  	  C: 'gtceu:bronze_machine_casing',
  	  D: '#forge:glass'
 	})

	event.shaped(
 		Item.of('gtceu:hp_steam_vacuum_chamber'), [
 		'ABA',
 		'BCB',
 		'DBD'
  	],
  	{
  	  A: 'gtceu:steel_plate',
  	  B: 'gtceu:tin_alloy_small_fluid_pipe',
  	  C: 'gtceu:lp_steam_vacuum_chamber',
  	  D: 'gtceu:wrought_iron_plate'
 	})

 	event.shaped(
 		Item.of('gtceu:lv_vacuum_chamber'), [
 		'AAA',
 		'BCB',
 		'DED'
  	],
  	{
  	  A: 'gtceu:steel_plate',
  	  B: 'gtceu:lv_electric_pump',
  	  C: 'gtceu:lv_machine_hull',
  	  D: 'gtceu:tin_single_cable',
  	  E: '#gtceu:circuits/lv'
 	})

 	event.shaped(
 		Item.of('gtceu:mv_vacuum_chamber'), [
 		'AAA',
 		'BCB',
 		'DED'
  	],
  	{
  	  A: 'gtceu:aluminium_plate',
  	  B: 'gtceu:mv_electric_pump',
  	  C: 'gtceu:mv_machine_hull',
  	  D: 'gtceu:copper_single_cable',
  	  E: '#gtceu:circuits/mv'
 	})

 	event.shaped(
 		Item.of('gtceu:hv_vacuum_chamber'), [
 		'AAA',
 		'BCB',
 		'DED'
  	],
  	{
  	  A: 'gtceu:stainless_steel_plate',
  	  B: 'gtceu:hv_electric_pump',
  	  C: 'gtceu:hv_machine_hull',
  	  D: 'gtceu:gold_single_cable',
  	  E: '#gtceu:circuits/hv'
 	})

    event.shaped(
     Item.of('gtceu:lp_steam_roaster'), [
        'ABA',
        'ACA',
        'AAA'
    ],
    {
      A: 'gtceu:bronze_small_fluid_pipe',
      B: 'gtceu:bronze_rotor',
      C: 'gtceu:bronze_brick_casing',
      D: 'minecraft:furnace'
    })

    event.shaped(
     Item.of('gtceu:hp_steam_roaster'), [
        'AAA',
        'BCB',
        'DDD'
    ],
    {
      A: 'gtceu:wrought_iron_plate',
      B: 'gtceu:steel_plate',
      C: 'gtceu:lp_steam_roaster',
      D: 'gtceu:tin_alloy_small_fluid_pipe'
    })

    event.shaped(
        Item.of('gtceu:lv_roaster'), [
        'ABA',
        'CDC',
        'ECE'
    ],
    {
      A: '#gtceu:circuits/lv',
      B: 'gtceu:iron_rotor',
      C: 'gtceu:copper_quadruple_wire',
      D: 'gtceu:lv_machine_hull',
      E: '#gtceu:tin_single_cable'
    })


    event.shaped(
        Item.of('gtceu:mv_roaster'), [
        'ABA',
        'CDC',
        'ECE'
    ],
    {
      A: '#gtceu:circuits/mv',
      B: 'gtceu:aluminium_rotor',
      C: 'gtceu:cupronickel_quadruple_wire',
      D: 'gtceu:mv_machine_hull',
      E: '#gtceu:copper_single_cable'
    })

    event.shaped(
        Item.of('gtceu:hv_roaster'), [
        'ABA',
        'CDC',
        'ECE'
    ],
    {
      A: '#gtceu:circuits/hv',
      B: 'gtceu:stainless_steel_rotor',
      C: 'gtceu:kanthal_quadruple_wire',
      D: 'gtceu:hv_machine_hull',
      E: '#gtceu:gold_single_cable'
    })

    event.shaped(
        Item.of('gtceu:sintering_oven'), [
        'ABC',
        'DED',
        'FCF'
    ],
    {
      A: 'gtceu:lv_electric_motor',
      B: 'gtceu:tin_rotor',
      C: 'gtceu:cupronickel_quadruple_wire',
      D: '#gtceu:circuits/lv',
      E: 'kubejs:sintering_bricks',
      F: 'gtceu:lv_electric_pump'
    })

    event.shaped(
        Item.of('gtceu:wood_wall'), [
        'A A',
        'BCD',
        'A A'
    ],
    {
      A: 'gtceu:treated_wood_planks',
      B: '#forge:tools/saws',
      C: 'gtceu:lead_plate',
      D: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/saws')

    event.shaped(
        Item.of('gtceu:wooden_multiblock_tank'), [
        ' A ',
        'BCD',
        ' A '
    ],
    {
      A: 'gtceu:lead_ring',
      B: '#forge:tools/mallets',
      C: 'gtceu:wood_wall',
      D: '#forge:tools/saws'
    }).damageIngredient('#forge:tools/mallets').damageIngredient('#forge:tools/saws')

    event.shaped(
        Item.of('gtceu:wooden_tank_valve'), [
        ' A ',
        'BCD',
        ' E '
    ],
    {
      A: 'gtceu:lead_ring',
      B: '#forge:tools/mallets',
      C: 'gtceu:wood_wall',
      D: '#forge:tools/saws',
      E: 'gtceu:lead_rotor'
    }).damageIngredient('#forge:tools/mallets').damageIngredient('#forge:tools/saws')

    event.shaped(
        Item.of('6x kubejs:structural_casing'), [
        'ABC',
        'B B',
        'DBA'
    ],
    {
      A: 'gtceu:wrought_iron_screw',
      B: 'gtceu:wrought_iron_plate',
      C: '#forge:tools/hammers',
      D: '#forge:tools/screwdrivers'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/screwdrivers')

    event.shaped(
        Item.of('kubejs:sintering_bricks'), [
        ' A ',
        'BCB'
    ],
    {
      A: '#forge:tools/hammers',
      B: 'gtceu:steel_foil',
      C: 'gtceu:firebricks'
    }).damageIngredient('#forge:tools/hammers')

    event.shaped(
        Item.of('gtceu:electric_blast_furnace'), [
        'AAA',
        'BCB',
        'DBD'
    ],
    {
      A: 'gtceu:lv_electric_furnace',
      B: '#gtceu:circuits/lv',
      C: 'gtceu:heatproof_machine_casing',
      D: 'gtceu:tin_single_cable'
    })

    event.shaped(
        Item.of('gtceu:pyrolyse_oven'), [
        'ABC',
        'BDB',
        'AEC'
    ],
    {
      A: 'gtceu:lv_electric_piston',
      B: '#gtceu:circuits/lv',
      C: 'gtceu:cupronickel_quadruple_wire',
      D: 'gtceu:lv_machine_hull',
      E: 'gtceu:lv_electric_pump'
    })

 	//Item Recipes

    //Components
 	event.shaped(
 		Item.of('4x kubejs:vacuum_tube_components'), [
 		' A ',
 		'BCB',
 		'DBD'
  	],
  	{
  	  A: 'gtceu:fine_red_alloy_wire',
  	  B: 'gtceu:copper_single_wire',
  	  C: 'gtceu:steel_ring',
  	  D: 'gtceu:steel_bolt'
 	})

 	event.shaped(
 		Item.of('6x kubejs:vacuum_tube_components'), [
 		' A ',
 		'BCB',
 		'DBD'
  	],
  	{
  	  A: 'gtceu:fine_red_alloy_wire',
  	  B: 'gtceu:annealed_copper_single_wire',
  	  C: 'gtceu:steel_ring',
  	  D: 'gtceu:steel_bolt'
 	})

 	//Batteries
 	event.shaped(
 		Item.of('kubejs:lead_anode'), [
 		' AB'
  	],
  	{
  	  A: 'gtceu:lead_plate',
  	  B: 'gtceu:tin_single_cable'
 	})

 	event.shaped(
 		Item.of('kubejs:lead_cathode'), [
 		'AB '
  	],
  	{
  	  A: 'gtceu:tin_single_cable',
  	  B: 'gtceu:lead_plate'
 	})

	event.shaped(
 		Item.of('gtceu:small_lead_battery'), [
 		'ABA',
 		'CDE',
 		'AAA'
  	],
  	{
  	  A: 'gtceu:lead_plate',
  	  B: 'gtceu:tin_single_cable',
  	  C: 'kubejs:lead_cathode',
  	  D: 'gtceu:sulfuric_acid_bucket',
  	  E: 'kubejs:lead_anode'
 	})
})