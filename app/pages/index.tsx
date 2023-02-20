import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

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
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="https://www.youtube.com/@Rufus_Marlow">
            <a>
              <img src="http://rufusmovies.s3.amazonaws.com/youtube-logo.png" alt="YouTube" />
            </a>
          </Link>
        </div>
        <div className={styles.logo}>
          <Link href="https://open.spotify.com/show/6F4SUKmpLn9KVrgUrwI3yr">
            <a>
              <img src="http://rufusmovies.s3.amazonaws.com/spotify-logo.png" alt="Spotify" />
            </a>
          </Link>
        </div>
      </header>
      <Image src={imageUrl} alt="Rufus Movie of the Day" />
    </div>
  );
};

export default HomePage;
