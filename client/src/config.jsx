const url = "https://dev.xox.su/api"
const method = (type,data={})=>fetch(url, {
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        type,
        data,
        token:localStorage.getItem("token")
    })
})
.then(e=>e.json())

export const search = (name,index)=>method("search",{
    name,
    index
})

export const getTop = (offset)=>method("getTop",{
    offset
})


export const getDataID = (_id)=>method("getDataID",{_id})