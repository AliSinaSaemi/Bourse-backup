import React, { Component } from 'react';
import Header from "./components/sections/Header";
import Sidebar from "./components/sections/Sidebar";
import { Route , Switch } from "react-router-dom";
import axios from 'axios';
import './styles/css/bootstrap.min.css';
import './styles/css/bootstrap-rtl.min.css';
import "./index.css";
import "./styles/app-js.js";



// Components
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Product from "./components/pages/Product";
import NoMatch from "./components/pages/NoMatch";
import Login from "./components/pages/Login";
import UserPanel from "./components/pages/UserPanel";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated : true
        }
    }

    componentDidMount() {
        let apiToken = localStorage.getItem('api_token');
        if(apiToken !== null) {
            axios.get(`http://roocket.org/api/user?api_token=${apiToken}`)
                .then(response => {
                    this.setState({ isAuthenticated: true})
                })
                .catch(error => {
                    this.setState({ isAuthenticated: false})
                })
        } else {
            this.setState({ isAuthenticated: false})
        }
    }

    handleLogout() {
        localStorage.removeItem('api_token');
        this.setState({ isAuthenticated : false});
    }

    handleLogin() {
        this.setState({ isAuthenticated : true});
    }
    render() {
        return (
            <div>
             
                <Header auth={this.state.isAuthenticated} logout={this.handleLogout.bind(this)}/>
                <div>
                   
                        <Switch>
                            <Route path="/" exact={true} component={Home}/>
                            <Route path="/product/:id" component={Product}/>
                            <Route path="/about" component={About}/>
                            <Route path="/contact" component={Contact}/>
                            <PrivateRoute path="/user-panel" component={UserPanel} auth={this.state.isAuthenticated}/>
                            <Route path="/login" render={(props) => <Login {...props} auth={this.state.isAuthenticated} login={this.handleLogin.bind(this)}/>}/>
                            <Route component={NoMatch}/>
                        </Switch>
            
                </div>

              
            </div>
               
        );
    }
}

export default App;
