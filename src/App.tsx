import React from "react";
import { useEffect, useState } from "react";
import api  from "./utils/api.ts";
import axios from "axios";

import MyApp from "./components/MyApp.tsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient();

interface User {
	id : number,
	name : string,
}

// const fetchDataUser = async () =>{
// 	const tempPromise = await api.get<User[]>("/api/users/");
// 	return tempPromise.data;
// }

// const useGetUserQuey = () => useQuery({
// 	queryKey : ['users', ""],	
// 	queryFn : () => fetchDataUser(),
	
// });

// const {isLoading, data, error} = useGetUserQuey();




const App =  () => {


	return(
		<QueryClientProvider client={queryClient}>
			<MyApp/>
		</QueryClientProvider>
		
	)

}

export default App;
