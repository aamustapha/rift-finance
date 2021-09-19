import {Component} from "react";
import RiftHeader from "./header";
import RiftInvestment from "./investment";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            networks: [
                {name: 'Compound', rate: 5, balance: 0},
                {name: 'Aave', rate: 3, balance: 0},
                {name: 'Curve', rate: 2.5, balance: 0}
            ],
            consolidatedBalance: 1000,
            ffDays: 0
        }
    }

    handleBalanceUpdate(amount) {
        let consolidatedBalance = this.state.consolidatedBalance
        consolidatedBalance -= amount

        this.setState({...this.state, consolidatedBalance})
    }

    handleFastForward(ffDays) {
        this.setState({...this.state, ffDays})
    }

    onFastforwardComplete() {
        this.setState({...this.state, ffDays: 0})
    }

    render() {
        return (
            <div>
                <RiftHeader balance={this.state.consolidatedBalance}
                            fastForward={(days) => this.handleFastForward(days)}/>
                <hr/>
                <div className="container mx-auto m-2 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {this.state.networks.map((network, index) => {
                        return (
                            <RiftInvestment key={index} initialBalance={network.balance} interestRate={network.rate}
                                            network={network.name}
                                            onBalanceUpdate={(amount) => this.handleBalanceUpdate(amount)}
                                            fastforward={this.state.ffDays}
                                            onFastforwardComplete={() => this.onFastforwardComplete()}/>
                        )
                    })}
                </div>
            </div>

        )
    }
}

export default App;
