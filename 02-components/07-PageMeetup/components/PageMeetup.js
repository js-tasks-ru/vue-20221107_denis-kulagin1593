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
    };
  },

  computed: {
    current() {
      return this.meetup;
    },
    rej() {
      return this.error;
    },
  },

  watch: {
    meetupId(newValue) {
      this.getMeetup(newValue);
    },
  },

  mounted() {
    this.getMeetup(this.meetupId);
  },

  methods: {
    getMeetup(id) {
      this.meetup = null;
      fetchMeetupById(id)
        .then((res) => {
          this.meetup = res;
          this.error = null;
        })
        .catch((rej) => {
          this.meetup = null;
          this.error = rej;
        });
    },
  },

  template: `
    <div class="page-meetup">
    <MeetupView v-if="meetup" :meetup="current"/>

    <UiContainer v-else-if="!current && !rej">
      <UiAlert>Загрузка...</UiAlert>
    </UiContainer>

    <UiContainer v-if="rej">
      <UiAlert>Test Error</UiAlert>
    </UiContainer>
    </div>`,
});
