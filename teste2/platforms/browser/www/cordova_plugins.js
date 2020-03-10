cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/camera-cordova-plugin/www/CustomCamera.js",
        "id": "camera-cordova-plugin.CustomCamera",
        "pluginId": "camera-cordova-plugin",
        "clobbers": [
            "CustomCamera"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "camera-cordova-plugin": "2.0.0",
    "cordova-plugin-whitelist": "1.3.4"
}
// BOTTOM OF METADATA
});