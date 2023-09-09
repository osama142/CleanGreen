import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};
export function useOrientation() {
  const {width, height} = Dimensions.get('window');
  const rem = width / 100;
  const dimensions = {
    width,
    height,
    rem,
  };
  const [orientation, setOrientation] = useState(
    isPortrait() ? 'PORTRAIT' : 'LANDSCAPE',
  );
  useEffect(() => {
    const callback = () =>
      setOrientation(isPortrait() ? 'PORTRAIT' : 'LANDSCAPE');
    const listener = Dimensions.addEventListener('change', callback);
    return () => {
      listener.remove();
    };
  }, []);
  return {orientation, dimensions};
}

