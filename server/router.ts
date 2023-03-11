import { z } from "zod";
import { router, publicProcedure } from "./trpc";

const AppRouter = router({
    getUser : publicProcedure.input(z.object({
        name: z.string().min(5)
    })).query((req) => {
        return {
            message: `Hello ${req.input.name}`
        }
    })
})


export type AppRouterType = typeof AppRouter 

export default AppRouter
