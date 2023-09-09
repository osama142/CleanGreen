import {Image, ImageBackground, ScrollView, View} from 'react-native';
import {useOrientation} from '../hooks/Orientation';

const BackGround = ({children}) => {
  const {dimensions} = useOrientation();
  const imageHeight = (360 * dimensions.width) / 500;
  console.log(dimensions.width, dimensions.height);

  return (
    <ImageBackground
      source={require('../assets/loginBackground.jpg')}
      style={{
        height: imageHeight,
        width: dimensions.width,
      }}>
      {children}
    </ImageBackground>
  );
};

export default BackGround;
