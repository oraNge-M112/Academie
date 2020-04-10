var app = new Vue({
    el: "#app",
    data: {
        fact: "Loading.."
    },
    // metoda ce se apeleaza cand porneste aplicatia
    mounted() {
        axios
            .get("http://api.icndb.com/jokes/random")
            .then(response => this.fact = response.data.value.joke)
            .catch(error => this.fact = error + "Error while loading. Please try again.");
    }
});
	