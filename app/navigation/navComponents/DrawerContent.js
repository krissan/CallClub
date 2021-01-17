import * as React from 'react';
import { View } from 'react-native';



import styles from '../../components/Layout/styles';
import LinkText from '../../components/AppTexts/LinkText';
import routes from '../routes';

export default function DrawerContent({navigation}){
    return(<View style={[styles.content]}>
        <LinkText style={{paddingVertical:5}} onPress={()=>navigation.navigate(routes.Login)}>Login</LinkText>
        <LinkText style={{paddingVertical:5}} onPress={()=>navigation.navigate(routes.Issues)}>Issue</LinkText>
        <LinkText style={{paddingVertical:5}} onPress={()=>navigation.navigate(routes.Representatives)}>Representative</LinkText>
    </View>)
}