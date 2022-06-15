import { RiCelsiusLine } from "react-icons/ri";
import { Forecast } from "../hooks/useForecast";
import moment from "moment";

const urlIcon = "http://openweathermap.org/img/wn/";

interface WeatherInDayInterface {
  forecast: Forecast;
}

function WeatherInDay({ forecast }: WeatherInDayInterface) {
  return (
    <div className="mt-8 rounded-xl py-6 px-2 dark:bg-100 bg-200 w-full transition-theme appear">
      <div className="flex md:flex-nowrap flex-wrap justify-around items-center">
        {forecast.list.map((item) => {
          return (
            <div
              key={item.dt_txt}
              className="rounded-lg px-2 py-3 hover:dark:bg-400 hover:bg-300 hover:-translate-y-1 transition-theme"
            >
              <div>
                <img src={urlIcon + item.weather[0].icon + `@2x.png`} alt="" />
              </div>
              <div className="mt-3 text-2xl font-semibold dark:text-white text-slate-800 text-center transition-theme">
                {moment(item.dt_txt).format("LT")}
              </div>
              <div className="mt-3 flex items-center justify-center text-2xl dark:text-white text-slate-800 transition-theme">
                {item.main.temp.toFixed()}
                <RiCelsiusLine
                  style={{ fill: "url(#text-gradient)" }}
                  className="text-2xl "
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WeatherInDay;
