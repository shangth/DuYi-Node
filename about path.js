const path = require("path");

// basename返回文件名   第二个参数是文件类型, 匹配到就去掉后缀名, 匹配不上就不去掉
// const basename = path.basename("fdg/dfgdfg/adfaf/fdgdfgd/a.asf", ".html");
// console.log(basename);

// 返回当前操作系统分隔符
// console.log(path.sep);

// console.log(process.env.PATH.split(path.delimiter));


// 获取文件的路径名
// const dir = path.dirname("a/b/c/d");
// console.log(dir);

// 获取文件后缀名
// const ext = path.extname("a/b/c/a.js");
// console.log(ext);

// 获取拼接后的文件名
// const basePath = "a/b";
// const fullpath = path.join(basePath, "../", "d.js");
// console.log(fullpath);

// 返回后面相对于前面的路径
// const rel = path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
// console.log(rel)

// 获取绝对路径
const absPath = path.resolve(__dirname, "./a.js");
console.log(absPath);
