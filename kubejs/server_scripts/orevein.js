GTCEuServerEvents.oreVeins(event => {
    event.add('kubejs:smithsonite_vein', vein => {
        vein.layer("netherrack")
        vein.weight(100)
        vein.clusterSize(40)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0) 
        vein.heightRangeUniform(0, 100)
        vein.veinedVeinGenerator(generator => generator
        .oreBlock(GTMaterials.get('smithsonite'), 3) 


        .rareBlock(GTMaterials.get('sphalerite'), 1)


        .rareBlockChance(0.25)
        .veininessThreshold(0.1)
        .maxRichnessThreshold(0.3)
        .minRichness(0.3)
        .maxRichness(0.5)
        .edgeRoundoffBegin(10)


        .maxEdgeRoundoff(0.2)
    )

    vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.get('smithsonite'))
        .placement("above")
        .density(0.4)
        .radius(5)
    )
    })

    event.add('kubejs:sulfidic_silver_vein', vein => {
        vein.layer("stone")
        vein.weight(80)
        vein.clusterSize(40)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0) 
        vein.heightRangeUniform(0, 100)
        vein.veinedVeinGenerator(generator => generator
        .oreBlock(GTMaterials.get('acanthite'), 3) 
        .oreBlock(GTMaterials.get('proustite'), 3) 
        .oreBlock(GTMaterials.get('pyrargyrite'), 3) 


        .rareBlock(GTMaterials.get('silver'), 1)


        .rareBlockChance(0.25)
        .veininessThreshold(0.1)
        .maxRichnessThreshold(0.3)
        .minRichness(0.3)
        .maxRichness(0.5)
        .edgeRoundoffBegin(10)


        .maxEdgeRoundoff(0.2)
    )

    vein.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.get('silver'))
        .placement("above")
        .density(0.4)
        .radius(5)
    )
    })
})
