import useCookies from "@/hooks/useCookies";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import getCoords from "@/utils/get-location";
import React from "react";
import { GoChevronDown } from "react-icons/go";
import { GrSearch } from "react-icons/gr";
function Header() {
  const cookie = useCookies();

  console.log(cookie);

  const handlegetLocation = () => {
    getCoords();
  };
  return (
    <div className="bg-[#131921] sticky top-0 z-[50]">
      <div className="header-belt px-6 flex py-3 justify-between">
        <div className="navbar-belt-left flex items-center gap-3">
          <a href="#brand" className="flex items-center gap-1">
            <img src="/brand.png" alt="amazon-logo" />
            <span className="text-white">in</span>
          </a>
          <div
            className="location-slot px-1 py-1 cursor-pointer"
            onClick={handlegetLocation}
          >
            <div className="location-slot-inner flex items-center gap-2">
              <img src="/pin.svg" alt="pin-icon" />
              <div className="location-slot-text text-white">
                <h3 className="text-xs text-white/80">Hello</h3>
                {cookie && (
                  <p className="font-semibold text-xs">
                    <span>{cookie}</span>
                  </p>
                )}
                {!cookie && (
                  <p className="font-semibold text-xs">Select your address</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-search ml-8 hidden lg:block">
          <div className="navbar-search-form w-[430px] flex items-center h-[40px]">
            {/* <button className="">
              <span className="text-sm text-black/50">All</span>
              <span className="text-black/50">
                <GoChevronDown />
              </span>
            </button> */}
            <select
              name="category"
              id="category"
              className="outline-none px-1 search-filter  flex items-center justify-center gap-1 bg-[#F3F3F3] h-full rounded-l-md"
            >
              <option value="all">All</option>
              <option value="Cat1">Mobiles</option>
              <option value="Cat1">Laptops</option>
              <option value="Cat1">Toys</option>
            </select>
            <input
              type="text"
              name="keyword"
              id="keyword"
              placeholder="Search Amazon.in"
              className="w-[327px] h-full px-3 outline-none"
            />
            <button
              type="submit"
              className=" w-[45px] h-[40px] bg-[#FEBD69] flex items-center justify-center"
            >
              <GrSearch />
            </button>
          </div>
        </div>
        <div className="navbar-tools flex items-center ml-8 gap-3">
          <button className="navbar-languages">
            <span className=" hidden lg:flex items-center gap-2">
              <img src="/india-flag.svg" alt="flag" />
              <span className="text-white">EN</span>
              <GoChevronDown className="text-white/60" />
            </span>
          </button>
          <div className="nav-account-list hidden lg:flex flex-col items-start text-white">
            <h3 className="text-sm text-white/80">Hello,signin</h3>
            <div className="flex items-center gap-1">
              <span className="font-semibold">Accounts & Lists</span>
              <span>
                <GoChevronDown />
              </span>
            </div>
          </div>
          <div className="nav-orders hidden lg:flex flex-col items-start text-white">
            <span className="text-sm text-white/80">Returns</span>
            <span className="font-semibold">& Orders</span>
          </div>
          <button className="nav-cart flex items-center gap-2">
            <div className="cart-count relative">
              <img src="/cart.svg" alt="cart-icon" />
              <span className="cart-count-text absolute -top-2 left-4 font-semibold text-[#F08804]">
                0
              </span>
            </div>
            <span className="text-white">Cart</span>
          </button>
        </div>
      </div>
      <div className="header-main"></div>
    </div>
  );
}

export default Header;
