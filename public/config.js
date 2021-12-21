// 配置
window.Config = {

  // 站点名
  SiteName: '多米诺的服务监控页',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  //ApiDomain: 'production.uptime.domino.workers.dev',
  ApiDomain: 'api.uptimerobot.com',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    //'m789913813-e9837150219ef974bd6d685a', //多多
    //'m789913817-7a1bdcbb2fd517d896c0aa49', //682
    //'m789913822-d9f3c989df9d2a473c39d3b9', //呆比
    'm789913767-fd0052a96a3aa0e3a67f1e59',  //dicer.club
    'm789913796-20e576a08a1c7774c5691e39',  //方舟api
    'm789914685-82d67490eea9827ec715f568',  //每日一猫
    'm789914690-2764ec5b6222e87b40084082',  //博客
    'm790053878-e850761e9546bec01ed57d8a',  //故事站
    'm789913800-0c30d09e3ad41c3bc4d63185',  //服务器
    'm789993984-3ac567751f848ce03f57310f',  //MC服务器
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '多米诺的主页',
      url: 'https://dominoh.com'
    },
    {
      text: '博客',
      url: 'https://blog.dominoh.com'
    }
  ]
};
