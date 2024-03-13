import React from "react";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../utils/api";
import axios from "axios";

interface User {
	id : number,
	name : string,
}

const fetchDataUser = async () =>{
	const tempPromise = await api.get<User[]>("/api/users/");
	return tempPromise.data;
}

const useGetUserQuey = () => useQuery({
	queryKey : ['users', ''],	
	queryFn : () => fetchDataUser(),
    staleTime : 5*1000,

});




const MyApp = () =>{
    const {isLoading, data, error} = useGetUserQuey();
    const queryClient = useQueryClient();

    useEffect(() => {
        console.log(queryClient.getQueryCache().findAll());
      }, [queryClient]);

    if(isLoading){
        return(
            <div>
                A HUI TEBE
            </div>
        )
    }
    console.log(queryClient.getQueryData(['users','']))
    return(
        <div>
            {data?.map( (el) =>{
                return(
                    <div>
                        {el.id} {el.name}
                    </div>
                )
            })}
        </div>
    )
}

export default MyApp;