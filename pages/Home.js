const Home = {
  components: { HeaderSummary, AddHabitForm, HabitList },
  data() {
    return { habits: [] }
  },
  created() {
    this.loadHabits()
  },
  methods: {
    addHabit(title) {
      this.habits.push({ id: Date.now(), title, doneCount: 0 })
      this.saveHabits()
    },
    markDone(id) {
      const habit = this.habits.find(h => h.id === id)
      if (habit) {
        habit.doneCount++
        this.saveHabits()
      }
    },
    deleteHabit(id) {
      this.habits = this.habits.filter(h => h.id !== id)
      this.saveHabits()
    },
    saveHabits() {
      localStorage.setItem("habits", JSON.stringify(this.habits))
    },
    loadHabits() {
      const saved = localStorage.getItem("habits")
      this.habits = saved ? JSON.parse(saved) : []
    }
  },
  template: `
    <div>
      <HeaderSummary :total="habits.length" />
      <AddHabitForm @add-habit="addHabit" />
      <HabitList :habits="habits" @mark-done="markDone" @delete-habit="deleteHabit" />
    </div>
  `
}
