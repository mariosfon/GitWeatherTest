import React from "react";
import "./test";
import "./city";

const api = {
  key: "c919f4253df7ee10be22377a10066ac1",
  base: " https://api.openweathermap.org/data/2.5/",
};

async function getForecast(title) {
  try {
    const req = await fetch(
      `${api.base}forecast?q=${title}&units=metric&APPID=${api.key}`
    );
    const { list, city } = await req.json();
    this.setState({
      activeCity: city.name,
      activeWeather1: list[1].main.temp,
      activeWeather2: list[9].main.temp,
      activeWeather3: list[17].main.temp,
      activeWeather4: list[25].main.temp,
      activeWeather5: list[33].main.temp,

      activeDesc1: list[1].weather[0].main,
      activeDesc2: list[9].weather[0].main,
      activeDesc3: list[17].weather[0].main,
      activeDesc4: list[25].weather[0].main,
      activeDesc5: list[33].weather[0].main,
      icon1: list[0].weather[0].icon,
      icon2: list[9].weather[0].icon,
      icon3: list[17].weather[0].icon,
      icon4: list[25].weather[0].icon,
      icon5: list[33].weather[0].icon,
    });
    console.log(this.state);
  } catch (error) {
    console.log(error);
  }
}

class Day extends React.Component {
  state = {
    activeCity: [],
    activeWeather: [],
    cityName: "",
    sysName: [],
    icon: "",
  };

  componentDidMount = async () => {
    try {
      const title = this.props.location.state.weather;
      const result = await getForecast(title);

      this.setState(result);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const thirdDay = new Date(today);
    thirdDay.setDate(thirdDay.getDate() + 2);
    const forthDay = new Date(today);
    forthDay.setDate(forthDay.getDate() + 3);
    const fifthDay = new Date(today);
    fifthDay.setDate(fifthDay.getDate() + 4);
    const dateBuilder = (d) => {
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      let day = days[d.getDay()];

      return `${day} `;
    };

    return (
      <div
        className={
          typeof this.state.activeWeather1 != "undefined"
            ? this.state.activeWeather1 < 16
              ? "app warm"
              : "app"
            : "app"
        }
      >
        <main>
          <div className="location"> {this.state.activeCity}</div>

          <div className="container">
            <div className="location-box"></div>

            <div className="weather-box">
              <div className="date">{dateBuilder(today)}</div>
              <div className="temp">
                {Math.round(this.state.activeWeather1)} ‎°C{" "}
              </div>
              <div className="weather">{this.state.activeDesc1} </div>
              <img
                src={`http://openweathermap.org/img/wn/${this.state.icon1}.png`}
              />
            </div>

            <div className="location-box"></div>
            <div className="weather-box">
              <div className="date">{dateBuilder(tomorrow)}</div>
              <div className="temp">
                {Math.round(this.state.activeWeather2)} ‎°C{" "}
              </div>
              <div className="weather">{this.state.activeDesc2} </div>
              <img
                src={`http://openweathermap.org/img/wn/${this.state.icon2}.png`}
              />
            </div>
            <div className="location-box"></div>
            <div className="weather-box">
              <div className="date">{dateBuilder(thirdDay)}</div>
              <div className="temp">
                {Math.round(this.state.activeWeather3)} ‎°C{" "}
              </div>
              <div className="weather">{this.state.activeDesc3} </div>
              <img
                src={`http://openweathermap.org/img/wn/${this.state.icon3}.png`}
              />
            </div>

            <div className="location-box"></div>
            <div className="weather-box">
              <div className="date">{dateBuilder(forthDay)}</div>
              <div className="temp">
                {Math.round(this.state.activeWeather4)} ‎°C{" "}
              </div>
              <div className="weather">{this.state.activeDesc4} </div>
              <img
                src={`http://openweathermap.org/img/wn/${this.state.icon4}.png`}
              />
            </div>
            <div className="location-box"></div>
            <div className="weather-box">
              <div className="date">{dateBuilder(fifthDay)}</div>
              <div className="temp">
                {Math.round(this.state.activeWeather5)} ‎°C{" "}
              </div>
              <div className="weather">{this.state.activeDesc5} </div>
              <img
                src={`http://openweathermap.org/img/wn/${this.state.icon5}.png`}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Day;
