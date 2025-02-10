ServerEvents.recipes(event => {
    event.replaceOutput({ type: 'gtceu:centrifuge' }, 'gtceu:cobalt_oxide_dust', 'gtceu:ultramafic_tailing_dust')
    event.replaceOutput({ type: 'gtceu:chemical_bath' }, 'gtceu:cobalt_oxide_dust', 'gtceu:limestone_tailing_dust')
    event.replaceOutput({ type: 'gtceu:crusher' }, 'gtceu:cobalt_oxide_dust', 'gtceu:ultramafic_tailing_dust')
    event.replaceOutput({ id: 'gtceu:macerator/macerate_raw_copper_ore_to_crushed_ore' }, 'gtceu:cobalt_dust', 'gtceu:limestone_tailing_dust')
    event.replaceOutput({ id: 'gtceu:macerator/macerate_copper_refined_ore_to_dust' }, 'gtceu:nickel_dust', 'gtceu:limestone_tailing_dust')
    event.replaceOutput({ id: 'gtceu:macerator/macerate_copper_crushed_ore_to_dust' }, 'gtceu:gold_dust', 'gtceu:limestone_tailing_dust')
    event.replaceOutput({ id: 'gtceu:thermal_centrifuge/centrifuge_copper_purified_ore_to_refined_ore' }, 'gtceu:gold_dust', 'gtceu:limestone_tailing_dust')
})