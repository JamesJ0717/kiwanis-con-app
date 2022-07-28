import React from "react";
import Forums from "../../public/forums.json";

const ForumList = () => {
  return (
    <div className="text-center">
      <p className="text-4xl">Forums</p>
      {/* <p className="text-2xl font-semibold">Friday, August 19, 2022</p> */}
      {Forums.rooms.map((room) => (
        <div key={room.name}>
          <div className="text-2xl font-semibold">{room.name}</div>
          {room.forums.map((forum) => (
            <div className="p-4 m-2 border-2" key={forum.name}>
              <div className="list-none text-center">
                <li className="font-bold text-lg">{forum.presenter}</li>
                <li>{forum.name}</li>
                <li className="font-thin">{forum.description}</li>
                <li>{forum.time}</li>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ForumList;
