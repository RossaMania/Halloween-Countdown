import './App.css';
import DateToday from './components/datetoday';
import Countdown from './components/countdown';
import { useEffect, useState } from 'react';
import HalloweenStatus from './components/halloweenstatus';

const App = () => {
  const [isHalloween, setIsHalloween] = useState(false)

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; //Months are 0-indexed

    setIsHalloween(currentMonth === 10 && currentDate.getDate() === 31);
  }, [])


  return (
    <div>
      <DateToday />
      {isHalloween ? <HalloweenStatus /> : <Countdown />}
    </div>
  );
}

export default App;
