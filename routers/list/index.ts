/*
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-09-14 16:44:59
 * @LastEditTime: 2021-09-27 09:45:08
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
    parameters:[
      // {
      //   name:"hello",
      //   in:'query',
      //   description:"123123123",
      //   allowEmptyValue:true
      // }
    ],
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

genOpenApiMark('/api/satellite-list', {
  get: {
    description: '获取satellite!',
    summary: '获取satellite!',
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
router.get('/api/satellite-list', ListConstroller.getSatellite)


genOpenApiMark('/api/sport-list', {
  get: {
    description: '获取Sport list!',
    summary: '获取Sport list!',
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
router.get('/api/sport-list', ListConstroller.getSport)

genOpenApiMark('/api/move-list', {
  get: {
    description: '获取Move list!',
    summary: '获取Move list!',
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
router.get('/api/move-list', ListConstroller.getMove)

genOpenApiMark('/api/cctv-list', {
  get: {
    description: '获取CCTV list!',
    summary: '获取CCTV list!',
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
router.get('/api/cctv-list', ListConstroller.getCCTV)