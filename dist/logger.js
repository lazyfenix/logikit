"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var colors_1 = require("./colors");
var styles_1 = require("./styles");
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.getTimeStamp = function () {
        return new Date().toLocaleTimeString();
    };
    Logger.formatMessage = function (level, message) {
        var timestamp = Logger.getTimeStamp();
        return "[".concat(timestamp, "] => ").concat(level, " - ").concat(message);
    };
    Logger.log = function (level, message, color, style) {
        var formattedMessage = Logger.formatMessage(level, message);
        var styledMessage = "".concat(color || '').concat(style || '').concat(formattedMessage).concat(styles_1.Styles.Reset);
        console.log(styledMessage);
    };
    Logger.info = function (message) {
        Logger.log('INFO', message, colors_1.Colors.Green);
    };
    Logger.debug = function (message) {
        Logger.log('DEBUG', message, colors_1.Colors.Blue);
    };
    Logger.warn = function (message) {
        Logger.log('WARN', message, colors_1.Colors.Yellow);
    };
    Logger.error = function (message, error) {
        var formattedMessage = "".concat(message).concat(error ? ": ".concat(error.message) : '');
        Logger.log('ERROR', formattedMessage, colors_1.Colors.Red, styles_1.Styles.Bright);
        if (error) {
            console.error("Stack Trace: ".concat(error.stack));
        }
    };
    Logger.ready = function (message) {
        Logger.log('READY', message, colors_1.Colors.Green, styles_1.Styles.Bright);
    };
    Logger.database = function (message) {
        Logger.log('DATABASE', message, colors_1.Colors.Blue);
    };
    Logger.heartbeat = function (message) {
        Logger.log('HEARTBEAT', message, colors_1.Colors.Magenta);
    };
    Logger.shard = function (message) {
        Logger.log('SHARD', message, colors_1.Colors.Cyan);
    };
    Logger.cluster = function (message) {
        Logger.log('CLUSTER', message, colors_1.Colors.Green);
    };
    Logger.command = function (message) {
        Logger.log('COMMAND', message, colors_1.Colors.Blue);
    };
    Logger.event = function (message) {
        Logger.log('EVENT', message, colors_1.Colors.Cyan);
    };
    Logger.notice = function (message) {
        Logger.log('NOTICE', message, colors_1.Colors.Blue, styles_1.Styles.Bright);
    };
    Logger.critical = function (message) {
        Logger.log('CRITICAL', message, colors_1.Colors.Red, styles_1.Styles.Bright);
    };
    Logger.trace = function (message) {
        Logger.log('TRACE', message, colors_1.Colors.Magenta);
    };
    return Logger;
}());
exports.Logger = Logger;
