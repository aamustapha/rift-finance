import RiftInfo from "./Info";
import RiftClerk from "./Clerk";

const {Component} = require("react");

class RiftInvestment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [
                {label: 'Current APY', value: `${props.interestRate}%`},
                {label: 'Amount Deposited', value: props.initialBalance },
                {label: 'Accrued interest', value: `0` }
            ]
        }
    }

    render() {
        return (
            <div className="bg-gradient-to-br from-blue-100 via-blue-100 to-purple-100 rounded p-4 m-2">
                <h2 className="text-center text-xl font-bold">{this.props.network}</h2>
                <RiftInfo information={this.state.info} />
                <RiftClerk />

            </div>
        )
    }
}

export default RiftInvestment