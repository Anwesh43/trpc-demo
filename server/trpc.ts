import { initTRPC } from "@trpc/server";

type InitTrpcType = ReturnType<typeof initTRPC.create>

const t : InitTrpcType = initTRPC.create()

export const router = t.router 
export const publicProcedure = t.procedure 
export const middleware = t.middleware 







