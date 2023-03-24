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
import { Dropdown } from "react-native-element-dropdown";

const Home = () => {
  const BreakFastData = [
    { label: "egg", value: 100 },
    { label: "oatmeal", value: 200 },
    { label: "yogurt", value: 120 },
  ];
  const LunchData = [
    { label: "salad", value: 250 },
    { label: "sandwich", value: 350 },
    { label: "soup", value: 150 },
  ];
  const DinnerData = [
    { label: "chicken", value: 400 },
    { label: "fish", value: 300 },
    { label: "vegetarian", value: 250 },
  ];
  const [BreakFastvalue, setBreakfastValue] = useState(null);
  const [BreakFastisFocus, setBreakFastIsFocus] = useState(false);
  const [Lunchvalue, setLunchValue] = useState(null);
  const [LunchisFocus, setLunchIsFocus] = useState(false);
  const [Dinnervalue, setDinnerValue] = useState(null);
  const [DinnerisFocus, setdinnerIsFocus] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.Container}>
      <View style={styles.MainView}>
        <Text style={styles.Heading}>Diet Plan Generator</Text>
        <View>
          <View>
            <Text
              style={[
                styles.NormalText,
                { marginTop: 20, color: "rgba(0, 0, 77, 1)" },
              ]}
            >
              Weight (in pounds)
            </Text>
            <TextInput
              placeholder="50.40"
              style={styles.InputText}
              keyboardType={"number-pad"}
            />
          </View>
          <View>
            <Text
              style={[
                styles.NormalText,
                { marginTop: 20, color: "rgba(0, 0, 77, 1)" },
              ]}
            >
              Desired daily calorie intake
            </Text>
            <TextInput
              placeholder="100"
              style={styles.InputText}
              keyboardType={"number-pad"}
            />
          </View>
          <View>
            <Text
              style={[
                styles.NormalText,
                { marginTop: 20, color: "rgba(0, 0, 77, 1)" },
              ]}
            >
              Breakfast
            </Text>
            <Dropdown
              style={[
                styles.InputText,
                BreakFastisFocus && { borderColor: "rgba(0, 0, 77, 1)" },
              ]}
              data={BreakFastData}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!DinnerisFocus ? "Select item" : "..."}
              searchPlaceholder="Search..."
              value={BreakFastvalue}
              onFocus={() => setBreakFastIsFocus(true)}
              onBlur={() => setBreakFastIsFocus(false)}
              onChange={(item) => {
                setBreakfastValue(item.value);
                setBreakFastIsFocus(false);
              }}
            />
          </View>
          <View>
            <Text
              style={[
                styles.NormalText,
                { marginTop: 20, color: "rgba(0, 0, 77, 1)" },
              ]}
            >
              Lunch
            </Text>
            <Dropdown
              style={[
                styles.InputText,
                LunchisFocus && { borderColor: "rgba(0, 0, 77, 1)" },
              ]}
              data={LunchData}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!LunchisFocus ? "Select item" : "..."}
              searchPlaceholder="Search..."
              value={Lunchvalue}
              onFocus={() => setLunchIsFocus(true)}
              onBlur={() => setLunchIsFocus(false)}
              onChange={(item) => {
                setLunchValue(item.value);
                setLunchIsFocus(false);
              }}
            />
          </View>
          <View>
            <Text
              style={[
                styles.NormalText,
                { marginTop: 20, color: "rgba(0, 0, 77, 1)" },
              ]}
            >
              Dinner
            </Text>
            <Dropdown
              style={[
                styles.InputText,
                DinnerisFocus && { borderColor: "rgba(0, 0, 77, 1)" },
              ]}
              data={DinnerData}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!DinnerisFocus ? "Select item" : "..."}
              searchPlaceholder="Search..."
              value={Dinnervalue}
              onFocus={() => setdinnerIsFocus(true)}
              onBlur={() => setdinnerIsFocus(false)}
              onChange={(item) => {
                setDinnerValue(item.value);
                setdinnerIsFocus(false);
              }}
            />
          </View>
          <TouchableOpacity style={styles.SubmitButton}>
            <Text
              style={[styles.NormalText, { color: "rgba(255, 255, 255, 1)" }]}
            >
              Generate Diet Plan
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  Container: {
    minHeight: height,
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "center",
  },
  MainView: {
    width: width * 0.85,
  },
  Heading: {
    fontSize: 30,
    fontWeight: "600",
    marginTop: height * 0.1,
    color: "rgba(53, 26, 150, 1)",
    lineHeight: 40,
    alignSelf: "center",
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
  dropdown: {
    borderWidth: 1,
    marginTop: 10,
    height: 40,
    borderRadius: 5,
    borderColor: "rgba(198, 198, 198, 1)",
    paddingLeft: 10,
  },
  SubmitButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(53, 26, 150, 1)",
    height: 45,
    borderRadius: 5,
    marginTop: 50,
  },
});
