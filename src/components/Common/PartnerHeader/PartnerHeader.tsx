import React from 'react';
import { memo } from 'react';

type HeadingProps = {
  children?: React.ReactNode;
  title: string;
};

// eslint-disable-next-line react/display-name
const PartnerHeader = memo(({ children, title }: HeadingProps) => {
  return (
    <div className="mb-3 text-[26px] flex justify-center gap-3 py-3">
      <span className=" border-2 border-blue-400 rounded-lg"></span>
      <h2 className='text-blue-950 dark:text-white text-[1.1rem] md:text-[1.3rem]  lg:text-xl'>{title}</h2>
      {children && <div>{children}</div>}
    </div>
  );
});

export default PartnerHeader;
