import { connect } from "react-redux"
import DeviceList from "../ui/DeviceList"
import {fetchDevices} from "../../actions";

const mapStateToProps = (state) => {
        return {devices: state.device_pods}
}



export default connect(mapStateToProps, {fetchDevices})(DeviceList)
