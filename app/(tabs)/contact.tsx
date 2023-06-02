import {
  Dimensions,
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import { TextUrdu } from '../../components/StyledUrduText';
import { TextUrduBold } from '../../components/StyledUrduTextBold';
import { Text, View } from '../../components/Themed';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';

export default function ContactScreen() {
  const theme = useColorScheme() ?? 'light';
  const dimensions = Dimensions.get('window');
  return (
    <SafeAreaView style={styles.safeViewContainer}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <LinearGradient
          colors={['green', theme === 'light' ? 'white' : 'black']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ ...styles.container, paddingHorizontal: 0, paddingVertical: 0 }}>
          <View style={{ ...styles.container }}>
            <TextUrduBold style={{ ...styles.title, flex: 1, fontSize: 25, textAlign: 'center' }}>
              ایمرجنسی کی صورت میں ان نمبرز پر رابطہ کریں۔
            </TextUrduBold>
            <View style={{ ...styles.contactContainer, flex: 2 }}>
              <TextUrdu style={{ ...styles.title, fontSize: 25 }}>
                کبیر آفریدی ڈپٹی کمشنر نوشہرہ{' '}
              </TextUrdu>
              <Pressable onPress={() => Linking.openURL('tel:09239220098')}>
                <Text style={{ ...styles.title, paddingVertical: 5, marginTop: 10 }}>
                  0923-9220098
                </Text>
              </Pressable>
              <Pressable onPress={() => Linking.openURL('tel:09239220099')}>
                <Text style={{ ...styles.title, paddingVertical: 1 }}>0923-9220099</Text>
              </Pressable>
            </View>
            <View style={{ ...styles.contactContainer, flex: 3 }}>
              <TextUrdu style={{ ...styles.title, fontSize: 25 }}> عمر بن ریاض</TextUrdu>
              <TextUrdu style={styles.title}>ایڈیشنل ڈپٹی کمشنر (ریلیف اینڈ ایچ آر)</TextUrdu>
              <Pressable onPress={() => Linking.openURL('tel:03225169626')}>
                <Text style={{ ...styles.title, paddingVertical: 5 }}>0322-5169626</Text>
              </Pressable>
            </View>
            <View style={styles.imageContainer}>
              <Image
                style={{ ...styles.image, width: dimensions.width - 40 }}
                source={require('../../assets/images/Table.png')}
              />
            </View>
            <View style={{ flex: 5 }}></View>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeViewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    backgroundColor: '#00000000',
  },
  title: {
    fontFamily: 'Lato',
    fontSize: 20,
    fontWeight: 'normal',
  },
  contactContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#00000000',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    width: 350,
    height: 300,
  },
  imageContainer: {
    flex: 4,
    backgroundColor: '#00000000',
    paddingBottom: 20,
  },
});
