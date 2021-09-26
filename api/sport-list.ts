/*
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-09-26 10:14:07
 * @LastEditTime: 2021-09-26 10:55:11
 */
import { VercelRequest, VercelResponse } from '@vercel/node';
import getSport from '../controllers/list/getSport'
module.exports = async (req: VercelRequest, res: VercelResponse) => {
  let result: any = await getSport();
  let data = {
    code: 200,
    data: result
  }

  res.status(200).json(data);
}