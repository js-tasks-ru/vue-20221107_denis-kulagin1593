import {defineComponent} from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from "./MeetupView";
import {fetchMeetupById} from '../meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      meetup: null,
      error: null,
      load: null,
    };
  },

  computed: {
    current() {
      return this.meetup;
    },
    rej() {
      return this.error;
    },
    loading() {
      return this.load;
    },
  },

  watch: {
    meetupId(newValue) {
      this.load = true;
      fetchMeetupById(newValue)
        .then((res) => {
          this.meetup = res;
          this.error = null;
          this.load = false;
        })
        .catch((rej) => {
          this.meetup = null;
          this.error = rej;
          this.load = false;
        });
    },
  },

  mounted() {
    this.load = true;
    fetchMeetupById(this.meetupId)
      .then((res) => {
        this.meetup = res;
        this.error = null;
        this.load = false;
      })
      .catch((rej) => {
        this.meetup = null;
        this.error = rej;
        this.load = false;
      });
  },

  template: `
    <div class="page-meetup">
    <MeetupView v-if="meetup" :meetup="current"/>

    <UiContainer v-else-if="loading">
      <UiAlert>Загрузка...</UiAlert>
    </UiContainer>

    <UiContainer v-else-if="rej">
      <UiAlert>error</UiAlert>
    </UiContainer>
    </div>`,
});
