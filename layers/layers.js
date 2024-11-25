ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5387").setExtent([-700601.247496, 8078872.402916, 1733601.047872, 9927240.157650]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Departamentos_1 = new ol.format.GeoJSON();
var features_Departamentos_1 = format_Departamentos_1.readFeatures(json_Departamentos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5387'});
var jsonSource_Departamentos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_1.addFeatures(features_Departamentos_1);
var lyr_Departamentos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamentos_1, 
                style: style_Departamentos_1,
                popuplayertitle: "Departamentos",
                interactive: true,
    title: 'Departamentos<br />\
    <img src="styles/legend/Departamentos_1_0.png" /> 1,7 - 11<br />\
    <img src="styles/legend/Departamentos_1_1.png" /> 11 - 17,1<br />\
    <img src="styles/legend/Departamentos_1_2.png" /> 17,1 - 24,4<br />\
    <img src="styles/legend/Departamentos_1_3.png" /> 24,4 - 49,1<br />\
    <img src="styles/legend/Departamentos_1_4.png" /> 49,1 - 7086,2<br />'
        });
var format_Rios_2 = new ol.format.GeoJSON();
var features_Rios_2 = format_Rios_2.readFeatures(json_Rios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5387'});
var jsonSource_Rios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_2.addFeatures(features_Rios_2);
var lyr_Rios_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rios_2, 
                style: style_Rios_2,
                popuplayertitle: "Rios",
                interactive: true,
                title: '<img src="styles/legend/Rios_2.png" /> Rios'
            });
var format_Rutas_3 = new ol.format.GeoJSON();
var features_Rutas_3 = format_Rutas_3.readFeatures(json_Rutas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5387'});
var jsonSource_Rutas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rutas_3.addFeatures(features_Rutas_3);
var lyr_Rutas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rutas_3, 
                style: style_Rutas_3,
                popuplayertitle: "Rutas",
                interactive: false,
    title: 'Rutas<br />\
    <img src="styles/legend/Rutas_3_0.png" /> pavimentada<br />\
    <img src="styles/legend/Rutas_3_1.png" /> Sin pavimentar <br />\
    <img src="styles/legend/Rutas_3_2.png" /> asfalto basico<br />\
    <img src="styles/legend/Rutas_3_3.png" /> proyectado<br />'
        });
var format_Ferrocarril_4 = new ol.format.GeoJSON();
var features_Ferrocarril_4 = format_Ferrocarril_4.readFeatures(json_Ferrocarril_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5387'});
var jsonSource_Ferrocarril_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferrocarril_4.addFeatures(features_Ferrocarril_4);
var lyr_Ferrocarril_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferrocarril_4, 
                style: style_Ferrocarril_4,
                popuplayertitle: "Ferrocarril",
                interactive: true,
                title: '<img src="styles/legend/Ferrocarril_4.png" /> Ferrocarril'
            });
var format_capital_5 = new ol.format.GeoJSON();
var features_capital_5 = format_capital_5.readFeatures(json_capital_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5387'});
var jsonSource_capital_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_capital_5.addFeatures(features_capital_5);
var lyr_capital_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_capital_5, 
                style: style_capital_5,
                popuplayertitle: "capital",
                interactive: true,
                title: '<img src="styles/legend/capital_5.png" /> capital'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Departamentos_1.setVisible(true);lyr_Rios_2.setVisible(true);lyr_Rutas_3.setVisible(true);lyr_Ferrocarril_4.setVisible(true);lyr_capital_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Departamentos_1,lyr_Rios_2,lyr_Rutas_3,lyr_Ferrocarril_4,lyr_capital_5];
lyr_Departamentos_1.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'CAPITAL': 'CAPITAL', 'densidad': 'densidad', 'área km2': 'área km2', 'habitantes': 'habitantes', });
lyr_Rios_2.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_Rutas_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'dSuperfi24': 'dSuperfi24', });
lyr_Ferrocarril_4.set('fieldAliases', {'TRAMO': 'TRAMO', 'Long km': 'Long km', 'Nombre': 'Nombre', });
lyr_capital_5.set('fieldAliases', {'Habitantes': 'Habitantes', });
lyr_Departamentos_1.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'CAPITAL': 'TextEdit', 'densidad': 'TextEdit', 'área km2': 'TextEdit', 'habitantes': 'TextEdit', });
lyr_Rios_2.set('fieldImages', {'Nombre': '', });
lyr_Rutas_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'dSuperfi24': 'TextEdit', });
lyr_Ferrocarril_4.set('fieldImages', {'TRAMO': 'TextEdit', 'Long km': 'TextEdit', 'Nombre': '', });
lyr_capital_5.set('fieldImages', {'Habitantes': 'TextEdit', });
lyr_Departamentos_1.set('fieldLabels', {'DEPARTAMEN': 'inline label - visible with data', 'CAPITAL': 'inline label - visible with data', 'densidad': 'inline label - visible with data', 'área km2': 'hidden field', 'habitantes': 'hidden field', });
lyr_Rios_2.set('fieldLabels', {'Nombre': 'inline label - visible with data', });
lyr_Rutas_3.set('fieldLabels', {'OBJECTID': 'no label', 'dSuperfi24': 'no label', });
lyr_Ferrocarril_4.set('fieldLabels', {'TRAMO': 'inline label - visible with data', 'Long km': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', });
lyr_capital_5.set('fieldLabels', {'Habitantes': 'inline label - visible with data', });
lyr_capital_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});