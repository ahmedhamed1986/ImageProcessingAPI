"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resize_1 = __importDefault(require("../../utilities/resize"));
var images = express_1.default.Router();
images.get("/images", resize_1.default, function (req, res) {
    res.send("Here you can resize you image. Just put your queries in the address bar");
    // res.sendFile(path.normalize('C:/Users/ahmed/Desktop/ImageProcessingAP/thumbnail/fjord.jpg-400-602.jpg'))
});
exports.default = images;
