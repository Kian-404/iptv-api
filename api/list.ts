/*
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-09-16 13:51:40
 * @LastEditTime: 2021-09-16 18:16:47
 */
import { VercelRequest, VercelResponse } from '@vercel/node';
import getData from './../controllers/list/getData'
module.exports = async (req: VercelRequest, res: VercelResponse) => {
  let result: any = await getData();
  let data = {
    code: 200,
    data: result
  }

  res.status(200).json(data);
}