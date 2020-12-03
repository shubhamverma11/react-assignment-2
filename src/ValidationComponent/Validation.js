 import React from 'react';

const Validation = ( props ) => {

    let validationMessage = ' ';

    if (props.inputLength <= 5){
        validationMessage = 'Text too short';
    } else {
        validationMessage = 'Text long enough';
    }

    return (
        <div>      
       <p>{validationMessage}</p>
        </div>
    );
};

export default Validation;
