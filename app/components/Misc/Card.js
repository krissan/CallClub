import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'

import StdText from '../AppTexts/StdText';
import HeaderText from '../AppTexts/HeaderText';

import colors from '../../config/colors';
import styles from './styles';
import PageTab from '../Buttons/PageTab';

function Card({ children, title, pages, currPage  }) {

    return (
        <View style={{flex:1, paddingTop: 10, justifyContent:"flex-start"}}>
            {/*Header*/}
            <View style={{justifyContent:"space-between",flexDirection:"row", paddingBottom:10}}>
                {/*Title*/}
                <HeaderText style={{flex:2 }} txtColor={colors.text} numberOfLines={1}>{title}</HeaderText>
                {/*Page Tab Navigation*/}
                <View style={{flex:1, justifyContent:"space-between", alignItems:"center", flexDirection:"row"}}>
                        {pages && pages.map((data) => { 
                            return (
                                <View key={data.id} style={{flexDirection:"row", marginHorizontal:1, fontSize:12, flex:1}}>
                                    <PageTab onPress={()=>{console.log("hello")}} bgColor={(data.id==currPage) ? colors.primary : colors.inert}>
                                    </PageTab>
                                </View>
                                )
                        })}
                </View>
            </View>
            <View style={[styles.card, pages && {flex:1, borderBottomLeftRadius:0, borderBottomRightRadius:0}]}>
                {/* Card Content */}
                {children}
                {/* If multiple pages display current page and navigation arrows */}
                {pages && 
                    <View style={{alignItems: "center", justifyContent:"flex-end", marginVertical:20}}>
                        <View style={{justifyContent:"center", alignItems:"center", flexDirection:"row"}}>
                            <TouchableOpacity style={{width: 30, height: 30, justifyContent: "center", alignItems: "center", flexDirection:"row"}}>{!(pages && currPage == 1) && <FontAwesome5 name="caret-left" size={30} color={colors.primary}/>}</TouchableOpacity>
                            <StdText>{currPage} of {pages.length}</StdText>
                            <TouchableOpacity style={{width: 30, height: 30, justifyContent: "center", alignItems: "center", flexDirection:"row"}}>{!(pages && currPage == pages.length) && <FontAwesome5 name="caret-right" size={30} color={colors.primary}/>}</TouchableOpacity>
                        </View>
                    </View>
                    }
            </View>
        </View>
    );
}

export default Card;