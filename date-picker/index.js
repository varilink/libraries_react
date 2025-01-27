import {
    DatePicker,
    Flex,
    FlexBlock,
    FlexItem,
    __experimentalNumberControl as NumberControl,
    SelectControl
} from '@wordpress/components';
import { useState } from '@wordpress/element';

const MyDatePicker = ( { initialDate, updateMetaField } ) => {

    const [ selectedDate, setSelectedDate ] = useState( initialDate );

    const [ year, month, day ] = selectedDate.substring(0, 10).split('-');

    const handleDateChange = ( newDate ) => {

        console.log( 'newDate:', newDate );

        setSelectedDate( newDate );
        updateMetaField( newDate );

    };

    const handleDayChange = ( newDay ) => {
        handleDateChange( `${year}-${month}-${newDay}` );
    }

    const handleMonthChange = ( newMonth ) => {
        handleDateChange( `${year}-${newMonth}-${day}` );
    }

    const handleYearChange = ( newYear ) => {
        newYear = newYear.padEnd(4, '0');
        handleDateChange( `${newYear}-${month}-${day}` );
    }

    return (

        <>
            <Flex>
                <FlexItem>
                    <NumberControl
                        __next40pxDefaultSize
                        spinControls={ 'none' }
                        min={ 1 }
                        max={ 31 }
                        step={ 1 }
                        required={ true }
                        value={ day }
                        onChange={ handleDayChange }
                    />
                </FlexItem>
                <FlexBlock style={{ marginTop: '8px'}}>
                    <SelectControl
                        __next40pxDefaultSize
                        options={ [
                            { value: '01', label: 'January' },
                            { value: '02', label: 'February' },
                            { value: '03', label: 'March' },
                            { value: '04', label: 'April' },
                            { value: '05', label: 'May' },
                            { value: '06', label: 'June' },
                            { value: '07', label: 'July' },
                            { value: '08', label: 'August' },
                            { value: '09', label: 'September' },
                            { value: '10', label: 'October' },
                            { value: '11', label: 'November' },
                            { value: '12', label: 'December' }
                        ] }
                        value={ month }
                        onChange={ handleMonthChange }
                    />
                </FlexBlock>
                <FlexItem>
                    <NumberControl
                        __next40pxDefaultSize
                        spinControls={ 'none' }
                        min={ 1900 }
                        max={ 2100 }
                        step={ 1 }
                        required={ true }
                        value={ year }
                        onChange={ handleYearChange }
                    />
                </FlexItem>
            </Flex>
            <DatePicker
                currentDate={ selectedDate }
                onChange={ handleDateChange }
            />
        </>

    );

}

export default MyDatePicker;
