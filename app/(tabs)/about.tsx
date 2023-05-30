import {Linking, Pressable, SafeAreaView, ScrollView, StyleSheet, TextInput, useColorScheme} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Dimensions} from 'react-native';

import { Text, View } from '../../components/Themed';

const screenDimensions = Dimensions.get('screen');
export default function ContactScreen() {
  const theme = useColorScheme() ?? 'light';
  return (
      <SafeAreaView style={styles.safeViewContainer}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <LinearGradient colors={['green', theme === 'light'? 'white':'black']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>About</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <Text style={styles.text}>This App is designed for Dengue Awareness Programme in District Nowshera. Any Suggestions/ Complaints Regarding this App Please do Contact on the following numbers.</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <Text style={styles.text}>        یہ ایپ ضلع نوشہرہ میں ڈینگی آگاہی پروگرام کے لیے بنائی گئی ہے۔ اس ایپ کے حوالے سے کوئی بھی مشورے/شکایات برائے مہربانی درج ذیل نمبرز پر رابطہ کریں۔</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <View style={styles.contactContainer}>
            <Image
                style={styles.image}
                source={require('../../assets/images/Android-Logo.png')}
            />
            <Text style={styles.text}>Bilal Khan{"\n"}
              Developer Dengue Awareness Programme District Relief Assistant Deputy Commissioner Office Nowshera</Text>
            <Pressable style={{flex:1}}  onPress={()=>Linking.openURL('whatsapp://send?text=Hi&phone=+923369220099')}>
              <View style={styles.phoneContainer}>
                <FontAwesome style={styles.phoneIcon} size={28} name="whatsapp" color="green" />
                <Text style={styles.phoneText}>0336-9220099</Text>
              </View>
            </Pressable>
            <Pressable style={{flex:1}}  onPress={()=>Linking.openURL('tel:03369220099')}>
            <View style={styles.phoneContainer}>
              <FontAwesome style={styles.phoneIcon} size={28} name="phone" color="green"/>
              <Text style={styles.phoneText} >0336-9220099</Text>
            </View>
            </Pressable>
          </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    backgroundColor: '#00000000',
  },
  title: {
    paddingTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
  },
  phoneText: {
    fontSize: 18,
    textDecorationLine:'underline',
  },
  phoneContainer:{
    flex:1,
    flexDirection: 'row',
    alignItems:'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop:10
  },
  phoneIcon:{
    marginRight: 10
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: 300,
  },
  contactContainer:{
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    paddingBottom:50,
    backgroundColor: '#00000000'
  },
  image: {
    width: 100,
    height:50,
  },
});
