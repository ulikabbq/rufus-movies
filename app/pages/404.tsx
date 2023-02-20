import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the homepage after 15 seconds
    const timeoutId = setTimeout(() => {
      router.push('/');
    }, 15000);

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timeoutId);
  }, [router]);

  return (
    <div>
      <img src="http://rufusmovies.s3.amazonaws.com/404.png" alt="404" />
    </div>
  );
}
