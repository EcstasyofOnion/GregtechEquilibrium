const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');

GTCEuStartupEvents.registry('gtceu:material', event => {
    GTMaterials.Nickel.addFlags(GTMaterialFlags.GENERATE_ROD);
});

GTCEuStartupEvents.registry('gtceu:material', event => {
    addFluid(GTMaterials.SiliconDioxide, $FluidStorageKeys.LIQUID);
})

let addFluid = (mat, key) => {
    let prop = new $FluidProperty();
    prop.getStorage().enqueueRegistration(key, new $FluidBuilder());
    mat.setProperty(PropertyKey.FLUID, prop);
};

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('smithsonite')
        .dust()
        .components('1x zinc', '1x carbon', '3x oxygen')
        .ore()
        .color(0x377b82)

    event.create('acanthite')
        .dust()
        .components('2x silver', '1x sulfur')
        .ore()
        .color(0x0d0c0c)

    event.create('proustite')
        .dust()
        .components('3x silver', '1x arsenic', '3x sulfur')
        .ore()
        .color(0x661016)

    event.create('pyrargyrite')
        .dust()
        .components('3x silver', '1x antimony', '3x sulfur')
        .ore()
        .color(0x140f05)

    event.create('calcium_sulfate')
        .dust()
        .components('1x calcium', '1x sulfur', '4x oxygen')
        .color(0x310e73)

    event.create('calcium_sulfide')
        .dust()
        .components('1x calcium', '1x sulfur')
        .color(0xa356b3)

    event.create('limestone')
        .dust()
        .components('5x calcium', '6x carbon', '18x oxygen', '1x magnesium')
        .color(0xffd1f9)

    event.create('crotonaldehyde')
        .liquid()
        .components('4x carbon', '6x hydrogen', '1x oxygen')
        .color(0x8c226a)

    event.create('sodium_arsenide')
        .dust()
        .components('3x sodium', '1x arsenic')
        .color(0x2a7a47)

    event.create('arsine')
        .gas()
        .components('1x arsenic', '3x hydrogen')
        .color(0x2aa859)

    event.create('red_mud')
        .liquid()
        .color(0xffd1f9)

    event.create('cryolite')
        .liquid()
        .dust()
        .components('3x sodium', '1x aluminium', '6x fluorine')
        .color(0x368fbf)

    event.create('sodium_fluoride')
        .dust()
        .components('1x sodium', '1x fluorine')
        .color(0x146147)

    event.create('dense_steam')
        .gas()
        .components('2x hydrogen', '1x oxygen')
        .color(0xe6e4e3)

    event.create('potassium_bisulfate')
        .dust()
        .liquid()
        .components('1x potassium', '1x hydrogen', '1x sulfur', '4x oxygen')
        .color(0x58acb8)

    event.create('wet_antimony_trifluoride')
        .dust()
        .components('1x antimony', '3x fluorine')
        .color(0xffd1f9)

    event.create('diethyl_ether')
        .liquid()
        .components('4x carbon', '10x hydrogen' , '1x oxygen')
        .color(0x2a419c)

    event.create('rubidium_alum')
        .dust()
        .components('1x rubidium', '1x aluminium' , '2x sulfur', '8x oxygen')
        .color(0x751043)

    event.create('supported_platinum')
        .dust()
        .components('2x aluminium', '3x oxygen' , '1x platinum', '4x chlorine')
        .color(0x3bb36f)

    event.create('acetylacetone')
        .liquid()
        .components('5x carbon', '8x hydrogen', '2x oxygen')
        .color(0x182624)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('isopropenyl_acetate')
        .liquid()
        .components('5x carbon', '8x hydrogen', '2x oxygen')
        .color(0x2b179c)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('1_5_cyclooctadiene')
        .liquid()
        .components('8x carbon', '12x hydrogen')
        .color(0x283c80)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('zinc_chloride')
        .dust()
        .liquid()
        .components('1x zinc', '2x chlorine')
        .color(0x371375) 
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('zinc_carbonate')
        .dust()
        .liquid()
        .components('1x zinc', '1x carbon', '3x oxygen')
        .color(0x30253b) 
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('mercury_ii_chloride')
        .dust()
        .components('1x mercury', '2x chlorine')
        .color(0x412fc4) 
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('phosphorus_trichloride')
        .liquid()
        .components('1x phosphorus', '3x chlorine')
        .color(0x471b12) 
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('triphenylphosphine')
        .dust()
        .components('18x carbon', '15x hydrogen', '1x phosphorus')
        .color(0x0f1f0b) 
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('triphenylphosphine_dichloride')
        .dust()
        .components('18x carbon', '15x hydrogen', '2x chlorine', '1x phosphorus')
        .color(0x0f1f0b) 
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('chlorodiphenylphosphine')
        .liquid()
        .components('12x carbon', '10x hydrogen', '1x chlorine', '1x phosphorus')
        .color(0x9eb06b) 
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('tetrahydrofuran')
        .liquid()
        .components('4x carbon', '8x hydrogen', '1x oxygen')
        .color(0xa3108b) 
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('ultramafic_tailing')
        .dust()
        .color(0x0a0a0a) 

    event.create('limestone_tailing')
        .dust()
        .color(0x2b2a27)

    event.create('potassium_persulfate')
        .dust()
        .components('2x potassium', '2x sulfur', '8x oxygen')
        .color(0x24252e)

    event.create('polychlorinated_biphenyl')
        .liquid()
        .components('12x carbon', '8x hydrogen', '2x chlorine')
        .color(0xa39d21)

    event.create('hydrogen_chloride')
        .gas()
        .components('1x hydrogen', '1x chlorine')
        .color(0x269e7e)

    event.create('acetylene')
        .gas()
        .components('2x carbon', '2x hydrogen')
        .color(0x170c59)

    event.create('calcium_carbide')
        .dust()
        .components('1x calcium', '2x carbon')
        .color(0x3b3b3d)

    event.create('zirconium_dioxide')
        .dust()
        .components('1x zirconium', '2x oxygen')
        .color(0x52133f)

    event.create('ammonium_hexachloroplatinate')
        .dust()
        .components('2x nitrogen', '8x hydrogen', '1x platinum', '6x chlorine')
        .color(0x75722f)

    event.create('sulfated_metal_oxide')
        .dust()
        .color(0x6cc476)

    event.create('calcium_hydroxide')
        .dust()
        .components('1x calcium', '2x oxygen', '2x hydrogen')
        .color(0x666669)

    event.create('hzsm_five')
        .dust()
        .color(0x2d5230)

    event.create('high_purity_gallium')
        .dust()
        .components('1x gallium')
        .color(0x8888ba)

     event.create('high_purity_indium')
        .dust()
        .components('1x indium')
        .color(0x5a37a3) 

     event.create('chilled_lava')
        .liquid()
        .color(0x5c151a) 

     event.create('silver_oxide')
        .dust()
        .components('2x silver', '1x oxygen')
        .color(0x5c7048) 

     event.create('molecular_sieve')
        .dust()
        .color(0x5c7048) 

     event.create('acidic_hydrogen_vapor')
        .gas()
        .components('8x hydrogen', '2x carbon', '2x oxygen')
        .color(0x5c7048) 

    event.create('latex')
        .dust()
        .liquid()
        .color(0xa2a3a2)



//boron
    event.create('high_purity_boron')
        .dust()
        .components('1x boron')
        .color(0xa4eba4)

    event.create('boron_trichloride')
        .liquid()
        .components('1x boron', '3x chlorine')
        .color(0x4ebd42)

    event.create('boron_trioxide')
        .dust()
        .liquid()
        .components('1x boron', '3x oxygen')
        .color(0xd9c7a0)

    event.create('boric_acid')
        .dust()
        .components('3x hydrogen', '1x boron', '3x oxygen')
        .color(0xd1cec9)

    event.create('borate_liquor')
        .liquid()
        .color(0xa5ab9f)

    event.create('sodiumtetraborate')
        .dust()
        .components('2x sodium', '4x boron', '7x oxygen')
        .color(0xa2a3a2)



//catalyst
    event.create('philips_catalyst')
        .dust()
        .components('1x silicon', '5x oxygen', '1x chromium')
        .color(0x9f1da8)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('ziegler_natta_catalyst')
        .dust()
        .components('2x aluminium', '12x carbon', '30x hydrogen', '1x titanium', '4x chlorine')
        .color(0x0c6106)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('kraminsky_catalyst')
        .dust()
        .components('1x zirconium', '11x carbon', '13x hydrogen', '2x chlorine', '1x aluminium', '1x oxygen')
        .color(0x1a0e09)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 



//copper
    event.create('copper_ii_chloride')
        .dust()
        .components('1x copper', '2x chlorine')
        .color(0x0a0909) 
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 
       
    event.create('copper_carbonate')
        .dust()
        .components('1x copper', '1x carbon', '3x oxygen')
        .color(0x2b0f0f) 
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)      



//iron
    event.create('pig_iron')
        .ingot()
        .components('1x iron')
        .color(0x575555) 
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('banded_iron')
        .dust()
        .components('2x iron', '3x oxygen')
        .color(0x381610)

    event.create('iron_iii_chloride')
        .dust()
        .components('1x iron', '3x chlorine')
        .color(0x141314) 
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('iron_sulfate')
        .dust()
        .components('1x iron', '1x sulfur', '4x oxygen')
        .color(0x31085e)

    event.create('iron_iii_sulfate')
        .dust()
        .components('2x iron', '3x sulfur', '12x oxygen')
        .color(0x686269)

    event.create('iron_ii_sulfide')
        .dust()
        .components('1x iron', '1x sulfur')
        .color(0x969545)

    event.create('iron_iii_nitrate_solution')
        .liquid()
        .components('1x iron', '3x nitrogen', '12x oxygen', '6x hydrogen')
        .color(0x2dabc2) 
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 



//lithium
    event.create('lithium_carbonate')
        .dust()
        .components('2x lithium', '1x carbon', '3x oxygen')
        .color(0x7791b8)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('lithium_oxide')
        .dust()
        .components('2x lithium', '1x oxygen')
        .color(0x591896)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('lithium_fluoride')
        .dust()
        .components('1x lithium', '1x fluorine')
        .color(0x7da7d4)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('lithium_hexafluorophosphate')
        .dust()
        .components('1x lithium', '1x phosphorus', '6x fluorine')
        .color(0x2a5657)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('lithium_hexafluorophosphate_electrolyte')
        .liquid()
        .components('1x lithium', '1x phosphorus', '6x fluorine', '3x carbon', '4x hydrogen', '3x oxygen')
        .color(0x2e4e4f)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('lithium__cobalt_oxide')
        .dust()
        .components('1x lithium', '1x cobalt', '2x oxygen')
        .color(0x076916)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 



//plastic
    event.create('vinyl_chloride_suspension')
        .liquid()
        .components('2x carbon', '5x hydrogen', '1x chlorine', '1x oxygen')
        .color(0xbcfc3)

    event.create('polyvinyl_chloride_suspension')
        .liquid()
        .components('2x carbon', '5x hydrogen', '1x chlorine', '1x oxygen')
        .color(0xbcfc3)



//silicon
    event.create('high_purity_silicon')
        .dust()
        .liquid()
        .components('1x silicon')
        .color(0x121629)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('silicon_tetrachloride')
        .liquid()
        .components('1x salt', '4x chlorine')
        .color(0x324345)

    event.create('purified_silicon_tetrachloride')
        .liquid()
        .components('1x salt', '4x chlorine')
        .color(0x445c5e)

    event.create('trichlorosilane')
        .liquid()
        .components('1x hydrogen', '1x potassium')
        .color(0x416266)

    event.create('purified_trichlorosilane')
        .liquid()
        .components('1x hydrogen', '1x potassium')
        .color(0x4b7175)



//warm fluid
    event.create('warm_sodium_potassium')
        .liquid()
        .components('1x salt', '3x chlorine', '1x silicon')
        .color(0x63c99d)

    event.create('warm_lubricant')
        .liquid()
        .color(0xbebf75)

    event.create('warm_polychlorinated_biphenyl')
        .liquid()
        .components('12x carbon', '8x hydrogen', '2x chlorine')
        .color(0xa39d21)

    event.create('warm_ethylene_glycol')
        .liquid()
        .components('2x carbon', '6x hydrogen', '2x oxygen')
        .color(0x104c9c)   



//carbon dioxide
    event.create('cold_carbon_dioxide')
        .gas()
        .components('1x carbon', '2x oxygen')
        .color(0x69b2d1)   

    event.create('compressed_carbon_dioxide')
        .gas()
        .components('1x carbon', '2x oxygen')
        .color(0x69b2d1)     

    event.create('hot_compressed_carbon_dioxide')
        .gas()
        .components('1x carbon', '2x oxygen')
        .color(0x69b2d1)    

    event.create('cold_compressed_carbon_dioxide')
        .gas()
        .components('1x carbon', '2x oxygen')
        .color(0x69b2d1)     

    event.create('supercritical_carbon_dioxide')
        .liquid()
        .components('1x carbon', '2x oxygen')
        .color(0x69b2d1)     



//oxygen
    event.create('high_pressure_oxygen')
        .gas()
        .components('1x oxygen')
        .color(0x0bc9de)     

    event.create('hot_high_pressure_oxygen')
        .gas()
        .components('1x oxygen')
        .color(0x0bc9de)       

    event.create('cold_high_pressure_oxygen')
        .gas()
        .components('1x oxygen')
        .color(0x0bc9de)       



//aluminium
    event.create('triethylaluminium')
        .liquid()
        .components('2x aluminium', '12x carbon' , '30x hydrogen')
        .color(0x202ec9)

    event.create('aluminium_hydroxide')
        .dust()
        .components('1x aluminium', '3x oxygen', '3x hydrogen')
        .color(0x03131f)

    event.create('diethylaluminium_acetylacetonate')
        .liquid()
        .components('1x aluminium')
        .color(0x2f9655)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('aluminium_trifluoride')
        .dust()
        .components('1x aluminium', '3x fluorine')
        .color(0x15558c)

    event.create('alumina')
        .dust()
        .components('2x aluminium', '3x oxygen')
        .color(0xa2afe8)

    event.create('chlorided_alumina')
        .dust()
        .color(0x1d452e)

    event.create('aluminium_phenolate')
        .dust()
        .components('1x aluminium', '3x oxygen', '18x carbon', '15x hydrogen')
        .color(0x092e0f)

    event.create('aluminium_nitride')
        .dust()
        .components('1x aluminium', '1x nitrogen')
        .color(0x1c5e27)

    event.create('aluminium_oxynitride')
        .dust()
        .components('23x aluminium', '27x oxygen', '5x nitrogen')
        .color(0xc1e3e1)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 
        .flags(GTMaterialFlags.GENERATE_PLATE) 

    event.create('aluminium_chloride_solution')
        .liquid()
        .components('1x aluminium', '3x chlorine', '6x hydrogen', '3x oxygen')
        .color(0x24829c)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('aluminium_sulfate_solution')
        .liquid()
        .components('2x aluminium', '3x sulfur', '18x oxygen', '12x hydrogen')
        .color(0x30ba5e)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('aluminium_alkoxide_mixture')
        .dust()
        .components('1x aluminium', '3x oxygen', '3x hydrogen')
        .color(0x3a3d42) 
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('alfol_trialkylaluminium_mixture')
        .liquid()
        .components('1x aluminium', '3x hydrogen')
        .color(0x3a3d42) 
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

     event.create('aluminium_alkoxide_solution')
        .liquid()
        .components('4x carbon', '13x hydrogen', '4x oxygen', '1x aluminium')
        .color(0x1f2836) 

     event.create('sodium_aluminate_solution')
        .liquid()
        .components('1x sodium', '1x aluminium', '3x oxygen', '2x hydrogen')
        .color(0x0d4175)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

     event.create('impure_sodium_aluminate_solution')
        .liquid()
        .color(0x146147) 

     event.create('sodium_aluminate')
        .dust()
        .components('1x sodium', '1x aluminium', '2x oxygen')
        .color(0x123619) 

     event.create('aluminium_sulfate')
        .dust()
        .components('2x aluminium', '3x sulfur', '12x oxygen')
        .color(0x1d4721) 

     event.create('high_purity_aluminium')
        .dust()
        .components('1x aluminium')
        .color(0x70b0db) 

//nickel
    event.create('nickel_ii_oxide')
        .dust()
        .components('1x nickel', '1x oxygen')
        .color(0x274f32)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('nickel_ii_nitrate')
        .dust()
        .components('1x nickel', '2x nitrogen', '6x oxygen')
        .color(0x1c4f4c)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('bis_nickel')
        .dust()
        .components('1x nickel')
        .color(0xb09731)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('nickel_ii_bis')
        .dust()
        .components('1x nickel')
        .color(0x113331)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('nickel_chloride')
        .dust()
        .components('1x nickel', '2x chlorine')
        .color(0x3a3142)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('dichloro_bis_nickel')
        .dust()
        .components('1x nickel', '2x chlorine', '2x phosphorus')
        .color(0x42a128)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

    event.create('dicarbonyl_bis_nickel')
        .dust()
        .components('1x nickel', '2x carbon', '2x oxygen', '2x phosphorus')
        .color(0x0c2f63)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

     event.create('nickel_ii_nitrate_solution')
        .liquid()
        .components('1x nickel', '2x nitrogen', '7x oxygen', '2x hydrogen')
        .color(0x1922cf) 
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 

     event.create('nickel_ii_bis_solution')
        .liquid()
        .components('1x nickel', '4x hydrogen', '8x oxygen', '2x sodium', '2x nitrogen')
        .color(0x1b2429)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION) 



//chromium
    event.create('electrolytic_chromium')
        .dust()
        .liquid()
        .element(GTElements.Cr) 

    event.create('high_purity_chromium')
        .dust()
        .liquid()
        .element(GTElements.Cr)



//water
    event.create('demineralized_water')
        .liquid()
        .components('2x hydrogen', '1x oxygen')
        .color(0x0f084a)
  
    event.create('deaerated_water')
        .liquid()
        .components('2x hydrogen', '1x oxygen')
        .color(0x1d3375)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('ultrapure_water')
        .liquid()
        .components('2x hydrogen', '1x oxygen')
        .color(0x2fa4c4)

    event.create('filtered_water')
        .liquid()
        .components('2x hydrogen', '1x oxygen')
        .color(0x1d6285)

    event.create('sterilized_water')
        .liquid()
        .components('2x hydrogen', '1x oxygen')
        .color(0x3883a8)

    event.create('diluted_saltwater')
        .liquid()
        .components('1x salt', '1x chlorine', '4x hydrogen', '2x oxygen')
        .color(0x263770)

    event.create('sugary_water')
        .liquid()
        .color(0x358566)

    event.create('wastewater_sludge')
        .liquid()
        .color(0x545452)

    event.create('warm_water')
        .liquid()
        .components('2x hydrogen', '1x oxygen')
        .color(0x121f94)

    event.create('warm_saltwater')
        .liquid()
        .components('1x sodium', '1x chlorine', '2x hydrogen', '1x oxygen')
        .color(0x0b177d)
  
    event.create('concentrated_saltwater')
        .liquid()
        .components('2x sodium', '2x chlorine', '2x hydrogen', '1x oxygen')
        .color(0x753d3d)
   
    event.create('hypersaline_water')
        .liquid()
        .components('4x sodium', '4x chlorine', '2x hydrogen', '1x oxygen')
        .color(0x753d3d)
   

//brine
    event.create('chlorinated_brine')
        .liquid()
        .color(0x948f29)



//slurry
    event.create('silicon_dioxide_slurry')
        .liquid()
        .color(0x948f29)



//solutions
     event.create('sodium_hydroxide_solution')
        .liquid()
        .components('1x sodium', '3x hydrogen', '2x oxygen')
        .color(0x060f2e)  

     event.create('diluted_sodium_hydroxide_solution')
        .liquid()
        .components('1x sodium', '5x hydrogen', '4x oxygen')
        .color(0x13245e)   

     event.create('impure_sodium_hydroxide_solution')
        .liquid()
        .color(0x160e57)   

     event.create('potassium_hydroxide_solution')
        .liquid()
        .components('1x potassium', '3x hydrogen', '2x oxygen')
        .color(0x146147)  

     event.create('rock_salt_solution')
        .liquid()
        .components('1x potassium', '1x chlorine', '2x hydrogen', '1x oxygen')
        .color(0x146147)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)    

     event.create('diluted_rock_salt_solution')
        .liquid()
        .components('1x potassium', '1x chlorine', '4x hydrogen', '2x oxygen')
        .color(0x330a5e)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)  

     event.create('sodium_fluoride_solution')
        .liquid()
        .components('1x sodium', '1x fluorine', '1x oxygen', '2x hydrogen')
        .color(0x146147) 

     event.create('impure_soda_ash_solution')
        .liquid()
        .color(0x47454a) 

     event.create('soda_ash_solution')
        .liquid()
        .components('2x sodium', '1x carbon', '4x oxygen', '2x hydrogen')
        .color(0x47454a) 

     event.create('diethyl_ether_solution')
        .liquid()
        .components('4x carbon', '14x hydrogen', '6x oxygen', '1x sulfur')
        .color(0x2e1a0d) 

     event.create('rubidium_hydroxide_solution')
        .liquid()
        .components('1x rubidium', '5x oxygen', '9x hydrogen')
        .color(0x1922cf) 

   event.create('potassium_bisulfate_solution')
        .liquid()
        .components('1x potassium', '3x hydrogen', '1x sulfur', '5x oxygen')
        .color(0x59bbc9)

   event.create('diluted_sodium_silicate_solution')
        .liquid()
        .components('2x sodium', '1x silicon', '7x oxygen', '8x hydrogen')
        .color(0x59bbc9)

   event.create('hydrogen_peroxide_solution')
        .liquid()
        .components('4x hydrogen', '3x oxygen')
        .color(0x19235e)

   event.create('cobalt_nitrate_solution')
        .liquid()
        .components('1x cobalt', '2x nitrogen', '7x oxygen', '2x hydrogen')
        .color(0x0e0c7a)

   event.create('low_temperature_fischer_tropsch_catalyst_solution')
        .liquid()
        .color(0x24110d)

   event.create('calcium_chloride_solution')
        .liquid()
        .components('1x calcium', '2x chlorine', '2x hydrogen', '1x oxygen')
        .color(0x78b56b)


//mixtures
        event.create('crotonaldehyde_mixture')
        .liquid()
        .components('1x sodium', '2x oxygen', '7x hydrogen', '4x carbon')
        .color(0x5989e3) 

        event.create('ziegler_alfol_mixture')
        .liquid()
        .color(0x663b24) 

        event.create('chlorinated_methane_mixture')
        .liquid()   
        .color(0x3c1970) 
   


//impure
    event.create('impure_bromine_gas')
        .gas()
        .color(0x301410)



//leach
    event.create('hot_zinc_leach')
        .liquid()
        .color(0x735d4d)

    event.create('reduced_zinc_leach')
        .liquid()
        .color(0x634a38)


//liquor
    event.create('concentrated_black_liquor')
        .liquid()
        .color(0x0d0d0c)

    event.create('green_liquor')
        .liquid()
        .color(0x122109)

    event.create('white_liquor')
        .liquid()
        .color(0xd4c5ba)   



//acid
    event.create('diluted_hexafluorosilicic_acid')
        .liquid()
        .color(0x1fdb96)

    event.create('hydrogen_fluoride')
        .gas()
        .color(0x223632)

    event.create('hot_sulfuric_acid')
        .liquid()
        .color(0xb0420e)

    event.create('diphenylphosphinoacetic_acid')
        .gas()
        .components('14x carbon', '13x hydrogen', '2x oxygen', '1x phosphorus')
        .color(0xad894e)

    event.create('water_treatment_acid')
        .liquid()
        .components('65x hydrogen', '23x oxygen', '9x chlorine', '9x fluorine', '4x carbon')
        .color(0x173316)

    event.create('acidic_wastewater')
        .liquid()
        .components('2x hydrogen', '1x oxygen')
        .color(0x7a5a43)

    event.create('hydrobromic_acid')
        .liquid()
        .components('3x hydrogen', '1x bromine', '1x oxygen')
        .color(0x288a71)






//gas    
    event.create('syngas')
        .gas()
        .components('2x carbon', '1x carbon', '1x oxygen')
        .color(0x223632)
     


//oil related
    event.create('ethylene_glycol')
        .liquid()
        .components('2x carbon', '6x hydrogen', '2x oxygen')
        .color(0x104c9c)   

    event.create('impure_ethylene_oxide')
        .gas()
        .color(0x154230)    

    event.create('ethylene_oxide')
        .gas()
        .components('2x carbon', '4x hydrogen', '1x oxygen')
        .color(0x267a57)    

    event.create('ethylene_carbonate')
        .liquid()
        .components('3x carbon', '4x hydrogen', '3x oxygen')
        .color(0x32594c)      

    event.create('diluted_oil')
        .liquid()
        .color(0x0f0f0f)      

    event.create('desalted_oil')
        .liquid()
        .color(0x000000)      

    event.create('oily_brine')
        .liquid()
        .color(0x66604b)      

    event.create('sulfuric_gasoline')
        .liquid()
        .color(0xdbc251)      

    event.create('treated_sulfuric_gasoline')
        .liquid()
        .color(0xddc251)      

    event.create('sulfuric_diesel')
        .liquid()
        .color(0x786924)      

    event.create('treated_sulfuric_diesel')
        .liquid()
        .color(0x7f6924)      

    event.create('sulfuric_fuel_oil')
        .liquid()
        .color(0x544a1c)      

    event.create('sulfuric_oil_residue')
        .liquid()
        .color(0x38341f)    

    event.create('sulfuric_kerosene')
        .liquid()
        .color(0x8f823d)      

    event.create('sulfuric_refinery_gas')
        .gas()
        .color(0xbfbeb6)    

    event.create('sour_gas')
        .gas()
        .color(0xb8ac77)     

    event.create('grain_solution')
        .liquid()
        .color(0x9cb898)      

    event.create('impure_ethanol')
        .liquid()
        .color(0x997462)      

    event.create('mash')
        .liquid()
        .color(0x826456)      

    event.create('ethanol_water_azeotrope')
        .liquid()
        .components('182x carbon', '564x hydrogen', '100x oxygen')
        .color(0x75300b)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)       

    event.create('fuel_oil')
        .liquid()
        .color(0x968354)   

    event.create('severely_hydro_cracked_gasoline')
        .liquid()
        .color(0x756a34)      

    event.create('hexane')
        .liquid()
        .color(0x8f8c7c)      

    event.create('pentane')
        .liquid()
        .color(0xb0ad9b) 

    event.create('c5_fraction')
        .liquid()
        .color(0x63521c)  

    event.create('n_bromopropane')
        .liquid()
        .components('3x carbon', '7x hydrogen', '1x bromine')
        .color(0x472a18)  

    event.create('tripropylamine')
        .liquid()
        .components('9x carbon', '21x hydrogen', '1x nitrogen')
        .color(0x57781e)  

    event.create('tetrapropylammonium_bromide')
        .dust()
        .components('12x carbon', '28x hydrogen', '1x bromine', '1x nitrogen')
        .color(0x382416)  




//Cryogenics -- How to make cryogenic??
    event.create('liquid_natural_gas')
        .liquid()
        .color(0xe6e1d5)      


//olefin
    event.create('shell_higher_olefin_catalyst_solution')
        .liquid()
        .components('1x nickel', '32x carbon', '43x hydrogen', '4x oxygen', '1x phosphorus')
        .color(0xa31607)      



//Byproducts - Might remove
    event.create('zinc_flue_gas')
        .gas()
        .color(0x1f1d24)
})

GTCEuStartupEvents.materialModification(() => {
    GTMaterials.get('iron_iii_sulfate').setFormula('Fe2(SO4)3')
    GTMaterials.get('syngas').setFormula('(H)6(CO)')
    GTMaterials.get('limestone').setFormula('(CaCO3)4(CaMg(CO3)2)')
    GTMaterials.get('diluted_saltwater').setFormula('(NaCl)(H2O)2')
    GTMaterials.get('sodium_hydroxide_solution').setFormula('(NaOH)(H2O)')
    GTMaterials.get('sodium_hydroxide_solution').setFormula('(NaOH)(H2O)2')
    GTMaterials.get('potassium_hydroxide_solution').setFormula('(KOH)(H2O)')
    GTMaterials.get('potassium_bisulfate_solution').setFormula('(KHSO4)(H2O)')
    GTMaterials.get('rock_salt_solution').setFormula('(KCl)(H2O)')
    GTMaterials.get('diluted_rock_salt_solution').setFormula('(KCl)(H2O)2')
    GTMaterials.get('crotonaldehyde_mixture').setFormula('(NaOH)(C4H6O)')
    GTMaterials.get('sodium_aluminate_solution').setFormula('(NaAlO2)(H2O)')
    GTMaterials.get('sodium_fluoride_solution').setFormula('(NaF)(H2O)')
    GTMaterials.get('aluminium_hydroxide').setFormula('Al(OH)3')
    GTMaterials.get('aluminium_alkoxide_mixture').setFormula('Al(OH)3')
    GTMaterials.get('aluminium_alkoxide_solution').setFormula('[(C2H5)2O]Al(OH)3')
    GTMaterials.get('diethyl_ether').setFormula('(C2H5)2O')
    GTMaterials.get('triethylaluminium').setFormula('Al2(C2H5)6')
    GTMaterials.get('diethyl_ether_solution').setFormula('((C2H5)2O)(H2SO4)(H20)')
    GTMaterials.get('rubidium_alum').setFormula('RbAl(SO4)2')
    GTMaterials.get('rubidium_hydroxide_solution').setFormula('(RbOH)(H20)4')
    GTMaterials.get('nickel_ii_nitrate_solution').setFormula('[Ni(NO3)2](H2O)')
    GTMaterials.get('nickel_ii_nitrate').setFormula('Ni(NO3)2')
    GTMaterials.get('nickel_ii_bis_solution').setFormula('(Ni(acac)2)(NaNO3)2(H2O)2')
    GTMaterials.get('nickel_ii_bis').setFormula('Ni(acac)2')
    GTMaterials.get('bis_nickel').setFormula('Ni(cod)2')
    GTMaterials.get('dichloro_bis_nickel').setFormula('NiCl2(PPh3)2')
    GTMaterials.get('dicarbonyl_bis_nickel').setFormula('Ni(CO)2(PPh)2')
    GTMaterials.get('diethylaluminium_acetylacetonate').setFormula('(acac)AlEt2')
    GTMaterials.get('shell_higher_olefin_catalyst_solution').setFormula('Ni(C14H13O2P)(C8H12)2(C2H6O2)')
    GTMaterials.get('lithium_hexafluorophosphate_electrolyte').setFormula('(LiPF6)(C3H4O3)')
    GTMaterials.get('aluminium_phenolate').setFormula('Al(OC6H5)3')
    GTMaterials.get('ethanol_water_azeotrope').setFormula('(C2H6O)91(H2O)9')
    GTMaterials.get('vinyl_chloride_suspension').setFormula('(C2H3Cl)(H2O)')
    GTMaterials.get('polyvinyl_chloride_suspension').setFormula('(C2H3Cl)(H2O)')
    GTMaterials.get('warm_saltwater').setFormula('(NaCl)(H2O)')
    GTMaterials.get('polychlorinated_biphenyl').setFormula('(C6H4Cl)2')
    GTMaterials.get('warm_polychlorinated_biphenyl').setFormula('(C6H4Cl)2')
    GTMaterials.get('water_treatment_acid').setFormula('((H2O)(HCl))9((H2O)(HF))9(C2H4O2)2')
    GTMaterials.get('acidic_wastewater').setFormula('(H2O)(?)')
    GTMaterials.get('philips_catalyst').setFormula('(SiO2)(CrO3)')
    GTMaterials.get('ziegler_natta_catalyst').setFormula('(Al2(C2H5)6)(TiCl4)')
    GTMaterials.get('kraminsky_catalyst').setFormula('(Zr(C5H5)2Cl2)(AlCH3O)')
    GTMaterials.get('aluminium_chloride_solution').setFormula('(AlCl3)(H2O)3')
    GTMaterials.get('calcium_hydroxide').setFormula('Ca(OH)2')
    GTMaterials.get('pig_iron').setFormula('(Fe)(?)')
    GTMaterials.get('supported_platinum').setFormula('(Al2O3)(PtCl4)')
    GTMaterials.get('diluted_sodium_silicate_solution').setFormula('(Na2SiO3)(H2O)4')
    GTMaterials.get('hydrogen_peroxide_solution').setFormula('(H2O2)(H2O)')
    GTMaterials.get('hydrobromic_acid').setFormula('(HBr)(H2O)')
    GTMaterials.get('cobalt_nitrate_solution').setFormula('(Co(NO3)2)(H2O)')
    GTMaterials.get('aluminium_sulfate').setFormula('Al2(SO4)3')
    GTMaterials.get('iron_iii_nitrate_solution').setFormula('Fe(NO3)3(H2O)3')
    GTMaterials.get('soda_ash_solution').setFormula('(Na2CO3)(H2O)')
    GTMaterials.get('concentrated_saltwater').setFormula('(NaCl)2(H2O)')
    GTMaterials.get('hypersaline_water').setFormula('(NaCl)4(H2O)')
    GTMaterials.get('calcium_chloride_solution').setFormula('(CaCl2)(H2O)')
    GTMaterials.get('acidic_hydrogen_vapor').setFormula('(H)8(CO2)')
})