/*
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-09-26 10:43:51
 * @LastEditTime: 2021-09-27 09:43:48
 */
import getData from "./getData";
import { listType } from "./getData";
export default async () => {
  let satelliteList = await getData();
  let result = satelliteList.filter((item: listType, index: number) => {
    return item.title.includes('CCTV');
  })
  console.log(result)
  return result;
}