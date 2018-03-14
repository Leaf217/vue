var Toast = {};
Toast.install = function (Vue, options) {
  let opt = {
    defaultType: 'bottom',
    duration: '2500'
  };
  for (let property in options) {
    opt[property] = options[property];
  }
  Vue.prototype.$toast = (tips, type) => {
    if (type) {
      opt.defaultType = type;
    }
    if (document.getElementsByClassName('vue-toast').length) {
      return;
    }
    let toastTp1 = Vue.extend({
        template: `<div class="vue-toast toast-${type}"> ${tips} </div>`,
      });
    let tp1 = new toastTp1().$mount.$el;
    document.body.appendChild(tp1);
    setTimeout(function() {
      document.body.removeChild(tp1);
    }, opt.duration);
  }
};

['bottom', 'center', 'top'].forEach(type => {
  Vue.prototype.$toast[type] = tips => {
    return Vue.prototype.$toast(tips, type);
  }
});

module.exports = Toast;
