const {Component} = require("react");

class RiftBalance extends Component {

    render() {
        return (
            <>
                <span className="text-center px-3 py-2">
                    USDC Balance
                    <span className="block text-4xl font-bold text-blue-600 ">{ this.props.balance} USDC</span>
                </span>
            </>
        )
    }
}

export default RiftBalance