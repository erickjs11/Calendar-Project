import React, { useContext, useState } from "react";
import GlobalContext from "../Context/GlobalContext";
import dayjs from 'dayjs';

const labelsClasses = [
    "indigo",
    "gray",
    "green",
    "blue",
    "red",
    "purple",
];

export default function EventModal() {
  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
    canSelectDate,
    setDaySelected,
  } = useContext(GlobalContext);

  const [title, setTitle] = useState(
    selectedEvent ? selectedEvent.title : ""
  );
  const [time, setTime] = useState(
    selectedEvent ? selectedEvent.time : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  const validate = () => {
      return (
        title !== '' && time !== null 
      );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()){
    const calendarEvent = {
      title,
      time,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);}
  }


  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center z-40">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 flex justify-between items-center ">
          <span className="material-icons-outlined text-white">
            drag_handle
          </span>
          <div>
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
                className="material-icons-outlined text-white cursor-pointer mr-3 "
              >
                delete
              </span>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-white">
                close
              </span>
            </button>
          </div>
        </header>
        
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
          <span className="material-icons-outlined text-gray-400">
              schedule
            </span>
            {canSelectDate ? <p>{daySelected.format("dddd, MMMM DD")}</p> : <input onChange={(event) => {
                setDaySelected(dayjs(event.target.value))
            }} type='date' />} 
            <span className="material-icons-outlined text-gray-400">
              segment
            </span>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div></div>
            <input
              type="time"
              value={time}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 cursor-pointer"
              onChange={(e) => setTime(e.target.value)}
            />
            <span className="material-icons-outlined text-gray-400">
              bookmark_border
            </span>
            <div className="flex gap-x-2">
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === lblClass && (
                    <span className="material-icons-outlined text-white text-sm">
                      check
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-gradient-to-r from-pink-400 to-orange-400 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}