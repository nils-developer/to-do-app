import React from 'react';

export function FormInput({type, labelText})
{
    return(
        <label>
            {labelText}
            <input type={type} />
        </label>
    )
}