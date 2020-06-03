let fs = require('fs');
const longpath = '1234567890_1234567890_1234567890_1234567890_1234567890_1234567890_1234567890_1234567890_1234567890_1234567890_1234567890';
const p1 = 'module_1_'+longpath, p2 = 'module_2_'+longpath;

fs.mkdirSync(p1);
fs.mkdirSync(p2);
fs.writeFileSync(p1 + '/foo', 'foo');
fs.writeFileSync(p2 + '/foo', 'foo');
fs.symlinkSync(p1, p2+'/'+p1, 'junction');

//fs.symlinkSync(p2, p3+'/'+p2, 'junction');
