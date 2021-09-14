/*
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-09-14 16:29:08
 * @LastEditTime: 2021-09-14 16:45:57
 */
import router from './../utils/swagger'
import { syncImportByDir } from '../utils/file';
import path from 'path'
// 动态收集路由
syncImportByDir(path.resolve(__dirname, './../routers'));

export default router;