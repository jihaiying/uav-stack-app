import React, { Component } from "react";
import css from "./assets/Banner.css";

class Banner extends Component {
  render() {
    return (
      <div className={css.container}>
        <div className={css.center}>
          <p className={css.title}>
            UAV.Monitor：是业务，应用/服务，基础三维一体的监控平台，同时支持单体架构，SOA架构，微服务架构。
            <br />
            只需部署1个Agent即可采集全维度数据，支持物理机，虚拟机，Docker。
          </p>
          <ul className={css.descCon}>
            <li>
              ●
              基础监控：操作系统以及进程级性能指标（CPU，内存，连接数，网络流量，磁盘IO等）
            </li>
            <li>
              ●
              应用/服务性能监控：Java应用无需修改代码，即可采集应用/服务实例，应用服务器，JVM，客户端(http/dubbo/SQL/MQ/redis/mongoDB等)，数据库连接池等的性能指标
            </li>
            <li>● 日志监控：系统/应用日志自动归集和搜索，支持动态开关策略</li>
            <li>● 业务监控：支持自定义指标归集</li>
            <li>
              ●
              多技术栈支持：Java系列Tomcat/Jetty/SpringBoot/JSE/MSCP,其他JVM语言Scala，Groovy等
            </li>
            <li>
              ●
              全维报警：支持基础/应用/服务的性能指标，业务指标以及日志报警，报警条件支持多维表达式
            </li>
            <li>● 历史追踪：任意时间范围的不同指标组合的性能指标展示</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Banner;
