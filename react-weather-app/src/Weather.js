import React from "react";

export default function Weather() {
  return (
    <div className="row mt-3">
      <form>
        <input className="col-9" type="search" placeholder="Enter a city...." />
        <input className="btn btn-primary col-3" type="submit" value="Search" />
      </form>
      <div className="row mt-3">
        <div className="col-6">
          <img src=""></img>
          6℃
        </div>
        <div className="col-3">
          <ul>
            <li>Temperature:</li>
            <li>Humidity:</li>
            <li>Wind:</li>
            <li>Description:</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
