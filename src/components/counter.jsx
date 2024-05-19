import React, { useEffect, useRef, useState } from 'react';
import '../componentscss/counter.css';

const Counter = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('July 25, 2024 00:00:00').getTime();


    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <section className='timer-container'>
      <section className='timer'>
        <div>
          <section>
            <p>{timerDays}</p>
            <p className='info'>Days</p>
          </section>
          <span>:</span>
          <section>
            <p>{timerHours}</p>
            <p className='info'>Hours</p>
          </section>
          <span>:</span>
          <section>
            <p>{timerMinutes}</p>
            <p className='info'>Minutes</p>
          </section>
          <span>:</span>
          <section>
            <p>{timerSeconds}</p>
            <p className='info'>Seconds</p>
          </section>
        </div>
      </section>
    </section>
  );
}

export default Counter;
