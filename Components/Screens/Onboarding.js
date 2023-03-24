import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
const { height, width } = Dimensions.get("window");

const Onboarding = ({ navigation }) => {
  const Data = [
    {
      id: 1,
      Title: "Eat Healthy",
      Info: "Maintaining good health should be the primary focus of everyone.",
      Image: require("../Assets/OnBoarding1.png"),
    },
    {
      id: 2,
      Title: "Healthy Recipes",
      Info: "Browse thousands of healthy recipes from all over the world.",
      Image: require("../Assets/OnBoarding2.png"),
    },
    {
      id: 3,
      Title: "Track Your Health",
      Info: "With amazing inbuilt tools you can track your progress.",
      Image: require("../Assets/OnBoarding3.png"),
    },
  ];
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const slideRef = useRef(null);
  const ViewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <View style={{height:height*0.70}}>
        <FlatList
          data={Data}
          renderItem={({ item }) => (
            // <OnBoardingItems item={item} />
            <View>
              <View style={styles.ImageInfoView}>
                <Image source={item.Image} style={styles.Image} />
                <Text style={styles.Title}>{item.Title}</Text>
                <Text style={styles.Desc}>{item.Info}</Text>
              </View>
            </View>
          )}
          horizontal
          showsVerticalScrollIndicator
          pagngEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={ViewConfig}
          ref={slideRef}
        />
        <View style={styles.DotView}>
          {Data.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
            const dotWidth = scrollX.interpolate({
              inputRange,
              outputRange: [10, 20, 10],
              extrapolate: "clamp",
            });
            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                style={[styles.dot, { width: dotWidth, opacity: opacity }]}
                key={i.toString()}
              />
            );
          })}
        </View>
      </View>
      <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate('Login')}>
        <Text style={styles.Heading}>Get Started</Text>
      </TouchableOpacity>
      <View style={styles.SignupView}>
            <Text style={[styles.NormalText,{color:'rgba(153, 158, 161, 1)'}]}>Don’t have an account ? </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
              <Text style={[styles.NormalText,{color:'rgba(22, 0, 98, 1)'}]}> Sign Up</Text>
            </TouchableOpacity>
          </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    minHeight: height,
    backgroundColor: "#ffff",
    width: width,
  },
  ImageInfoView: {
    width: width,
    alignItems: "center",
    // backgroundColor: "orange",
  },
  Image: {
    // marginTop:height*0.10,
    width: width * 0.9,
    height: height * 0.5,
    resizeMode: "contain",
    // backgroundColor: "red",
  },
  Title: {
    fontSize: 25,
    fontWeight: "600",
    color: "rgba(0, 0, 0, 0.85)",
    marginBottom: height * 0.02,
    alignSelf: "center",
  },
  Desc: {
    fontSize: 17,
    width: width * 0.8,
    textAlign: "center",
    lineHeight: 21,
    fontWeight: "400",
    color:'rgba(0, 0, 0, 0.45)'
    // marginBottom: height*0.05
  },
  DotView: {
    flexDirection: "row",
    // height: 64,
    // backgroundColor: "black",
    justifyContent: "center",
  },
  dot: {
    height: 10,
    borderRadius: 20,
    backgroundColor: "rgba(255, 132, 115, 1)",
    marginHorizontal: 5,
  },
  Button: {
    width: width * 0.8,
    height: height*0.1,
    marginTop: height*0.050,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 77, 1)",
    borderRadius: 24,
  },
  Heading: {
    fontSize: 25,
    fontWeight: "600",
    letterSpacing: 2,
    color: "rgba(255, 255, 255, 1)",
  },
  SignupView:{
    width:width,
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'center',
    // backgroundColor:'red',
    marginTop:height*0.02
  },
  NormalText:{
    fontSize: 17,
    // width: width * 0.8,
    textAlign: "center",
    lineHeight: 21,
    fontWeight: "400",
    color:'rgba(0, 0, 0, 0.45)'
  }
});
