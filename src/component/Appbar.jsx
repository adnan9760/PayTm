import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Appbar = ({ firstName }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const Navigate= useNavigate();

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    if (menuVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuVisible]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const capitalizedFirstName = capitalizeFirstLetter(firstName);

  return (
    <div className="pl-5 pr-5 bg-gray-100 p-4 shadow-md items-center h-20 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4 text-[20px] font-bold">
        PayTm
      </div>
      <div className="flex justify-center items-center">
        <div className="flex h-full mr-4">{capitalizedFirstName}</div>
        <div className="rounded-full h-12 w-12 items-center bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="relative ml-3" ref={menuRef}>
            <button
              type="button"
              className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              id="user-menu-button"
              aria-expanded={menuVisible}
              aria-haspopup="true"
              onClick={handleMenuToggle}
            >
              <div className="flex flex-col w-full justify-center h-full text-xl">
                {firstName.charAt(0).toUpperCase()}
              </div>
            </button>

            {menuVisible && (
              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
              >
               
                
                <a onClick={()=>{
                  localStorage.removeItem("token")
                  toast("Logout Succesfully")
                  Navigate("/Login")
                }}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                >
                  Sign out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
