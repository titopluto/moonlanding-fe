export const docPdfReducer = (state={}, action) => {
    switch (action.type) {
        case "RECEIVE_DOCS":
            const documents = action.payload.map(({file, name}) => ({file, name}))
            return {documents, selected: documents[0].name}
        case "ACTIVE_DOC_PDF":
            return {...state, selected: action.payload.selected}
        default:
            return state
    }
}

export const labPdfReducer = (state={}, action) => {
    switch (action.type) {
        case "RECEIVE_COURSES":
            const labs = action.payload.map(({name}) => ({name}))
            return  labs
        default:
            return state
    }
}

export const activeLabPdfReducer = (state={}, action) => {
    switch (action.type) {
        case "ACTIVE_LAB_PDF":
            return  action.payload
        default:
            return state
    }
}