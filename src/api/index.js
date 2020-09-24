let apis = {}
const modulesFiles = require.context('./modules', false, /\.js$/)
  modulesFiles.keys().forEach(module=>{
    //获取到每个模块的配置文件
  const config = modulesFiles(module).default
  Object.keys(config).forEach(type=>{
    //每种类型的接口
    const typeConfig = config[type]
    //每种类型进行循环写入大表中
    typeConfig.forEach(item=>{
      apis[item.name] = {
        ...item,
        method:type
      }
    })
  })
})

export default apis