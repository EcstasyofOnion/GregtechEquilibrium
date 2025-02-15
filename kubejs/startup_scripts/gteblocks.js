StartupEvents.registry('block', event => {
  event.create('structural_casing') // Create a new block
    .displayName('Structural Casing') // Set a custom name
    .soundType('lantern') // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    .textureAll('kubejs:block/structural_casing')
})
StartupEvents.registry('block', event => {
  event.create('sintering_bricks') // Create a new block
    .displayName('Sintering Bricks') // Set a custom name
    .soundType('stone') // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
    .textureAll('kubejs:block/sintering_bricks')
})
StartupEvents.registry('block', event => {
  event.create('steel_turbine_block') // Create a new block
    .displayName('Steel Turbine Block') // Set a custom name
    .soundType('metal') // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
})
StartupEvents.registry('block', event => {
  event.create('copper_alternator_coil') // Create a new block
    .displayName('Copper Alternator Coil') // Set a custom name
    .soundType('metal') // Set a material (affects the sounds and some properties)
    .hardness(1.0) // Set hardness (affects mining time)
    .resistance(1.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
    .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
})