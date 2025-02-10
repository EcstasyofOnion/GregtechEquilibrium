ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:electrolyzer/water_electrolysis' })
    event.remove({ id: 'gtceu:electrolyzer/acetic_acid_electrolysis' })
    event.remove({ id: 'gtceu:electrolyzer/chloromethane_electrolysis' })
    event.remove({ id: 'gtceu:chemical_reactor/indium_concentrate_seperation' })
    event.remove({ id: 'gtceu:chemical_reactor/indium_concentrate_seperation_4x' })
    event.remove({ id: 'gtceu:chemical_bath/tungstic_acid_from_tungstate' })
})


ServerEvents.recipes(event => {
     //Vacuum Chamber
    event.recipes.gtceu.electrolyzer('gtceu:water_electrolysis')
        .inputFluids(
            Fluid.of('minecraft:water', 1000)
        )
        .outputFluids(
            Fluid.of('gtceu:hydrogen', 2000),
            Fluid.of('gtceu:oxygen', 1000) 
        )
        .notConsumable('gtceu:iron_rod')
        .notConsumable('gtceu:nickel_rod')
        .duration(120)
        .EUt(120)
})