import React from 'react';

export function NavLink({text, link})
{
    return (
        <>
            <a className="link" href={link}>{text}</a>
        </>
    )
}