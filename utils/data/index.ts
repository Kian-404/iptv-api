/*
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-09-14 16:58:31
 * @LastEditTime: 2021-09-14 16:58:31
 */
/**
 * 成功数据包裹
 * @param data 
 * @returns 
 */
export function dataFormate(data: unknown, code = 200) {
  return {
    code,
    data
  }
}