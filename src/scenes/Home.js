import React from 'react';
import { StyleSheet, Dimensions, ScrollView,ImageBackground ,Image} from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import {Icon ,Header,Container,Body, View} from 'native-base';
import Product from '../components/Product';
import { useHistory } from 'react-router-dom';

const { width } = Dimensions.get('screen');
import products from '../constants/products';

export default function Home () {

  const history = useHistory();

  const navigateAR = () =>{
    history.push("/album");
  }

  const renderProducts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
        <Block flex>
          <Product product={products[0]} horizontal click={navigateAR} />
          <Product product={products[3]} horizontal />
          <Product product={products[4]} full />
        </Block>
      </ScrollView>
    )
  }

    return (
      <Block flex center style={styles.home}>
        
        <ImageBackground source={require('../images/b1.jpg')} style={{flex:1, resizeMode: 'stretch',width:width,alignContent:'center',justifyContent:'center',alignItems:'center'}}>
          
              <Text size={26} style={styles.tabTitle, {fontFamily: 'GoogleSans-Bold',paddingTop:10,color: '#ffffff', textShadowColor:"#000000",textShadowOffset: {width:2, height:2},textShadowRadius:10, }} > 
              <Icon name="home" style={{color:'#ffffff'}} /> Home
              </Text>
        
        <Input
        right
        color="black"
        style={styles.search}
        placeholder="What are you looking for?"
        
        /> 

      {renderProducts()}
      </ImageBackground>
      </Block>
    );
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 5,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.50,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300'
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    paddingTop:10
  },
});
