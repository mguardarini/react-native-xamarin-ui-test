"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var button_1 = require("../../components/button");
var tdc_logo_png_1 = require("../../../assets/tdc-logo.png");
var Login_styles_1 = require("./Login.styles");
var react_native_code_push_1 = require("react-native-code-push");
var react_native_keyboard_aware_scroll_view_1 = require("react-native-keyboard-aware-scroll-view");
var Login = function (_a) {
    var navigation = _a.navigation;
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
        react_native_code_push_1["default"].sync({
            updateDialog: {
                appendReleaseDescription: true
            },
            installMode: react_native_code_push_1["default"].InstallMode.IMMEDIATE
        });
    });
    var _b = react_1.useState('Nome'), name = _b[0], onChangeName = _b[1];
    var _c = react_1.useState('Senha'), password = _c[0], onChangePassword = _c[1];
    return (react_1["default"].createElement(react_native_keyboard_aware_scroll_view_1.KeyboardAwareScrollView, { style: Login_styles_1["default"].mainContainer },
        react_1["default"].createElement(react_native_1.View, { style: Login_styles_1["default"].container },
            react_1["default"].createElement(react_native_1.Image, { style: Login_styles_1["default"].logo_image, source: tdc_logo_png_1["default"] })),
        react_1["default"].createElement(react_native_1.View, { style: Login_styles_1["default"].container },
            react_1["default"].createElement(react_native_1.View, { style: Login_styles_1["default"].form_container },
                react_1["default"].createElement(react_native_1.TextInput, { style: Login_styles_1["default"].textInput, onChangeText: function (name) { return onChangeName(name); }, placeholder: "Nome" })),
            react_1["default"].createElement(react_native_1.View, { style: Login_styles_1["default"].form_container },
                react_1["default"].createElement(react_native_1.TextInput, { style: Login_styles_1["default"].textInput, onChangeText: function (password) { return onChangePassword(password); }, secureTextEntry: true, placeholder: "Senha" })),
            react_1["default"].createElement(react_native_1.View, { style: Login_styles_1["default"].label_container },
                react_1["default"].createElement(react_native_1.Text, { style: Login_styles_1["default"].label }, "Esqueceu a senha?")),
            react_1["default"].createElement(react_native_1.View, { style: Login_styles_1["default"].form_container },
                react_1["default"].createElement(button_1.Button, { testID: "button-palestra", title: "Entrar", onPress: function () { return navigation.navigate('talks'); } })))));
};
exports["default"] = Login;
