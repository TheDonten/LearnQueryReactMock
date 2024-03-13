import { http, HttpResponse, delay} from "msw";
import { Interface } from "readline";
import internal from "stream";

interface User {
	id : number,
	name : String;
}

// const users : Record<number, User>  = {
// 	1 : {
// 		id : 1,
// 		name : "Aboba",
// 	},
	
// 	2 : {
// 		id : 2,
// 		name : "Toma",
// 	}
// }
const users : User[] = [
	{
		id : 1,
		name : "Aboba",
	},
	{
		id : 2,
		name : "Toma",
	}
]	

export const handlers = [
	http.get("/api/users/:id", async ({params}) => {
		await delay(1000);
		return  HttpResponse.json(users[Number(params.id)]);
	}),
	http.get("/api/users/", async () => {
		await delay(1000);
		return  HttpResponse.json(users);
	}),
];
