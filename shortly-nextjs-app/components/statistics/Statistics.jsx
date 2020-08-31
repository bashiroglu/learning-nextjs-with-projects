import React from "react";

export default function Statistics() {
  return (
    <div className="statistics">
      <div className="statistics__heading">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="statistics__cards">
        <div className="statistics__card">
          <div className="circle">
            <img src="./assets/icon-brand-recognition.svg" alt="recognition" />
          </div>
          <h4>Branded links</h4>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="statistics__card">
          <div className="circle">
            <img src="./assets/icon-detailed-records.svg" alt="records" />
          </div>
          <h4>Detailed Records</h4>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="statistics__card">
          <div className="circle">
            <img
              src="./assets/icon-fully-customizable.svg"
              alt="customizable"
            />
          </div>
          <h4>Fully Customizable</h4>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
}
