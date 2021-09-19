import RiftInfo from "./Info";
import RiftClerk from "./Clerk";

const {Component} = require("react");

class RiftInvestment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [
                {label: 'Current APY', value: `${props.interestRate}%`},
                {label: 'Amount Deposited', value: props.initialBalance},
                {label: 'Accrued interest', value: 0}
            ]
        }
    }

    updateBalance (amount) {
        const info = this.state.info
        info[1].value += amount
        this.setState({...this.state, info})
        this.props.onBalanceUpdate(amount)
    }

    render() {
        return (
            <div className="bg-gradient-to-br from-blue-100 via-blue-100 to-purple-100 rounded p-4 my-2">
                <h2 className="text-center text-xl font-bold">{this.props.network}</h2>
                <RiftInfo information={this.state.info}/>
                <RiftClerk onBalanceUpdate={this.updateBalance.bind(this)}/>

            </div>
        )
    }
}

export default RiftInvestment