import godEyesIcon from "../AppHub/assets/godEyesIcon.png";
export const appData = {
  icon: godEyesIcon,
  name: "上帝之眼",
  menu: [
    {
      title: "应用监控",
      customIcon: "apm",
      link: "/appHub/godEye/apm"
    },
    {
      title: "应用容器监控",
      customIcon: "acm",
      link: "/appHub/godEye/acm"
    },
    {
      title: "预警记录查询",
      customIcon: "sr",
      link: "/appHub/godEye/sr"
    },
    {
      title: "时空沙盘查询",
      customIcon: "time",
      link: "/appHub/godEye/time"
    },
    {
      title: "应用日志跟踪",
      customIcon: "log",
      link: "/appHub/godEye/log"
    },
    {
      title: "调用链跟踪",
      customIcon: "ivc",
      link: "/appHub/godEye/ivc"
    },
    {
      title: "浏览器跟踪",
      customIcon: "uem",
      link: "/appHub/godEye/uem"
    },

    {
      title: "预警策略管理",
      customIcon: "ws",
      link: "/appHub/godEye/warningStrategy/list"
    }
  ]
};
