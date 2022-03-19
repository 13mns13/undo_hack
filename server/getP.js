import fetch from "node-fetch"


const url = "http://127.0.0.1:5000/test"

export const method = (data)=>fetch(url,{
    method:"POST",
    body:JSON.stringify(data)
}).then(e=>e.json())
.catch(e=>{
    return {data:[]}
})
