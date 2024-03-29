import { React, useState } from 'react';
import '../styles/Events.css'
import { allEvents, eventsDict, eventOptions, yearOptions } from '../utilities/eventsData';
import { useLocation } from 'react-router-dom';
import Select from 'react-select';

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedYear, setSelectedYear] = useState(0);
  const handleEvent = (selectedOption) => {
    setSelectedEvent(selectedOption.value);
  };
  const handleYear = (selectedOption) => {
    setSelectedYear(selectedOption.value);
  };

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: "black",
      backgroundColor: state.isSelected ? "var(--red)" : "#ffffff",
      "&:hover": {
        backgroundColor: "rgba(237, 28, 36, 0.10)",
      }
    }),

    control: (defaultStyles, state) => ({
      ...defaultStyles,
      boxShadow: state.isFocused ? "0px 0px 1.5px 1.5px var(--red)" : "none",
      borderColor: state.isFocused ? "var(--red)" : "rgba(0,0,0,0.5)",
      width: "150px",
      "&:hover": {
        borderColor: state.isFocused ? "var(--red)" : "rgba(0,0,0,0.5)",
      }
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: "rgba(0,0,0,0.75)",
      borderColor: "var(--red)",
    }),
  };

  function filterEventsByCategory(dict, category) {
    if (category !== "") {
      const filteredData = {};

      for (const month in dict) {
        const eventsInMonth = dict[month].filter(event => event.category === category);

        if (eventsInMonth.length > 0) {
          filteredData[month] = eventsInMonth;
        }
      }

      return filteredData;
    }
    return dict
  };

  const newAllEvents = filterEventsByCategory(allEvents, selectedEvent)

  return (
    <>
      {/* Events Section */}
      <div className="your-component" style={{ backgroundImage: `url(${'/student-academic-council/Images/EventsBG.webp'})` }}></div>
      <div id="events">
        <h1 className="h-extrabold" style={{ color: 'var(--red)', textAlign: "center" }}>Events</h1>
        <h1 className="h-extrabold" style={{ textAlign: "center" }}>Student Academic Council</h1>
        <div className="calendar">
          <div>
            <p className="h-bold" style={{ color: 'black', marginBottom: "2px" }}>EVENT TYPE</p>
            <Select
              className="basic-single"
              name="event-select"
              options={eventOptions}
              placeholder={eventOptions[0].label}
              styles={customStyles}
              onChange={handleEvent}
            />
          </div>
          <div>
            <p className="h-bold" style={{ color: 'black', marginBottom: "2px" }}>ACADEMIC YEAR</p>
            <Select
              defaultValue={yearOptions[0]}
              className="basic-single"
              classNamePrefix="select"
              name="year-select"
              options={yearOptions}
              styles={customStyles}
              onChange={handleYear}
            />
          </div>
          {/* <div className="search">Search</div> */}
        </div>
        <h1 className="h-extrabold sac" style={{ fontSize: "1.7rem", textAlign: "center" }}>SAC EVENTS</h1>
        <div className="allEvents">
          {Object.keys(newAllEvents).map((key, outerIndex) => (
            <>
              <div className="left-box"><h3 className="h-semibold">{`${eventsDict[key][0]} ${2023 - selectedYear + eventsDict[key][1]}`}</h3></div>
              <div className="right-box" style={outerIndex%2 === 0 ? {backgroundImage: `url(${'/student-academic-council/Images/right-arrow.webp'})`}:{backgroundImage: `url(${'/student-academic-council/Images/left-arrow.webp'})`}}>
                {newAllEvents[key].map((card, index) => (
                  <div key={index}>
                    <div className="event">
                      <div className="fullEvent">
                        <h3 className="h-extrabold" style={{ fontSize: "1.5rem", textAlign: "center" }}>{card.name}</h3>
                        <div className="event-summary">
                          <p>{card.summary}</p>
                          <div className="event-know-more" onClick={() => window.open(`#/events/${key}/${card.id}`)}>Know More</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export function EventsKnownMore() {
  const loc = useLocation().pathname;
  const month = loc.split("/")[2]
  const monthEvents = allEvents[month]
  const index = loc.split("/")[3] % monthEvents.length
  var event = allEvents[month][index]

  function filterEventsByName(dict, name) {
    const filteredData = {};
    var count = 0;
    const months = Object.keys(dict);
    var monthIndex = 0;

    while (count < 3 && monthIndex < months.length) {
      const month = months[monthIndex];
      const eventsInMonth = dict[month].filter(event => event.name !== name);
      var eventIndex = 0;
      const newEvents = [];
      
      while (count < 3 && eventIndex < eventsInMonth.length) {
        newEvents.push(eventsInMonth[eventIndex]);
        count++;
        eventIndex++;
      }

      filteredData[month] = newEvents;
      monthIndex++;
    }
    return filteredData
  };
  const newAllEvents = filterEventsByName(allEvents, allEvents[month][index].name)

  return (
    <>
      {/* Known More Section */}
      <div className="your-component" style={{ backgroundImage: `url(${'/student-academic-council/Images/EventsBG.webp'})` }}></div>
      <div id="events">
        <h1 className="h-extrabold" style={{ color: 'var(--red)', textAlign: "center" }}>{event.name}</h1>
        <div className="event-details">
          <h3 className="h-semibold" style={{ display: event.description === "" ? "none" : "block" }}>{event.description}</h3>
          {Object.keys(event.links).map(key => (
            <h3 className="h-semibold" style={{ display: event.links[key] === "" ? "none" : "block" }}><span className="h-bold">{key}: </span><a href={event.links[key]} target="_blank" rel="noreferrer">Click Here</a></h3>
          ))}
          {event.rounds.map((round, index) => (
            <h3 className="h-semibold" style={{ display: round.details === "" ? "none" : "block" }}><span className="h-bold">Round {index + 1}: </span>{round.details}</h3>
          ))}
          <h3 className="h-semibold" style={{ display: event.results === "" ? "none" : "block" }}><span className="h-bold">Results: </span>{event.results}</h3>
        </div>
        <div className="moreEvents">
          <h2 className="h-bold">More Events</h2>
          <div className="events-unit">
            {Object.keys(newAllEvents).map(key => (
              <>
                {newAllEvents[key].map((card, index) => (
                  <div className="more-event-cover" key={index} style={{ display: event.name === card.name ? "none" : "flex" }}>
                    <div className="more-event" style={{ display: "flex" }}>
                      <div className="know-more" onClick={() => window.open(`#/events/${key}/${index}`)}><h3 className="h-extrabold">KNOW MORE</h3></div>
                      <div className="name"><h3 className="h-extrabold">{card.name}</h3></div>
                    </div>
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
