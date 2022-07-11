import React from "react";

const Profile = () => {
  return (
    <div className="font-montserrat mt-auto">
      <div>
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
          alt="not found"
          className="w-10 h-10 rounded-full object-center object-cover"
        />
      </div>
      <p className="text-sm font-semibold text-[#242424] mt-2">Andy Samberg</p>
      <p className="text-xs text-[#7F878A]">andysamberg@gmail.com</p>
      <button
        type="button"
        className="mt-4 border border-2 border-[#2CA4D8] text-[#2CA4D8] rounded-[10px] text-xs tracking-wider font-semibold w-full py-1"
      >
        VIEW PROFILE
      </button>
    </div>
  );
};

export default Profile;
