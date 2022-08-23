const Empty = ({user}) => {
    const {name, profile_pic, status} = user
    const first_name = name.split(" ")[0]

    return <div className="text-white flex flex-col justify-center items-center content-center h-screen">
        <h1 className="text-3xl mt-14 bold">Welcome, {first_name}</h1>
        <img src={profile_pic} alt={name} className="rounded-full m-8" />
        <p className="p-4 border-b-2 border-white">
            <b>Status: </b> {status}
        </p>
        <button className="p-4 my-4 bold text-xl rounded-3xl outline-0 bg-white text-black hover:bg-gray-800 hover:text-white hover:cursor-pointer">Start a conversation</button>
        <p className="p-4">
            Search for someone to start chatting with or go to Contacts
            to see who
            is available.
        </p>
    </div>
}

export default Empty