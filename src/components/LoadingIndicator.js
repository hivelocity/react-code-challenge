import React, { useEffect, useState } from 'react';

function LoadingIndicator() {
  const [tooLong, setTooLong] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTooLong(true);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div>
      {tooLong
        ? `We're sorry this is taking so long. There might be a problem with the requested resource.`
        : `Loading...`}
    </div>
  );
}

export default LoadingIndicator;
