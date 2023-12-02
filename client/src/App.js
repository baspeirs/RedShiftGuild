import logo from './logo.svg';
import './App.css';
import { useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRosterData } from './store/actions/rosterActions';
import { TitleCard } from './common/TitleCard';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRosterData())
  }, [dispatch])

  return (
    <div className="App">
      <section id='header-section'>
        <TitleCard 
          header={'RedShift'}
          subHeader1={'Burning Crusade Classic'}
          subHeader2={'Mankrik'}
        />
      </section>
      <section id='accomplishments-section'>

      </section>
    </div>
  );
}

export default App;
