import React,{Component} from 'react';
import {Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import card1 from '../images/card1.jpg';

class DashboardScene extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <Text>Dashboard - native</Text>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: '../images/Logo.png'}} />
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={card1} style={{height: 200, width: null,flex: 1}} />
                        </CardItem>
                    </Card>
                </Content>

            </Container>
        );
    }
}

export default DashboardScene;