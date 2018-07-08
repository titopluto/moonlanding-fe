import {connect} from "react-redux"
import DeviceList from "../ui/DeviceList"
import {fetchDevices} from "../../actions";

const mapStateToProps = (state) => {
  return {
    status: state.device_pods.status,
    error: state.device_pods.error,
    devices: state.device_pods}
}


export default connect(mapStateToProps, {fetchDevices})(DeviceList)
