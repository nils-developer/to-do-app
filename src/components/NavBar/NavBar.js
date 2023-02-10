import React from 'react';
import { NavElement } from './NavElement';

const navbar = [
    { text: 'Home', link: '#home'},
    { text: 'ToDo', link: '#toDo'}
]

export default function NavBar()
{
    return (
        <div className='flex justify-evenly m-auto bg-slate-500'>
            <NavElement text={navbar[0].text} link={navbar[0].link}></NavElement>
            <NavElement text={navbar[1].text} link={navbar[1].link}></NavElement>
        </div>
    )
}