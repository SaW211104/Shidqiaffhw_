var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Daerahyangamandaribanjir_1 = new ol.format.GeoJSON();
var features_Daerahyangamandaribanjir_1 = format_Daerahyangamandaribanjir_1.readFeatures(json_Daerahyangamandaribanjir_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Daerahyangamandaribanjir_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Daerahyangamandaribanjir_1.addFeatures(features_Daerahyangamandaribanjir_1);
var lyr_Daerahyangamandaribanjir_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Daerahyangamandaribanjir_1, 
                style: style_Daerahyangamandaribanjir_1,
                popuplayertitle: 'Daerah yang aman dari banjir',
                interactive: true,
                title: '<img src="styles/legend/Daerahyangamandaribanjir_1.png" /> Daerah yang aman dari banjir'
            });
var format_Daerahrisikobanjirtinggi_2 = new ol.format.GeoJSON();
var features_Daerahrisikobanjirtinggi_2 = format_Daerahrisikobanjirtinggi_2.readFeatures(json_Daerahrisikobanjirtinggi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Daerahrisikobanjirtinggi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Daerahrisikobanjirtinggi_2.addFeatures(features_Daerahrisikobanjirtinggi_2);
var lyr_Daerahrisikobanjirtinggi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Daerahrisikobanjirtinggi_2, 
                style: style_Daerahrisikobanjirtinggi_2,
                popuplayertitle: 'Daerah risiko banjir tinggi',
                interactive: true,
                title: '<img src="styles/legend/Daerahrisikobanjirtinggi_2.png" /> Daerah risiko banjir tinggi'
            });
var format_Daerahbanjir_3 = new ol.format.GeoJSON();
var features_Daerahbanjir_3 = format_Daerahbanjir_3.readFeatures(json_Daerahbanjir_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Daerahbanjir_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Daerahbanjir_3.addFeatures(features_Daerahbanjir_3);
var lyr_Daerahbanjir_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Daerahbanjir_3, 
                style: style_Daerahbanjir_3,
                popuplayertitle: 'Daerah banjir',
                interactive: true,
                title: '<img src="styles/legend/Daerahbanjir_3.png" /> Daerah banjir'
            });
var format_Daerahrisikobanjirsedang100mdarisungai_4 = new ol.format.GeoJSON();
var features_Daerahrisikobanjirsedang100mdarisungai_4 = format_Daerahrisikobanjirsedang100mdarisungai_4.readFeatures(json_Daerahrisikobanjirsedang100mdarisungai_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Daerahrisikobanjirsedang100mdarisungai_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Daerahrisikobanjirsedang100mdarisungai_4.addFeatures(features_Daerahrisikobanjirsedang100mdarisungai_4);
var lyr_Daerahrisikobanjirsedang100mdarisungai_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Daerahrisikobanjirsedang100mdarisungai_4, 
                style: style_Daerahrisikobanjirsedang100mdarisungai_4,
                popuplayertitle: 'Daerah risiko banjir sedang (100 m dari sungai)',
                interactive: true,
                title: '<img src="styles/legend/Daerahrisikobanjirsedang100mdarisungai_4.png" /> Daerah risiko banjir sedang (100 m dari sungai)'
            });
var format_Daerahrisikobanjirrendah200mdarisungai_5 = new ol.format.GeoJSON();
var features_Daerahrisikobanjirrendah200mdarisungai_5 = format_Daerahrisikobanjirrendah200mdarisungai_5.readFeatures(json_Daerahrisikobanjirrendah200mdarisungai_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Daerahrisikobanjirrendah200mdarisungai_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Daerahrisikobanjirrendah200mdarisungai_5.addFeatures(features_Daerahrisikobanjirrendah200mdarisungai_5);
var lyr_Daerahrisikobanjirrendah200mdarisungai_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Daerahrisikobanjirrendah200mdarisungai_5, 
                style: style_Daerahrisikobanjirrendah200mdarisungai_5,
                popuplayertitle: 'Daerah risiko banjir rendah (200 m dari sungai)',
                interactive: true,
                title: '<img src="styles/legend/Daerahrisikobanjirrendah200mdarisungai_5.png" /> Daerah risiko banjir rendah (200 m dari sungai)'
            });
var format_sungai_6 = new ol.format.GeoJSON();
var features_sungai_6 = format_sungai_6.readFeatures(json_sungai_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_6.addFeatures(features_sungai_6);
var lyr_sungai_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungai_6, 
                style: style_sungai_6,
                popuplayertitle: 'sungai',
                interactive: true,
                title: '<img src="styles/legend/sungai_6.png" /> sungai'
            });
var format_Sungaibatasradius100m_7 = new ol.format.GeoJSON();
var features_Sungaibatasradius100m_7 = format_Sungaibatasradius100m_7.readFeatures(json_Sungaibatasradius100m_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungaibatasradius100m_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungaibatasradius100m_7.addFeatures(features_Sungaibatasradius100m_7);
var lyr_Sungaibatasradius100m_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungaibatasradius100m_7, 
                style: style_Sungaibatasradius100m_7,
                popuplayertitle: 'Sungai batas radius 100 m',
                interactive: true,
                title: '<img src="styles/legend/Sungaibatasradius100m_7.png" /> Sungai batas radius 100 m'
            });
var format_sungaibatasradius200m_8 = new ol.format.GeoJSON();
var features_sungaibatasradius200m_8 = format_sungaibatasradius200m_8.readFeatures(json_sungaibatasradius200m_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungaibatasradius200m_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungaibatasradius200m_8.addFeatures(features_sungaibatasradius200m_8);
var lyr_sungaibatasradius200m_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungaibatasradius200m_8, 
                style: style_sungaibatasradius200m_8,
                popuplayertitle: 'sungai batas radius 200 m',
                interactive: true,
                title: '<img src="styles/legend/sungaibatasradius200m_8.png" /> sungai batas radius 200 m'
            });
var format_JalanDKIJakarta_9 = new ol.format.GeoJSON();
var features_JalanDKIJakarta_9 = format_JalanDKIJakarta_9.readFeatures(json_JalanDKIJakarta_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDKIJakarta_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDKIJakarta_9.addFeatures(features_JalanDKIJakarta_9);
var lyr_JalanDKIJakarta_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDKIJakarta_9, 
                style: style_JalanDKIJakarta_9,
                popuplayertitle: 'Jalan DKI Jakarta',
                interactive: true,
                title: '<img src="styles/legend/JalanDKIJakarta_9.png" /> Jalan DKI Jakarta'
            });
var format_BatasJakarta_10 = new ol.format.GeoJSON();
var features_BatasJakarta_10 = format_BatasJakarta_10.readFeatures(json_BatasJakarta_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasJakarta_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasJakarta_10.addFeatures(features_BatasJakarta_10);
var lyr_BatasJakarta_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasJakarta_10, 
                style: style_BatasJakarta_10,
                popuplayertitle: 'Batas Jakarta',
                interactive: true,
                title: '<img src="styles/legend/BatasJakarta_10.png" /> Batas Jakarta'
            });
var format_Sekolahjakarta_11 = new ol.format.GeoJSON();
var features_Sekolahjakarta_11 = format_Sekolahjakarta_11.readFeatures(json_Sekolahjakarta_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sekolahjakarta_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolahjakarta_11.addFeatures(features_Sekolahjakarta_11);
var lyr_Sekolahjakarta_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekolahjakarta_11, 
                style: style_Sekolahjakarta_11,
                popuplayertitle: 'Sekolah jakarta',
                interactive: true,
                title: '<img src="styles/legend/Sekolahjakarta_11.png" /> Sekolah jakarta'
            });
var format_Sekolahdenganpotensibanjirtinggi_12 = new ol.format.GeoJSON();
var features_Sekolahdenganpotensibanjirtinggi_12 = format_Sekolahdenganpotensibanjirtinggi_12.readFeatures(json_Sekolahdenganpotensibanjirtinggi_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sekolahdenganpotensibanjirtinggi_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolahdenganpotensibanjirtinggi_12.addFeatures(features_Sekolahdenganpotensibanjirtinggi_12);
var lyr_Sekolahdenganpotensibanjirtinggi_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekolahdenganpotensibanjirtinggi_12, 
                style: style_Sekolahdenganpotensibanjirtinggi_12,
                popuplayertitle: 'Sekolah dengan potensi banjir tinggi',
                interactive: true,
                title: '<img src="styles/legend/Sekolahdenganpotensibanjirtinggi_12.png" /> Sekolah dengan potensi banjir tinggi'
            });
var format_Sekolahamanbanjir_13 = new ol.format.GeoJSON();
var features_Sekolahamanbanjir_13 = format_Sekolahamanbanjir_13.readFeatures(json_Sekolahamanbanjir_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sekolahamanbanjir_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolahamanbanjir_13.addFeatures(features_Sekolahamanbanjir_13);
var lyr_Sekolahamanbanjir_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekolahamanbanjir_13, 
                style: style_Sekolahamanbanjir_13,
                popuplayertitle: 'Sekolah aman banjir',
                interactive: true,
                title: '<img src="styles/legend/Sekolahamanbanjir_13.png" /> Sekolah aman banjir'
            });
var format_Sekolahdenganpotensibanjirrendah_14 = new ol.format.GeoJSON();
var features_Sekolahdenganpotensibanjirrendah_14 = format_Sekolahdenganpotensibanjirrendah_14.readFeatures(json_Sekolahdenganpotensibanjirrendah_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sekolahdenganpotensibanjirrendah_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolahdenganpotensibanjirrendah_14.addFeatures(features_Sekolahdenganpotensibanjirrendah_14);
var lyr_Sekolahdenganpotensibanjirrendah_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekolahdenganpotensibanjirrendah_14, 
                style: style_Sekolahdenganpotensibanjirrendah_14,
                popuplayertitle: 'Sekolah dengan potensi banjir rendah',
                interactive: true,
                title: '<img src="styles/legend/Sekolahdenganpotensibanjirrendah_14.png" /> Sekolah dengan potensi banjir rendah'
            });
var format_Sekolahdenganpotensibanjirsedang_15 = new ol.format.GeoJSON();
var features_Sekolahdenganpotensibanjirsedang_15 = format_Sekolahdenganpotensibanjirsedang_15.readFeatures(json_Sekolahdenganpotensibanjirsedang_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sekolahdenganpotensibanjirsedang_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolahdenganpotensibanjirsedang_15.addFeatures(features_Sekolahdenganpotensibanjirsedang_15);
var lyr_Sekolahdenganpotensibanjirsedang_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekolahdenganpotensibanjirsedang_15, 
                style: style_Sekolahdenganpotensibanjirsedang_15,
                popuplayertitle: 'Sekolah dengan potensi banjir sedang',
                interactive: true,
                title: '<img src="styles/legend/Sekolahdenganpotensibanjirsedang_15.png" /> Sekolah dengan potensi banjir sedang'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Daerahyangamandaribanjir_1.setVisible(true);lyr_Daerahrisikobanjirtinggi_2.setVisible(true);lyr_Daerahbanjir_3.setVisible(true);lyr_Daerahrisikobanjirsedang100mdarisungai_4.setVisible(true);lyr_Daerahrisikobanjirrendah200mdarisungai_5.setVisible(true);lyr_sungai_6.setVisible(true);lyr_Sungaibatasradius100m_7.setVisible(true);lyr_sungaibatasradius200m_8.setVisible(true);lyr_JalanDKIJakarta_9.setVisible(true);lyr_BatasJakarta_10.setVisible(true);lyr_Sekolahjakarta_11.setVisible(true);lyr_Sekolahdenganpotensibanjirtinggi_12.setVisible(true);lyr_Sekolahamanbanjir_13.setVisible(true);lyr_Sekolahdenganpotensibanjirrendah_14.setVisible(true);lyr_Sekolahdenganpotensibanjirsedang_15.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Daerahyangamandaribanjir_1,lyr_Daerahrisikobanjirtinggi_2,lyr_Daerahbanjir_3,lyr_Daerahrisikobanjirsedang100mdarisungai_4,lyr_Daerahrisikobanjirrendah200mdarisungai_5,lyr_sungai_6,lyr_Sungaibatasradius100m_7,lyr_sungaibatasradius200m_8,lyr_JalanDKIJakarta_9,lyr_BatasJakarta_10,lyr_Sekolahjakarta_11,lyr_Sekolahdenganpotensibanjirtinggi_12,lyr_Sekolahamanbanjir_13,lyr_Sekolahdenganpotensibanjirrendah_14,lyr_Sekolahdenganpotensibanjirsedang_15];
lyr_Daerahyangamandaribanjir_1.set('fieldAliases', {'KAB_NAME': 'KAB_NAME', });
lyr_Daerahrisikobanjirtinggi_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', });
lyr_Daerahbanjir_3.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Daerahrisikobanjirsedang100mdarisungai_4.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Daerahrisikobanjirrendah200mdarisungai_5.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_sungai_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', });
lyr_Sungaibatasradius100m_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', });
lyr_sungaibatasradius200m_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', });
lyr_JalanDKIJakarta_9.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'NAMRJL_2': 'NAMRJL_2', 'KONRJL_2': 'KONRJL_2', 'MATRJL_2': 'MATRJL_2', 'FGSRJL_2': 'FGSRJL_2', 'UTKRJL_2': 'UTKRJL_2', 'TOLRJL_2': 'TOLRJL_2', 'WLYRJL_2': 'WLYRJL_2', 'AUTRJL_2': 'AUTRJL_2', 'KLSRJL_2': 'KLSRJL_2', 'SPCRJL_2': 'SPCRJL_2', 'JPARJL_2': 'JPARJL_2', 'ARHRJL_2': 'ARHRJL_2', 'STARJL_2': 'STARJL_2', 'KLLRJL_2': 'KLLRJL_2', 'MEDRJL_2': 'MEDRJL_2', 'LOCRJL_2': 'LOCRJL_2', 'JARRJL_2': 'JARRJL_2', 'FCODE_2': 'FCODE_2', 'REMARK_2': 'REMARK_2', 'SRS_ID_2': 'SRS_ID_2', 'LCODE_2': 'LCODE_2', 'METADATA_2': 'METADATA_2', 'SHAPE_Le_1': 'SHAPE_Le_1', 'NAMRJL_3': 'NAMRJL_3', 'KONRJL_3': 'KONRJL_3', 'MATRJL_3': 'MATRJL_3', 'FGSRJL_3': 'FGSRJL_3', 'UTKRJL_3': 'UTKRJL_3', 'TOLRJL_3': 'TOLRJL_3', 'WLYRJL_3': 'WLYRJL_3', 'AUTRJL_3': 'AUTRJL_3', 'KLSRJL_3': 'KLSRJL_3', 'SPCRJL_3': 'SPCRJL_3', 'JPARJL_3': 'JPARJL_3', 'ARHRJL_3': 'ARHRJL_3', 'STARJL_3': 'STARJL_3', 'KLLRJL_3': 'KLLRJL_3', 'MEDRJL_3': 'MEDRJL_3', 'LOCRJL_3': 'LOCRJL_3', 'JARRJL_3': 'JARRJL_3', 'FCODE_3': 'FCODE_3', 'REMARK_3': 'REMARK_3', 'SRS_ID_3': 'SRS_ID_3', 'LCODE_3': 'LCODE_3', 'METADATA_3': 'METADATA_3', 'SHAPE_Le_2': 'SHAPE_Le_2', 'NAMRJL_4': 'NAMRJL_4', 'KONRJL_4': 'KONRJL_4', 'MATRJL_4': 'MATRJL_4', 'FGSRJL_4': 'FGSRJL_4', 'UTKRJL_4': 'UTKRJL_4', 'TOLRJL_4': 'TOLRJL_4', 'WLYRJL_4': 'WLYRJL_4', 'AUTRJL_4': 'AUTRJL_4', 'KLSRJL_4': 'KLSRJL_4', 'SPCRJL_4': 'SPCRJL_4', 'JPARJL_4': 'JPARJL_4', 'ARHRJL_4': 'ARHRJL_4', 'STARJL_4': 'STARJL_4', 'KLLRJL_4': 'KLLRJL_4', 'MEDRJL_4': 'MEDRJL_4', 'LOCRJL_4': 'LOCRJL_4', 'JARRJL_4': 'JARRJL_4', 'FCODE_4': 'FCODE_4', 'REMARK_4': 'REMARK_4', 'SRS_ID_4': 'SRS_ID_4', 'LCODE_4': 'LCODE_4', 'METADATA_4': 'METADATA_4', 'SHAPE_Le_3': 'SHAPE_Le_3', 'NAMRJL_5': 'NAMRJL_5', 'KONRJL_5': 'KONRJL_5', 'MATRJL_5': 'MATRJL_5', 'FGSRJL_5': 'FGSRJL_5', 'UTKRJL_5': 'UTKRJL_5', 'TOLRJL_5': 'TOLRJL_5', 'WLYRJL_5': 'WLYRJL_5', 'AUTRJL_5': 'AUTRJL_5', 'KLSRJL_5': 'KLSRJL_5', 'SPCRJL_5': 'SPCRJL_5', 'JPARJL_5': 'JPARJL_5', 'ARHRJL_5': 'ARHRJL_5', 'STARJL_5': 'STARJL_5', 'KLLRJL_5': 'KLLRJL_5', 'MEDRJL_5': 'MEDRJL_5', 'LOCRJL_5': 'LOCRJL_5', 'JARRJL_5': 'JARRJL_5', 'FCODE_5': 'FCODE_5', 'REMARK_5': 'REMARK_5', 'SRS_ID_5': 'SRS_ID_5', 'LCODE_5': 'LCODE_5', 'METADATA_5': 'METADATA_5', 'SHAPE_Le_4': 'SHAPE_Le_4', });
lyr_BatasJakarta_10.set('fieldAliases', {'KAB_NAME': 'KAB_NAME', });
lyr_Sekolahjakarta_11.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', });
lyr_Sekolahdenganpotensibanjirtinggi_12.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', 'fid': 'fid', 'DN': 'DN', 'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', });
lyr_Sekolahamanbanjir_13.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', 'KAB_NAME_2': 'KAB_NAME_2', });
lyr_Sekolahdenganpotensibanjirrendah_14.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', 'fid': 'fid', 'DN': 'DN', });
lyr_Sekolahdenganpotensibanjirsedang_15.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', 'fid': 'fid', 'DN': 'DN', });
lyr_Daerahyangamandaribanjir_1.set('fieldImages', {'KAB_NAME': '', });
lyr_Daerahrisikobanjirtinggi_2.set('fieldImages', {'fid': '', 'DN': '', 'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', 'layer': '', 'path': '', });
lyr_Daerahbanjir_3.set('fieldImages', {'fid': '', 'DN': '', });
lyr_Daerahrisikobanjirsedang100mdarisungai_4.set('fieldImages', {'fid': '', 'DN': '', });
lyr_Daerahrisikobanjirrendah200mdarisungai_5.set('fieldImages', {'fid': '', 'DN': '', });
lyr_sungai_6.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', 'layer': '', 'path': '', });
lyr_Sungaibatasradius100m_7.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', 'layer': '', 'path': '', });
lyr_sungaibatasradius200m_8.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', 'layer': '', 'path': '', });
lyr_JalanDKIJakarta_9.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'NAMRJL_2': '', 'KONRJL_2': '', 'MATRJL_2': '', 'FGSRJL_2': '', 'UTKRJL_2': '', 'TOLRJL_2': '', 'WLYRJL_2': '', 'AUTRJL_2': '', 'KLSRJL_2': '', 'SPCRJL_2': '', 'JPARJL_2': '', 'ARHRJL_2': '', 'STARJL_2': '', 'KLLRJL_2': '', 'MEDRJL_2': '', 'LOCRJL_2': '', 'JARRJL_2': '', 'FCODE_2': '', 'REMARK_2': '', 'SRS_ID_2': '', 'LCODE_2': '', 'METADATA_2': '', 'SHAPE_Le_1': '', 'NAMRJL_3': '', 'KONRJL_3': '', 'MATRJL_3': '', 'FGSRJL_3': '', 'UTKRJL_3': '', 'TOLRJL_3': '', 'WLYRJL_3': '', 'AUTRJL_3': '', 'KLSRJL_3': '', 'SPCRJL_3': '', 'JPARJL_3': '', 'ARHRJL_3': '', 'STARJL_3': '', 'KLLRJL_3': '', 'MEDRJL_3': '', 'LOCRJL_3': '', 'JARRJL_3': '', 'FCODE_3': '', 'REMARK_3': '', 'SRS_ID_3': '', 'LCODE_3': '', 'METADATA_3': '', 'SHAPE_Le_2': '', 'NAMRJL_4': '', 'KONRJL_4': '', 'MATRJL_4': '', 'FGSRJL_4': '', 'UTKRJL_4': '', 'TOLRJL_4': '', 'WLYRJL_4': '', 'AUTRJL_4': '', 'KLSRJL_4': '', 'SPCRJL_4': '', 'JPARJL_4': '', 'ARHRJL_4': '', 'STARJL_4': '', 'KLLRJL_4': '', 'MEDRJL_4': '', 'LOCRJL_4': '', 'JARRJL_4': '', 'FCODE_4': '', 'REMARK_4': '', 'SRS_ID_4': '', 'LCODE_4': '', 'METADATA_4': '', 'SHAPE_Le_3': '', 'NAMRJL_5': '', 'KONRJL_5': '', 'MATRJL_5': '', 'FGSRJL_5': '', 'UTKRJL_5': '', 'TOLRJL_5': '', 'WLYRJL_5': '', 'AUTRJL_5': '', 'KLSRJL_5': '', 'SPCRJL_5': '', 'JPARJL_5': '', 'ARHRJL_5': '', 'STARJL_5': '', 'KLLRJL_5': '', 'MEDRJL_5': '', 'LOCRJL_5': '', 'JARRJL_5': '', 'FCODE_5': '', 'REMARK_5': '', 'SRS_ID_5': '', 'LCODE_5': '', 'METADATA_5': '', 'SHAPE_Le_4': '', });
lyr_BatasJakarta_10.set('fieldImages', {'KAB_NAME': '', });
lyr_Sekolahjakarta_11.set('fieldImages', {'addr_full': '', 'name': '', 'type': '', 'type_id': '', 'name_id': '', 'operator': '', 'SDT': '', 'SDN': '', 'Alamat': '', 'KAB_NAME': '', });
lyr_Sekolahdenganpotensibanjirtinggi_12.set('fieldImages', {'addr_full': '', 'name': '', 'type': '', 'type_id': '', 'name_id': '', 'operator': '', 'SDT': '', 'SDN': '', 'Alamat': '', 'KAB_NAME': '', 'fid': '', 'DN': '', 'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', 'layer': '', 'path': '', });
lyr_Sekolahamanbanjir_13.set('fieldImages', {'addr_full': '', 'name': '', 'type': '', 'type_id': '', 'name_id': '', 'operator': '', 'SDT': '', 'SDN': '', 'Alamat': '', 'KAB_NAME': '', 'KAB_NAME_2': '', });
lyr_Sekolahdenganpotensibanjirrendah_14.set('fieldImages', {'addr_full': '', 'name': '', 'type': '', 'type_id': '', 'name_id': '', 'operator': '', 'SDT': '', 'SDN': '', 'Alamat': '', 'KAB_NAME': '', 'fid': '', 'DN': '', });
lyr_Sekolahdenganpotensibanjirsedang_15.set('fieldImages', {'addr_full': '', 'name': '', 'type': '', 'type_id': '', 'name_id': '', 'operator': '', 'SDT': '', 'SDN': '', 'Alamat': '', 'KAB_NAME': '', 'fid': '', 'DN': '', });
lyr_Daerahyangamandaribanjir_1.set('fieldLabels', {'KAB_NAME': 'no label', });
lyr_Daerahrisikobanjirtinggi_2.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Daerahbanjir_3.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Daerahrisikobanjirsedang100mdarisungai_4.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Daerahrisikobanjirrendah200mdarisungai_5.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_sungai_6.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Sungaibatasradius100m_7.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_sungaibatasradius200m_8.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_JalanDKIJakarta_9.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'NAMRJL_2': 'no label', 'KONRJL_2': 'no label', 'MATRJL_2': 'no label', 'FGSRJL_2': 'no label', 'UTKRJL_2': 'no label', 'TOLRJL_2': 'no label', 'WLYRJL_2': 'no label', 'AUTRJL_2': 'no label', 'KLSRJL_2': 'no label', 'SPCRJL_2': 'no label', 'JPARJL_2': 'no label', 'ARHRJL_2': 'no label', 'STARJL_2': 'no label', 'KLLRJL_2': 'no label', 'MEDRJL_2': 'no label', 'LOCRJL_2': 'no label', 'JARRJL_2': 'no label', 'FCODE_2': 'no label', 'REMARK_2': 'no label', 'SRS_ID_2': 'no label', 'LCODE_2': 'no label', 'METADATA_2': 'no label', 'SHAPE_Le_1': 'no label', 'NAMRJL_3': 'no label', 'KONRJL_3': 'no label', 'MATRJL_3': 'no label', 'FGSRJL_3': 'no label', 'UTKRJL_3': 'no label', 'TOLRJL_3': 'no label', 'WLYRJL_3': 'no label', 'AUTRJL_3': 'no label', 'KLSRJL_3': 'no label', 'SPCRJL_3': 'no label', 'JPARJL_3': 'no label', 'ARHRJL_3': 'no label', 'STARJL_3': 'no label', 'KLLRJL_3': 'no label', 'MEDRJL_3': 'no label', 'LOCRJL_3': 'no label', 'JARRJL_3': 'no label', 'FCODE_3': 'no label', 'REMARK_3': 'no label', 'SRS_ID_3': 'no label', 'LCODE_3': 'no label', 'METADATA_3': 'no label', 'SHAPE_Le_2': 'no label', 'NAMRJL_4': 'no label', 'KONRJL_4': 'no label', 'MATRJL_4': 'no label', 'FGSRJL_4': 'no label', 'UTKRJL_4': 'no label', 'TOLRJL_4': 'no label', 'WLYRJL_4': 'no label', 'AUTRJL_4': 'no label', 'KLSRJL_4': 'no label', 'SPCRJL_4': 'no label', 'JPARJL_4': 'no label', 'ARHRJL_4': 'no label', 'STARJL_4': 'no label', 'KLLRJL_4': 'no label', 'MEDRJL_4': 'no label', 'LOCRJL_4': 'no label', 'JARRJL_4': 'no label', 'FCODE_4': 'no label', 'REMARK_4': 'no label', 'SRS_ID_4': 'no label', 'LCODE_4': 'no label', 'METADATA_4': 'no label', 'SHAPE_Le_3': 'no label', 'NAMRJL_5': 'no label', 'KONRJL_5': 'no label', 'MATRJL_5': 'no label', 'FGSRJL_5': 'no label', 'UTKRJL_5': 'no label', 'TOLRJL_5': 'no label', 'WLYRJL_5': 'no label', 'AUTRJL_5': 'no label', 'KLSRJL_5': 'no label', 'SPCRJL_5': 'no label', 'JPARJL_5': 'no label', 'ARHRJL_5': 'no label', 'STARJL_5': 'no label', 'KLLRJL_5': 'no label', 'MEDRJL_5': 'no label', 'LOCRJL_5': 'no label', 'JARRJL_5': 'no label', 'FCODE_5': 'no label', 'REMARK_5': 'no label', 'SRS_ID_5': 'no label', 'LCODE_5': 'no label', 'METADATA_5': 'no label', 'SHAPE_Le_4': 'no label', });
lyr_BatasJakarta_10.set('fieldLabels', {'KAB_NAME': 'no label', });
lyr_Sekolahjakarta_11.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'no label', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', });
lyr_Sekolahdenganpotensibanjirtinggi_12.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'no label', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', 'fid': 'no label', 'DN': 'no label', 'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Sekolahamanbanjir_13.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'no label', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', 'KAB_NAME_2': 'no label', });
lyr_Sekolahdenganpotensibanjirrendah_14.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'no label', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', 'fid': 'no label', 'DN': 'no label', });
lyr_Sekolahdenganpotensibanjirsedang_15.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'no label', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', 'fid': 'no label', 'DN': 'no label', });
lyr_Sekolahdenganpotensibanjirsedang_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});