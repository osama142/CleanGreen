import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useState, useEffect} from 'react';
import {useOrientation} from '../hooks/Orientation';
import {ScrollView} from 'react-native-gesture-handler';
import Constants from '../assets/Constants';
import DashboardComponent from '../components/global/DashboardComponent';
import Slideshow from 'react-native-image-slider-show';
const Dashboard = ({navigation}) => {
  const {dimensions} = useOrientation();
  const buttonWidth = dimensions.width * 0.46;
  const smallButtonHeight = dimensions.height > dimensions.width ? 210 : 170;
  const largeButtonHeight = dimensions.height > dimensions.width ? 260 : 230;

  const openDrawer = () => {
    navigation.toggleDrawer();
  };
  const images = [
    {
      url: require('../assets/food1.jpg'),
      title: 'CLean Green Pakisan',
      caption: 'hello Welcome to Clean green Pakistan Pakistan',
    },
    {
      url: require('../assets/food2.jpg'),
      title: 'CLean Green Pakisan',
      caption: 'hello Welcome to Clean green Pakistan Pakistan',
    },
    {
      url: require('../assets/food3.jpg'),
      title: 'CLean Green Pakisan',
      caption: 'hello Welcome to Clean green Pakistan Pakistan',
    },
  ];

  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition(prevPosition =>
        prevPosition === images.length - 1 ? 0 : prevPosition + 1,
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={{backgroundColor: '#F3F3F3'}}>
      <View style={[styles.container]}>
        <TouchableOpacity onPress={openDrawer}>
          <Constants.SVG.listIcon height={25} width={25} />
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <Constants.SVG.flowerIcon height={80} width={70} />
          <Text>
            <Text style={styles.greenText}>CLEAN</Text>
            <Text style={styles.darkGreenText}>GREEN</Text>
            <Text style={styles.greenText}>Pakistan</Text>
          </Text>
        </View>
        <Constants.SVG.languageIcon
          height={25}
          width={25}
          style={{marginRight: 20}}
        />
        <Constants.SVG.searchIcon height={25} width={25} />
      </View>
      <View style={{marginHorizontal: dimensions.width * 0.02}}>
        <Text style={styles.textStyle}>Welcome to</Text>
        <Text
          style={[
            styles.textStyle,
            {fontSize: 27, fontWeight: '600', marginBottom: 15},
          ]}>
          Clean Green Pakistan
        </Text>
        <View style={styles.subcontainer}>
          <Slideshow
            dataSource={images}
            scrollEnabled={true}
            position={currentPosition}
            height={200}
            arrowSize={0}
            titleStyle={styles.titleStyle}
            captionStyle={styles.captionStyle}
          />
        </View>
        <View style={[styles.iconContainer, {width: dimensions.width * 0.9}]}>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Constants.SVG.approvedIcon height={70} width={70} />
            <Text
              style={{
                fontSize: 19,
                fontWeight: '500',
                color: 'black',
                marginTop: 10,
              }}>
              Approved
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Constants.SVG.pendingIcon height={70} width={70} />
            <Text
              style={{
                fontSize: 19,
                fontWeight: '500',
                color: 'black',
                marginTop: 10,
              }}>
              Pending
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Constants.SVG.dislikeIcon height={70} width={70} />
            <Text
              style={{
                fontSize: 19,
                fontWeight: '500',
                color: 'black',
                marginTop: 10,
              }}>
              Declined
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Constants.SVG.earnedIcon height={70} width={70} />
            <Text
              style={{
                fontSize: 19,
                fontWeight: '500',
                color: 'black',
                marginTop: 10,
              }}>
              Earned Points
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.txtstyle}>Other Tasks</Text>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginBottom: 13,
          }}>
          <View style={{marginRight: 15}}>
            <DashboardComponent
              customStyle={{
                height: largeButtonHeight,
                width: buttonWidth,
              }}
              Icon={Constants.SVG.addIcon}
              EnglishText={'Add New Activity'}
              UrduText={'ڈیٹا جمع کریں'}
            />
            <DashboardComponent
              customStyle={{
                height: smallButtonHeight,
                width: buttonWidth,
              }}
              Icon={Constants.SVG.covidIcon}
              EnglishText={'Covid-19'}
              UrduText={'کووِڈ-19'}
            />
            <DashboardComponent
              customStyle={{
                height: smallButtonHeight,
                width: buttonWidth,
              }}
              Icon={Constants.SVG.resourceIcon}
              EnglishText={'Resources'}
              UrduText={'وسائل'}
            />
            <DashboardComponent
              customStyle={{
                height: largeButtonHeight,
                width: buttonWidth,
              }}
              Icon={Constants.SVG.surveyIcon}
              EnglishText={'Survey'}
              UrduText={'سروے'}
            />
          </View>
          <View>
            <DashboardComponent
              customStyle={{
                height: smallButtonHeight,
                width: buttonWidth,
              }}
              Icon={Constants.SVG.activityIcon}
              EnglishText={'Submitted Activity'}
              UrduText={'جمع کردہ سرگرمیاں'}
            />
            <DashboardComponent
              customStyle={{
                height: largeButtonHeight,
                width: buttonWidth,
              }}
              Icon={Constants.SVG.mapIcon}
              EnglishText={'Maps Activity'}
              UrduText={'نقشے کی سرگرمیاں'}
            />
            <DashboardComponent
              customStyle={{
                height: largeButtonHeight,
                width: buttonWidth,
              }}
              Icon={Constants.SVG.trainingIcon}
              EnglishText={'Trainings'}
              UrduText={'تربیت'}
            />
            <DashboardComponent
              customStyle={{
                height: smallButtonHeight,
                width: buttonWidth,
              }}
              Icon={Constants.SVG.supportIcon}
              EnglishText={'Support'}
              UrduText={'سپورٹ'}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: 'white',
    marginBottom: 12,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 5,
  },
  dot: {
    backgroundColor: 'grey',
  },
  activeDot: {
    backgroundColor: 'red',
  },
  image: {
    width: '90%',
    height: 90,
  },
  textStyle: {
    fontSize: 22,
    color: 'black',
    fontWeight: '700',
  },
  greenText: {
    color: '#a7c957',
    fontSize: 20,
    fontWeight: 'bold',
  },
  darkGreenText: {
    color: '#6a994e',
    fontSize: 20,
    fontWeight: 'bold',
  },
  txtstyle: {
    fontWeight: '600',
    color: 'black',
    fontSize: 22,
  },
  IconStyle: {
    flexDirection: 'row',
    borderRadius: 14,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: 13,
  },
  subcontainer: {
    flex: 1,
    height: 200,
    alignSelf: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
  },
  titleStyle: {
    color: 'white',
    fontSize: 20,
  },
  captionStyle: {
    color: 'white',
    width: 220,
    fontSize: 20,
  },
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 28,
  },
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    bottom: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: '#48CEF6',
  },
  img: {
    width: 30,
    height: 30,
  },
});

export default Dashboard;
