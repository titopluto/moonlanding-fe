
export const docPdfReducer = (state={}, action) => {
    return state
}

export const activeDocPdfReducer = (state={}, action) => {
    switch (action.type) {
        case "ACTIVE_DOC_PDF":
            return  action.payload
        default:
            return state
    }
}

export const labPdfReducer = (state={}, action) => {
    return state
}

export const activeLabPdfReducer = (state={}, action) => {
    switch (action.type) {
        case "ACTIVE_LAB_PDF":
            return  action.payload
        default:
            return state
    }
}