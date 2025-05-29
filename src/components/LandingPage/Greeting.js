import React, { useEffect, useState } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const hour = currentTime.getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting('Good Morning');
    } else if (hour >= 12 && hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, [currentTime]);

  return (
    <div className="text-center py-10 md:py-14">
      <h1 className="text-2xl md:text-3xl text-white">
        {greeting}, <span className="font-bold">John Doe</span>
      </h1>
      <p className="text-gray-400 mt-2 text-2xl md:text-3xl">How can I help you today?</p>
    </div>
  );
};

export default Greeting;