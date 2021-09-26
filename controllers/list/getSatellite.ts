/*
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-09-26 10:18:13
 * @LastEditTime: 2021-09-26 10:39:57
 */
import getData from "./getData";
import { listType } from "./getData";
export default async () =>{
  let satelliteList = await getData();
  let result = satelliteList.filter((item: listType, index:number) =>{
    return item.title.includes('卫视');
  })
  console.log(result)
  return result;
}