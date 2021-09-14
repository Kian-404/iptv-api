/*
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-09-14 16:44:59
 * @LastEditTime: 2021-09-14 17:45:00
 */
import router from './../../utils/swagger';
import ListConstroller from './../../controllers/list'
import { genOpenApiMark } from '../../utils/swagger/openApiDecorators';


/**
 * 获取list
 */
genOpenApiMark('/api/list', {
  get: {
    description: '获取list!',
    summary: '获取list!',
    tags: ['list模块'],
    responses: {
      200: {
        description: '请求成功',
      },
      500: {
        description: '请求失败',
      }
    }
  }
})
router.get('/api/list', ListConstroller.getList)