import React from 'react';

import Card from '../Card/Card';

export const TimeElement = ({ children }) => {
  return (
    <>
      <Card className="box-border relative before:content-[''] before:size-4 before:bg-primarytext before:absolute before:top-6 before:-left-6 before:-translate-x-1/2 before:rotate-45 before:rounded-sm ml-6">
        {children}
      </Card>
    </>
  );
};

const Timeline = ({ children }) => {
  return (
    <section className={`pl-3 flex-1 relative space-y-4`}>
      {children}
      <div className={`absolute top-0 left-3 h-full bg-glassyedge w-1 rounded-full !mt-0`}></div>
    </section>
  );
};

export default Timeline;
