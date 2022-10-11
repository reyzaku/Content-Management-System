import { publicRequest } from "../utils/AxiosInstance";
import { loginFailure, loginStart, loginSuccess } from "./UserReducers"

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    }catch(res){
        dispatch(loginFailure(res));
    }
}