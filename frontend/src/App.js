import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/Home';
import EventsPage, {loader as eventLoader} from './pages/Events';
import EditEventsPage from './pages/EditEvent';
import NewEventPage, {action as newEventsAction} from './pages/NewEvent';
import EventDetailPage, {loader as eventDetailLoader} from './pages/EventDetail';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {path: '/', element: <RootLayout/>,errorElement: <ErrorPage/>, children:[
    {index: true, element: <HomePage/>},
    {path: 'events', element: <EventsRootLayout/>, children: [
      {index: true, element: <EventsPage/>, loader: eventLoader},
      {path: ':eventId', id: 'event-detail', loader: eventDetailLoader, children: [
        {index: true, element: <EventDetailPage/>},
        {path: 'edit', element: <EditEventsPage/>},
      ]},
      {path: 'new', element: <NewEventPage/>, action: newEventsAction},
    ]},
  ]},
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
