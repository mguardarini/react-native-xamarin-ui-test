"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var SearchBar_styles_1 = require("./SearchBar.styles");
var SearchBar = function (_a) {
    var onChangeText = _a.onChangeText, value = _a.value;
    return (react_1["default"].createElement(react_native_1.TextInput, { style: SearchBar_styles_1["default"].textInputStyle, onChangeText: function (text) { return onChangeText(text); }, value: value, underlineColorAndroid: "transparent", placeholder: "Buscar por palestra" }));
};
exports["default"] = SearchBar;
