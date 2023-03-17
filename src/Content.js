import React from "react";
class Content extends React.Component{
    constructor(props){
        super(props);
        this.state={clock:0};
    }
    componentDidMount(){
        this.tic=setInterval(this.ticker,1000);
    }
    ticker=()=>{
        this.setState({
            clock:new Date()-this.props.clock
        })
    }
render(){
    var clock=Math.round(this.state.clock/1000);
    return(
        <div className="contentDiv"><p>The watch time is</p>
        <span>{clock}</span>
        <p>seconds</p></div>
        
    );
}
}

export default Content;