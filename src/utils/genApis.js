/**
 * 
 * 传入api配置文件，生成接口函数对象
 */

import configs from '@/api'
import request from '@/utils/request'

export default function ({ name, params }) {
    const config = configs[name]
    const { query = [] } = config
    return function(params) {
        const url = query.reduce((prev, curr) => {
            return prev + `/${params[curr]}`
        }, `${config.url}`)
        return request({
            url,
            method:config.method,
            data: query.length ? '' : params
        })
    }(params)
}
// export default function(urls) {
//     const apis = {}
//     Object.keys().forEach(method => {
//       urls[method].forEach(func => {
//         const { query = [] } = func
//         apis[func['name']] = (params) => {
//           const url = query.reduce((prev, curr) => {
//             return prev + `/${params[curr]}`
//           }, `${func.url}`)
//           return request({
//             url,
//             method,
//             data: params
//           })
//         }
//       })
//     })
//     return apis
// }