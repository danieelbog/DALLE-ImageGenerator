import { mockApi } from "../api";
import { DalleDto } from "../types/dalleDto";

export function initMockApis() {
	mockApi.onPost("https://api.openai.com/v1/images/generations").reply(200, {
		created: new Date(),
		data: [
			{
				url: "https://wallpapercave.com/wp/wp4471392.jpg",
			},
			{
				url: "https://cdn.wallpapersafari.com/45/19/1Dnajl.jpg",
			},
			{
				url: "https://wallpaperaccess.com/full/7228853.jpg",
			},
			{
				url: "https://wallpaperaccess.com/full/1138975.jpg",
			},
		],
	} as DalleDto);
}
