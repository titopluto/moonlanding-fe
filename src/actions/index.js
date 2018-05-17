import axios from "axios"
import C from "./constants"

//const API_URL = "http://access.inwk.dal.ca/api"
const TEMP_URL = "http://129.173.143.240:8000/api"

const get_headers = () => {
    const token = localStorage.getItem("token")
    return { headers : {'Authorization' : 'Bearer ' + token }}
}

const token_issue = (error) => {
    if (error.response.status == 401){
        return true
    }else{
        return false
    }
}

export const activeDocPdf = (filename) => {
    return (dispatch) => {
        dispatch({
            type: C.ACTIVE_DOC_PDF,
            payload: {
                selected: filename
            }
        })
    }
}

export const activeLabPdf = (pdf) => {
    return ({
            type: C.ACTIVE_LAB_PDF,
            payload: pdf
        }
    )
}

// absolete
export const verifyToken = () => {
    return dispatch => {
        const token = localStorage.getItem("token")
        if (token) {
            axios.post(`${TEMP_URL}/api-token-verify/`, {token:token})
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
        axios.post(`${TEMP_URL}/token/`, { username:email, password })
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
        axios.get(`${TEMP_URL}/pods`, get_headers())
            .then(pods => {
                dispatch({type: "RECEIVE_PODS", payload: pods.data})
            })
            .catch(error => {
                console.error({error}, "Failed to fetch pods")
                if(token_issue(error)){
                    dispatch({ type: C.UNAUTH_USER})
                }
                // TODO:: Remove this dispatch and throw error after fixing CORS
                /*dispatch({type: "RECEIVE_PODS", payload: [{
                        "id": 1,
                        "name": "Pod 1"
                    }]})*/
            })
    }
}

export const fetchDocs = () => {
    return (dispatch) => {
        axios.get(`${TEMP_URL}/documents`, get_headers())
            .then(({data: documents}) => {
                dispatch({type: "RECEIVE_DOCS", payload: documents})
            })
            .catch(error => {
                console.error({error}, "Failed to fetch documents")
                if(token_issue(error)){
                    dispatch({ type: C.UNAUTH_USER})
                }
                // TODO:: Remove this dispatch and throw error after fixing CORS
                /*dispatch({type: "RECEIVE_PODS", payload: [{
                        "id": 1,
                        "name": "Pod 1"
                    }]})*/
            })
    }
}

export const fetchCourses = () => {
    return (dispatch) => {
        axios.get(`${TEMP_URL}/courses`, get_headers())
            .then(({data: labs}) => {
                dispatch({type: "RECEIVE_COURSES", payload: labs})

/*                dispatch({type: "RECEIVE_COURSES", payload: documents.data})
*/            })
            .catch(error => {
                console.error({error}, "Failed to fetch courses")
                if(token_issue(error)){
                    dispatch({ type: C.UNAUTH_USER})
                }
                // TODO:: Remove this dispatch and throw error after fixing CORS
                /*dispatch({type: "RECEIVE_PODS", payload: [{
                        "id": 1,
                        "name": "Pod 1"
                    }]})*/
            })
    }
}

export const fetchDevices = (podId) => {
  return (dispatch) => {
    axios.get(`${TEMP_URL}/pods/${podId}/`, get_headers())
      .then(({data: devices}) => {
        dispatch({type: "RECEIVE_DEVICES", payload: devices})

        /*                dispatch({type: "RECEIVE_COURSES", payload: documents.data})
        */            })
      .catch(error => {
        console.error(error, "Failed to fetch devices")
      })
  }
}
