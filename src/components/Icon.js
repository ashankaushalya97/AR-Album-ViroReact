import React,{Component} from 'react';
// import * as Font from 'expo-font';
// import { createIconSetFromIcoMoon } from '@expo/vector-icons';
// import { Icon } from 'galio-framework';
import {Text,View} from 'react-native';

// import GalioConfig from '../../assets/fonts/galioExtra.json';

// const GalioExtra = require('../../assets/fonts/galioExtra.ttf');
// const IconGalioExtra = createIconSetFromIcoMoon(GalioConfig, 'GalioExtra');

export default class Icon extends Component {
  // state = {
  //   fontLoaded: false,
  // }

  // async componentDidMount() {
  //   // await Font.loadAsync({ GalioExtra: GalioExtra });
  //   // this.setState({ fontLoaded: true });
  // }

  render() {
    // const { name, family, ...rest } = this.props;
    
    // if (name && family && this.state.fontLoaded) {
    //   if (family === 'GalioExtra') {
    //     return <IconGalioExtra name={name} family={family} {...rest} />;
    //   }
    //   return <Icon name={name} family={family} {...rest} />;
    // }

    return (
      <View>
        <Text>ICONS</Text>
      </View>
    );
  }
}
