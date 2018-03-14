var Toast = {};
Toast.install = function (Vue, options) {
  Vue.prototype.$toast = (tips, type) => {
    let toastTp1 = Vue.extend({
        template: `<div class="vue-toast toast-${type}"> ${tips} </div>`,
      });
    let tp1 = new toastTp1().$mount.$el;
    document.body.appendChild(tp1);
    setTimeout(function() {
      document.body.removeChild(tp1);
    }, 2500);
  }
};

['bottom', 'center', 'top'].forEach(type => {
  Vue.prototype.$toast[type] = tips => {
    return Vue.prototype.$toast(tips, type);
  }
});

module.exports = Toast;
