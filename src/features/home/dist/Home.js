"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var tdc_logo_png_1 = require("../../../assets/tdc-logo.png");
var TalksService_1 = require("./talk-service/TalksService");
var ItemSeparatorView_1 = require("./item-separator/ItemSeparatorView");
var Home_styles_1 = require("./Home.styles");
var Home = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(''), search = _b[0], setSearch = _b[1];
    var _c = react_1.useState([]), filteredDataSource = _c[0], setFilteredDataSource = _c[1];
    var _d = react_1.useState([]), masterDataSource = _d[0], setMasterDataSource = _d[1];
    react_1.useEffect(function () {
        navigation.setOptions({
            title: 'Bem vindo.',
            headerStyle: {
                backgroundColor: '#0798D5'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        });
        TalksService_1["default"].getAllTalks().then(function (response) {
            setFilteredDataSource(response);
            setMasterDataSource(response);
        });
    }, []);
    var searchFilterFunction = function (text) {
        if (text) {
            var newData = masterDataSource.filter(function (item) {
                var itemData = item.title
                    ? item.title.toUpperCase()
                    : ''.toUpperCase();
                var textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
        }
        else {
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };
    var ItemView = function (_a) {
        var item = _a.item;
        var description = item.id + '.' + item.description;
        return (react_1["default"].createElement(react_native_1.View, { key: item.id, style: Home_styles_1["default"].talkCards },
            react_1["default"].createElement(react_native_1.View, { style: { marginLeft: 10 } },
                react_1["default"].createElement(react_native_1.Image, { style: Home_styles_1["default"].tinyLogo, source: { uri: item.image } })),
            react_1["default"].createElement(react_native_1.View, { style: { marginRight: 120 } },
                react_1["default"].createElement(react_native_1.Text, { style: Home_styles_1["default"].cardTitle }, item.title),
                react_1["default"].createElement(react_native_1.Text, { style: Home_styles_1["default"].itemStyle, onPress: function () { return goToSpeakerProfile(); } }, description))));
    };
    var goToSpeakerProfile = function () { return navigation.navigate("speaker-profile"); };
    return (react_1["default"].createElement(react_native_1.SafeAreaView, { style: Home_styles_1["default"].container },
        react_1["default"].createElement(react_native_1.View, { style: Home_styles_1["default"].containerImage },
            react_1["default"].createElement(react_native_1.Image, { style: Home_styles_1["default"].logo_image, source: tdc_logo_png_1["default"] })),
        react_1["default"].createElement(react_native_1.View, { style: Home_styles_1["default"].containerTextInput },
            react_1["default"].createElement(react_native_1.TextInput, { style: Home_styles_1["default"].textInputStyle, onChangeText: function (text) { return searchFilterFunction(text); }, value: search, underlineColorAndroid: "transparent", placeholder: "Buscar" })),
        react_1["default"].createElement(react_native_1.FlatList, { data: filteredDataSource, renderItem: ItemView, onEndReachedThreshold: 0.1, keyExtractor: function (item, index) { return index.toString(); }, ItemSeparatorComponent: ItemSeparatorView_1.ItemSeparatorView })));
};
exports["default"] = Home;
