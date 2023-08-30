import { createRouter, createWebHistory } from "vue-router";
import routes from "../views";

var router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
