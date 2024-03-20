import { Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import profileImage from "../../assets/168608-charlotte-de-witte-brussels-ep.png";
import { ProgressBar } from "react-native-paper";
import { styles } from "../../styles";
import { useState } from "react";

const play = "caretright";
const pause = "pause";

export default function ProfileScreen() {
  const [playButton, setPlayButton] = useState(play);

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image
          style={styles.cover}
          source={profileImage}
          accessibilityLabel="Album Cover"
        />
        <Text style={styles.text}>Charlotte De Witte</Text>
        <ProgressBar
          progress={0.1}
          color="#BED754"
          style={styles.progressBar}
          visible={true}
        />
      </View>
      <View style={styles.containerControllers}>
        <TouchableOpacity style={styles.step}>
          <AntDesign name="stepbackward" size={30} color="#191919" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playPause}
          onPress={() => {
            playButton === play ? setPlayButton(pause) : setPlayButton(play);
          }}
        >
          <AntDesign name={playButton} size={40} color="#191919" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.step}>
          <AntDesign name="stepforward" size={30} color="#191919" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
