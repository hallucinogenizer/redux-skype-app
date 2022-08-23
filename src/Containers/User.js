
const User = ({ user }) => {
  const {name, profile_pic, status} = user
    return (
    <div className="flex items-start p-3 text-left hover:bg-gray-800">
      <img src={profile_pic} alt={name} className="w-12 rounded-full" />
      <div className="hidden md:block md:p-0 md:pl-4">
        <p className="m-0 text-gray-50 text-base mb-2">{name}</p>
        <p>{status.substring(0,100) + "..."}</p>
      </div>
    </div>
  );
};

export default User;
