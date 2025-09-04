const HabitDetail = {
  data() {
    return { habit: null }
  },
  created() {
    const saved = localStorage.getItem("habits")
    const habits = saved ? JSON.parse(saved) : []
    const id = Number(this.$route.params.id)
    this.habit = habits.find(h => h.id === id)
  },
  template: `
    <div class="card" v-if="habit">
      <h2>Detalles de "{{ habit.title }}"</h2>
      <p>Has completado este hábito <strong>{{ habit.doneCount }}</strong> veces.</p>
      <router-link to="/">⬅️ Volver</router-link>
    </div>
    <p v-else>Hábito no encontrado. <router-link to="/">Volver</router-link></p>
  `
}
