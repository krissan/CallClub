import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import * as Yup from 'yup';
import { Field, FieldArray, Formik, getIn } from "formik";

import Card from '../../components/Misc/Card';
import FormSection from '../../components/Misc/FormSection';
import AppFormField from '../../components/Inputs/Form/AppFormField'
import SubmitButton from '../../components/Inputs/Form/SubmitButton'
import BoxTextInput from '../../components/Inputs/BoxTextInput'
import IssuePreview from './IssuePreview';
import FooterButton from '../../components/Buttons/FooterButton';
import RoundPlusButton from '../../components/Buttons/RoundPlusButton';
import CTAModal from './CTAModal';
import PageInput from '../../components/Buttons/PageInput';

import useIssue from '../../provider/issue';

{/*Page input form field*/}
const PageInputField = ({ field, form: { values, errors, handleBlur, handleChange } }) => {
    const name = field.name;
    const errorMessage = getIn(errors, name);
    const index = name.substring(
        name.lastIndexOf("[") + 1, 
        name.lastIndexOf("]")
    );

    return (
        <BoxTextInput
            autoCapitalize="none"
            autoCorrect={false}
            error={errorMessage}
            onBlur={handleBlur(name)} 
            onChangeText={handleChange(name)} 
            value={getIn(values,name)}
            label={"Page "+ (parseInt(index,10)+1)}
            style={{height:100}}
            multiline={true}
        />
    );
  };

const IssueEditorScreen = ({route, navigation}) => {
    const [preview, setPreview] = useState(false);
    const [ctaModal, setCtaModal] = useState(false);
    const issue = useIssue();

    const { pages, title } = route.params;

    {/*Call To Action Form Validation Schema*/}
    const validationSchema = Yup.object().shape({
        title: Yup.string().required().label("Title"),
        //Array of pages
        pages:Yup.array().of(
            Yup.object().shape({
                content: Yup.string().required().label("Content")
            })
        )
    });

    /*convert to use appform instead of formik*/
    /*todo*/
    return (
            <Formik initialValues={{ title:title, pages: pages}} validationSchema={validationSchema} onSubmit={(values)=>{issue.createIssue({...values})}}>
                {({ errors, values, touched, setFieldTouched, handleChange }) => (
                    //if not previewing or creating CTA
                    (!preview && !ctaModal) ?
                    <View style={{flex:1}}>
                        <Card title="Issue Creator">
                            <FormSection>
                                <ScrollView>
                                    {/*CTA Title*/}
                                    <AppFormField
                                        label="Title"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        keyboardType="default"
                                        name="title"
                                        value={values.title}
                                    />
                                    
                                    <RoundPlusButton title="Add CTA" onPress={()=>{setCtaModal(true)}}/>
                                    {/* List of page inputs 
                                        Move to seperate component*/}
                                    <FieldArray name="pages">
                                        {({push, remove}) => { 
                                            return(
                                                <View>
                                                    {values.pages.map((p, index) => {
                                                        return (
                                                            <View key={index}>
                                                                <PageInput index={index} delAction={() => remove(index)}>
                                                                    <Field name={`pages[${index}].content`} component={PageInputField}/>
                                                                </PageInput>
                                                            </View>
                                                        )
                                                    })}

                                                    <RoundPlusButton title="Add Page" onPress={() => push({content:''})}/>
                                                </View>
                                            );
                                        }}
                                    </FieldArray>
                                    
                                    {/*<Text>{JSON.stringify(values, null, 2)}</Text>
                                    <Text>{JSON.stringify(errors, null, 2)}</Text>*/}
                                </ScrollView>
                            </FormSection>
                        </Card>

                        {/*Submit Issue Creation*/}
                        <SubmitButton title="Create Issue" style={{borderRadius:0, marginVertical:0}} />                        
                        {/*Launch Preview*/}
                        <FooterButton title="Preview" onPress={() => {setPreview(true)}}/>
                    </View>
                    :
                    //if in preview or cta modal mode
                    <>{preview ?
                        //Preview
                        <IssuePreview title={values.title} pages={values.pages} closePreview={()=>{setPreview(false)}} ></IssuePreview>
                        :
                        //Call to action modal
                        <CTAModal closeModal={()=>{setCtaModal(false)}}></CTAModal>
                    }</>
            )}
            </Formik>
    );
}

export default IssueEditorScreen;