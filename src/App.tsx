import React, { useState } from "react";
import Detail from "./component/Detail";
import Error from "./component/Error";
import Header from "./component/Header";
import LeftBar from "./component/LeftBar";
import WeatherInDay from "./component/WeatherInDay";
import useForecast from "./hooks/useForecast";

function App() {
  const [themeDark, setThemeDark] = useState<boolean>(true);
  const { isError, forecast, submitRequest, setIsError, setForecast } =
    useForecast();

  const handleClickThemeButton = () => {
    setThemeDark(!themeDark);
  };

  const getValueSearch = (value: string) => {
    submitRequest(value);
  };

  const delayToAppear = () => {
    
  }

  return (
    <div className={` ${themeDark === true ? `dark` : ``}`}>
      <div className="dark:bg-primary bg-second min-h-screen min-w-full flex justify-center items-center transition-theme">
        <div className="py-16 md:px-8 px-5 max-w-screen-xl w-full">
          <Header
            changeTheme={handleClickThemeButton}
            theme={themeDark}
            getValueSearch={getValueSearch}
            setIsError={setIsError}
            setForecast={setForecast}
          />
          {isError && (
            <div className="mt-10 flex justify-center items-center w-full appear">
              <Error />
            </div>
          )}
          {forecast && (
            <div className="mt-10 flex lg:flex-row flex-col justify-center gap-10 w-full">
              <LeftBar forecast={forecast} />
              <div className="flex-[2_2_0%] mt-3">
                <Detail forecast={forecast} />
                <WeatherInDay forecast={forecast} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
