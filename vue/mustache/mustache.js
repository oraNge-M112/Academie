var app = new Vue({
    el: '#app',
    data: {
        message: 'Incredible work',
        counter: 10,
        myClass: !'important'
    },
    methods: {
        
    },
    computed: {
        reversedMessage() {
            return this.message.split('').reverse().join('');
        }
    }
});