ServerEvents.recipes(event => {
	event.remove({ id: 'minecraft:crafting_table' })
	event.remove({ id: 'aether:skyroot_crafting_table' })
	event.remove({ id: 'deep_aether:skyroot_crafting_table' })
})


ServerEvents.recipes(event => {
	event.shaped(
 	 Item.of('minecraft:crafting_table'),
 	 [
 	   'AA',
 	   'BB',
  	],
  	{
  	  A: 'minecraft:flint',
  	  B: '#forge:logs'
 	 }
	)
})