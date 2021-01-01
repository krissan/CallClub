import React from 'react';
import { View } from 'react-native';


import Card from '../components/Misc/Card';
import HeaderText from '../components/AppTexts/HeaderText';
import StdText from '../components/AppTexts/StdText';
import PtText from '../components/AppTexts/PtText';

import colors from '../config/colors';
import CardSection from '../components/Misc/CardSection';

function IssueScreen({navigation}) {
    var pageTest = [{id:1},{id:2},{id:3}];

    return (
        <Card title="Vacant Homes Tax" pages={pageTest} currPage={1}>
            <View style={{flex:1}}>
                {/*Issue Content*/}
                <CardSection>
                    <HeaderText txtColor={colors.text}>Summary</HeaderText>
                    <CardSection>
                        <StdText>What is the Vacant Homes Tax?</StdText>
                        <PtText>1.25%  tax of the assessed value for a property  that sits empty for more than six months of the year</PtText>
                        <PtText>Revenue on acquiring land and resources for non profit and co-op housing, purchase a single room occupancy building to ensure it provided affordable housing, expand shelter capacity, help create renter advocacy services, and much more</PtText>
                    </CardSection>
                    <CardSection>
                        <StdText>How will the tax affect Torontonians?</StdText>
                        <PtText>Toronto has about three times as many homes as Vancouver and so it’s estimated Toronto could collect upwards of $120 million a year from this tax that it could put towards affordable housing initiatives and other city services</PtText>
                    </CardSection>
                </CardSection>
            </View>
        </Card>
    );
}

export default IssueScreen;