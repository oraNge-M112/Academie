var app = new Vue({
  el: "#app",
  data: {
    fact: "To get the first fact press the button below",
  },
  methods: {
    getAnother: function () {
      axios
        .get("http://api.icndb.com/jokes/random")
        .then((response) => (this.fact = response.data.value.joke))
        .catch(
          (error) =>
            (this.fact = error + "Error while loading. Please try again.")
        );
    },
  },
  // metoda ce se apeleaza cand porneste aplicatia
  mounted() {
    getAnother();
  },
});
