// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';
import { useEffect, useState } from 'react';
import NewsPortal from './components/newsportal/newsportal';
import Comment from './components/comment/comment';
//import ViewList from './components/viewlist/viewlist';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Column from './components/column/column';
import Navigation from './components/navigation/navigation';
//import Back from './components/back/back';
import Calendar from "react-calendar";
import "calender.css";



function App() {

  const [taskList,setTaskList] = useState([])

  const handleComment=(task)=>{
    const newData = taskList.filter(i=>i===task)
    setTaskList(newData)
  }

  const App = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [eventName, setEventName] = useState("");
    const [events, setEvents] = useState([]);
  
    const Date_Click_Fun = (date) => {
      setSelectedDate(date);
    };
  
    const Event_Data_Update = (event) => {
      setEventName(event.target.value);
    };
  
    const Create_Event_Fun = () => {
      if (selectedDate && eventName) {
        const newEvent = {
          id: new Date().getTime(),
          date: selectedDate,
          title: eventName,
        };
        setEvents([...events, newEvent]);
        setSelectedDate(null);
        setEventName("");
        setSelectedDate(newEvent.date);
      }
    };
  
    const Update_Event_Fun = (eventId, newName) => {
      const updated_Events = events.map((event) => {
        if (event.id === eventId) {
          return {
            ...event,
            title: newName,
          };
        }
        return event;
      });
      setEvents(updated_Events);
    };
  
    const Delete_Event_Fun = (eventId) => {
      const updated_Events = events.filter((event) => event.id !== eventId);
      setEvents(updated_Events);
    };
  }
  return (
    <>
    <div className="app">
			<h1> GeeksforGeeks Calendar Application </h1>
			<div className="container">
				<div className="calendar-container">
					<Calendar
						value={selectedDate}
						onClickDay={Date_Click_Fun}
						tileClassName={({ date }) =>
							selectedDate &&
							date.toDateString() === selectedDate.toDateString()
								? "selected"
								: events.some(
									(event) =>
										event.date.toDateString() ===
										date.toDateString(),
								)
								? "event-marked"
								: ""
						}
					/>{" "}
				</div>
				<div className="event-container">
					{" "}
					{selectedDate && (
						<div className="event-form">
							<h2> Create Event </h2>{" "}
							<p>
								{" "}
								Selected Date: {selectedDate.toDateString()}{" "}
							</p>{" "}
							<input
								type="text"
								placeholder="Event Name"
								value={eventName}
								onChange={Event_Data_Update}
							/>{" "}
							<button
								className="create-btn"
								onClick={Create_Event_Fun}
							>
								Click Here to Add Event{" "}
							</button>{" "}
						</div>
					)}
					{events.length > 0 && selectedDate && (
						<div className="event-list">
							<h2> My Created Event List </h2>{" "}
							<div className="event-cards">
								{" "}
								{events.map((event) =>
									event.date.toDateString() ===
									selectedDate.toDateString() ? (
										<div
											key={event.id}
											className="event-card"
										>
											<div className="event-card-header">
												<span className="event-date">
													{" "}
													{event.date.toDateString()}{" "}
												</span>{" "}
												<div className="event-actions">
													<button
														className="update-btn"
														onClick={() =>
															Update_Event_Fun(
																event.id,
																prompt(
																	"ENTER NEW TITLE",
																),
															)
														}
													>
														Update Event{" "}
													</button>{" "}
													<button
														className="delete-btn"
														onClick={() =>
															Delete_Event_Fun(
																event.id,
															)
														}
													>
														Delete Event{" "}
													</button>{" "}
												</div>{" "}
											</div>{" "}
											<div className="event-card-body">
												<p className="event-title">
													{" "}
													{event.title}{" "}
												</p>{" "}
											</div>{" "}
										</div>
									) : null,
								)}{" "}
							</div>{" "}
						</div>
					)}{" "}
				</div>{" "}
			</div>{" "}
		</div>    
    <Header/>
    <Navigation/>
    <Column/>     
    <NewsPortal setTaskList={setTaskList} />
    {taskList.length > 0 && taskList.map((task,index)=>{
      return(
        <Comment task={task} index={index} commentList={handleComment}/>
        
      )
    })}
      <Footer/>
    </> 
  );
}	

export default App;


