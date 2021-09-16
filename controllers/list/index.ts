/*
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-09-14 16:46:13
 * @LastEditTime: 2021-09-16 15:44:12
 */
import getData from "./getData";
import { dataFormate } from "../../utils/data";

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
}

export default new ListConstroller();
