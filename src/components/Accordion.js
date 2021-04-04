import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState('');
  const onTitleClick = index => {
    setActiveIndex(index);
  };
  const renderItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : 'ok';
    return (
      <div className="ui accordion" key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p className="transition">{item.content}</p>
        </div>
      </div>
    );
  });
  return <div>{renderItems}</div>;
};

export default Accordion;
