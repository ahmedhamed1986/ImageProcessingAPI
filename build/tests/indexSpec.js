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
var images_1 = __importDefault(require("../routes/api/images"));
var images_2 = __importDefault(require("../routes/api/images"));
var request = (0, supertest_1.default)(index_1.default);
index_1.default.use("/api", images_1.default);
beforeAll(function () {
    var request = (0, supertest_1.default)(index_1.default);
    index_1.default.use("/api", images_1.default);
});
it('total', function () {
    expect((0, resize_1.testJasmine)(1, 2)).toBeLessThan(10);
});
it("test the empty image page", function () { return __awaiter(void 0, void 0, void 0, function () {
    var aa1, aa2, aa3, resposnse;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                aa1 = "hi";
                aa2 = 500;
                aa3 = 500;
                return [4 /*yield*/, request.get('/api/images')];
            case 1:
                resposnse = _a.sent();
                expect(resposnse.body.message).toBe("no image with that name");
                return [2 /*return*/];
        }
    });
}); });
it("test the empty image page", function () { return __awaiter(void 0, void 0, void 0, function () {
    var aa1, aa2, aa3;
    return __generator(this, function (_a) {
        aa1 = "hi";
        aa2 = 500;
        aa3 = 500;
        expect(images_2.default).toBe("no image with that name");
        return [2 /*return*/];
    });
}); });
// describe('test the image end point response', ()=>{
//         it('get the api endpoint', async()=> {
//             const resposnse = await request.get('/api/images')
//             expect(resposnse.status).toBe(200)
//         })
//     })
// describe('test the image parameters', ()=>{
//     it('get the api endpoint', async()=> {
//         const resposnse = await request.get('http://localhost:3000/api/images?name=fjord.jpg&width=1200&height=500')
//             expect(resposnse.status).toBe(200)
//         })
//         it('get the api endpoint', async()=> {
//             const resposnse = await request.get('/api/images?name=ffjord.jpg&width=1200&height=500')
//                 expect(resposnse.status).toBe(400)
//                 expect(response.send).toEqual("no image with that name")
//             })
//     })
