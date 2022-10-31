import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {NativeRouter,Route,Link} from 'react-router-native';

import AuthScene from './scenes/AuthScene';
import Home from './scenes/Home';
import Album from '../App';

class App extends Component {
    render() {
        return (
            <NativeRouter>
                <Route exact path="/" component={AuthScene} />
                <Route  path="/home" component={Home} />
                <Route  path="/album" component={Album} />
            </NativeRouter>
        );
    }
} 

export default App;
