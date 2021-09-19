const {Component} = require("react");

class RiftClerk extends Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: 100,
            action: 'deposit'
        }
    }

    updateAmount(e) {
        const amount = +e.target.value.replace(/\D/g, '')
        this.setState({...this.state, amount})
    }

    setDeposit() {
        this.setState({...this.state, action: 'deposit'})
    }

    setWithdraw() {
        this.setState({...this.state, action: 'withdraw'})
    }

    commit() {
        let polarity = 1
        if (this.state.action === 'withdraw') {
            polarity = -1
        } else if (this.state.action === '') {
            return window.alert('Please choose weather to withdraw or deposit')
        }
        this.props.onBalanceUpdate(this.state.amount * polarity)
    }

    render() {
        return (
            <>
                <div className="text-sm mt-6 mb-3">
                    <div className="flex justify-center my-6 ">
                        <button
                            className={`flex-grow p-2 border-2 border-r-0 ${this.state.action === 'deposit' || this.state.action !== 'withdraw' ? 'bg-green-400 border-green-400 active' : 'bg-green-100 text-gray-400 border-green-400'} font-bold rounded-l`}
                            onClick={this.setDeposit.bind(this)}>Deposit
                        </button>
                        <button
                            className={`flex-grow p-2 border-2 border-l-0 ${this.state.action === 'withdraw' || this.state.action !== 'deposit' ? 'bg-red-400 border-red-400 active' : 'bg-red-100 text-gray-400 border-red-400'} font-bold rounded-r`}
                            onClick={this.setWithdraw.bind(this)}>Withdraw
                        </button>
                    </div>

                    <label className="flex justify-center items-center my-12">
                        <span className="pr-3">Amount: </span>
                        <input id="amount" className="py-2 px-3 w-32" value={this.state.amount}
                               onChange={this.updateAmount.bind(this)}/>
                    </label>

                    <button className={"text-white bg-blue-600 block mx-auto px-10 py-3 uppercase font-bold" + `${this.state.action === '' ? ' cursor-not-allowed' : ' hover:bg-blue-700 '}`}
                            disabled={this.state.action === ''} onClick={this.commit.bind(this)}> Confirm
                    </button>

                </div>
            </>
        )
    }
}

export default RiftClerk