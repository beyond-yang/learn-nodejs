/**
 * 获取 cookie 的过期时间
 */
 const getCookieExprise = () => {
  const d = new Date();
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
  return d.toGMTString();
};

module.exports = {
  getCookieExprise,
};