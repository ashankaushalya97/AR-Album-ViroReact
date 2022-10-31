import React,{Component} from 'react';
import {View,Text} from 'react-native';
// import {Router,Scene,Stack} from 'react-native-router-flux';
import {NativeRouter,Route,Link} from 'react-router-native';

// import LoadingScene from './scenes/LoadingScene';
import AuthScene from './scenes/AuthScene';
// import Dashboard from './scenes/DashboardScene';
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
