var app = new Vue({
  el: "#app",
  data: {
    question: "What song are you looking for?",
    artist: "",
    song: "",
  },
  methods: {

  },
  mounted: {
      axios
        .get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
        .then(response => )
  }
});
