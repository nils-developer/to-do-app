import React from 'react';

export function Button({type, text})
{
    return (
        <>
            <button type={type} className={'button'}>{text}</button>
        </>
    )
}