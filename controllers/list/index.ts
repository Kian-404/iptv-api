/*
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-09-14 16:46:13
 * @LastEditTime: 2021-09-14 17:43:05
 */
var fs = require("fs");
var https = require('https');
import { dataFormate } from "../../utils/data";

/**
 * 读取远程文件
 *
 * @param {String} url
 * @param {Function} cb
 *   - {Error} err
 *   - {Buffer} buf
 */
function readRemoteFile(url: string, cb: Function) {
  var callback = function (that: any, value: any) {
    // 回调函数，避免重复调用
    callback = function () { };
    cb.apply(null, value);
  };

  var req = https.get(url, function (res: any) {
    var b: any[] = [];
    res.on('data', function (c: any) {
      b.push(c);
    });
    res.on('end', function () {
      let result = Buffer.concat(b)
      callback(null, result);
    });
    res.on('error', callback);
  });
  req.on('error', callback);
}

// readRemoteFile('https://iptv-org.github.io/iptv/languages/zho.m3u', function (err:string, buffer:any) {
//   if (err) throw err;
//   console.log(buffer.length, buffer.toString('utf8'));
//   return buffer.toString('utf8');
// });

class ListConstroller {
  list = [];
  async getList(ctx: any) {
    console.log('hhhh');
    // debugger
    ctx.body = dataFormate('hello', 200)
    // readRemoteFile('https://iptv-org.github.io/iptv/languages/zho.m3u', (err: string, buffer: any) => {
    //   if (err) throw err;
    //   console.log(buffer.length, buffer.toString('utf8'));
    //   this.list = buffer.toString('utf8')
    //   console.log(buffer.toString('utf8'))
    //   console.log(this.list);
    //   debugger
    //   ctx.body = dataFormate(this.list, 200)
    // });
  }
}

export default new ListConstroller();
