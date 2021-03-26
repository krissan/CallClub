import React, {useState, useEffect} from 'react';
import { Button, View } from 'react-native';
import Pdf from 'react-native-pdf';

import StdButton from '../../components/Buttons/StdButton';
import FooterButton from '../../components/Buttons/FooterButton';
import LoadPage from '../../components/Misc/LoadPage';

import useAuth from '../../provider/auth/useAuth';
import useIssue from '../../provider/issue/issue';
import useCta from '../../provider/cta';
import routes from '../../navigation/routes';
import Issues from '../Temp/Test';

function IssueScreen({navigation, pages=[{content:'["f", [["h", "Summary"], ["c", [["s", "What is the Vacant Homes Tax?"], ["p", "1.25%  tax of the assessed value for a property  that sits empty for more than six months of the year"], ["p", "Revenue on acquiring land and resources for non profit and co-op housing, purchase a single room occupancy building to ensure it provided affordable housing, expand shelter capacity, help create renter advocacy services, and much more"]]], ["c", [["s","How will the tax affect Torontonians"], ["ctaC",'+JSON.stringify({"id": "4321","level": "Mayor"})+']]]]]'},{content:'["c", [["h", "Summary"], ["c", [["s", "What is the Vacant Homes Tax?"], ["p", "1.25%  tax of the assessed value for a property  that sits empty for more than six months of the year"], ["p", "Revenue on acquiring land and resources for non profit and co-op housing, purchase a single room occupancy building to ensure it provided affordable housing, expand shelter capacity, help create renter advocacy services, and much more"]]], ["c", [["s","How will the tax affect Torontonians"], ["p","Toronto has about three times as many homes as Vancouver and so it’s estimated Toronto could collect upwards of $120 million a year from this tax that it could put towards affordable housing initiatives and other city services"]]]]]'}], title="pickle"}) {
    //current page of issue
    const [page, setPage] = useState(1);
    const auth = useAuth();
    const [loading, setLoading] = useState(false);
    const issue = useIssue();
    const cta = useCta();

    //grab issue on load
    useEffect(() => {
        const loadIssue = async() => {
            setLoading(true);
            await issue.getIssue(20);
            console.log(issue.issue.pdfLink);
            setLoading(false);
        }

        loadIssue();
    }, []);

    //refresh page on content change
/*    useEffect(() => {
        pages ? setLoading(false) : setLoading(true)
    }, [pages]);
*/
   /* const getIssue = async() => {
        await issue.getIssue(20);
    }

    const createIssue = async() => {
        await issue.createIssue("Vacant Homes Tax",
        'http://www.africau.edu/images/default/sample.pdf',
        '2020-01-01','2020-01-01');
    }*/

    //sets page value to passed number
    const handler = (p) => {
        setPage(p);
    }

    return  (!loading ? 
            <>
            {/*<StdButton title="setIssueCTA" onPress={()=>issue.setIssueCTA(20,14)}/>
            <StdButton title="getIssue" onPress={()=>getIssue()}/>
            <StdButton title="createIssue" onPress={()=>createIssue("vht","http://www.africau.edu/images/default/sample.pdf","2020-01-02","2020-01-02")}/>
            <StdButton title="search CTA" onPress={()=>cta.searchCTA("ap")}/>
            <StdButton title="grab CTA" onPress={()=>cta.grabCTA("2")}/>
            <StdButton title="create CTA" onPress={()=>cta.createCta("fellow","petition","borboun",'2021-11-01','2021-03-01')}/>
            <StdButton title="CTA Status update" onPress={()=>cta.statusUpdate("1","NOT_DONE")}/>
    <StdButton title="Get status" onPress={()=>{cta.getStatus("1")}}/>*/}
            {issue.issue.pdfLink &&
            <Pdf
                source={"http://www.africau.edu/images/default/sample.pdf"}
                onLoadComplete={(numberOfPages,filePath)=>{
                    console.log(`number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page,numberOfPages)=>{
                    console.log(`current page: ${page}`);
                }}
                onError={(error)=>{
                    console.log(error);
                }}
                onPressLink={(uri)=>{
                    console.log(`Link pressed: ${uri}`)
                }}
            />}

            {/*<Card title={title} pages={pages} page={page} pageChange={handler}>
                <View style={{flex:1}}>
                    {pages[page-1]["content"] != '' ? issue.parsefun(JSON.parse(pages[page-1]["content"]),0):<></>}
                </View>
    </Card>*/}
            

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