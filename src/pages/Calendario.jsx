import React, { useState } from 'react'
import '@fullcalendar/react/dist/vdom';
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { v4 as uuid } from "uuid";

import Interface from '../components/Interface';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import LinkButton from '../components/LinkButton';
import { useStateContext } from '../contexts/ContextProvider';
import styled from 'styled-components';
import ThemeSettings from '../components/ThemeSettings';

export default function Calendario() {
  const { themeSettings } = useStateContext();
  const [events, setEvents] = useState([]);

  const handleSelect = (info) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Enter, event name");
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {
          start,
          end,
          title: eventNamePrompt,
          id: uuid(),
        },
      ]);
    }
  };

  const EventItem = ({ info }) => {
    const { event } = info;
    return (
      <div>
        <p>{event.title}</p>
      </div>
    );
  };

  return (
    <Display>
      <Interface elemento='Deberia salir aquí' />
      <Content>
        <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full`}
          style={{ width: '100%' }}>
          <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            <Navbar />
          </div>

          <div className='m-2 mt-20 md:m-10 p-4 md:p-8 md:mt-20 bg-white rounded-3xl'>
            <Header title="Calendario" category="App" />
            {/* iFrame de Google Calendar */}
            {/* <IframeCalendar src="https://calendar.google.com/calendar/embed?src=4b9kplt1g934ue8ue3jea1mbcs%40group.calendar.google.com&ctz=Europe%2FMadrid"></IframeCalendar> */}
            <DivCalendario>
              <FullCalendar
                editable
                selectable
                events={events}
                select={handleSelect}
                headerToolbar={{
                  start: "today prev next",
                  end: "dayGridMonth dayGridWeek dayGridDay",
                }}
                eventContent={(info) => <EventItem info={info} />}
                plugins={[daygridPlugin, interactionPlugin]}
                views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
              />
            </DivCalendario>
          </div>
          <div>
            {themeSettings && (<ThemeSettings />)}
          </div>

        </div>
      </Content>
    </Display>
  )
}

export const Display = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

export const IframeCalendar = styled.iframe`
  width: 100%;
  height: 70vh;

  table {
    background-color: red;
  }
`;

export const DivCalendario = styled.div``;