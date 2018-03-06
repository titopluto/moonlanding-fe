import { connect } from "react-redux"
import PodList from "../ui/PodList"

const mapStateToProps = (state) => ({
        pods: state.all_pods
})

export default connect(mapStateToProps)(PodList)