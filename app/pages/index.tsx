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

const HomePage: React.FC = () => {
  const imageUrl = getImageUrl();
  return (
    <div>
      <header>
        <Link href="https://www.youtube.com/">
          <a>
            <img src="http://rufusmovies.s3.amazonaws.com/youtube-logo.png" alt="YouTube" />
          </a>
        </Link>
      </header>
      <Image src={imageUrl} alt="Rufus Movie of the Day" />
    </div>
  );
};

export default HomePage;