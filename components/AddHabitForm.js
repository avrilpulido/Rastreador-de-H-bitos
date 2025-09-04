const AddHabitForm = {
  data() {
    return { newHabit: "" }
  },
  emits: ["add-habit"],
  template: `
    <div class="card">
      <h2>Agregar hábito</h2>
      <input v-model="newHabit" placeholder="Ej: Leer 20 min" />
      <button @click="emitHabit">Agregar</button>
    </div>
  `,
  methods: {
    emitHabit() {
      if (!this.newHabit.trim()) return
      this.$emit("add-habit", this.newHabit)
      this.newHabit = ""
    }
  }
}
