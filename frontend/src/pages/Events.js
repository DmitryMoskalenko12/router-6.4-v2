import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Some event'
  },
  {
    id: 'e2',
    title: 'Another event'
  }
]

const EventsPage = () => {
  return <>
  <h1>EventsPage</h1>
  <ul>
    {
      DUMMY_EVENTS.map(({id, title}) => {
        return <li key={id}><Link to={id}>{title}</Link></li>
      })
    }
  </ul>
  </>
}

export default EventsPage;