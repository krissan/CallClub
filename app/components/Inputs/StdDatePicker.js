import React,{useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'

import NonEditTextInput from './NonEditTextInput';

import colors from '../../config/colors';

function StdDatePicker({ label, value, onChange, inpColor= colors.text, phColor=colors.inert, txtColor=colors.text, touched=false, error, ...otherProps}) {
    const [show, setShow] = useState(false);

    //Change date value and hide picker
    const changeAndHide = (e, selectedDate) => {
        const currentDate = moment(selectedDate).format('YYYY-MM-DD') || value;
        setShow(false);
        onChange(currentDate);
    }

    return (
        <>
            {/*Display date value and toggle date*/}
            <NonEditTextInput label={label} value={value} onPress={()=>setShow(true)} />
            {/*Show Picker if toggled on*/}
            {show && 
                // Date input
                <DateTimePicker
                    mode="date"
                    display="default"
                    value={new Date(moment(value))}
                    onChange={changeAndHide}
                    />
            }
        </>
    );
}

export default StdDatePicker;