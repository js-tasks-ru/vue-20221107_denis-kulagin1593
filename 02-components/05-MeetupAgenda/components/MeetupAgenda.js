import { defineComponent } from '../vendor/vue.esm-browser.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupAgenda',

  components: { MeetupAgendaItem },

  props: {
    agenda: {
      type: Array,
      required: true,
    },
  },

  template: `
    <ul class="agenda">
    <li class="agenda__item">
      <div>
        <MeetupAgendaItem v-for="elem in agenda" :agenda-item="elem"/>
      </div>
    </li>
    </ul>`,
});
