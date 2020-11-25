"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_native_1 = require("react-native");
var defaultStyleText = {
    fontWeight: 'bold',
    textAlign: 'center'
};
var defaultStyleImage = {
    borderRadius: Math.round(react_native_1.Dimensions.get('window').width + react_native_1.Dimensions.get('window').height) / 2,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0
};
var defaultMargin = {
    marginLeft: '10%',
    marginRight: '10%'
};
exports["default"] = react_native_1.StyleSheet.create({
    blueContainer: {
        backgroundColor: '#004F8A'
    },
    blueContainer_margin: {
        marginTop: '35%'
    },
    textContainer: {
        marginTop: '15%'
    },
    textContainer_theme: __assign({ marginTop: '2%', marginLeft: '20%', marginRight: '20%', fontSize: 16 }, defaultStyleText),
    textContainer_type: __assign({ fontSize: 16, marginTop: '2%' }, defaultStyleText),
    textContainer_speaker: __assign(__assign({}, defaultStyleText), { fontSize: 28 }),
    textContainer_description: __assign({ fontSize: 14, marginTop: '5%' }, defaultMargin),
    textContainer_socialNetworkTitle: __assign({ fontSize: 14, fontWeight: 'bold', marginTop: '5%' }, defaultMargin),
    textContainer_socialNetworkDescription: __assign({ marginTop: '2%', fontSize: 14 }, defaultMargin),
    buttonShare: __assign(__assign({}, defaultMargin), { marginTop: '10%' }),
    profile_image: __assign({ width: react_native_1.Dimensions.get('window').width * 0.37, height: react_native_1.Dimensions.get('window').width * 0.37, marginLeft: '2%', marginTop: '2%' }, defaultStyleImage),
    profile_borderImage: __assign({ width: react_native_1.Dimensions.get('window').width * 0.25, height: react_native_1.Dimensions.get('window').width * 0.39, marginTop: 30, marginLeft: '30%' }, defaultStyleImage)
});
