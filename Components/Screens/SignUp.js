import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
const { height, width } = Dimensions.get("window");
const SignUp = ({ navigation }) => {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [Name, setName] = useState();

  return (
    <ScrollView contentContainerStyle={styles.Container}>
      <View style={styles.MainView}>
        <View style={{ height: height * 0.2 }}>
          <Text style={styles.LoginText}>SignUp</Text>
        </View>
        <View style={{ height: height * 0.5 }}>
          <Text style={styles.HeadingText}>Create an account</Text>

          <View>
            <Text
              style={[
                styles.NormalText,
                { marginTop: 20, color: "rgba(0, 0, 77, 1)" },
              ]}
            >
              Email Address
            </Text>
            <TextInput
              placeholder="sampleemail.gmail.com"
              style={styles.InputText}
              onChangeText={(Text) => setEmail(Text)}
            />
          </View>
          <View>
            <Text
              style={[
                styles.NormalText,
                { marginTop: 20, color: "rgba(0, 0, 77, 1)" },
              ]}
            >
              Name
            </Text>
            <TextInput
              placeholder="Your Name..."
              style={styles.InputText}
              onChangeText={(Text) => setName(Text)}
            />
          </View>
          <View>
            <Text
              style={[
                styles.NormalText,
                { marginTop: 20, color: "rgba(0, 0, 77, 1)" },
              ]}
            >
              Password
            </Text>
            <TextInput
              placeholder="Password"
              style={styles.InputText}
              secureTextEntrysvcg
              onChangeText={(Text) => setPassword(Text)}
            />
          </View>
        </View>
        <View style={{ height: height * 0.3 }}>
          <TouchableOpacity style={styles.SubmitButton}>
            <Text
              style={[styles.NormalText, { color: "rgba(255, 255, 255, 1)" }]}
            >
              Login
            </Text>
          </TouchableOpacity>
          <View style={styles.SignupView}>
            <Text
              style={[styles.NormalText, { color: "rgba(153, 158, 161, 1)" }]}
            >
              Already have an account ?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={[styles.NormalText, { color: "rgba(22, 0, 98, 1)" }]}
              >
                {" "}
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  Container: {
    minHeight: height,
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "center",
  },
  MainView: {
    width: width * 0.85,
  },
  LoginText: {
    fontSize: 30,
    fontWeight: "600",
    marginTop: height * 0.1,
    color: "rgba(53, 26, 150, 1)",
    lineHeight: 40,
    alignSelf: "center",
  },
  HeadingText: {
    fontSize: 25,
    fontWeight: "600",
    lineHeight: 34,
    color: "rgba(0, 0, 0, 1)",
    marginTop: 20,
  },
  NormalText: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(31, 31, 31, 1)",
  },
  InputText: {
    borderWidth: 1,
    marginTop: 10,
    height: 40,
    borderRadius: 5,
    borderColor: "rgba(198, 198, 198, 1)",
    paddingLeft: 10,
  },
  ForgotText: {
    color: "rgba(251, 52, 79, 1)",
    marginTop: 10,
    alignSelf: "flex-end",
  },
  SubmitButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(53, 26, 150, 1)",
    height: 45,
    borderRadius: 5,
  },
  SignupView: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "flex-end",
    // backgroundColor:'red',
    marginTop: "20%",
  },
});
