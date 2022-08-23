import React from "react";
import User from "../Containers/User";

export const Sidebar = ({ contacts }) => (
  <aside className="bg-black text-white w-20 md:w-96 flex flex-col gap-y-4 h-full border border-solid border-gray-800 transition-width duration-300 overflow-y-scroll">
    {contacts.map((contact) => (
      <User user={contact} key={contact.user_id}/>
    ))}
  </aside>
);
