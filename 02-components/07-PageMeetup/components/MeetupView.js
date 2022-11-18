import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupAgenda from './MeetupAgenda';
import MeetupDescription from './MeetupDescription';
import MeetupInfo from './MeetupInfo';
import MeetupCover from './MeetupCover';

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    MeetupInfo,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>
    <MeetupCover :title="meetup['title']" :image="meetup['image']"/>

    <ui-container>
      <div class="meetup">
        <div class="meetup__content">
          <h3>Описание</h3>
          <MeetupDescription :description="meetup['description']"/>

          <h3>Программа</h3>
          <MeetupAgenda v-if="meetup['agenda']" :agenda="meetup['agenda']"/>
          <ui-alert v-else>Программа пока пуста...</ui-alert>
        </div>
        <div class="meetup__aside">
          <MeetupInfo :date="meetup['date']" :place="meetup['place']" :organizer="meetup['organizer']"/>
        </div>
      </div>
    </ui-container>
    </div>
    <script>
    import MeetupDescription from "./MeetupDescription";

    export default {
      components: {MeetupDescription}
    }
    </script>`,
});
