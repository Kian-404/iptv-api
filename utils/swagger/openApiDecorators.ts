/*
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-09-14 17:02:44
 * @LastEditTime: 2021-09-14 17:02:45
 */
import { swaggerJson } from './swaggerObj';
import { PathItem } from './types';

export function genOpenApiMark(pathname: string, obj: PathItem) {

  swaggerJson.paths[pathname] = obj
}