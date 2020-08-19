import React from "react";
import "./test";
import "./day";
import { Link } from "react-router-dom";

const api = {
  key: "c919f4253df7ee10be22377a10066ac1",
  base: " https://api.openweathermap.org/data/2.5/",
};

class City extends React.Component {
  state = {
    activeCity: [],
    activeWeather: [],
    cityName: "",
    sysName: [],
    icon1: "",
  };

  componentDidMount = async () => {
    const title = this.props.location.state.weather;
    const req = await fetch(
      `${api.base}forecast?q=${title}&units=metric&APPID=${api.key}`
    );

    const res = await req.json();
    this.setState({
      activeCity: res.city.name,
      countryName: res.city.country,
      activeTemp: res.list[0].main.temp,
      activeDesc: res.list[0].weather[0].main,

      icon1: res.list[0].weather[0].icon,
    });
    console.log(this.state);
  };
  render() {
    const dateBuilder = (d) => {
      let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];

      let day = days[d.getDay()];

      return `${day} `;
    };

    return (
      <div
        className={
          typeof this.state.activeCity.main != "undefined"
            ? this.state.activeWeather.temp < 16
              ? "app warm"
              : "app"
            : "app"
        }
      >
        <main>
          <Link
            to={{
              pathname: `/zeroTo40/city/day`,
              state: {
                weather: [this.state.activeCity],
                city: {},
                name: "",
                list: {},
              },
            }}
          >
            <div>
              <div className="location-box">
                <div className="location">
                  {" "}
                  {this.state.activeCity},{this.state.countryName}
                </div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">
                  {Math.round(this.state.activeTemp)} ‎°C{" "}
                </div>
                <div className="weather">{this.state.activeDesc} </div>
                <img
                  src={`http://openweathermap.org/img/wn/${this.state.icon1}.png`}
                />
              </div>
            </div>
          </Link>
        </main>
      </div>
    );
  }
}

export default City;
