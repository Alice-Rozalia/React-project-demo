export function dateFormat(time) {
  if (!time) return ""

  let dt = new Date(time)
  return dt.getFullYear() + "年" + (dt.getMonth() + 1) + "月"
    // eslint-disable-next-line no-useless-concat
    + (dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate()) + "日" + " "
    + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + "时"
    + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes()) + "分"
    + (dt.getSeconds() < 10 ? '0' + dt.getSeconds() : dt.getSeconds()) + "秒"
}
