import React, { Component } from "react";
import css from "./assets/ProductPanel.css";
import ProductTab from "./partial/ProductTab";
import uem from "./assets/UEM.png";
import container from "./assets/Container.png";
import apm from "./assets/APM.png";
import hit from "./assets/HIT.png";
import monitor from "./assets/Monitor.png";
import mscp from "./assets/MSCP.png";
import servicegovern from "./assets/ServiceGovern.png";

class ProductPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data: [
        {
          title: "客户端体验（UEM）",
          tips: ["追踪Web浏览器端用户访问状况", "端到端跟踪联通"],
          bg: uem,
          width: 360,
          site: "/product"
        },
        {
          title: "应用性能管理（APM）",
          tips: ["提供应用性能诊断工具箱", "提供调用链支持"],
          bg: apm,
          width: 360
        },
        {
          title: "(微）服务治理（ServiceGovern）",
          tips: [
            "以服务画像实现服务注册",
            "提供服务发现接口",
            "无侵入实现服务调用干预",
            "提供服务授权访问机制",
            "提供服务降级与保护机制"
          ],
          bg: servicegovern,
          width: 360
        },
        {
          title: "（微）服务监控（Monitor）",
          tips: [
            "以无侵入方式实现对Java程序的画像与监控",
            "以心跳数据实现对应用容器的画像与监控",
            "提供预警策略实现自动报警",
            "提供应用/服务流图谱"
          ],
          bg: monitor,
          width: 360
        },
        {
          title: "容器生态支持（Container）",
          tips: [
            "对容器生态的支持，包括Monitor+APM所有能力",
            "为容器生态提供智能容量规划与决策支持"
          ],
          bg: container,
          width: 360
        },
        {
          title: "任务机器人平台（HIT）",
          tips: ["AI+ChatOps", "智能报警", "智能巡检"],
          bg: hit,
          width: 360,
          site: "/product"
        },
        {
          title: "微服务计算平台（MSCP）",
          tips: [
            "提供微服务计算的编程框架和运行时，框架是以抽象组件为基础；提供通信，工作流，定时任务，处理模型（多线程，异步等），IO处理等组件",
            "提供以组件编程构建业务功能的能力，即Feature；提供单binary多配置实现差异化运行的部署方式，即Profile",
            "基于共识数据，实现多个运行实例的协作能力，即动态计算编排；以动态计算编排为基础，实现跨实例多个Feature的协作能力，即动态服务编排",
            "端到端跟踪联通"
          ],
          bg: mscp,
          width: 1140
        }
      ]
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.title}>产品与服务</div>
          <div className={css.line} />
          <div className={css.divider} />
          <div className={css.tip}>
            UAVStack是一套智能化服务技术栈，是研发运维一体化的解决方案。
          </div>
          <div className={css.tip}>
            UAV是无人机的缩写，寓意无人机翱翔蓝天，智能的，透明的完成任务。
          </div>
          <div className={css.tip}>
            它包括任务机器人（HIT），全维监控（UAV.Monitor），应用性能管理（UAV.APM），容器化支持（UAV.Container）
          </div>
          <div className={css.tip}>
            服务治理（UAV.ServiceGovern），微服务计算（UAV.MSCP），用户体验管理（UAV.UEM）等。
          </div>
          <div className={css.divider} />
          {data.map((item, key) => (
            <ProductTab data={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductPanel;
