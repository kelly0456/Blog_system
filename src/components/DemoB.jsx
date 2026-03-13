import { Component } from "react";

class DemoB extends Component {
    constructor(props)
    {
        super(props)

        this.state = {

        }
        console.log("Constructor method in Demo B")
    }
    //Mounting Phase
    static getDerivedStateFromProps(state, props)
    {
        console.log("getDerivedStateFromProps in Demo B")
        return null
    }
    componentDidMount()
    {
        console.log("componentDidMount in Demo B")
    }

    //Update Phase in a Component LifeCycle
    shouldComponentUpdate(state, props)
    {
        console.log("shouldComponentUpdate in Demo B")
        return true
    }
    getSnapshotBeforeUpdate()
    {
        console.log("getSnapshotBeforeUpdate in Demo B")
        return null
    }
    componentDidUpdate()
    {
        console.log("componentDidUpdate in Demo B")
    }
    
    componentWillUnmount()
    {
        console.log("componentWillUnmount in Demo B")
    }

    render() 
    {
        console.log("Render method in Demo B")
        return(
            <div>
                <h1>Test Class Component in Demo B</h1>
            </div>
        )
    }

}

export default DemoB