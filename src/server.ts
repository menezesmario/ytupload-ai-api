import {fastify} from "fastify";


const app = fastify()

app.get('/', () => {
    return 'YT Upload-API'
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running! YT Upload-API')
})