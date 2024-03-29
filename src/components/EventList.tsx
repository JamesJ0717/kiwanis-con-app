import React from "react";
import Events from "../../public/events.json";

const EventList = () => {
  return (
    <div className="text-center prose">
      <p className="text-4xl">Schedule</p>
      {Events.map((date) => (
        <div className="py-4" key={date.date}>
          <div className="text-2xl font-semibold">{date.date}</div>
          {date.events.map((event) => (
            <div className="p-4 m-2 border-2" key={event.name}>
              <div className="list-none text-center">
                <li className="font-medium text-lg">{event.name}</li>
                <li>{event.place}</li>
                <li className="font-light">{event.time}</li>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default EventList;
