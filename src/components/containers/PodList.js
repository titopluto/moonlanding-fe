import {connect} from "react-redux"
import PodList from "../ui/PodList"
import {fetchPods} from "../../actions";

const mapStateToProps = (state) => {
  return ({
    pods: state.all_pods.podData,
    status: state.all_pods.status,
    error: state.all_pods.error
  })
}

export default connect(mapStateToProps, {fetchPods})(PodList)
