import React, {useContext} from 'react';
import GlobalContext from '../Context/GlobalContext';
import dayjs from 'dayjs';
import CreateEventButton from './CreateEventButton';


export default function CalendarHeader() {

  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className="bg-gradient-to-r from-cyan-500 to-violet-500">
      <div class='flex justify-between'>
        <div className='flex items-center'>
          <button
          className="items-center bg-cyan-500 hover:bg-gradient-to-r from-pink-400 to-orange-400 rounded py-2 px-3 mr-3 ml-3  text-white font-bold mt-2 mb-2" 
          onClick={handleReset}
          >
          Today
          </button>
          <h2 className="ml-4 my-3 text-xl text-white font-bold text-left">{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</h2>
        </div>
        <div class='flex items-end'>
            <CreateEventButton />
          <button>
            <span className="items-center hover:bg-gradient-to-r from-pink-400 to-orange-400 rounded material-icons-outlined cursor-pointer py-2 px-3 mr-3 ml-3 " 
            onClick={handlePrevMonth}
            >
            <svg 
            class="h-6 w-6 text-white"  
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            stroke-width="2" 
            stroke="currentColor" 
            fill="none" 
            stroke-linecap="round" 
            stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <polyline points="15 6 9 12 15 18" />
            </svg>
            </span>
          </button>
          <button>
            <span className="items-center hover:bg-gradient-to-r from-pink-400 to-orange-400 rounded material-icons-outlined cursor-pointer py-2 px-3 mr-3 ml-3" 
            onClick={handleNextMonth}
            >
            <svg 
            class="h-6 w-6 text-white"  
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            stroke-width="2" 
            stroke="currentColor" 
            fill="none" 
            stroke-linecap="round" 
            stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <polyline points="9 6 15 12 9 18" />
            </svg>
            </span>
            </button>
            </div>
      </div>
    </header>
  );
}