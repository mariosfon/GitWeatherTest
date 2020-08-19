import React, { useState } from "react";
import { Link } from "react-router-dom";

const api = {
  key: "c919f4253df7ee10be22377a10066ac1",
  base: " https://api.openweathermap.org/data/2.5/",
};

function Test() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}forecast?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
          console.log(result.country);
          console.log(query);
        });
    }
  };

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Type City and press Enter"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>

        {typeof weather.city != "undefined" ? (
          <Link
            to={{
              pathname: `/zeroTo40/${weather.city.name}`,
              state: {
                weather: [weather.city.name],
                city: {},
                name: "",
                list: {},
              },
            }}
          >
            <div>
              <div className="location-box">
                <div className="location">
                  {weather.city.name},{weather.city.country}
                </div>
              </div>
            </div>
          </Link>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default Test;
