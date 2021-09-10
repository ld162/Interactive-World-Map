var wms_layers = [];


        var lyr_StamenWatercolor_0 = new ol.layer.Tile({
            'title': 'Stamen Watercolor',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
            })
        });
var format_Entitten_1 = new ol.format.GeoJSON();
var features_Entitten_1 = format_Entitten_1.readFeatures(json_Entitten_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Entitten_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entitten_1.addFeatures(features_Entitten_1);
var lyr_Entitten_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Entitten_1, 
                style: style_Entitten_1,
                interactive: true,
                title: '<img src="styles/legend/Entitten_1.png" /> Entitäten'
            });
var format_Projektland_2 = new ol.format.GeoJSON();
var features_Projektland_2 = format_Projektland_2.readFeatures(json_Projektland_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Projektland_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projektland_2.addFeatures(features_Projektland_2);
var lyr_Projektland_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Projektland_2, 
                style: style_Projektland_2,
                interactive: true,
                title: '<img src="styles/legend/Projektland_2.png" /> Projektland'
            });

        var lyr_OpenWeatherMapClouds_3 = new ol.layer.Tile({
            'title': 'Open Weather Map Clouds',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?APPID=ef3c5137f6c31db50c4c6f1ce4e7e9dd'
            })
        });

lyr_StamenWatercolor_0.setVisible(true);lyr_Entitten_1.setVisible(true);lyr_Projektland_2.setVisible(true);lyr_OpenWeatherMapClouds_3.setVisible(true);
var layersList = [lyr_StamenWatercolor_0,lyr_Entitten_1,lyr_Projektland_2,lyr_OpenWeatherMapClouds_3];
lyr_Entitten_1.set('fieldAliases', {'COUNTRY_NA': 'COUNTRY_NA', });
lyr_Projektland_2.set('fieldAliases', {'COUNTRY_NA': 'COUNTRY_NA', '2021-09-09_Coutries_Info_COUNTRY_CO': '2021-09-09_Coutries_Info_COUNTRY_CO', '2021-09-09_Coutries_Info_Kontinent': '2021-09-09_Coutries_Info_Kontinent', '2021-09-09_Coutries_Info_Projekttitel': 'Projekttitel', '2021-09-09_Coutries_Info_Projektregion': 'Projektregion', '2021-09-09_Coutries_Info_Projektdauer': 'Projektdauer', '2021-09-09_Coutries_Info_Kosten (€)': 'Kosten (€)', '2021-09-09_Coutries_Info_Begünstigte': 'Begünstigte', '2021-09-09_Coutries_Info_Infopager': 'Infopager', '2021-09-09_Coutries_Info_Onepager': ' Onepager', '2021-09-09_Coutries_Info_Photo': 'Photo', });
lyr_Entitten_1.set('fieldImages', {'COUNTRY_NA': 'TextEdit', });
lyr_Projektland_2.set('fieldImages', {'COUNTRY_NA': 'TextEdit', '2021-09-09_Coutries_Info_COUNTRY_CO': 'Hidden', '2021-09-09_Coutries_Info_Kontinent': 'Hidden', '2021-09-09_Coutries_Info_Projekttitel': 'TextEdit', '2021-09-09_Coutries_Info_Projektregion': 'TextEdit', '2021-09-09_Coutries_Info_Projektdauer': 'TextEdit', '2021-09-09_Coutries_Info_Kosten (€)': 'TextEdit', '2021-09-09_Coutries_Info_Begünstigte': 'TextEdit', '2021-09-09_Coutries_Info_Infopager': 'TextEdit', '2021-09-09_Coutries_Info_Onepager': 'TextEdit', '2021-09-09_Coutries_Info_Photo': 'ExternalResource', });
lyr_Entitten_1.set('fieldLabels', {'COUNTRY_NA': 'no label', });
lyr_Projektland_2.set('fieldLabels', {'COUNTRY_NA': 'no label', '2021-09-09_Coutries_Info_Projekttitel': 'inline label', '2021-09-09_Coutries_Info_Projektregion': 'inline label', '2021-09-09_Coutries_Info_Projektdauer': 'inline label', '2021-09-09_Coutries_Info_Kosten (€)': 'inline label', '2021-09-09_Coutries_Info_Begünstigte': 'inline label', '2021-09-09_Coutries_Info_Infopager': 'inline label', '2021-09-09_Coutries_Info_Onepager': 'inline label', '2021-09-09_Coutries_Info_Photo': 'inline label', });
lyr_Projektland_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});