import {connect} from "react-redux"
import DeviceList from "../ui/DeviceList"
import {fetchDevices, fetchAllDevices} from "../../actions";

const mapStateToProps = (state) => {

  return {
    status: state.device_pods.status,
    error: state.device_pods.error,
    devices: state.device_pods,
    all_devices: state.device_pods.all_devices
  }
}


export default connect(mapStateToProps, {fetchDevices, fetchAllDevices})(DeviceList)
