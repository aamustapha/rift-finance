const {Component} = require("react");

class RiftTimelapse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ffDaysCount: 365
        }
    }

    updateState (patches) {
        this.setState({...this.state, ...patches})
    }

    updateFfDaysCount (e) {
        this.updateState({ ffDaysCount: e.target.value })
    }

    commit () {
        this.props.fastForward(this.state.ffDaysCount)
    }

    render() {
        return (
            <div className="inline my-2">
                <label htmlFor="ff-days-count" className="block text-center">Days to progress</label>

                <input className="w-24 border-2 rounded-l py-2 px-3 border-blue-600" id="ff-days-count" type="number" value={this.state.ffDaysCount} onChange={this.updateFfDaysCount.bind(this)} />
                <button className="rounded-r border-2 border-blue-600 bg-blue-600 text-white px-3 py-2 " onClick={this.commit.bind(this)}>Enter</button>
            </div>
        )
    }
}

export default RiftTimelapse