"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var TalkAPI_1 = require("./service/TalkAPI/TalkAPI");
var item_separator_1 = require("./item-separator");
var search_bar_1 = require("./search-bar");
var Home_styles_1 = require("./Home.styles");
var Home = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(''), value = _b[0], setSearch = _b[1];
    var _c = react_1.useState([]), filteredDataSource = _c[0], setFilteredDataSource = _c[1];
    var _d = react_1.useState([]), masterDataSource = _d[0], setMasterDataSource = _d[1];
    react_1.useEffect(function () {
        navigation.setOptions({
            title: 'Palestras',
            headerStyle: {
                backgroundColor: '#0798D5'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        });
        TalkAPI_1["default"].getAllTalks().then(function (response) {
            setFilteredDataSource(response);
            setMasterDataSource(response);
        });
    }, []);
    var searchFilter = function (text) {
        if (text) {
            var searchText = masterDataSource.filter(function (item) {
                return item.title
                    .toUpperCase()
                    .indexOf(text.toUpperCase()) > -1;
            });
            setFilteredDataSource(searchText);
            setSearch(text);
        }
        else {
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };
    var Talks = function (_a) {
        var talk = _a.item;
        return (react_1["default"].createElement(react_native_1.View, { key: talk.id, style: Home_styles_1["default"].talks },
            react_1["default"].createElement(react_native_1.View, { style: Home_styles_1["default"].talkImageContainer },
                react_1["default"].createElement(react_native_1.Image, { style: Home_styles_1["default"].talkImage, source: { uri: talk.image } })),
            react_1["default"].createElement(react_native_1.View, { style: Home_styles_1["default"].talkInformationsContainer },
                react_1["default"].createElement(react_native_1.Text, { style: Home_styles_1["default"].talkTitle }, talk.title),
                react_1["default"].createElement(react_native_1.Text, { style: Home_styles_1["default"].talkItem, onPress: function () { return navigation.navigate("speaker-profile"); } }, talk.id + "." + talk.description))));
    };
    return (react_1["default"].createElement(react_native_1.SafeAreaView, { style: Home_styles_1["default"].safeArea },
        react_1["default"].createElement(react_native_1.View, { style: Home_styles_1["default"].searchBar },
            react_1["default"].createElement(search_bar_1.SearchBar, { onChangeText: function (text) { return searchFilter(text); }, value: value })),
        react_1["default"].createElement(react_native_1.FlatList, { data: filteredDataSource, renderItem: Talks, onEndReachedThreshold: 0.1, keyExtractor: function (talk, index) { return index.toString(); }, ItemSeparatorComponent: item_separator_1.ItemSeparatorView })));
};
exports["default"] = Home;
