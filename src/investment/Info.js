const {Component} = require("react");

class RiftInfo extends Component {
    render() {
        return (
            <>
                {this.props.information.map( (info, index) => {
                    return (
                        <div className="flex justify-between my-4" key={index}>
                            <b>{info.label}</b>
                            <span>{info.value}</span>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default RiftInfo