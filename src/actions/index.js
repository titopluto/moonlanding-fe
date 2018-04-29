import axios from "axios"
import C from "./constants"

const API_URL = "http://access.inwk.dal.ca/api"

export const activeDocPdf = (pdf) => {
    return ({
            type: C.ACTIVE_DOC_PDF,
            payload: pdf
        }
    )
}

export const activeLabPdf = (pdf) => {
    return ({
            type: C.ACTIVE_LAB_PDF,
            payload: pdf
        }
    )
}

export const verifyToken = () => {
    return dispatch => {
        const token = localStorage.getItem("token")
        if (token) {
            axios.post(`${API_URL}/api-token-verify/`, {token:token})
                .then( response => {
                    // console.log("token verified to be valid")

                    dispatch({ type: C.AUTH_USER})

            })
                .catch(error => {
                    // console.log("token expired!!")
                    dispatch({ type: C.UNAUTH_USER})
                })

        }
        else {
            // console.log("no token found, so unauthing user")
            dispatch({ type: C.UNAUTH_USER})
        }
    }
}


export const verifyTokenExists = () => {

    return localStorage.getItem("token") != null
}

export const loginUser = ({ email, password }, history) => {
    return (dispatch, getState) => {
        axios.post(`${API_URL}/api-token-auth/`, { username:email, password })
            .then(response => {
                //update state to  indicate the use is authenticated
                dispatch({ type: C.AUTH_USER})
                // store token in local storage
                localStorage.setItem("token", response.data.token)
                //redirect user to home page
                history.push("/")
            })
            .catch(error => {
                dispatch(authError("Unable to login, please check your username and password"))
                // console.log(error.response.data)
                }
            );
    }
}


export const logoutUser = (history) => {
    return dispatch => {
        if (verifyTokenExists()) {
            localStorage.removeItem("token");
            localStorage.removeItem("inwk-store")
        }
        dispatch({type:C.LOGOUT_USER})
        // dispatch({type: C.UNAUTH_USER})
        // console.log("at logout user")
        history.push("/auth")

    }
}

export const authError = error => {
    return ({
        type: C.AUTH_ERROR,
        payload: error
    })
}

export const fetchPods = () => {
    return (dispatch) => {
        axios.get("http://129.173.143.240:8000/api/pods")
            .then(pods => {
                dispatch({type: "RECEIVE_PODS", payload: pods})
            })
            .catch(error => {
                console.error({error}, "Failed to fetch pods")
                // TODO:: Remove this dispatch and throw error after fixing CORS
                dispatch({type: "RECEIVE_PODS", payload: [{
                        "id": 1,
                        "name": "Pod 1"
                    }]})
            })
    }
}