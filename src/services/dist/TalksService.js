"use strict";
exports.__esModule = true;
function getAllTalks() {
    return fetch('https://my-json-server.typicode.com/mguardarini/talksjsonbody/talks')
        .then(function (response) { return response.json(); })
        .then(function (responseJson) {
        return responseJson;
    })["catch"](function (error) {
        console.error(error);
    });
}
exports["default"] = {
    getAllTalks: getAllTalks
};
