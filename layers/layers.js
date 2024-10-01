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
var format_l_zone_alea_subm_synthese_s_976_1 = new ol.format.GeoJSON();
var features_l_zone_alea_subm_synthese_s_976_1 = format_l_zone_alea_subm_synthese_s_976_1.readFeatures(json_l_zone_alea_subm_synthese_s_976_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_l_zone_alea_subm_synthese_s_976_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_l_zone_alea_subm_synthese_s_976_1.addFeatures(features_l_zone_alea_subm_synthese_s_976_1);
var lyr_l_zone_alea_subm_synthese_s_976_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_l_zone_alea_subm_synthese_s_976_1, 
                style: style_l_zone_alea_subm_synthese_s_976_1,
                popuplayertitle: "l_zone_alea_subm_synthese_s_976",
                interactive: true,
    title: 'l_zone_alea_subm_synthese_s_976<br />\
    <img src="styles/legend/l_zone_alea_subm_synthese_s_976_1_0.png" /> Aléas 2100<br />\
    <img src="styles/legend/l_zone_alea_subm_synthese_s_976_1_1.png" /> Faible<br />\
    <img src="styles/legend/l_zone_alea_subm_synthese_s_976_1_2.png" /> Fort<br />\
    <img src="styles/legend/l_zone_alea_subm_synthese_s_976_1_3.png" /> Moyen<br />\
    <img src="styles/legend/l_zone_alea_subm_synthese_s_976_1_4.png" /> Très fort<br />\
    <img src="styles/legend/l_zone_alea_subm_synthese_s_976_1_5.png" /> Très fort (bande de précaution)<br />\
    <img src="styles/legend/l_zone_alea_subm_synthese_s_976_1_6.png" /> Très fort (bande de sécurité)<br />\
    <img src="styles/legend/l_zone_alea_subm_synthese_s_976_1_7.png" /> <br />'
        });
var format_Unitlittorale_2 = new ol.format.GeoJSON();
var features_Unitlittorale_2 = format_Unitlittorale_2.readFeatures(json_Unitlittorale_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unitlittorale_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unitlittorale_2.addFeatures(features_Unitlittorale_2);
var lyr_Unitlittorale_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Unitlittorale_2, 
                style: style_Unitlittorale_2,
                popuplayertitle: "Unité littorale",
                interactive: true,
                title: '<img src="styles/legend/Unitlittorale_2.png" /> Unité littorale'
            });
var group_Ressourceeneau = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Ressource en eau"});
var group_CDL = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "CDL"});
var group_Alasctiers = new ol.layer.Group({
                                layers: [lyr_l_zone_alea_subm_synthese_s_976_1,],
                                fold: "open",
                                title: "Aléas côtiers"});
var group_Occupationdusol = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Occupation du sol"});
var group_Zoneshumides = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Zones humides"});
var group_Tourismeetpatrimoine = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Tourisme et patrimoine"});
var group_quipementssensibles = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "équipements sensibles"});
var group_Etalementurbain = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Etalement urbain"});
var group_routes = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "routes"});
var group_ORTHO = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "ORTHO"});

lyr_OpenStreetMap_0.setVisible(true);lyr_l_zone_alea_subm_synthese_s_976_1.setVisible(true);lyr_Unitlittorale_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Alasctiers,lyr_Unitlittorale_2];
lyr_l_zone_alea_subm_synthese_s_976_1.set('fieldAliases', {'gid': 'gid', 'id_obj': 'id_obj', 'lb_type': 'lb_type', 'dt_maj': 'dt_maj', 'lb_niveau': 'lb_niveau', });
lyr_Unitlittorale_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOM': 'NOM', 'Num': 'Num', 'Type': 'Type', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_l_zone_alea_subm_synthese_s_976_1.set('fieldImages', {'gid': 'Range', 'id_obj': 'TextEdit', 'lb_type': 'TextEdit', 'dt_maj': 'TextEdit', 'lb_niveau': 'TextEdit', });
lyr_Unitlittorale_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOM': 'TextEdit', 'Num': 'TextEdit', 'Type': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_l_zone_alea_subm_synthese_s_976_1.set('fieldLabels', {'gid': 'header label - always visible', 'id_obj': 'no label', 'lb_type': 'no label', 'dt_maj': 'no label', 'lb_niveau': 'no label', });
lyr_Unitlittorale_2.set('fieldLabels', {'OBJECTID': 'no label', 'NOM': 'no label', 'Num': 'no label', 'Type': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Unitlittorale_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});