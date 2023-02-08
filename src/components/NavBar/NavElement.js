import React from 'react';
import { NavLink } from "./NavLink";

export function NavElement({link, text})
{
    return (
        <div className="navElement">
            <NavLink link={link} text={text}></NavLink>
        </div>
    )
}