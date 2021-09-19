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

    updateBalance(amount) {
        const info = this.state.info
        info[1].value += amount
        this.setState({...this.state, info})
        this.props.onBalanceUpdate(amount)
    }

    accrueCompoundInterest(days) {
        const interestRate = this.props.interestRate / 100
        const balance = +this.state.info[1].value + +this.state.info[2].value

        const newBalance = balance * (1 + (interestRate / 365)) ** days
        const interestAccrued = newBalance - +this.state.info[1].value
        const info = this.state.info

        info[2].value = interestAccrued
        this.setState({...this.state, info})
        this.props.onFastforwardComplete()
    }

    accrueSimpleInterest(days) {
        const interestRate = this.props.interestRate / 100
        const balance = +this.state.info[1].value

        const simpleInterest = balance * interestRate * (days / 365)
        const info = this.state.info

        info[2].value = simpleInterest
        this.setState({...this.state, info})
        this.props.onFastforwardComplete()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.fastforward !== this.props.fastforward && this.props.fastforward !== 0) {
            this.accrueCompoundInterest(this.props.fastforward)
        }
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