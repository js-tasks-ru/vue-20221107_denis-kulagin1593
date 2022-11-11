import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const calculatorOperators = {
  sum: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

const App = defineComponent({
  name: 'App',
  data() {
    return {
      a: 10,
      b: 0,
      operator: 'sum',
    };
  },
  computed: {
    result() {
      return calculatorOperators[this.operator](this.a, this.b);
    },
  },
});

const app = createApp(App);
const vm = app.mount('#app');
