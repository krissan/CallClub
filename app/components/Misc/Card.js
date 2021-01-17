import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'

import StdText from '../AppTexts/StdText';
import HeaderText from '../AppTexts/HeaderText';
import PageTab from '../Buttons/PageTab';

import colors from '../../config/colors';
import global from '../../config/global';
import styles from './styles';

function Card({ children, title, pages=[], page, pageChange  }) {
    return (
        <View style={{flex:1, paddingTop: 10, justifyContent:"flex-start"}}>
            {/*Header*/}
            <View style={{justifyContent:"space-between",flexDirection:"row", paddingBottom:10, marginHorizontal: global.screenPad}}>
                {/*Title*/}
                <HeaderText style={{flex:2 }} txtColor={colors.text} numberOfLines={1}>{title}</HeaderText>
                {/*Page Tab Navigation*/}
                <View style={{flex:1, justifyContent:"space-between", alignItems:"center", flexDirection:"row"}}>
                        {pages.length>1 && pages.map((data, index) => { 
                            return (
                                <View key={index} style={{flexDirection:"row", marginHorizontal:1, fontSize:12, flex:1}}>
                                    <PageTab onPress={()=>pageChange(index+1)} bgColor={(index+1==page) ? colors.primary : colors.inert}>
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
                {pages.length>1  && 
                        <View style={{justifyContent:"center", alignItems:"center", flexDirection:"row", marginVertical:20}}>
                            <TouchableOpacity onPress={()=>pageChange(page-1)} style={{width: 30, height: 30, justifyContent: "center", alignItems: "center", flexDirection:"row"}}>{!(page == 1) && <FontAwesome5 name="caret-left" size={30} color={colors.primary}/>}</TouchableOpacity>
                            <StdText>{page} of {pages.length}</StdText>
                            <TouchableOpacity onPress={()=>pageChange(page+1)} style={{width: 30, height: 30, justifyContent: "center", alignItems: "center", flexDirection:"row"}}>{!(page == pages.length) && <FontAwesome5 name="caret-right" size={30} color={colors.primary}/>}</TouchableOpacity>
                        </View>
                    }
            </View>
        </View>
    );
}

export default Card;