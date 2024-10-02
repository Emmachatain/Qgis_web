var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Open Street Map ',
            //'type': 'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Domaine_protege_1 = new ol.format.GeoJSON();
var features_Domaine_protege_1 = format_Domaine_protege_1.readFeatures(json_Domaine_protege_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Domaine_protege_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Domaine_protege_1.addFeatures(features_Domaine_protege_1);
var lyr_Domaine_protege_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Domaine_protege_1, 
                style: style_Domaine_protege_1,
                popuplayertitle: "Domaine_protege",
                interactive: true,
                title: '<img src="styles/legend/Domaine_protege_1.png" /> Domaine_protege'
            });
var format_974_Strategie_Partenaire_2 = new ol.format.GeoJSON();
var features_974_Strategie_Partenaire_2 = format_974_Strategie_Partenaire_2.readFeatures(json_974_Strategie_Partenaire_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_974_Strategie_Partenaire_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_974_Strategie_Partenaire_2.addFeatures(features_974_Strategie_Partenaire_2);
var lyr_974_Strategie_Partenaire_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_974_Strategie_Partenaire_2, 
                style: style_974_Strategie_Partenaire_2,
                popuplayertitle: "974_Strategie_Partenaire",
                interactive: true,
    title: '974_Strategie_Partenaire<br />\
    <img src="styles/legend/974_Strategie_Partenaire_2_0.png" /> Zone d\'intervention<br />\
    <img src="styles/legend/974_Strategie_Partenaire_2_1.png" /> Zone de vigilance<br />\
    <img src="styles/legend/974_Strategie_Partenaire_2_2.png" /> <br />'
        });
var format_Perimetre_intervention_3 = new ol.format.GeoJSON();
var features_Perimetre_intervention_3 = format_Perimetre_intervention_3.readFeatures(json_Perimetre_intervention_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perimetre_intervention_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perimetre_intervention_3.addFeatures(features_Perimetre_intervention_3);
var lyr_Perimetre_intervention_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perimetre_intervention_3, 
                style: style_Perimetre_intervention_3,
                popuplayertitle: "Perimetre_intervention",
                interactive: true,
                title: '<img src="styles/legend/Perimetre_intervention_3.png" /> Perimetre_intervention'
            });
var format_Unitlittorale_4 = new ol.format.GeoJSON();
var features_Unitlittorale_4 = format_Unitlittorale_4.readFeatures(json_Unitlittorale_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unitlittorale_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unitlittorale_4.addFeatures(features_Unitlittorale_4);
var lyr_Unitlittorale_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Unitlittorale_4, 
                style: style_Unitlittorale_4,
                popuplayertitle: "Unité littorale",
                interactive: true,
                title: '<img src="styles/legend/Unitlittorale_4.png" /> Unité littorale'
            });
var group_CDL = new ol.layer.Group({
                                layers: [lyr_Domaine_protege_1,lyr_974_Strategie_Partenaire_2,lyr_Perimetre_intervention_3,],
                                fold: "open",
                                title: "CDL"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Domaine_protege_1.setVisible(true);lyr_974_Strategie_Partenaire_2.setVisible(true);lyr_Perimetre_intervention_3.setVisible(true);lyr_Unitlittorale_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_CDL,lyr_Unitlittorale_4];
lyr_Domaine_protege_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COMM_CODE_INSEE': 'COMMUNE', 'DEPT_CODE': 'DEPT_CODE', 'PARC_SECTION': 'SECTION', 'PARC_NUMERO': 'NUMERO', 'PERA_ID': 'PERA_ID', 'DATE_MAJ': 'DATE_MAJ', 'ID_PARC': 'ID_PARC', 'PARC_EFFECTIVE': 'PARCELLE_EFFECTIVE', 'referentiel': 'referentiel', 'TRAN_DATE_SIGNATURE': 'TRAN_DATE_SIGNATURE', 'TYTR_ID': 'type_transaction', 'TY2T_ID': 'sous_type_transaction', 'PARC_CLASSE': 'domaine_propre', 'surf': 'surface_cadastrale_protege', 'lineaire': 'lineaire', 'nature': 'nature', 'parc_hors_per_int': 'parc_hors_per_int', 'PARCELLE_STATUT': 'PARCELLE_STATUT', 'AMP': 'AMP', 'id_spn': 'id_spn', 'parcelle_partielle': 'parcelle_partielle', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'Code_transaction': 'Code_transaction', 'Export_internet': 'Export_internet', 'Date_export_internet': 'Date_export_internet', 'Livraison': 'Livraison', 'id_delg': 'id_delg', });
lyr_974_Strategie_Partenaire_2.set('fieldAliases', {'dept_code': 'dept_code', 'delg_id': 'delg_id', 'ul_id': 'ul_id', 'nom_zone': 'nom_zone', 'site_cdl': 'site_cdl', 'surf_ter': 'surf_ter', 'surf_dpm': 'surf_dpm', 'surf_50pas': 'surf_50pas', 'surf_tot': 'surf_tot', 'zone_strat': 'zone_strat', });
lyr_Perimetre_intervention_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DEPT_CODE': 'DEPT_CODE', 'PERA_ID': 'CODE_SITE', 'PERA_NOM': 'NOM_SITE', 'DATE_MAJ': 'DATE_MAJ', 'date_1er_CA': 'date_1er_CA', 'nombre_extensions': 'nombre_extensions', 'statut': 'statut', 'unite_biogeo_et_historqiue': 'unite_biogeo_et_historqiue', 'id_spn': 'Site_SPN', 'zone_preemption': 'zone_preemption', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'Export_internet': 'Export_internet', 'Date_export_internet': 'Date_export_internet', 'id_delg': 'id_delg', });
lyr_Unitlittorale_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOM': 'NOM', 'Num': 'Num', 'Type': 'Type', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Domaine_protege_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'COMM_CODE_INSEE': 'TextEdit', 'DEPT_CODE': 'TextEdit', 'PARC_SECTION': 'TextEdit', 'PARC_NUMERO': 'TextEdit', 'PERA_ID': 'Range', 'DATE_MAJ': 'DateTime', 'ID_PARC': 'TextEdit', 'PARC_EFFECTIVE': 'ValueMap', 'referentiel': 'ValueMap', 'TRAN_DATE_SIGNATURE': 'DateTime', 'TYTR_ID': 'ValueMap', 'TY2T_ID': 'ValueMap', 'PARC_CLASSE': 'ValueMap', 'surf': 'TextEdit', 'lineaire': 'ValueMap', 'nature': 'ValueMap', 'parc_hors_per_int': 'ValueMap', 'PARCELLE_STATUT': 'ValueMap', 'AMP': 'ValueMap', 'id_spn': 'TextEdit', 'parcelle_partielle': 'ValueMap', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Code_transaction': 'Range', 'Export_internet': 'ValueMap', 'Date_export_internet': 'DateTime', 'Livraison': 'ValueMap', 'id_delg': 'Range', });
lyr_974_Strategie_Partenaire_2.set('fieldImages', {'dept_code': 'TextEdit', 'delg_id': 'Range', 'ul_id': 'TextEdit', 'nom_zone': 'TextEdit', 'site_cdl': 'TextEdit', 'surf_ter': 'TextEdit', 'surf_dpm': 'TextEdit', 'surf_50pas': 'TextEdit', 'surf_tot': 'TextEdit', 'zone_strat': 'TextEdit', });
lyr_Perimetre_intervention_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'DEPT_CODE': 'TextEdit', 'PERA_ID': 'Range', 'PERA_NOM': 'TextEdit', 'DATE_MAJ': 'DateTime', 'date_1er_CA': 'DateTime', 'nombre_extensions': 'Range', 'statut': 'ValueMap', 'unite_biogeo_et_historqiue': 'TextEdit', 'id_spn': 'TextEdit', 'zone_preemption': 'ValueMap', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Export_internet': 'ValueMap', 'Date_export_internet': 'DateTime', 'id_delg': 'Range', });
lyr_Unitlittorale_4.set('fieldImages', {'OBJECTID': '', 'NOM': '', 'Num': '', 'Type': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Domaine_protege_1.set('fieldLabels', {'OBJECTID': 'no label', 'COMM_CODE_INSEE': 'no label', 'DEPT_CODE': 'no label', 'PARC_SECTION': 'no label', 'PARC_NUMERO': 'no label', 'PERA_ID': 'no label', 'DATE_MAJ': 'no label', 'ID_PARC': 'no label', 'PARC_EFFECTIVE': 'no label', 'referentiel': 'no label', 'TRAN_DATE_SIGNATURE': 'no label', 'TYTR_ID': 'no label', 'TY2T_ID': 'no label', 'PARC_CLASSE': 'no label', 'surf': 'no label', 'lineaire': 'no label', 'nature': 'no label', 'parc_hors_per_int': 'no label', 'PARCELLE_STATUT': 'no label', 'AMP': 'no label', 'id_spn': 'no label', 'parcelle_partielle': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', 'Code_transaction': 'no label', 'Export_internet': 'no label', 'Date_export_internet': 'no label', 'Livraison': 'no label', 'id_delg': 'no label', });
lyr_974_Strategie_Partenaire_2.set('fieldLabels', {'dept_code': 'no label', 'delg_id': 'no label', 'ul_id': 'no label', 'nom_zone': 'no label', 'site_cdl': 'no label', 'surf_ter': 'no label', 'surf_dpm': 'no label', 'surf_50pas': 'no label', 'surf_tot': 'no label', 'zone_strat': 'no label', });
lyr_Perimetre_intervention_3.set('fieldLabels', {'OBJECTID': 'no label', 'DEPT_CODE': 'no label', 'PERA_ID': 'no label', 'PERA_NOM': 'no label', 'DATE_MAJ': 'no label', 'date_1er_CA': 'no label', 'nombre_extensions': 'no label', 'statut': 'no label', 'unite_biogeo_et_historqiue': 'no label', 'id_spn': 'no label', 'zone_preemption': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', 'Export_internet': 'no label', 'Date_export_internet': 'no label', 'id_delg': 'no label', });
lyr_Unitlittorale_4.set('fieldLabels', {'OBJECTID': 'no label', 'NOM': 'no label', 'Num': 'no label', 'Type': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Unitlittorale_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});