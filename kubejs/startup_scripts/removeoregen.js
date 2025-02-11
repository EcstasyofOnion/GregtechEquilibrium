WorldgenEvents.remove(event => {
  event.removeOres(props => {
    // much like ADDING ores, this supports filtering by worldgen layer...
    props.worldgenLayer = 'underground_ores'
    // BlockStatePredicate to remove iron and copper ores from the given biomes
    // Note tags may NOT be used here, unfortunately...
    props.blocks = [
      'railcraft:zinc_ore', 'railcraft:deepslate_zinc_ore', 
      'railcraft:silver_ore', 'railcraft:deepslate_silver_ore', 
      'railcraft:sulfur_ore', 'railcraft:deepslate_sulfur_ore', 
      'railcraft:lead_ore', 'railcraft:deepslate_lead_ore',
      'railcraft:tin_ore', 'railcraft:deepslate_tin_ore',
      'railcraft:nickel_ore', 'railcraft:deepslate_nickel_ore',
      'railcraft:saltpeter_ore',
      'blocksyouneed_luna:aquatrine_sand_ore', 'blocksyouneed_luna:aquatrine_sandstone_ore',
      'blocksyouneed_luna:sodalite',
      'blocksyouneed_luna:shale',
      'blocksyouneed_luna:achoria',
      'blocksyouneed_luna:slime_achoria',
      'blocksyouneed_luna:moonstone_uc',
      'twigs:rhyolite',
      'mcore:deepslate_titanium_ore',
      'croptopia:salt_ore',
      'ytech:nether_iron_ore',
      'ytech:nether_copper_ore',
      'ytech:galena_ore', 'ytech:deepslate_galena_ore', 'ytech:nether_galena_ore',
      'ytech:cassiterite_ore', 'ytech:deepslate_cassiterite_ore', 'ytech:nether_cassiterite_ore']
  })
})
