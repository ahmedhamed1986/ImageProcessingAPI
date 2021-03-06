"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var sharp_1 = __importDefault(require("sharp"));
var resize = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var imgName, imgWidth, imgHeight, imagePath, originaImage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                imgName = req.query.name;
                imgWidth = Number(req.query.width);
                imgHeight = Number(req.query.height);
                imagePath = path_1.default.normalize(__dirname +
                    '../../../thumbnail/' +
                    imgName +
                    '-' +
                    imgWidth +
                    '-' +
                    imgHeight +
                    '.jpg');
                originaImage = path_1.default.normalize(__dirname + '../../../original-pic/' + imgName);
                // Error handling
                if (!fs_1.default.existsSync(originaImage)) {
                    res.status(400).send('no image with that name');
                    return [2 /*return*/];
                }
                if (imgWidth < 0 || imgHeight < 0) {
                    res.status(400).send('bad value for width or height, must be positive integer');
                    return [2 /*return*/];
                }
                if (!imgWidth || !imgHeight) {
                    res.status(400).send('no value for width or height');
                    return [2 /*return*/];
                }
                if (!fs_1.default.existsSync(imagePath)) return [3 /*break*/, 1];
                return [2 /*return*/, res.status(200).sendFile(imagePath)];
            case 1:
                if (!(req.query.name != null)) return [3 /*break*/, 3];
                resizeImage(imgName, imgWidth, imgHeight);
                return [4 /*yield*/, setTimeout(function () {
                        return res.status(200).sendFile(imagePath);
                    }, 500)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); };
function resizeImage(name, width, height) {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, sharp_1.default)('./original-pic/' + name)
                            .resize({ width: width, height: height })
                            .toFile('./thumbnail/' + name + '-' + width + '-' + height + '.jpg')];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.resizeImage = resizeImage;
exports.default = resize;
//# sourceMappingURL=resize.js.map