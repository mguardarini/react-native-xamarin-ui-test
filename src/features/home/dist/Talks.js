"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var lodash_filter_1 = require("lodash.filter");
var components_1 = require("@ui-kitten/components");
var eva_1 = require("@eva-design/eva");
var HomeScreen = /** @class */ (function (_super) {
    __extends(HomeScreen, _super);
    function HomeScreen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            query: '',
            fullData: []
        };
        _this.makeRemoteRequest = function () {
            var _a = _this.state, page = _a.page, seed = _a.seed;
            var url = "https://randomuser.me/api/?seed=" + seed + "&page=" + page + "&results=20";
            _this.setState({ loading: true });
            fetch(url)
                .then(function (res) { return res.json(); })
                .then(function (res) {
                _this.setState({
                    data: page === 1 ? res.results : __spreadArrays(_this.state.data, res.results),
                    error: res.error || null,
                    loading: false,
                    fullData: res.results
                });
            })["catch"](function (error) {
                _this.setState({ error: error, loading: false });
            });
        };
        _this.contains = function (_a, query) {
            var name = _a.name, email = _a.email;
            var first = name.first, last = name.last;
            if (first.includes(query) ||
                last.includes(query) ||
                email.includes(query)) {
                return true;
            }
            return false;
        };
        _this.handleSearch = function (text) {
            var formattedQuery = text.toLowerCase();
            var data = lodash_filter_1["default"](_this.state.fullData, function (user) {
                return _this.contains(user, formattedQuery);
            });
            _this.setState({ data: data, query: text });
        };
        _this.renderHeader = function () { return (react_1["default"].createElement(react_native_1.View, { style: {
                backgroundColor: '#fff',
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center'
            } },
            react_1["default"].createElement(components_1.Input, { autoCapitalize: 'none', autoCorrect: false, onChangeText: _this.handleSearch, status: 'info', placeholder: 'Search', style: {
                    borderRadius: 25,
                    borderColor: '#333',
                    backgroundColor: '#fff'
                }, textStyle: { color: '#000' }, clearButtonMode: 'always' }))); };
        _this.renderSeparator = function () {
            return (react_1["default"].createElement(react_native_1.View, { style: {
                    height: 1,
                    width: '86%',
                    backgroundColor: '#CED0CE',
                    marginLeft: '5%'
                } }));
        };
        _this.renderFooter = function () {
            if (!_this.state.loading)
                return null;
            return (react_1["default"].createElement(react_native_1.View, { style: {
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: '#CED0CE'
                } },
                react_1["default"].createElement(react_native_1.ActivityIndicator, { animating: true, size: 'large' })));
        };
        return _this;
    }
    HomeScreen.prototype.componentDidMount = function () {
        this.makeRemoteRequest();
    };
    HomeScreen.prototype.render = function () {
        return (react_1["default"].createElement(react_native_1.View, { style: {
                flex: 1,
                paddingHorizontal: 20,
                paddingVertical: 20,
                marginTop: 40
            } },
            react_1["default"].createElement(react_native_1.FlatList, { data: this.state.data, renderItem: function (_a) {
                    var item = _a.item;
                    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return alert('Item pressed!'); } },
                        react_1["default"].createElement(react_native_1.View, { style: {
                                flexDirection: 'row',
                                padding: 16,
                                alignItems: 'center'
                            } },
                            react_1["default"].createElement(components_1.Avatar, { source: { uri: item.picture.thumbnail }, size: 'giant', style: { marginRight: 16 } }),
                            react_1["default"].createElement(components_1.Text, { category: 's1', style: {
                                    color: '#000'
                                } }, item.name.first + " " + item.name.last))));
                }, keyExtractor: function (item) { return item.email; }, ItemSeparatorComponent: this.renderSeparator, ListHeaderComponent: this.renderHeader, ListFooterComponent: this.renderFooter })));
    };
    return HomeScreen;
}(react_1["default"].Component));
var App = function () { return (react_1["default"].createElement(components_1.ApplicationProvider, { mapping: eva_1.mapping, theme: eva_1.light },
    react_1["default"].createElement(HomeScreen, null))); };
exports["default"] = App;
