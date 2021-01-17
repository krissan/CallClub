import React, { useState } from 'react';
import { View } from 'react-native';


import Card from '../../components/Misc/Card';
import HeaderText from '../../components/AppTexts/HeaderText';
import StdText from '../../components/AppTexts/StdText';
import PtText from '../../components/AppTexts/PtText';
import CardSection from '../../components/Misc/CardSection';
import FormSection from '../../components/Misc/FormSection';
import FooterButton from '../../components/Buttons/FooterButton';

import colors from '../../config/colors';


function IssuePreview({closePreview, pages=[{content:'["f", [["h", "Summary"], ["c", [["s", "What is the Vacant Homes Tax?"], ["p", "1.25%  tax of the assessed value for a property  that sits empty for more than six months of the year"], ["p", "Revenue on acquiring land and resources for non profit and co-op housing, purchase a single room occupancy building to ensure it provided affordable housing, expand shelter capacity, help create renter advocacy services, and much more"]]], ["c", [["s","How will the tax affect Torontonians"], ["p","Toronto has about three times as many homes as Vancouver and so it’s estimated Toronto could collect upwards of $120 million a year from this tax that it could put towards affordable housing initiatives and other city services"]]]]]'},{content:'["c", [["h", "Summary"], ["c", [["s", "What is the Vacant Homes Tax?"], ["p", "1.25%  tax of the assessed value for a property  that sits empty for more than six months of the year"], ["p", "Revenue on acquiring land and resources for non profit and co-op housing, purchase a single room occupancy building to ensure it provided affordable housing, expand shelter capacity, help create renter advocacy services, and much more"]]], ["c", [["s","How will the tax affect Torontonians"], ["p","Toronto has about three times as many homes as Vancouver and so it’s estimated Toronto could collect upwards of $120 million a year from this tax that it could put towards affordable housing initiatives and other city services"]]]]]'}], title="pickle"}) {
    //current page
    const [page, setPage] = useState(1);

    //move this to providers along with issuescreens
    const parsefun = (obj, index) => {
        //depending on key format associated value differently
        switch (obj[0]) {
            case "c":
                return(<CardSection key={index}>{
                    obj[1].map((val, subIndex)=>{
                        return parsefun(val, subIndex)
                    })
                    }</CardSection>)
            case "f":
                return(<FormSection key={index}>{
                    obj[1].map((val, subIndex)=>{
                        return parsefun(val, subIndex)
                    })
                    }</FormSection>)
            case "h":
                return(<HeaderText key={index} txtColor={colors.text}>{obj[1]}</HeaderText>)
            case "s":
                return(<StdText key={index}>{obj[1]}</StdText>)
            case "p":
                return(<PtText key={index}>{obj[1]}</PtText>)
        }
    }

    //sets page value to passed number
    const handler = (p) => {
        setPage(p);
    }

    return (
        <View style={{flexDirection:"column", flex: 1}}>
            <View style={{flex:1}}>
                <Card title={title} pages={pages} page={page} pageChange={handler}>
                    <View style={{flex:1}}>
                        {/*If Issue Content exists for page, parse and display it*/}
                        {pages[page-1]["content"] != '' ? parsefun(JSON.parse(pages[page-1]["content"]),0):<></>}
                    </View>
                </Card>
            </View>
            {/*Close Preview*/}
            <FooterButton title=" Close Preview" onPress={closePreview}></FooterButton>
        </View>
    );
}

export default IssuePreview;