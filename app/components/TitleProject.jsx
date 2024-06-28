import Image from 'next/image';
import React from 'react';

const TitleProject = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="flex justify-center items-center gap-14 flex-col text-center">
      {imageUrl && <Image src={imageUrl} alt="honda" width={92} height={92} />}
      <h2 className="text-2xl xl:text-5xl px-24 xl:px-72 leading-normal font-light">
        {title}
      </h2>
      <h4 className="xl:text-2xl px-12 xl:px-52 leading-9 font-extralight">
        {subtitle}
      </h4>
    </div>
  );
};

export default TitleProject;
