/*
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-09-14 16:43:11
 * @LastEditTime: 2021-09-14 16:43:12
 */
import fs from 'fs';
/**
 * 通过文件夹名称来动态导入
 * @param dirName 
 */
export function syncImportByDir(dirAbsName: string) {
  // 获取目录文件夹
  const fileRes = fs.readdirSync(dirAbsName);
  // 读取文件夹，然后动态导入
  fileRes.forEach(p => {
    import(dirAbsName + '/' + p)
  });
}