const routes = [
	{
		path: "/",
		name: "Home",
		meta: {
			allowAnonymous: false,
			noLayout: false,
			pageTitle: "Emage Generator",
		},
		component: () => import("./Home/Home.vue"),
	},
];

export default routes;
