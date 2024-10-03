import React from "react";

const TitleLogo = ({ title, caption, className }) => {
  return (
    <h1 className={`${className || ''} title-logo`}>
      <span>{caption}</span>
      {title}
    </h1>
  );
};

const TitleSm = ({ title }) => {
  return <h1 className='titleSm'>{title}</h1>;
};

const Title = ({ title, className }) => {
  return <h1 className={`${className || ''} title`}>{title}</h1>;
};

export { TitleLogo, TitleSm, Title };
