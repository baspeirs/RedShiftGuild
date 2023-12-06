import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRosterData } from './store/actions/rosterActions';
import { TitleCard } from './common/TitleCard';
import { Accomplishments } from './sections/Accomplishments';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRosterData());
  }, [dispatch]);


  return (
    <div className="App">
      <section id='header-section'>
        <TitleCard
          header={'RedShift'}
          subHeader1={'Burning Crusade Classic'}
          subHeader2={'Mankrik'}
        />
      </section>
      <Accomplishments />
      <section>
        <h1>Look at me</h1>
      </section>
    </div>
  );
}

export default App;
