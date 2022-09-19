const app = Vue.createApp({
  data() {
    return {
      title: 'Moment.js Calendar',
      months: moment().months(),
      today:moment().format("D"),
      thisMonth:moment().format("MMMM"),
      //thisYear:moment().format("YYYY"),
      thisYear:moment().format("YYYY"),
      weekDays: moment.weekdays(),
      firstDay: parseInt(moment().startOf('month').format('D')),
      lastDay: parseInt(moment().endOf('month').format('D')),
      firstWeekDay: moment().startOf('month').format("dddd"),
      friday:'Friday',
      thursday:'Thursday',
      counter: 0,
    }
  },
  methods: {
    previousMonth: function() {
      this.counter--
         this.thisMonth = moment().add(this.counter, 'months').format('MMMM');
         this.lastDay =  parseInt(moment().add(this.counter, 'months').endOf('month').format('D'));
         this.thisYear = moment().add(this.counter, 'months').format("YYYY");
         this.firstWeekDay= moment().add(this.counter, 'months').startOf('month').format("dddd");
          console.log(this.thisMonth)
      },
      nextMonth: function() {
        this.counter++
           this.thisMonth = moment().add(this.counter, 'months').format('MMMM');
           this.lastDay =  parseInt(moment().add(this.counter, 'months').endOf('month').format('D'));
        this.thisYear = moment().add(this.counter, 'months').format("YYYY");
           this.firstWeekDay= moment().add(this.counter, 'months').startOf('month').format("dddd");
            console.log(this.thisMonth)
        }
    },
})
app.mount('#calendar')