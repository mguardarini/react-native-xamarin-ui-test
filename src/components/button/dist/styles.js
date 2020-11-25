"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var colors_1 = require("../../styles/colors");
exports["default"] = react_native_1.StyleSheet.create({
    button: {
        padding: 16,
        backgroundColor: colors_1.blue,
        borderRadius: 30,
        textAlign: 'center',
        justifyContent: 'center'
    },
    label_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        textAlign: 'center',
        color: colors_1.white,
        fontSize: 16
    }
});
