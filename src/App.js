import {Component} from "react";
import RiftHeader from "./header";

class App extends Component{
  render() {
    return (
        <div>
          <RiftHeader balance={500} />
            <hr/>
        </div>

    )
  }
}

export default App;
