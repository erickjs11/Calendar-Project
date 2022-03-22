import React, {useState, useContext, useEffect} from 'react';
import {getMonth} from './utils/getMonth';
import CalendarHeader from './components/CalendarHeader';
import Month from './components/Month';
import GlobalContext from './Context/GlobalContext';
import EventModal from './components/EventModal';

function App() {
  
    const [currenMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex, showEventModal } = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
      }, [monthIndex]);


    return (
      <React.Fragment>
        {showEventModal && <EventModal canSelectDate = {true} />}
        <div className="h-screen flex flex-col">
          <CalendarHeader />
          <div className="flex flex-1">
            <Month month={currenMonth} />
          </div>
        </div>
      </React.Fragment>
    );
  }
  
  export default App;