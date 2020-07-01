import 'https://unpkg.com/vue/dist/vue.js';
import 'https://unpkg.com/vue-router/dist/vue-router.js';

const About = {
	template: `
    <h1> About me </h1>
  `,
};

const Myaccount = {
	props: ['username'],
	template: `
    <h1> This is your f account, {{ username }} </h1>
  `,
};

const Contact = {
	template: `
    <h1> OMG you have a phone number </h1>
  `,
};

const Notfound = {
  template: `
    <h1> Dumb... god damn</h1>
  `
}

const router = new VueRouter({
	routes: [
		{ path: '/about', component: About },
		{ path: '/myaccount/', component: Myaccount, props: true },
    { path: '/contact', component: Contact },
    { path: '*', component: Notfound}
	],
});

new Vue({
	el: '#app',
	router: router,
});
