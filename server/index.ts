import {createHTTPServer} from '@trpc/server/adapters/standalone'
import AppRouter from './router'

createHTTPServer({
    router: AppRouter, 
    createContext() {
        return {}
    }
}).listen(2022)