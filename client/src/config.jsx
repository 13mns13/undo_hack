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
export const getInflation=(i,t)=>1/Math.pow(1+i,t);
export const DP=(r,z)=>r-z;
export const DDP = (r,z,i,t)=>getInflation(i,t)*DP(r,z);
export const defaultValue = {
    items:[],
    i:0,
    name:"Название"
}