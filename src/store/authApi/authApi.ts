import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResponseUserData } from "../../modulus/modulus";

type BodyResponse = {
    username: string
    password: string
    site_key: string

}


export const authApi = createApi({
    reducerPath: "auth/api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://iconnect247.net/api/v2"
    }),
    endpoints: build => ({
        register: build.mutation<ResponseUserData, BodyResponse>({
            query: (data) => ({
                url: "/sessions",
                method: "POST",
                body: data,
            })
        })
    })
});

export const { useRegisterMutation } = authApi;


