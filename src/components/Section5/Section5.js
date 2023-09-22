import React from 'react';
import './Section5.css';

const TimelineItem = ({ date, title, description }) => (
  <div className='row'>
    <section className='date'>
      <span>{date}</span>
    </section>
    <section className='line'>
      <span className='ball'></span>
    </section>
    <section className='content'>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  </div>
);

const Timeline = () => {
  const timelineData = [
    {
      date: '3rd Jan, 2023',
      title: 'Some title',
      description: 'lorem ipsum dolar sit imer, conde lorem ipsum dolar sit imer, condelorem ipsum dolar sit imer, conde',
    },
    {
      date: '4th Jan, 2023',
      title: 'Another title',
      description: 'lorem ipsum dolar sit imer, conde lorem ipsum dolar sit imer, condelorem ipsum dolar sit imer, conde',
    },
    {
      date: '5th Jan, 2023',
      title: 'Third title',
      description: 'lorem ipsum dolar sit imer, conde lorem ipsum dolar sit imer, condelorem ipsum dolar sit imer, conde',
    },
    {
      date: '6th Jan, 2023',
      title: 'Fourth title',
      description: 'lorem ipsum dolar sit imer, conde lorem ipsum dolar sit imer, condelorem ipsum dolar sit imer, conde',
    },
    {
      date: '7th Jan, 2023',
      title: 'Fifth title',
      description: 'lorem ipsum dolar sit imer, conde lorem ipsum dolar sit imer, condelorem ipsum dolar sit imer, conde',
    },
    {
      date: '8th Jan, 2023',
      title: 'Sixth title',
      description: 'lorem ipsum dolar sit imer, conde lorem ipsum dolar sit imer, condelorem ipsum dolar sit imer, conde',
    },
  ];

  return (
    <div className='w-full py-5 mx-auto text-black'>
      {timelineData.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Timeline;
