import React,{Component} from 'react';
import { View ,Text,StyleSheet,Image,Animated} from 'react-native';
import LottieView from 'lottie-react-native';

import logo from "../images/Logo.png";
import { block } from 'react-native-reanimated';
// import { Actions } from 'react-native-router-flux';

const switchToAuth = () => {
    // Actions.auth();
}

class LoadingScene extends Component{

    state = {
        LogoText: new Animated.Value(0),
        loadingSpinner:false,
    }

    componentDidMount(){
        const {LogoText} = this.state;
        Animated.parallel([
            Animated.timing(LogoText,{
                toValue:1,
                duration:1500,
                useNativeDriver:false,
            }),
        ]).start(() => {
            this.setState({
                loadingSpinner:true,
            });
            setTimeout(switchToAuth,900);
        });
    }

    render(){
        return (
            <View style={styles.container}>
                    <LottieView style={styles.logoLottie} source={require('../images/5459-camera.json')} autoPlay loop />
                <View>
                    <Animated.View style={{opacity: this.state.LogoText}}>
                        <Text style={styles.logoText}>Enchanted Moments</Text>
                    </Animated.View>
                </View>
                
            </View>
        );
    }
}

export default LoadingScene;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#EBEDEF',
        justifyContent:'center',
        alignItems:'center',
    },

    logoText: {
        fontFamily:"DancingScript-Bold",
        color: '#FFFFFF',
        fontSize: 30,
        marginTop: 29.1,
        fontWeight:'500',
        paddingBottom:10,
        textShadowColor:"#000000",
        textShadowOffset: {width:6, height:6},
        textShadowRadius:10,
    },  
    logoLottie: {
        // width:200,
        // height:200,
        
    },
});