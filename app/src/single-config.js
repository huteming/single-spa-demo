import * as singleSpa from 'single-spa'

/*
 * runScript：一个promise同步方法。可以代替创建一个script标签，然后加载服务
 */
const runScript = async (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    script.onload = resolve
    script.onerror = reject
    // const firstScript = document.getElementsByTagName('script')[0]
    // firstScript.parentNode.appendChild(script, firstScript)
    document.body.appendChild(script)
  })
}

singleSpa.registerApplication( // 注册微前端服务
  'singleDemo',
  async () => {
    await runScript('http://127.0.0.1:8080/child.umd.js')
    return window.child
  },
  // () => {
  //   return import('../../child/src/single-start.js')
  //     .then(res => {
  //       console.log(res)
  //       return res
  //     })
  // },
  location => location.pathname.startsWith('/help') // 配置微前端模块前缀
)

singleSpa.start() // 启动
