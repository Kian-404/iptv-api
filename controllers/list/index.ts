/*
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-09-14 16:46:13
 * @LastEditTime: 2021-09-26 10:52:07
 */
import { dataFormate } from "../../utils/data";

import getData from "./getData";
import getSatellite from "./getSatellite";
import getSport from "./getSport";
import getMove from "./getMove";

class ListConstroller {
  async getList(ctx: any) {
    console.log('res -----start');
    try {

      let result = await getData();
      ctx.body = dataFormate(result, 200)

    } catch {

      ctx.body = dataFormate('err', 500);

    }
    console.log('res -----end');
  }
  async getSatellite(ctx: any) {
    try {

      let result = await getSatellite();
      ctx.body = dataFormate(result, 200)

    } catch {

      ctx.body = dataFormate('err', 500);

    }
  }
  async getSport(ctx: any) {
    try {

      let result = await getSport();
      ctx.body = dataFormate(result, 200)

    } catch {

      ctx.body = dataFormate('err', 500);

    }
  }
  async getMove(ctx: any) {
    try {

      let result = await getMove();
      ctx.body = dataFormate(result, 200)

    } catch {

      ctx.body = dataFormate('err', 500);

    }
  }
}

export default new ListConstroller();
