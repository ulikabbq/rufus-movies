import React from 'react';

const getImageUrl = (): string => {
  const today = new Date();
  const dayOfYear = (today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24;
  const imageUrl = `http://rufusmovies.s3.amazonaws.com/image${dayOfYear}.jpg`;
  return imageUrl;
};

const HomePage: React.FC = () => {
  const imageUrl = getImageUrl();
  return (
    <div>
      <h1>Today's Image</h1>
      <img src={imageUrl} alt="Today&rsquo;s Image" />
    </div>
  );
};

export default HomePage;
