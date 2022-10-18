import React from "react";
import Forums from "../../public/forums.json";

const ForumList = () => {
  return (
    <div className="text-center prose">
      <p className="text-4xl">Forums</p>
      {Forums.rooms.map((room) => (
        <div className="py-2" key={room.time}>
          <div className="text-2xl font-semibold">{room.time}</div>
          {room.forums.map((forum) => (
            <div className="p-4 m-2 border-2" key={forum.name}>
              <div className="list-none text-center">
                <li className="font-bold text-lg">{forum.name}</li>
                <li className="font-light">{forum.description}</li>
                <li>{forum.presenter}</li>
                <li className="font-semibold text-lg">{forum.room}</li>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ForumList;
