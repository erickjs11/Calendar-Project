import React, { useContext } from 'react';
import GlobalContext from '../Context/GlobalContext';

export default function CreateEventButton() {

    const { setShowEventModal, setCanSelectDate } = useContext(GlobalContext);

  return (
    <button
    onClick={() => {
        setCanSelectDate(false)
        setShowEventModal(true)}
        } 
    className= "flex items-center hover:bg-gradient-to-r from-pink-400 to-orange-400 rounded py-2 px-3 mr-3 ml-3  text-white font-bold mt-2 mb-2" >
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
            <line x1="12" y1="5" x2="12" y2="19" />  
            <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
    </button>
    );
}
