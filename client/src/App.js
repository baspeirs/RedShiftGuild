import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRosterData } from './store/actions/rosterActions';
import { Accomplishments } from './sections/Accomplishments';
import { fetchAdminsData } from './store/actions/adminsActions'
import { fetchAccomplishmentsData } from './store/actions/accomplishmentsActions';
import { GuildInfo } from './sections/GuildInfo';
import { Roster } from './sections/Roster';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRosterData());
    dispatch(fetchAccomplishmentsData());
    dispatch(fetchAdminsData())
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Accomplishments />
      <GuildInfo />
      <Roster />
      <Footer />
    </div>
  );
}

export default App;
