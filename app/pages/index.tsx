import React from 'react';
import Image from 'next/image';

const getImageUrl = (): string => {
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  const imageUrl = `http://rufusmovies.s3.amazonaws.com/${month}/${day}.jpg`;
  return imageUrl;
};


const HomePage: React.FC = () => {
  const imageUrl = getImageUrl();
  return (
    <div>
      <h1>Rufus&apos;s Movie of the Day</h1>
      <Image src={imageUrl} alt="Movie of the Day" width={500} height={500} />
    </div>
  );
};

export default HomePage;
