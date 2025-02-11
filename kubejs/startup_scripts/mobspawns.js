WorldgenEvents.remove(event => {
  event.removeSpawnsByID(spawns => {
    spawns.entities.values = [
      'ytech:deer',
      'ytech:fowl',
      'ytech:saber_tooth_tiger',
      'ytech:mouflon',
      'ytech:aurochs',
      'ytech:terror_bird',

      'infectious:disco_zombie',
      'infectious:beehive_zombie',
      'infectious:zombie_cook',
      'infectious:zombie_climber',
      'infectious:zombie_soldier',
      'infectious:zombie_painter',
      'infectious:deep_sea_diver_zombie',
      'infectious:zombie_diver',
      'infectious:pumpkin_zombie',
      'infectious:iron_door_zombie',
      'infectious:old_zombie',
      'infectious:fishing_zombie',
      'infectious:barrel_zombie',
      'infectious:balloon_zombie',
      'infectious:baseball_bat_zombie']
  })
})