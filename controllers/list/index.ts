/*
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-09-14 16:46:13
 * @LastEditTime: 2021-09-15 14:57:16
 */
var fs = require("fs");
var https = require('https');
import axios from "axios";
import { dataFormate } from "../../utils/data";

class ListConstroller {
  async getList(ctx: any) {
    console.log('res list-----');
    await axios.get('https://iptv-org.github.io/iptv/languages/zho.m3u')
      .then(res => {
        let a = `#EXTINF:-1 tvg-id="ShanDongXinWen.cn" tvg-country="CN" tvg-language="Chinese" tvg-logo="" group-title="",山东新闻 (1080p)
http://livealone302.iqilu.com/iqilu/ggpd.m3u8
#EXTINF:-1 tvg-id="ShanDongShengHuo.cn" tvg-country="CN" tvg-language="Chinese" tvg-logo="http://epg.51zmt.top:8000/tb1/qt/sd_shenghuo.png" group-title="",山东生活 (1080p)
http://livealone302.iqilu.com/iqilu/shpd.m3u8
#EXTINF:-1 tvg-id="ShanDongZongYi.cn" tvg-country="CN" tvg-language="Chinese" tvg-logo="http://epg.51zmt.top:8000/tb1/qt/sd_zongyi.png" group-title="",山东综艺 (406p)
http://livealone302.iqilu.com/iqilu/zypd.m3u8
#EXTINF:-1 tvg-id="ShanDongQiLu.cn" tvg-country="CN" tvg-language="Chinese" tvg-logo="http://epg.51zmt.top:8000/tb1/qt/sd_qilu.png" group-title="",山东齐鲁 (1080p)
http://livealone302.iqilu.com/iqilu/qlpd.m3u8
#EXTINF:-1 tvg-id="ShanXiWeiShi.cn" tvg-country="CN" tvg-language="Chinese" tvg-logo="" group-title="",山西卫视 (576p)
http://117.169.120.140:8080/live/shanxistv/.m3u8
#EXTINF:-1 tvg-id="LingNanXiQu.cn" tvg-country="CN" tvg-language="Chinese" tvg-logo="" group-title="",岭南戏曲 (480p)
http://149.129.100.78/guangdong.php?id=15`
        let result: any = [];
        let tempList = res.data.split('#EXTINF:-1 ');
        tempList.map((item: string, index: number) => {
          let tempresult: any = {}
          let [info, url] = item.split('\n');
          let [tempInfo, title] = info.split(',');

          tempInfo.split(' ').map((list, index) => {

            let [key, value] = list.split('=');
            tempresult[key] = value && value.replace(/\"/g, "");
          })

          tempresult['url'] = url
          tempresult['title'] = title
          result.push(tempresult);
        })
        // console.log(tempList);
        // let result = [
        //   {
        //     id: "ShanXiWeiShi.cn",
        //     title: "山西卫视 (576p)",
        //     logo: "",
        //     url: "http://117.169.120.140:8080/live/shanxistv/.m3u8",
        //     language: "Chinese",
        //     country: "CN",
        //   }
        // ]

        result.shift();
        ctx.body = dataFormate(result, 200)
      }).catch((err) => {
        ctx.body = dataFormate('err', 500);
      })
  }
}

export default new ListConstroller();
