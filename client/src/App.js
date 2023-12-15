import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRosterData } from './store/actions/rosterActions';
import { TitleCard } from './common/TitleCard';
import { Accomplishments } from './sections/Accomplishments';
import { fetchAdminsData } from './store/actions/adminsActions'
import { fetchAccomplishmentsData } from './store/actions/accomplishmentsActions';
import { GuildInfo } from './sections/GuildInfo';
import { Roster } from './sections/Roster';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import Hero from './images/Hero/florian-olivo-Mf23RF8xArY-unsplash.jpg';

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
      <section id='hero-section' style={{
        backgroundImage: `url(${Hero})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
        <TitleCard
          header={'RedShift'}
          subHeader1={'Burning Crusade Classic'}
          subHeader2={'Mankrik'}
        />
      </section>
      <Accomplishments />
      <GuildInfo />
      <Roster />
      <Footer />
    </div>
  );
}

export default App;
