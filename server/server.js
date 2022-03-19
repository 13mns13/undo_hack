import fastify from "fastify"
import cors from "fastify-cors"
import { checkAuth, search,getDataID,getTop } from "./logic.js"

const app = fastify()
app.register(cors)

app.post("/api", {
    schema: {
        body: {
            type: "object"
        }
    }
}, async (req, res) => {
    const body = req.body
    const isAuth = await checkAuth(body.token)
    if (body.type == "checkAuth") {
        return res.send({ state: isAuth ? 1 : 0 })
    }
    if (["search", "getTop","getDataID"].includes(body.type)) {
        return notIsAuthMethod(res, body.type, body.data)
    }

    if (isAuth) {
        isAuthMethod(res, body.type, body.data)
    }
    else {
        notIsAuthMethod(res, body.type, body.data)
    }
})

const isAuthMethod = (res, type, data) => {
    return res.send({ state: 0 })
}

const notIsAuthMethod = async (res, type, data) => {
    if (type == "search") {
        const items = await search(data.name,"search")
        return res.send({
            state: 1,
            items,
            index: data.index,
        })
    }
    else if (type == "getTop") {
        const items = await getTop()
        return res.send({
            state: 1,
            ...items,
        })
    }
    else if (type=="getDataID"){
        const item = await getDataID(data._id)
        return res.send({
            state:1,
            item
        })
    }
    return res.send({ state: 0 })
}
app.listen(3000).then(e => {
    console.log(e)
})