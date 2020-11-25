"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var colors_1 = require("../../styles/colors");
exports["default"] = react_native_1.StyleSheet.create({
    mainContainer: {
        backgroundColor: colors_1.white,
        height: '100%',
        width: '100%'
    },
    container: {
        marginTop: '15%'
    },
    logo_image: {
        width: '100%',
        height: 100
    },
    textInput: {
        color: colors_1.gray74,
        backgroundColor: colors_1.white,
        paddingLeft: 15,
        height: 50,
        borderColor: colors_1.gray,
        borderWidth: 1,
        borderRadius: 10
    },
    label: {
        color: colors_1.gray290,
        fontSize: 16,
        fontWeight: 'bold'
    },
    label_container: {
        marginLeft: '55%',
        marginTop: '5%'
    },
    form_container: {
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '5%'
    }
});
