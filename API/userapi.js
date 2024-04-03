import ApiManager from "./apimanager";

export const user_login=async data=>
{
    try{
            const result=await ApiManager("/user/login",{
                method:"POST",
                headers:
                {
                    'content-type':"application/json"
                },
                data:data
            })
            return result
    }
    catch(error)
    {
        return error.respones.data
    }
}