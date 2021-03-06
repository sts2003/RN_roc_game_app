import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CURRENT_WIDTH = Dimensions.get(`window`).width;

const App = () => {
  const [tab, setTab] = useState(0);

  const _startBtnClickCHandler = (value) => {
    setTab(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inGameArea}>
        {tab === 0 && (
          <TouchableOpacity
            style={styles.startBtn}
            onPressOut={() => _startBtnClickCHandler(1)}
          >
            <Text style={styles.startBtnText}>START GAME</Text>
          </TouchableOpacity>
        )}
        {tab === 1 && (
          <View>
            <View style={styles.inGameTop}>
              <Text>Top</Text>
            </View>
            <View style={styles.inGameMid}>
              <LinearGradient
                style={styles.vsView}
                colors={["#7ed6df", "#dff9fb"]}
                locations={[0.8, 0.5]}
                start={["left", "right"]}
              >
                <Text style={styles.vsText}>VS</Text>
              </LinearGradient>
            </View>
            <View style={styles.inGameBot}>
              <Text>Bot</Text>
            </View>
          </View>
        )}
      </View>
      <View style={styles.resultArea}>
        <View style={styles.resultAreaTop}></View>
        <View style={styles.resultAreaBottom}>
          {tab === 1 && (
            <TouchableOpacity
              style={styles.startBtn}
              onPressOut={() => _startBtnClickCHandler(0)}
            >
              <Text style={styles.startBtnText}>RESTART</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inGameArea: {
    flex: 8,
    alignItems: `center`,
    justifyContent: `center`,
  },
  inGameTop: {
    flex: 4,
    alignItems: `center`,
    justifyContent: `center`,
  },

  inGameMid: {
    flex: 2,
    alignItems: `center`,
    justifyContent: `center`,
  },

  vsView: {
    width: CURRENT_WIDTH,
    height: 50,

    alignItems: `center`,
    justifyContent: `center`,
  },

  vsText: {
    fontSize: 22,
    fontWeight: `600`,
    color: `#fff`,
  },

  inGameBot: {
    flex: 4,
    alignItems: `center`,
    justifyContent: `center`,
  },

  resultArea: {
    flex: 2,
    alignItems: `center`,
    justifyContent: `center`,
    backgroundColor: `#4834d4`,
  },
  resultAreaTop: {
    flex: 2,
    alignItems: `center`,
    justifyContent: `center`,
  },
  resultAreaBottom: {
    flex: 2,
    alignItems: `center`,
    justifyContent: `center`,
  },
  startBtn: {
    width: CURRENT_WIDTH / 2,
    height: 45,
    backgroundColor: `#7ed6df`,
    borderRadius: 6,
    alignItems: `center`,
    justifyContent: `center`,
  },
  startBtnText: {
    color: `#fff`,
    fontWeight: `700`,
    fontSize: 18,
  },
});

export default App;
