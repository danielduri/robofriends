import React, {Component} from "react";

class Card extends Component {

    render(){
        const { name, email, id } = this.props;
        return (
            <div className="bg-light-green dib br3 grow ma2 bw1 pa3 shadow-3 tc">
                <img src={`https://robohash.org/${id}?200x200`} alt="Robopic"/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        )
    }

}
export default Card;