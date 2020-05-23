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
            // <Router>
            //     <Scene key="root">
            //         <Scene key="loading" component={LoadingScene} initial={true} hideNavBar={true} ></Scene>
            //         <Scene key="auth" component={AuthScene} hideNavBar={true} direction='vertical'></Scene>
            //         <Scene key="dashboard" component={Dashboard} hideNavBar={true}></Scene>
            //         <Scene key="home" component={Home} hideNavBar={true}></Scene>
            //     </Scene>
            // </Router>
            <NativeRouter>
                <Route exact path="/" component={AuthScene} />
                <Route  path="/home" component={Home} />
                <Route  path="/album" component={Album} />
            </NativeRouter>
        );
    }
} 

export default App;