import React, { Component } from "react";
import css from "./assets/SupportPanel.css";
import SupportTab from "./partial/SupportTab";
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
          title: "JDK版本",
          tips: ["JDK6", "JDK7", "JDK8", "JDK9"]
        },
        {
          title: "应用框架",
          tips: [
            "Dubbo | DubboX | CXF | AXIS2",
            "XFIRE | SUN JAXWS | Jersey",
            "SpringMVC | SpringRESTService | Servlet（2.5/3.x）",
            "Struts 2.x | Wink | Apache HttpClient（同步/异步）",
            "Web Filter（2.5/3.x | Log4j | LogBack",
            "Java Logging"
          ],
          width: 270
        },
        {
          title: "应用服务器",
          tips: ["Tomcat（6+）", "SpringBoot", "Jetty（7+）", "MSCP", "任意JSE"]
        },
        {
          title: "数据源",
          tips: [
            "MySQL",
            "Oracle等JDBC数据源",
            "MongoDB（MongoClient）",
            "Redis（JEDIS，LETTUCE，ARedis）",
            "ESClient（Transport）"
          ],
          width: 200
        },
        {
          title: "消息中间件",
          tips: [
            "RabbitMQ（消费/生产）",
            "RocketMQ（消费/生产）",
            "Kafka（消费/生产）"
          ]
        },
        {
          title: "数据库连接池",
          tips: [
            "DBCP/2 | c3p0",
            "Druid | Proxool",
            "Hikari | MyBatis CP",
            "Tomcat DBCP/2"
          ]
        }
      ]
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.title}>JAVA探针支持</div>
          <div className={css.line} />
          <div className={css.divider} />
          {data.map((item, key) => (
            <SupportTab data={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductPanel;
