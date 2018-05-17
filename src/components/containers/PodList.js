import { connect } from "react-redux"
import PodList from "../ui/PodList"
import {fetchPods} from "../../actions";

const mapStateToProps = (state) =>{
    return ({
        pods: state.all_pods
    })
}

export default connect(mapStateToProps, {fetchPods})(PodList)
