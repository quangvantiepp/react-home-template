import { client } from "../../hooks/client"

export const homeServices ={
    getTestData:()=>{
        return client.get("/api/random", )
    }
    , 
    verifyToken: ()=>{
        return client.get("/api/validate-token", )
    },
    refreshToken: ()=>{
        return client.post("/api/refresh-token", )
    },
    getApiAdminPage: ()=>{
        return client.get("/api/admin/admin-page",)
    },
    getApiUserPage: ()=>{
        return client.get("/api/user/user-page",)
    }
}

