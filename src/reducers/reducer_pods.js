const podsReducer = (state={}, action) => {
    switch(action.type) {
        case "RECEIVE_PODS":
            // TODO:: Pod endpoint has bugs. Ask to fix
            const allPods = state
            action.payload.map(pod => {
                console.log(allPods[pod.name],"allPods[pod.name]")
                if (!allPods[pod.name]) {
                    allPods[pod.name] = []
                }
                allPods[pod.name].push(pod)
            })
            return allPods
        default:
            return state
    }
}

export default podsReducer;