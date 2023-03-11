import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import {AppRouterType} from "../server/router";


const callUser = async () => {
    const client = createTRPCProxyClient<AppRouterType>({
        links: [
            httpBatchLink({
                url: 'http://localhost:2022'
            })
        ]
    })
   const data =  await client.getUser.query({name : "Anwesh"})
   console.log("DATA", data)
}

callUser()