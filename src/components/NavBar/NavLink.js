export function NavLink({text, link})
{
    return (
        <>
            <a className="text-white" href={link}>{text}</a>
        </>
    )
}