import { Component } from "react";
import DemoB from "./DemoB";

class DemoA extends Component {
    constructor(props)
    {
        super(props)

        this.state = {
            name: "Victor"
        }
        console.log("Constructor method in Demo A")
    }
    //Mounting Phase
    static getDerivedStateFromProps(state, props)
    {
        console.log("getDerivedStateFromProps in Demo A")
        return null
    }
    componentDidMount()
    {
        console.log("componentDidMount in Demo A")
    }

    //Update Phase in a Component LifeCycle
    shouldComponentUpdate(state, props)
    {
        console.log("shouldComponentUpdate in Demo A")
        return true
    }
    getSnapshotBeforeUpdate()
    {
        console.log("getSnapshotBeforeUpdate in Demo A")
        return null
    }
    componentDidUpdate()
    {
        console.log("componentDidUpdate in Demo A")
    }

    changeState = () =>{
        this.setState({
            name: "James"
        })
    }

    //Mounting Phase
    componentWillUnmount()
    {
        console.log("componentWillUnmount in Demo A")
    }

    render() 
    {
        console.log("Render method in Demo A")
        return(
            <div>
                <h1>Test Class Component</h1>
                <button onClick={this.changeState}>Change State</button>
                <DemoB />
            </div>
        )
    }

}

export default DemoA