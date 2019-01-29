import React, { Component } from "react";
import {
  Collapsible,
  CollapsibleItem,
  Row,
  Col,
  Card
} from "react-materialize";
import "../../css/CurrentWeather.css";
import CurrentWeatherBG from "./CurrentWeatherBG";
import Climacon from "./Climacon";

class CurrentWeather extends Component {
  renderAlerts() {
    const { alerts } = this.props;
    if (alerts) {
      const alertItems = alerts.map((alert, index) => {
        const alertTitle =
          alert.severity.charAt(0).toUpperCase() +
          alert.severity.slice(1) +
          ": " +
          alert.title;
        return (
          <CollapsibleItem key={index} header={alertTitle} icon="warning">
            {alert.description}
          </CollapsibleItem>
        );
      });

      return <Collapsible accordion>{alertItems}</Collapsible>;
    }
  }
  render() {
    const { name, lat, long } = this.props.location;
    const {
      icon,
      summary,
      temperature,
      apparentTemperature,
      windSpeed,
      windGust,
      windBearing
    } = this.props.currently;

    return (
      <div>
        <div className="weatherAlerts">{this.renderAlerts()}</div>

        <CurrentWeatherBG weatherType={icon}>
          <div className="halfOpaque" style={{ padding: "20px" }}>
            <h3>{name}</h3>
            <p className="center-align">
              Lat: {lat}, Long: {long}
            </p>
            <p className="center-align" />
          </div>
          <div className="container">
            <Row>
              <Col s={12} m={4} l={4}>
                <Card
                  title="Temperature"
                  className="halfOpaque center-align hoverable"
                >
                  <hr />
                  Temp: {Math.floor(temperature)}&deg;
                  <br />
                  Feels Like: {Math.floor(apparentTemperature)}&deg;
                </Card>
              </Col>
              <Col s={12} m={4} l={4}>
                <Card
                  title="Precipitation"
                  className="halfOpaque center-align hoverable"
                >
                  <hr />
                  <Climacon iconName={icon} />
                  <br />
                  {summary}
                </Card>
              </Col>
              <Col s={12} m={4} l={4}>
                <Card
                  title="Wind"
                  className="halfOpaque center-align hoverable"
                >
                  <hr />
                  Speed: {windSpeed} mph
                  <br/>
                  Gusting to {windGust} mph
                  <br/>
                  Bearing {windBearing}
                </Card>
              </Col>
              <Col s={12}>
                <Card title="Summary" className="halfOpaque center-align hoverable">
                  <hr/>
                  {this.props.hourly.summary}
                </Card>
              </Col>

            </Row>
          </div>
        </CurrentWeatherBG>
      </div>
    );
  }
}

export default CurrentWeather;
