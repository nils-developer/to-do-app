export function Button({type, text})
{
    return (
        <>
            <button
                type={type}
                className='text-sm bg-sky-400 rounded ease-in-out duration-300 text-white p-2 hover:bg-blue-600'
            >{text}</button>
        </>
    )
}