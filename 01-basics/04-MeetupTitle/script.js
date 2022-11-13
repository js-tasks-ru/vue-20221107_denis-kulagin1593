import {createApp} from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

createApp({
  name: 'App',

  data() {
    return {
      currentId: 0,
      currentTitle: null,
    };
  },

  watch: {
    currentId(newValue) {
      fetchMeetupById(newValue).then((res) => {
        this.currentTitle = res.title;
      });
    },
  },
}).mount('#app');
