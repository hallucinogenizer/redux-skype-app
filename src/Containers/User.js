import { setActiveUserId, deleteUserId } from "../action";
import store from "../store";

const User = ({ user }) => {
  const {name, profile_pic, status} = user

  function handleUserClick({user_id}) {
    store.dispatch(setActiveUserId(user_id))
  }

  function handleCrossClick(e, user_id) {
    e.stopPropagation();
    store.dispatch(deleteUserId(user_id))
  }

    return (
    <div onClick={handleUserClick.bind(null, user)} className="relative flex items-start p-3 text-left hover:bg-gray-800">
      <p className="absolute top-2 right-3 cursor-pointer" onClick={(e) => handleCrossClick(e, user.user_id)}> X </p>
      <img src={profile_pic} alt={name} className="w-12 rounded-full" />
      <div className="hidden md:block md:p-0 md:pl-4">
        <p className="m-0 text-gray-50 text-base mb-2">{name}</p>
        <p>{status.substring(0,100) + "..."}</p>
      </div>
    </div>
  );
};

export default User;
