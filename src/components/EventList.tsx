import React from "react";
import Events from "../../public/events.json";

const EventList = () => {
  return (
    <div className="text-center">
      <p className="text-4xl">Schedule</p>
      {Events.map((date) => (
        <div className="py-4">
          <div className="text-2xl font-semibold">{date.date}</div>
          {date.events.map((event) => (
            <div className="p-4 m-2 border-2">
              <div className="list-none text-center">
                <li className="font-medium text-lg">{event.name}</li>
                <li>{event.place}</li>
                <li className="font-thin">{event.time}</li>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default EventList;
