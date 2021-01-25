import React from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';
import Clipboard from 'expo-clipboard';
import * as Yup from 'yup';

import useCta from '../../provider/cta/useCta';
import { useState } from 'react/cjs/react.development';

function CTASearch({handleSearch=()=>{}}) {
    const cta = useCta();
    const [items,setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    //When Search Field is selected
    const onItemSelect = async(item) => {
        console.log("-----------------item------------------");
        const result = await cta.grabCTA(item.id);
        console.log(result);
        //set
        Clipboard.setString(result);
        handleSearch()
        alert(result + " copied")
    }

    //When Search Field is selected
    const onTextChange = async(text) => {

        console.log("-----------------text------------------");
        setLoading(true);
        setItems("1");
        const result = await cta.searchCTA(text);
        setItems(result);
        setLoading(false);
        console.log(items);
    }

    {/*Validation schema CTA Search Form*/}
    const validationSchemaSearch = Yup.object().shape({
        query: Yup.string().required().label("query")
    });

    return (
        <>
            {/*Search Form*/}
            <SearchableDropdown
                onItemSelect={onItemSelect}
                containerStyle={{ padding: 5 }}
                itemStyle={{
                    padding: 10,
                    marginTop: 2,
                    backgroundColor: '#ddd',
                    borderColor: '#bbb',
                    borderWidth: 1,
                    borderRadius: 5,
                }}
                itemTextStyle={{ color: '#222' }}
                itemsContainerStyle={{ maxHeight: 140 }}
                items={items}
                resetValue={false}
                textInputProps={
                {
                    placeholder: "Search CTAs",
                    underlineColorAndroid: "transparent",
                    style: {
                        padding: 12,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        borderRadius: 5,
                    },
                    onTextChange: onTextChange
                }
                }
            />
        </>
    );
}

export default CTASearch;