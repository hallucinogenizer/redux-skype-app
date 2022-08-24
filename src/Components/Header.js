const Header = ({user}) => {
    const {name, status} = user
    return <header className="text-white py-4 px-8 text-left border-b border-gray-800">
        <h1 className="text-4xl py-4">{name}</h1>
        <p>{status}</p>
    </header>
}

export default Header