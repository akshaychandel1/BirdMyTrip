import React from "react";
import "./ExploreMoreBar.css";

export default function ExploreMoreBar() {
  return (
    <div className="explore-wrapper">
      <div className="explore-bar">
        
        <div className="explore-item">
          <span className="icon">🧭</span>
          <div>
            <b>Where2Go</b>
          </div>
        </div>

        <div className="explore-item">
          <span className="icon">🗺️</span>
          <div>
            <b>
              How2Go <span className="new">new</span>
            </b>
            <p>Find routes to anywhere</p>
          </div>
        </div>

        <div className="explore-item">
          <span className="icon">💳</span>
          <div>
            <b>MakeMyTrip ICICI Credit Card</b>
            <p>Never-expiring rewards & big benefits</p>
          </div>
        </div>

        <div className="explore-item">
          <span className="icon">👥</span>
          <div>
            <b>MICE</b>
            <p>Offsites, Events & Meetings</p>
          </div>
        </div>

        <div className="explore-item">
          <span className="icon">🎁</span>
          <div>
            <b>Gift Cards</b>
          </div>
        </div>

      </div>
    </div>
  );
}
