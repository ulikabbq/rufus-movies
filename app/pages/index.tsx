import React from 'react';
import Image from 'next/image';

const getImageUrl = (): string => {
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  const imageUrl = `https://rufusmovies.s3.amazonaws.com/${month}/${day}.jpg`;
  return imageUrl;
};


const HomePage: React.FC = () => {
  const imageUrl = getImageUrl();
  return (
    <div>
      <h1>Today&apos;s Image</h1>
      <Image src={imageUrl} alt="Today's Image" width={500} height={500} />
    </div>
  );
};

export default HomePage;
