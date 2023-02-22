import { setLocation } from "@/features/appSlice";
import jsCookies from "js-cookies";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function useCookies() {
  const [cookie, setCookie] = useState();
  useEffect(() => {
    const location = jsCookies.getItem("address");
    setCookie(location);
  }, []);
  return cookie;
}

export default useCookies;
