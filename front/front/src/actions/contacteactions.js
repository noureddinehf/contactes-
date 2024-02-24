import axios from "axios"; 
import { contactes } from './constantes';

export const get = () => {
    return async (dispatch) => { 
        dispatch({ type: contactes.get_request });

        try {
            const res = await axios.get('http://localhost:9000/get');

            if (res.status === 200) {
                dispatch({
                    type: contactes.get_success,
                    payload: { contacte: res.data } 
                });
            }
        } catch (error) {
            dispatch({
                type: contactes.get_fail,
                payload: { error : error.response }
            });
        }
    };
}
export const post =(data)=>{
    return async (dispatch) => { 
        dispatch({ type: contactes.post_request });

        try {
            const res = await axios.post('http://localhost:9000/post',data);

            if (res.status === 200) {
                dispatch({
                    type: contactes.post_success,
                    payload:{contactez:res.data}
                    
                });
            }
        } catch (error) {
            dispatch({
                type: contactes.post_fail,
                payload: { error : error.response }
            });
        }
    };
}
export const deletee =(id)=>{
    return async (dispatch) => { 
        dispatch({ type: contactes.delete_request });

        try {
            const res = await axios.get(`http://localhost:9000/delete/${id}`,);

            if (res.status === 200) {
                dispatch({
                    type: contactes.delete_success,
                    payload:{contactezz:res.data}
                    
                });
            }
        } catch (error) {
            dispatch({
                type: contactes.delete_fail,
                payload: { error : error.response }
            });
        }
    };
}
export const put = (id,data)=>{
    return async (dispatch) => { 
        dispatch({ type: contactes.put_request });

        try {
            const res = await axios.post(`http://localhost:9000/put/${id}`,data);

            if (res.status === 200) {
                dispatch({
                    type: contactes.put_success,
                    payload:{contactezzz:res.data}
                    
                });
            }
        } catch (error) {
            dispatch({
                type: contactes.put_fail,
                payload: { error : error.response }
            });
        }
    };
}

