import React, { useState } from "react";
import { BiSearch, BiSun, BiMoon } from "react-icons/bi";
import { Forecast } from "../hooks/useForecast";

interface HeaderInterface {
  theme: boolean;
  changeTheme: () => void;
  getValueSearch: (value: string) => void;
  setIsError: (value: boolean) => void;
  setForecast: (value: Forecast | undefined) => void;
}

function Header({
  changeTheme,
  theme,
  getValueSearch,
  setIsError,
  setForecast,
}: HeaderInterface) {
  const [locationSearch, setLocationSearch] = useState<string>("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationSearch(e.target.value);
    if (e.target.value === "" || !e.target.value) {
      setIsError(false);
      setLocationSearch("");
      setForecast(undefined);
      return;
    }
  };

  const handleClickButtonSubmit = () => {
    if (locationSearch) {
      getValueSearch(locationSearch);
    }
  };

  const inputField = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleKeyPressInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.which === 13) {
      handleClickButtonSubmit();
    }
  };
  return (
    <div>
      <div className="text-center">
        <p className="font-semibold text-gradient text-5xl">Weather Forecast</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <div className="w-full flex justify-center items-center">
          <div className="md:w-1/2 w-full">
            <input
              ref={inputField}
              value={locationSearch}
              onChange={handleChangeInput}
              onKeyDown={handleKeyPressInput}
              type="text"
              placeholder="Search a location"
              className="px-5 py-3 w-full bg-transparent border-2 dark:border-slate-300 border-slate-600 rounded-2xl outline-none dark:text-white text-slate-800 text-xl transition-theme"
            />
          </div>
          <button
            onClick={handleClickButtonSubmit}
            className="ml-5 p-3 flex items-center justify-center rounded-full border-2 dark:border-white border-slate-800 transition-theme"
          >
            <svg width="0" height="0">
              <linearGradient
                id="text-gradient"
                x1="100%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop stopColor="#8C366C" offset="0%" />
                <stop stopColor="#6E64E7" offset="100%" />
              </linearGradient>
            </svg>
            <BiSearch
              className="text-2xl text-gradient"
              style={{ fill: "url(#text-gradient)" }}
            />
          </button>
          <div className="ml-5">
            <button onClick={changeTheme}>
              {theme === true ? (
                <BiSun className="text-4xl text-slate-300" />
              ) : (
                <BiMoon className="text-4xl text-slate-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
