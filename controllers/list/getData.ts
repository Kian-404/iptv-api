/*
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-09-16 15:32:24
 * @LastEditTime: 2021-09-26 10:49:38
 */
import axios from 'axios';
export interface listType {
  "tvg-id": string,
  "tvg-country": string,
  "tvg-language": string,
  "tvg-logo": string,
  "group-title": string,
  "url": string,
  "title": string
}
export default async () => {
  let result: Array<listType> = [];
  console.log('hello')
  await axios.get('https://iptv-org.github.io/iptv/languages/zho.m3u')
    .then(res => {
      console.log('123');
      let tempList = res.data.split('#EXTINF:-1 ');
      tempList.map((item: string, index: number) => {
        let tempresult: any = {};
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
      result.shift();
    })
  return result
}