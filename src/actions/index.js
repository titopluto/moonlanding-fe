import axios from "axios"
import C from "./constants"

//const API_URL = "http://access.inwk.dal.ca/api"
const TEMP_URL = "http://129.173.143.240:8000/api"

const get_headers = () => {
  const token = localStorage.getItem("token")
  return {headers: {'Authorization': 'Bearer ' + token}}
}

const add_post_header = (headers) => {
  headers['Content-Type'] = "application/json"
  return headers
}

const token_issue = (error) => {
  if (error.response.status === 401) {
    return true
  } else {
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

// obsolete
export const verifyToken = () => {
  return dispatch => {
    const token = localStorage.getItem("token")
    if (token) {
      axios.post(`${TEMP_URL}/api-token-verify/`, {token: token})
        .then(response => {
          // console.log("token verified to be valid")

          dispatch({type: C.AUTH_USER})

        })
        .catch(error => {
          // console.log("token expired!!")
          dispatch({type: C.UNAUTH_USER})
        })

    }
    else {
      // console.log("no token found, so unauthing user")
      dispatch({type: C.UNAUTH_USER})
    }
  }
}


export const verifyTokenExists = () => {
  return localStorage.getItem("token") != null
}

export const loginUser = ({email, password}, history) => {
  return (dispatch) => {
    axios.post(`${TEMP_URL}/token/`, {username: email, password})
      .then(response => {
        //update state to  indicate the use is authenticated
        dispatch({type: C.AUTH_USER})
        // store token in local storage
        localStorage.setItem("token", response.data.token)
        //redirect user to home page
        history.push("/")
      })
      .catch(_ => {
          dispatch(authError("Unable to login, please check your username and password"))
        }
      );
  }
}


export const logoutUser = (history) => {
  console.log("IN ..")
  return dispatch => {
    if (verifyTokenExists()) {
      localStorage.removeItem("token");
      localStorage.removeItem("inwk-store")
    }
    dispatch({type: C.LOGOUT_USER})
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

export const pageError = error => {
  return ({
    type: C.PAGE_ERROR,
    payload: error
  })
}

export const fetchPods = () => {
  console.log("fetching pods")
  return (dispatch) => {
    dispatch({type: C.PODS_LOADING})
    axios.get(`${TEMP_URL}/pods`, get_headers())
      .then(pods => {
        dispatch({type: "RECEIVE_PODS", payload: pods.data})
      })
      .catch(error => {
        if (token_issue(error)) {
          dispatch({type: C.UNAUTH_USER})
        }
        dispatch({type: C.PODS_ERROR, payload: {error: "Failed to fetch pods"}})
      })
  }
}


export const fetchDocs = () => {
  return (dispatch) => {
    dispatch({type: C.DOCS_LOADING})
    axios.get(`${TEMP_URL}/documents`, get_headers())
      .then(({data: documents}) => {
        dispatch({type: "RECEIVE_DOCS", payload: documents})
      })
      .catch(error => {
        console.error({error}, "Failed to fetch documents")
        if (token_issue(error)) {
          dispatch({type: C.UNAUTH_USER})
        }
        dispatch({type: C.DOCS_ERROR, payload: {error: "Failed to fetch docs"}})
      })
  }
}

export const fetchCourses = () => {
  return (dispatch) => {
    axios.get(`${TEMP_URL}/courses`, get_headers())
      .then(({data: labs}) => {
        dispatch({type: "RECEIVE_COURSES", payload: labs})

        /*                dispatch({type: "RECEIVE_COURSES", payload: documents.data})
        */
      })
      .catch(error => {
        console.error({error}, "Failed to fetch courses")
        if (token_issue(error)) {
          dispatch({type: C.UNAUTH_USER})
        }
        // TODO:: Remove this dispatch and throw error after fixing CORS
        /*dispatch({type: "RECEIVE_PODS", payload: [{
                "id": 1,
                "name": "Pod 1"
            }]})*/
      })
  }
}

export const fetchAllDevices = () => {
  return (dispatch) => {
    dispatch({type: C.DEVICES_LOADING})
    axios.get(`${TEMP_URL}/pods`, get_headers())

      .then(({data: devices}) => {
        console.log(devices)
        dispatch({type: "RECEIVE_ALL_DEVICES", payload: devices})
      })
      .catch(error => {
        if (token_issue(error)) {
          dispatch({type: C.UNAUTH_USER})
        }
        dispatch({type: C.DEVICES_ERROR, payload: {error: "Failed to fetch all devices"}})
      })
  }
}




export const fetchDevices = (podId) => {
  return (dispatch) => {
    dispatch({type: C.DEVICES_LOADING})
    axios.get(`${TEMP_URL}/pods/${podId}/`, get_headers())
      .then(({data: devices}) => {
        dispatch({type: "RECEIVE_DEVICES", payload: devices})
      })
      .catch(error => {
        if (token_issue(error)) {
          dispatch({type: C.UNAUTH_USER})
        }
        dispatch({type: C.DEVICES_ERROR, payload: {error: "Failed to fetch devices"}})
      })
  }
}

export const fetchCarousel = () => {
  return (dispatch) => {
    axios.get(`${TEMP_URL}/carouselcontent`, get_headers())
      .then(({data: carousel}) => {
        dispatch({type: "RECEIVE_CAROUSEL", payload: carousel})
      })
      .catch(error => {
        console.error(error, "Failed to fetch carousel")
      })
  }
}
export const resetChangePassword =()=>{
  return(dispatch)=>{
    dispatch({type: "RESET_CHANGE_PASSWORD"})
  }
}
export const changePassword = ({old_password, new_password}, history) => {
  return (dispatch) => {
    axios.put(`${TEMP_URL}/password/`, {old_password, new_password}, add_post_header(get_headers()))
      .then(({data: devices}) => {
        dispatch({type: "CHANGE_PASSWORD", payload: devices})
      })
      .catch(error => {
        console.error(error.response, "Failed to change password")
        dispatch({type: "CHANGE_PASSWORD_ERROR", payload: {error: error.response.data.message}})
      })
  }
}

export const resetPassword = ({password, token}) => {
  return (dispatch) => {
    axios.post(`${TEMP_URL}/passwordreset/`, {password, token}, add_post_header({}))
      .then(({data: devices}) => {
        dispatch({type: "CHANGE_PASSWORD", payload: devices})
      })
      .catch(error => {
        console.error({error}, "Failed to fetch password")
        dispatch({type: "FORGOT_PASSWORD_ERROR"})
      })
  }
}

export const forgotPassword = ({email}) => {
  return (dispatch) => {
    axios.post(`${TEMP_URL}/passwordresetemail/`, {email}, add_post_header({}))
      .then(({data: devices}) => {
        dispatch({type: "FORGOT_PASSWORD", payload: devices})
      })
      .catch(error => {
        console.error({error}, "Failed to fetch password")
        if (error.response && error.response.status === 403) {
          dispatch({type: "FORGOT_ERROR", payload: {error: "Please don't use same password"}})
        } else {
          dispatch({type: "FORGOT_ERROR", payload: {error: "Failed to change password"}})
        }
      })
  }
}
