const zh_CN = {
  home: "首页",
  product: "产品",
  download: "下载",
  productPage: "产品页",
  downloadPage: "下载页",
  banner_1_title: "UAV.Monitor新能力开放：可动态切换的报警收敛模式",
  banner_1_word_1:
    "●基于事件自动压制的收敛：默认收敛模式，无需任何配置，自动识别同一事件，在一定时间内只发生约定次数的报警",
  banner_1_word_2:
    "●基于事件次数梯度的收敛：可自定义若干级次数梯度，自动识别同一事件，根据事件发生次数，每次梯度跃升发出报警",
  banner_1_word_3: "●可随时切换收敛模式，配置即生效",
  banner_1_word_4: "●细粒度配置支持：收敛模式可配置到单个报警表达式",
  banner_1_word_5:
    "●自动优先级判断：同策略包含多个报警表达式，按梯度优先，以及最长梯度优先",
  banner_2_title: "UAV.APM新能力开放：深度线程分析",
  banner_2_word_1: "●单次线程Dump文件深度分析：",
  banner_2_word_1_desc_1: "-自动发现死锁，跟踪死锁关系",
  banner_2_word_1_desc_2: "-基于锁依赖的等待链路查询，发现系统阻塞点",
  banner_2_word_2:
    "●多次线程Dump文件关联分析：基于时序的线程状态变迁，线程等待链路时序根因关系",
  banner_2_word_3: "●线程Dump可视化展示：",
  banner_2_word_3_desc_1: "-单次线程Dump可视化（锁依赖）",
  banner_2_word_3_desc_2: "-多次线程Dump可视化（含时序状态，锁依赖）",

  updateTab_update:
    "<p>UAVStack周更新 </p>" +
    '<a href="https://github.com/uavorg/uavstack/releases/tag/UAVStack_1.2_20180914">' +
    "https://github.com/uavorg/uavstack/releases/tag/UAVStack_1.2_20180914 </a>" +
    "<p>1. 新增 增加采集主机所有IP地址、子网掩码等网卡信息的功能。</p>" +
    "<p>2. 新增 增加SpringBoot2.0以上版本对context-path配置的支持。</p>",

  updateTab_fix:
    " <p>FIX同步: </p>" +
    " <p>1.  FIX  修正了由应用重复注册Filter或Servlet导致的NPE问题<p>" +
    " <p>2.  FIX  修正了自定义指标在某些情况下不显示的问题。</p>"
};
export default zh_CN;
