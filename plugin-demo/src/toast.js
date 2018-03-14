var Toast = {};
Toast.install = function (Vue, options) {
  Vue.prototype.$msg = 'Hello World';
}
// export {Toast};
module.exports = Toast;
