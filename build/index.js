'use strict';
const __importDefault = (this && this.__importDefault) || function (mod) {
  return mod && mod.__esModule ? mod : {default: mod};
};

Object.defineProperty(exports, '__esModule', {value: true});
const express_1 = __importDefault(require('express'));
const images_1 = __importDefault(require('./routes/api/images'));
const app = (0, express_1.default)();
const port = 3000;
app.use('/api', images_1.default);
app.get('/api', (req, res) => {
  res.send('Hi in the API page');
});
app.listen(port, () => {
  console.log('server started at http://localhost:'.concat(port));
});
exports.default = app;
