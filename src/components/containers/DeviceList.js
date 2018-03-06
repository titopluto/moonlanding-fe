import { connect } from "react-redux"
import DeviceList from "../ui/DeviceList"

const mapStateToProps = (state) => ({
        pods: state.all_pods
})



export default connect(mapStateToProps)(DeviceList)