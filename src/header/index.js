import RiftBalance from "./Balance";
import RiftTimelapse from "./Timelapse";

const {Component} = require("react");

class RiftHeader extends Component {
    render() {
        return (
            <div className="container mx-auto my-2 flex justify-between ">
                <RiftBalance balance={this.props.balance}></RiftBalance>
                <RiftTimelapse></RiftTimelapse>
            </div>
        )
    }
}

export default RiftHeader