import * as React from 'react';
import { View } from 'react-native';
import useAuth from '../../provider/auth/useAuth';

import LinkText from '../../components/AppTexts/LinkText';

import styles from '../../components/Layout/styles';
import routes from '../routes';

export default function DrawerContent({navigation}){
    const auth = useAuth();

    return(<View style={[styles.content]}>
        {auth.user ?
            <LinkText style={{paddingVertical:5}} onPress={()=>navigation.push(routes.Account)}>Account</LinkText>
            :
            <LinkText style={{paddingVertical:5}} onPress={()=>navigation.push(routes.Login)}>Login</LinkText>
        }
        <LinkText style={{paddingVertical:5}} onPress={()=>navigation.push(routes.Issues)}>Issue</LinkText>
        <LinkText style={{paddingVertical:5}} onPress={()=>navigation.push(routes.Representatives)}>Representative</LinkText>
    </View>)
}