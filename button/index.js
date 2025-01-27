/**
 * This is a custom button component based on the WordPress Button component. It
 * displays a date in a human-readable form or a prompt if no date is provided.
 * The button is a link button.
 */

import { Button } from '@wordpress/components';

const MyButton = ( { date, prompt, onClick, ...props } ) => {

    const handleOnClick = (event) => {
        if (onClick) {
            onClick(event);
        }
    }

    const dateToString = (date) => {
        if (date) {
            const dateObj = new Date(date);
            return dateObj.toLocaleDateString( 'en-GB',
                {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }
            );
        }
        return '';
    }

    return (
        <Button
            { ...props }
            variant='link'
            onClick={handleOnClick}
        >
            { `${ date }` ? dateToString( `${ date }` ) : `${ prompt }` }
        </Button>
    );

}

export default MyButton;
