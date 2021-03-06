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
var index_1 = __importDefault(require("../index"));
var supertest_1 = __importDefault(require("supertest"));
var resize_1 = require("../utilities/resize");
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var request = (0, supertest_1.default)(index_1.default);
describe('Test Image endpoint response', function () {
    var imgname1 = 'fjord.jpg';
    var imgwidth1 = 1200;
    var imgheight1 = 500;
    it('gets the api endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get("/api/images?name=".concat(imgname1, "&width=").concat(imgwidth1, "&height=").concat(imgheight1))];
                case 1:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('return error message for not existing file', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get("/api/images?name=noname.jpg&width=".concat(imgwidth1, "&height=").concat(imgheight1))];
                case 1:
                    response = _a.sent();
                    expect(response.text).toBe('no image with that name');
                    return [2 /*return*/];
            }
        });
    }); });
    it('return error message for bad width input', function () { return __awaiter(void 0, void 0, void 0, function () {
        var imgwidth1, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    imgwidth1 = -1000;
                    return [4 /*yield*/, request.get("/api/images?name=".concat(imgname1, "&width=").concat(imgwidth1, "&height=").concat(imgheight1))];
                case 1:
                    response = _a.sent();
                    expect(response.text).toBe('bad value for width or height, must be positive integer');
                    return [2 /*return*/];
            }
        });
    }); });
    it('return error message if height not exist', function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get("/api/images?name=".concat(imgname1, "&width=").concat(imgwidth1))];
                case 1:
                    response = _a.sent();
                    expect(response.text).toBe('no value for width or height');
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("test resize function", function () {
    it("test the output of the resize function", function () { return __awaiter(void 0, void 0, void 0, function () {
        var testImageName, originaImage, testImagePath, test;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testImageName = "palmtunnel.jpg";
                    originaImage = path_1.default.normalize(__dirname + '../../../original-pic/' + testImageName);
                    testImagePath = path_1.default.normalize(__dirname +
                        '../../../thumbnail/' +
                        testImageName +
                        '-' +
                        "500" +
                        '-' +
                        "500" +
                        '.jpg');
                    return [4 /*yield*/, (0, resize_1.resizeImage)(testImageName, 500, 500)];
                case 1:
                    test = _a.sent();
                    expect(fs_1.default.existsSync(testImagePath)).toBeTrue;
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=indexSpec.js.map