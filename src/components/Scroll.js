import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: "scroll", borderTop: "5px solid black", height: "800px"}}>
            {props.children}
        </div>
    );
}

/*
class Scroll extends Component{
    render() {
        return (
            <div style={{overflowY: "scroll", borderTop: "5px solid black", height: "800px"}}>
                {this.props.children}
            </div>
        );
    }
}
*/

export default Scroll;