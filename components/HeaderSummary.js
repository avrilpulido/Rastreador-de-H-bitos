const HeaderSummary = {
  props: ["total"],
  template: `
    <header class="card">
      <h1>Habit Tracker</h1>
      <p>Tienes <strong>{{ total }}</strong> hábitos registrados</p>
    </header>
  `
}
