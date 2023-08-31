import axios from "axios";
import MockAdapter from "axios-mock-adapter";

//global axios api
const api = createInstance("http://localhost:5173/");
export { api };

//global mock api
const mockApi = createMockAdapter();
export { mockApi };

function createInstance(baseURL: string) {
	var instance = axios.create({
		baseURL,
		withCredentials: true,
		headers: {
			"Content-Type": "application/json",
		},
	});
	return instance;
}

import { initMockApis } from "@/src/mocks";
if (enviromentIsDev()) initMockApis();

function createMockAdapter() {
	console.log("createMockAdapter");

	var adapter = new MockAdapter(api, {
		onNoMatch: "throwException",
		delayResponse: 1500,
	});
	if (!enviromentIsDev()) adapter.restore(); //if not dev environment, remove mocking
	return adapter;
}

function enviromentIsDev(): boolean {
	console.log(process.env.NODE_ENV === "development");
	return process.env.NODE_ENV === "development";
}
