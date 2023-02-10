import { NavLink } from "./NavLink";

export function NavElement({link, text})
{
    return (
        <div className="border-x py-3 px-10 ease-in-out duration-300 hover:bg-slate-700 cursor-pointer">
            <NavLink link={link} text={text}></NavLink>
        </div>
    )
}