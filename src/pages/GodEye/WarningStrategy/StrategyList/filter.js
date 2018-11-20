export function strategyType(type) {
  if (type === 1) {
    return "自定义指标";
  } else if (type === 2) {
    return "服务端";
  } else if (type === 3) {
    return "客户端";
  } else if (type === 4) {
    return "日志";
  }
}

export function strategySystem(system) {
  if (system === 1) {
    return "进程状态指标系";
  } else if (system === 2) {
    return "应用容器状态指标系";
  } else if (system === 3) {
    return "服务状态指标系";
  } else if (system === 4) {
    return "应用状态指标系";
  } else if (system === 5) {
    return "应用服务器状态指标系";
  } else if (system === 6) {
    return "进程死亡指标系";
  } else if (system === 7) {
    return "调用状态指标系";
  }
}
