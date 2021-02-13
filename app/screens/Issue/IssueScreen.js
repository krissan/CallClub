import React, {useState, useEffect} from 'react';
import { View } from 'react-native';

import Card from '../../components/Misc/Card';

import FooterButton from '../../components/Buttons/FooterButton';
import LoadPage from '../../components/Misc/LoadPage';

import useAuth from '../../provider/auth/useAuth';
import useIssue from '../../provider/issue';
import routes from '../../navigation/routes';

function IssueScreen({navigation, pages=[{content:'["f", [["h", "Summary"], ["c", [["s", "What is the Vacant Homes Tax?"], ["p", "1.25%  tax of the assessed value for a property  that sits empty for more than six months of the year"], ["p", "Revenue on acquiring land and resources for non profit and co-op housing, purchase a single room occupancy building to ensure it provided affordable housing, expand shelter capacity, help create renter advocacy services, and much more"]]], ["c", [["s","How will the tax affect Torontonians"], ["ctaC",'+JSON.stringify({"id": "4321","level": "Mayor"})+']]]]]'},{content:'["c", [["h", "Summary"], ["c", [["s", "What is the Vacant Homes Tax?"], ["p", "1.25%  tax of the assessed value for a property  that sits empty for more than six months of the year"], ["p", "Revenue on acquiring land and resources for non profit and co-op housing, purchase a single room occupancy building to ensure it provided affordable housing, expand shelter capacity, help create renter advocacy services, and much more"]]], ["c", [["s","How will the tax affect Torontonians"], ["p","Toronto has about three times as many homes as Vancouver and so it’s estimated Toronto could collect upwards of $120 million a year from this tax that it could put towards affordable housing initiatives and other city services"]]]]]'}], title="pickle"}) {
    //current page of issue
    const [page, setPage] = useState(1);
    const auth = useAuth();
    const [loading, setLoading] = useState(false);
    const issue = useIssue();

    //grab issue on load
    useEffect(() => {
        issue.getIssue();
    }, []);

    //refresh page on content change
    useEffect(() => {
        pages ? setLoading(false) : setLoading(true)
    }, [pages]);

    //sets page value to passed number
    const handler = (p) => {
        setPage(p);
    }

    return  (!loading ? 
            <>
            <Card title={title} pages={pages} page={page} pageChange={handler}>
                <View style={{flex:1}}>
                    {/*Issue Content*/}
                    {pages[page-1]["content"] != '' ? issue.parsefun(JSON.parse(pages[page-1]["content"]),0):<></>}
                </View>
            </Card>
            {/*If user is logged on allows editing of issue*/}
            {auth.user && 
                <FooterButton title="Edit" onPress={()=>{navigation.navigate(routes.IssueEditor, {
                    //navigation params
                        pages: pages,
                        title: title
                    } 
                )}} style={{marginVertical:0, borderRadius:0}}/>
            }
            </>
            :
            <LoadPage></LoadPage>)
            
       
}

export default IssueScreen;