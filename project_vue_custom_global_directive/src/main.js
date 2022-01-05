import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('fristOne', {
  bind(el) {
    el.innerHTML = 'Hello World'
  }
});

Vue.directive('fristTwo', {
  bind(el, binding) {
    el.innerHTML = binding.value
  }
});

Vue.directive('fristTwoColor', {
  bind(el, binding) {
    el.innerHTML = binding.value

    binding.arg==='red'? el.style.color="red":el.style.color="blue"
  }
});

Vue.directive('fristTwoColorAndSize', {
  bind(el, binding) {
    el.innerHTML = binding.value

    binding.modifiers.red? el.style.color="red":el.style.color="blue"
    binding.modifiers.big? el.style.fontSize="40px":el.style.fontSize="15px"
  }
});
new Vue({
  render: h => h(App),
}).$mount('#app')
