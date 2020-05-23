import React,{Component} from 'react';
import {View,Text,StyleSheet,ImageBackground,Dimensions} from 'react-native';
import {Form,Item,Input,Body,CheckBox, Button} from 'native-base';
// import {Actions} from 'react-native-router-flux';
// import {NativeRouter,Route,Link} from 'react-router-native';
import {useHistory} from 'react-router-dom'

const { width } = Dimensions.get('screen');


function AuthScene () {
    const history = useHistory();
    
    const formSubmit = () => {
        history.push("/home");
    }

        return (
            
            <View style={styles.container}>
                <ImageBackground source={require('../images/b1.jpg')} style={{flex:1, resizeMode: 'stretch',width:width,alignContent:'center',justifyContent:'center',alignItems:'center'}}>

                {/* <View style={styles.top}></View> */}
                <View style={styles.middle}>
                    <Text style={styles.topTitle}>You are ready to go</Text>
                    <View style={styles.formArea}>
                        <Text style={[styles.textContainer,styles.signin]}>Sign in</Text>
                    
                        <Form>
                            <Item style={styles.formItems}>
                                <Input placeholder="Username" style={styles.Input} />
                            </Item>
                            <Item style={styles.formItems}>
                                <Input placeholder="Password" style={styles.Input} />
                            </Item>
                            <View style={styles.loginAs}>
                                <Text style={styles.loginText}>Login as</Text>
                                <CheckBox checked={true} />

                                <Body>
                                    <Text style={styles.cboxText}>Admin</Text>
                                </Body>
                                <CheckBox checked={false} />
                                <Body>
                                    <Text style={styles.cboxText}>User</Text>
                                </Body>

                            </View>
                            <View style={styles.Button}>
                                    <Button block style={styles.mainBtn} onPress={formSubmit} >
                                        <Text style={styles.btnText}>Submit</Text>
                                    </Button>
                              
                            </View>
                        </Form>

                    </View>
                </View>
                </ImageBackground>
                <View style={styles.bottom}></View>
            </View>
        );
    
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        position:'relative',
    },
    top: {
        position:'relative',
        backgroundColor: '#4FC3F7',
        paddingRight:12.7,
        paddingLeft: 12.7,
        height: 250,
    },
    middle: {
        width: '100%',
        height: '100%',
        flex:1,
        position: 'absolute',
        zIndex: 2,
        backgroundColor: 'transparent',
        paddingLeft: 26.3,
        paddingRight: 26.3,
    },
    textContainer: {
        color: '#fcfdff',
        fontFamily: 'GoogleSans-Bold',
        fontSize: 24,
        marginBottom: 30,
        position: 'relative',
        top: '20%',
        alignSelf: 'center',
    },
    formArea: {
        alignSelf: 'center',
        width: '100%',
        backgroundColor: '#ffffff',
        top: '20%',
        paddingBottom: 40,
        borderRadius: 20,
    },
    signin: {
        top: 0,
        color: '#2d3057',
        margin: 15,
    },
    formItems: {
        marginTop: 15,
        borderBottomColor: '#2d3057',
        paddingRight:5,
        marginRight:10
    },
    Input: {
        fontFamily: 'Poppins-Bold',
        fontSize:12
    },
    loginAs: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        paddingLeft: 46.6,
    },
    loginText: {
        color: '#2d3057',
        fontSize: 10,
        fontFamily: 'GoogleSans-Bold',
        fontWeight: 'bold',
    },
    cboxText: {
        fontFamily: 'GoogleSans-Medium',
        fontSize: 10,
    },
    Button: {
        padding: 30.8,
        borderRadius: 5,
    },
    mainBtn: {
        backgroundColor: '#4097F4',
    },
    btnText: {
        color: '#ffffff',
        fontFamily: 'GoogleSans-Bold',
        fontSize: 16,
    },
    topTitle: {
        color: '#ffffff',
        fontFamily: 'GoogleSans-Bold',
        fontSize: 24,
        marginBottom: 30,
        position: 'relative',
        top: '20%',
        alignSelf: 'center',
        textShadowColor:"#000000",
        textShadowOffset: {width:2, height:2},
        textShadowRadius:10,
    }

});

export default AuthScene;