export const docPdfReducer = (state = {docData: {}, status: "", error: ""}, action) => {
  switch (action.type) {
    case "DOCS_LOADING":
      return {...state, status: "LOADING"}
    case "RECEIVE_DOCS":
      console.log(action, "recieve action")
      const documents = action.payload.map(({file, name}) => ({file, name}))
      return {docData: documents, selected: documents[0].name, status: "LOADED", error: ""}
    case "ACTIVE_DOC_PDF":
      return {...state, selected: action.payload.selected}
    case "PODS_ERROR":
      return {...state, status: "ERROR", error: action.payload.error}
    default:
      return state
  }
}

export const labPdfReducer = (state = {}, action) => {
  switch (action.type) {
    case "RECEIVE_COURSES":
      const labs = action.payload.map(({name}) => ({name}))
      return labs
    default:
      return state
  }
}

export const activeLabPdfReducer = (state = {}, action) => {
  switch (action.type) {
    case "ACTIVE_LAB_PDF":
      return action.payload
    default:
      return state
  }
}
