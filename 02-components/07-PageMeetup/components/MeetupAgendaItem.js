import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from '../../05-MeetupAgenda/meetupService';

export default defineComponent({
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      iconDef: agendaItemIcons[this.agendaItem['type']],
    };
  },

  methods: {
    getTitle() {
      return agendaItemDefaultTitles[this.agendaItem['type']];
    },
  },

  template: `
    <div class="agenda-item">
    <div class="agenda-item__col">
      <img
        :src="\`../../../src/assets/icons/icon-\${$data.iconDef}.svg\`"
        class="icon"
        alt="key"/>
    </div>
    <div class="agenda-item__col">{{ agendaItem['startsAt'] }} - {{ agendaItem['endsAt'] }}</div>
    <div class="agenda-item__col">
      <h3 v-if="agendaItem['title']" class="agenda-item__title">{{ agendaItem['title'] }}</h3>
      <h3 v-else class="agenda-item__title">{{ getTitle() }}</h3>
      <p v-if="agendaItem['type'] === 'talk'" class="agenda-item__talk">
        <span>{{ agendaItem['speaker'] }}</span>
        <span class="agenda-item__dot"></span>
        <span class="agenda-item__lang">{{ agendaItem['language'] }}</span>
      </p>
      <p v-if="agendaItem['description']">{{ agendaItem['description'] }}</p>
    </div>
    </div>`,
});
