import { useEffect, useState } from 'react';

interface UseImgErrorProps {
  id: string;
}

const useImgError = ({ id }: UseImgErrorProps) => {
  const [retryCount, setRetryCount] = useState(0);
  const [isImgFailed, setIsImgFailed] = useState(false);
  const [imgKey, setImgKey] = useState(id + Date.now().toString());

  useEffect(() => {
    setIsImgFailed(false);
  }, [id]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (retryCount < 3) {
      setRetryCount((count) => count + 1);
      setImgKey(id + Date.now().toString());
    } else {
      setIsImgFailed(true);
    }
    console.error(`img load failed with error: ${JSON.stringify(e)}`);
  };

  return { isImgFailed, imgKey, handleError };
};

export default useImgError;
