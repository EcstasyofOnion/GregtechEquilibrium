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
        Item.of('gtceu:ev_vacuum_chamber'), [
        'AAA',
        'BCB',
        'DED'
    ],
    {
      A: 'gtceu:titanium_plate',
      B: 'gtceu:ev_electric_pump',
      C: 'gtceu:ev_machine_hull',
      D: 'gtceu:aluminium_single_cable',
      E: '#gtceu:circuits/ev'
    })

    event.shaped(
        Item.of('gtceu:iv_vacuum_chamber'), [
        'AAA',
        'BCB',
        'DED'
    ],
    {
      A: 'gtceu:tungsten_steel_plate',
      B: 'gtceu:iv_electric_pump',
      C: 'gtceu:iv_machine_hull',
      D: 'gtceu:platinum_single_cable',
      E: '#gtceu:circuits/iv'
    })

    event.shaped(
        Item.of('gtceu:luv_vacuum_chamber'), [
        'AAA',
        'BCB',
        'DED'
    ],
    {
      A: 'gtceu:rhodium_plated_palladium_plate',
      B: 'gtceu:luv_electric_pump',
      C: 'gtceu:luv_machine_hull',
      D: 'gtceu:niobium_titanium_single_cable',
      E: '#gtceu:circuits/luv'
    })

    event.shaped(
        Item.of('gtceu:zpm_vacuum_chamber'), [
        'AAA',
        'BCB',
        'DED'
    ],
    {
      A: 'gtceu:naquadah_alloy_plate',
      B: 'gtceu:zpm_electric_pump',
      C: 'gtceu:zpm_machine_hull',
      D: 'gtceu:vanadium_gallium_single_cable',
      E: '#gtceu:circuits/zpm'
    })

    event.shaped(
        Item.of('gtceu:uv_vacuum_chamber'), [
        'AAA',
        'BCB',
        'DED'
    ],
    {
      A: 'gtceu:darmstadium_plate',
      B: 'gtceu:uv_electric_pump',
      C: 'gtceu:uv_machine_hull',
      D: 'gtceu:yttrium_barium_cuprate_single_cable',
      E: '#gtceu:circuits/uv'
    })

    event.shaped(
        Item.of('gtceu:uhv_vacuum_chamber'), [
        'AAA',
        'BCB',
        'DED'
    ],
    {
      A: 'gtceu:neutronium_plate',
      B: 'gtceu:uhv_electric_pump',
      C: 'gtceu:uhv_machine_hull',
      D: 'gtceu:europium_single_cable',
      E: '#gtceu:circuits/uhv'
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
      E: 'gtceu:tin_single_cable'
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
      E: 'gtceu:copper_single_cable'
    })

    event.shaped(
        Item.of('gtceu:hv_roaster'), [
        'ABA',
        'CDC',
        'ECE'
    ],
    {
      A: '#gtceu:circuits/hv',
      B: 'gtceu:steel_rotor',
      C: 'gtceu:kanthal_quadruple_wire',
      D: 'gtceu:hv_machine_hull',
      E: 'gtceu:gold_single_cable'
    })

    event.shaped(
        Item.of('gtceu:ev_roaster'), [
        'ABA',
        'CDC',
        'ECE'
    ],
    {
      A: '#gtceu:circuits/ev',
      B: 'gtceu:stainless_steel_rotor',
      C: 'gtceu:nichrome_quadruple_wire',
      D: 'gtceu:ev_machine_hull',
      E: 'gtceu:aluminium_single_cable'
    })

    event.shaped(
        Item.of('gtceu:iv_roaster'), [
        'ABA',
        'CDC',
        'ECE'
    ],
    {
      A: '#gtceu:circuits/iv',
      B: 'gtceu:tungsten_steel_rotor',
      C: 'gtceu:tungsten_steel_quadruple_wire',
      D: 'gtceu:iv_machine_hull',
      E: 'gtceu:platinum_single_cable'
    })

    event.shaped(
        Item.of('gtceu:luv_roaster'), [
        'ABA',
        'CDC',
        'ECE'
    ],
    {
      A: '#gtceu:circuits/luv',
      B: 'gtceu:rhodium_plated_palladium_rotor',
      C: 'gtceu:hssg_quadruple_wire',
      D: 'gtceu:luv_machine_hull',
      E: 'gtceu:niobium_titanium_single_cable'
    })

    event.shaped(
        Item.of('gtceu:zpm_roaster'), [
        'ABA',
        'CDC',
        'ECE'
    ],
    {
      A: '#gtceu:circuits/zpm',
      B: 'gtceu:naquadah_alloy_rotor',
      C: 'gtceu:naquadah_quadruple_wire',
      D: 'gtceu:zpm_machine_hull',
      E: 'gtceu:vanadium_gallium_single_cable'
    })

    event.shaped(
        Item.of('gtceu:uv_roaster'), [
        'ABA',
        'CDC',
        'ECE'
    ],
    {
      A: '#gtceu:circuits/uv',
      B: 'gtceu:darmstadium_rotor',
      C: 'gtceu:naquadah_alloy_quadruple_wire',
      D: 'gtceu:uv_machine_hull',
      E: 'gtceu:yttrium_barium_cuprate_single_cable'
    })

    event.shaped(
        Item.of('gtceu:uhv_roaster'), [
        'ABA',
        'CDC',
        'ECE'
    ],
    {
      A: '#gtceu:circuits/uhv',
      B: 'gtceu:darmstadium_rotor',
      C: 'gtceu:ruthenium_trinium_americium_neutronate_quadruple_wire',
      D: 'gtceu:uhv_machine_hull',
      E: 'gtceu:europium_single_cable'
    })

    event.shaped(
        Item.of('gtceu:lv_batch_reactor'), [
        'ABA',
        'CDC',
        'EAE'
    ],
    {
      A: 'gtceu:tin_single_cable',
      B: 'gtceu:lv_electric_pump',
      C: '#forge:glass',
      D: 'gtceu:lv_machine_hull',
      E: '#gtceu:circuits/lv'
    })

    event.shaped(
        Item.of('gtceu:mv_batch_reactor'), [
        'ABA',
        'CDC',
        'EAE'
    ],
    {
      A: 'gtceu:copper_single_cable',
      B: 'gtceu:mv_electric_pump',
      C: '#forge:glass',
      D: 'gtceu:mv_machine_hull',
      E: '#gtceu:circuits/mv'
    })

    event.shaped(
        Item.of('gtceu:hv_batch_reactor'), [
        'ABA',
        'CDC',
        'EAE'
    ],
    {
      A: 'gtceu:gold_single_cable',
      B: 'gtceu:hv_electric_pump',
      C: 'gtceu:polyethylene_fluid_pipe',
      D: 'gtceu:hv_machine_hull',
      E: '#gtceu:circuits/hv'
    })

    event.shaped(
        Item.of('gtceu:ev_batch_reactor'), [
        'ABA',
        'CDC',
        'EAE'
    ],
    {
      A: 'gtceu:aluminium_single_cable',
      B: 'gtceu:ev_electric_pump',
      C: 'gtceu:polyethylene_large_fluid_pipe',
      D: 'gtceu:ev_machine_hull',
      E: '#gtceu:circuits/ev'
    })

    event.shaped(
        Item.of('gtceu:iv_batch_reactor'), [
        'ABA',
        'CDC',
        'EAE'
    ],
    {
      A: 'gtceu:platinum_single_cable',
      B: 'gtceu:iv_electric_pump',
      C: 'gtceu:polyethylene_huge_fluid_pipe',
      D: 'gtceu:iv_machine_hull',
      E: '#gtceu:circuits/iv'
    })

    event.shaped(
        Item.of('gtceu:luv_batch_reactor'), [
        'ABA',
        'CDC',
        'EAE'
    ],
    {
      A: 'gtceu:niobium_titanium_single_cable',
      B: 'gtceu:luv_electric_pump',
      C: 'gtceu:polytetrafluoroethylene_fluid_pipe',
      D: 'gtceu:luv_machine_hull',
      E: '#gtceu:circuits/luv'
    })

    event.shaped(
        Item.of('gtceu:zpm_batch_reactor'), [
        'ABA',
        'CDC',
        'EAE'
    ],
    {
      A: 'gtceu:vanadium_gallium_single_cable',
      B: 'gtceu:zpm_electric_pump',
      C: 'gtceu:polytetrafluoroethylene_large_fluid_pipe',
      D: 'gtceu:zpm_machine_hull',
      E: '#gtceu:circuits/zpm'
    })

    event.shaped(
        Item.of('gtceu:uv_batch_reactor'), [
        'ABA',
        'CDC',
        'EAE'
    ],
    {
      A: 'gtceu:yttrium_barium_single_cable',
      B: 'gtceu:uv_electric_pump',
      C: 'gtceu:polytetrafluoroethylene_huge__fluid_pipe',
      D: 'gtceu:uv_machine_hull',
      E: '#gtceu:circuits/uv'
    })

    event.shaped(
        Item.of('gtceu:uhv_batch_reactor'), [
        'ABA',
        'CDC',
        'EAE'
    ],
    {
      A: 'gtceu:europium_single_cable',
      B: 'gtceu:uhv_electric_pump',
      C: 'gtceu:polybenzimidazole_fluid_pipe',
      D: 'gtceu:uhv_machine_hull',
      E: '#gtceu:circuits/uhv'
    })

    event.shaped(
        Item.of('gtceu:lv_bubble_column_reactor'), [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
      A: '#forge:glass',
      B: 'gtceu:steel_large_fluid_pipe',
      C: 'gtceu:tin_single_cable',
      D: 'gtceu:lv_electric_pump',
      E: '#gtceu:circuits/lv',
      F: 'gtceu:lv_machine_hull'
    })

    event.shaped(
        Item.of('gtceu:mv_bubble_column_reactor'), [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
      A: '#forge:glass',
      B: 'gtceu:aluminium_large_fluid_pipe',
      C: 'gtceu:copper_single_cable',
      D: 'gtceu:mv_electric_pump',
      E: '#gtceu:circuits/mv',
      F: 'gtceu:mv_machine_hull'
    })

    event.shaped(
        Item.of('gtceu:hv_bubble_column_reactor'), [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
      A: 'gtceu:polyethylene_fluid_pipe',
      B: 'gtceu:stainless_steel_large_fluid_pipe',
      C: 'gtceu:gold_single_cable',
      D: 'gtceu:hv_electric_pump',
      E: '#gtceu:circuits/hv',
      F: 'gtceu:hv_machine_hull'
    })

    event.shaped(
        Item.of('gtceu:ev_bubble_column_reactor'), [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
      A: 'gtceu:polyethylene_large_fluid_pipe',
      B: 'gtceu:titanium_large_fluid_pipe',
      C: 'gtceu:aluminium_single_cable',
      D: 'gtceu:ev_electric_pump',
      E: '#gtceu:circuits/ev',
      F: 'gtceu:ev_machine_hull'
    })

    event.shaped(
        Item.of('gtceu:iv_bubble_column_reactor'), [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
      A: 'gtceu:polyethylene_huge_fluid_pipe',
      B: 'gtceu:tungsten_carbide_large_fluid_pipe',
      C: 'gtceu:platinum_single_cable',
      D: 'gtceu:iv_electric_pump',
      E: '#gtceu:circuits/iv',
      F: 'gtceu:iv_machine_hull'
    })

    event.shaped(
        Item.of('gtceu:luv_bubble_column_reactor'), [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
      A: 'gtceu:polytetrafluoroethylene_fluid_pipe',
      B: 'gtceu:niobium_titanium_large_fluid_pipe',
      C: 'gtceu:niobium_titanium_single_cable',
      D: 'gtceu:luv_electric_pump',
      E: '#gtceu:circuits/luv',
      F: 'gtceu:luv_machine_hull'
    })

    event.shaped(
        Item.of('gtceu:zpm_bubble_column_reactor'), [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
      A: 'gtceu:polytetrafluoroethylene_large_fluid_pipe',
      B: 'gtceu:naquadah_large_fluid_pipe',
      C: 'gtceu:vanadium_gallium_single_cable',
      D: 'gtceu:zpm_electric_pump',
      E: '#gtceu:circuits/zpm',
      F: 'gtceu:zpm_machine_hull'
    })

    event.shaped(
        Item.of('gtceu:uv_bubble_column_reactor'), [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
      A: 'gtceu:polytetrafluoroethylene_huge_fluid_pipe',
      B: 'gtceu:duranium_large_fluid_pipe',
      C: 'gtceu:yttrium_barium_single_cable',
      D: 'gtceu:uv_electric_pump',
      E: '#gtceu:circuits/uv',
      F: 'gtceu:uv_machine_hull'
    })

    event.shaped(
        Item.of('gtceu:uhv_bubble_column_reactor'), [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
      A: 'gtceu:polybenzimidazole_fluid_pipe',
      B: 'gtceu:neutronium_large_fluid_pipe',
      C: 'gtceu:europium_single_cable',
      D: 'gtceu:uhv_electric_pump',
      E: '#gtceu:circuits/uhv',
      F: 'gtceu:uhv_machine_hull'
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