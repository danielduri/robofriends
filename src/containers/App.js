import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"
import ErrorBoundary from "../components/ErrorBoundary";
import Scroll from "../components/Scroll"
import "./App.css"

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            robotList: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {return response.json()})
            .then(users => {this.setState({robotList : users})}
        )
    }

    //ARROW FUNCTION NOTATION -> grab this
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value } )
    }

    render(){

        const { robotList, searchField } = this.state;

        const filteredRobots = robotList.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if (robotList.length === 0){
            return (
                <div className="tc">
                    <h1 className={"f1"}>RoboFriends</h1>
                    <h1>Loading...</h1>
                </div>
            )
        }else{
            return (
                <div className="tc">
                    <h1 className={"f1"}>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots ={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }

    }
}

export default App;