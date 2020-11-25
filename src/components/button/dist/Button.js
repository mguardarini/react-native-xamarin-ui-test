"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var Button = function (_a) {
    var title = _a.title, onPress = _a.onPress, testID = _a.testID;
    return (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onPress, testID: "botao " + testID, style: react_native_1.StyleSheet.flatten([
            styles_1["default"].button
        ]) },
        react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].label_container },
            react_1["default"].createElement(react_native_1.Text, { testID: "rotulo " + testID, style: react_native_1.StyleSheet.flatten([
                    styles_1["default"].label
                ]) }, title))));
};
Button.defaultProps = {
    cor: 'blue'
};
exports["default"] = Button;
