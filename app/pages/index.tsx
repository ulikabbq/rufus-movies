import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const getImageUrl = (): string => {
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  const imageUrl = `http://rufusmovies.s3.amazonaws.com/${month}/${day}.jpg`;
  return imageUrl;
};

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link href="https://www.youtube.com/channel/UCSy-iP7qqR7Grx9r4qgIK7g">
        <a className="logo-link">
          <img src="http://rufusmovies.s3.amazonaws.com/youtube-logo.png" alt="YouTube logo" className="logo" />
        </a>
      </Link>
    </header>
  );
};

const HomePage: React.FC = () => {
  const imageUrl = getImageUrl();
  return (
    <div>
      <Header />
      <Image src={imageUrl} alt="Movie of the Day" layout="fill" objectFit="contain" />
    </div>
  );
};

export default HomePage;
