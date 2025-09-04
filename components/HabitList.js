const HabitList = {
  props: ["habits"],
  emits: ["mark-done", "delete-habit"],
  template: `
    <div class="card">
      <h2>Tus hábitos</h2>
      <ul>
        <li v-for="habit in habits" :key="habit.id">
          <router-link :to="'/habit/' + habit.id">
            <strong>{{ habit.title }}</strong>
          </router-link>
          — Completado {{ habit.doneCount }} veces
          <button @click="$emit('mark-done', habit.id)">Hecho</button>
          <button class="del" @click="$emit('delete-habit', habit.id)">Eliminar</button>
        </li>
      </ul>
      <p v-if="!habits.length">No tienes hábitos aún.</p>
    </div>
  `
}
