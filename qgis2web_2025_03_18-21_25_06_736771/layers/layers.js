var wms_layers = [];

var format_2011_Dist_0 = new ol.format.GeoJSON();
var features_2011_Dist_0 = format_2011_Dist_0.readFeatures(json_2011_Dist_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2011_Dist_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2011_Dist_0.addFeatures(features_2011_Dist_0);
var lyr_2011_Dist_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2011_Dist_0, 
                style: style_2011_Dist_0,
                popuplayertitle: '2011_Dist',
                interactive: true,
    title: '2011_Dist<br />\
    <img src="styles/legend/2011_Dist_0_0.png" /> 0 - 21748<br />\
    <img src="styles/legend/2011_Dist_0_1.png" /> 21748 - 37939<br />\
    <img src="styles/legend/2011_Dist_0_2.png" /> 37939 - 56562<br />\
    <img src="styles/legend/2011_Dist_0_3.png" /> 56562 - 102752<br />\
    <img src="styles/legend/2011_Dist_0_4.png" /> 102752 - 2699387<br />' });

lyr_2011_Dist_0.setVisible(true);
var layersList = [lyr_2011_Dist_0];
lyr_2011_Dist_0.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'ST_NM': 'ST_NM', 'ST_CEN_CD': 'ST_CEN_CD', 'DT_CEN_CD': 'DT_CEN_CD', 'CENSUSCODE': 'CENSUSCODE', 'FOOTFEMALE': 'FOOTFEMALE', 'FOOTMALE': 'FOOTMALE', 'FOOTRURAL': 'FOOTRURAL', 'FOOTURBAN': 'FOOTURBAN', 'FOOTTOTAL': 'FOOTTOTAL', });
lyr_2011_Dist_0.set('fieldImages', {'DISTRICT': 'TextEdit', 'ST_NM': 'TextEdit', 'ST_CEN_CD': 'Range', 'DT_CEN_CD': 'Range', 'CENSUSCODE': 'TextEdit', 'FOOTFEMALE': 'TextEdit', 'FOOTMALE': 'TextEdit', 'FOOTRURAL': 'TextEdit', 'FOOTURBAN': 'TextEdit', 'FOOTTOTAL': 'TextEdit', });
lyr_2011_Dist_0.set('fieldLabels', {'DISTRICT': 'no label', 'ST_NM': 'no label', 'ST_CEN_CD': 'no label', 'DT_CEN_CD': 'no label', 'CENSUSCODE': 'header label - visible with data', 'FOOTFEMALE': 'no label', 'FOOTMALE': 'no label', 'FOOTRURAL': 'no label', 'FOOTURBAN': 'no label', 'FOOTTOTAL': 'no label', });
lyr_2011_Dist_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});