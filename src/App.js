import {Component} from "react";
import RiftHeader from "./header";
import RiftInvestment from "./investment";

class App extends Component {
    render() {
        return (
            <div>
                <RiftHeader balance={500}/>
                <hr/>
                <div className="container mx-auto m-2 grid md:grid-cols-2 lg:grid-cols-3 ">
                    <RiftInvestment initialBalance={100} interestRate={4} network="Compound" />
                    <RiftInvestment initialBalance={100} interestRate={4} network="Aave" />
                    <RiftInvestment initialBalance={100} interestRate={4} network="Curve" />
                </div>
            </div>

        )
    }
}

export default App;
