import { Button, SafeAreaView, ScrollView, StyleSheet, useColorScheme } from 'react-native';

import { useRouter } from 'expo-router';

import { Text, View } from '../../components/Themed';
import { TextUrdu } from '../../components/StyledUrduText';
import { TextUrduBold } from '../../components/StyledUrduTextBold';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';

export default function HomeScreen() {
  const theme = useColorScheme() ?? 'light';
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeViewContainer}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <LinearGradient
          colors={[
            'green',
            theme === 'light' ? 'white' : 'black',
            'mediumseagreen',
            theme === 'light' ? 'white' : 'black',
          ]}
          locations={[0, 0.3, 0.5, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../assets/images/kpk-logo.png')} />
            <Text style={{ ...styles.title, textAlign: 'center' }}>
              Dengue Awareness{'\n'} Programme
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../assets/images/mosqueto.png')} />
            <Text style={{ ...styles.title, textAlign: 'center' }}>
              Relief and HR Wing{'\n'}Deputy Commissioner office{'\n'}Nowshera
            </Text>
          </View>
          <View style={styles.textContainer}>
            <TextUrduBold style={{ ...styles.title, paddingVertical: 20, textAlign: 'center' }}>
              ڈینگی بخار
            </TextUrduBold>
            <TextUrdu style={styles.text}>
              <TextUrduBold>سبب بننے والا عنصر</TextUrduBold>
              {'\n'}
              ڈینگی بخار ڈینگی وائرس کے سبب ایک شدید مچھر سے پیدا ہونے والا انفیکشن ہے۔ یہ دنیا بھر
              میں ُمنطقَہ حارہ اور ذیلی ُمنطقَہ حارہ کے علاقوں میں پایا جاتا ہے۔مثال کے طورپر،ڈینگی
              بخارجنوب مشرقی ایشیا میں بہت سے ممالک میں ایک مقامی و متعقی مرض ہے۔ ڈینگی وائرس 4
              مختلف سیرواقسام کا احاطہ کرتا ہے، جن میں سے ہر ایک ڈینگی بخار اور شدید ڈینگی کا سبب
              بنتا ہے (جسے 'ڈینگی خون اخراجی بخار' کے طور پر بھی جانا جاتا ہے)۔
            </TextUrdu>
            <TextUrdu style={styles.text}>
              <TextUrduBold>طبی خصوصیات</TextUrduBold>
              {'\n'}
              {'\n'}
              ڈینگی بخار کی طبی طور پر علامات میں تیز بخار، سر میں شدید درد، آنکھوں کے عقب میں درد،
              پٹھوں اور جوڑوں کا درد، متلی، الٹیاں، سوجی ہوئی لمف نوڈز اور دانے نکل آنا شامل ہیں۔
              کچھ متاثرہ افراد میں ہو سکتا ہے ظاہری علامات فروغ نہ پائیں، اور بعض لوگوں میں ہو سکتا
              ہے ہلکی سی علامات ہوں جیسا کہ بخار، مثلاً بچوں میں سرخ دانوں کے ساتھ ایک ہلکی غیرمخصوص
              بخار کی بیماری ظاہر ہو سکتی ہے۔{'\n'}
              {'\n'}پہلے انفیکشن کی علامات عموماً ہلکی ہوتی ہیں۔ ایک بار ٹھیک ہو جانے کے بعد، اس
              ڈینگی وائرس کی سیروٹائپ کے خلاف زندگی بھر کے لئے امیونٹی یا قوت مدافعت پیدا ہو جاتی
              ہے۔ تاہم، بحالی کے بعد دیگر تین سیروٹائپس کے خلاف کراس-امیونٹی محض جزوی اور عارضی طور
              پر ہے۔ شدید ڈینگی میں ڈینگی وائرس کی دوسری سیروٹائپس کے ساتھ بعد کے انفیکشنز ہونے کا
              امکان ہے۔ شدید ڈینگی، ڈینگی بخار کے خلاف ایک سنگین اور ممکنہ طور پر مہلک پیچیدگی ہے۔
              ابتدائی طور پر، خصوصیات میں تیز بخار شامل ہے، جو 2 – 7 دنوں تک ہو سکتا ہے اور 40 – 41°
              Cسینٹی گریڈ کی حد تک زیادہ ہو سکتا ہے، ڈینگی سے چہرہ زرد پڑنا اور دیگر غیر مخصوص
              جسمانی علامات ہو سکتی ہیں۔ بعد میں، انتباہی علامات جیسا کہ شدید پیٹ درد، مسلسل الٹیاں،
              تیزی سے سانس لینا، تھکاوٹ، بے آرامی، اور خون بہنے کا رحجان کے مظاہرے جیسا کہ جلدی
              خراشیں، ناک یا مسوڑوں سے، اور ممکنہ طور پر داخلی خون کا بہنا واقع ہو سکتا ہے۔ سنگین
              معاملات میں، یہ خون کی گردش میں ناکامی، صدمہ اور موت میں پیش کر سکتا ہے۔{'\n'}
              {'\n'}
              <Text style={{ fontFamily: 'NotoNastaliqBold' }}>انتقال مرض کا طریقہ</Text>
              {'\n'}
              {'\n'}
              ڈینگی بخار انسانوں میں مادہ ایڈیس مچھروں کے کاٹنے کے ذریعے منتقل ہوتا ہے۔ جب ڈینگی
              بخار میں مبتلا ایک مریض کو ایک ویکٹر مچھر سے کاٹا جاتا ہے، تو وہ مچھر بھی متاثر ہو
              جاتا ہے، اور وہ دوسرے لوگوں کو کاٹ کر اس مرض کے پھیلنے کا سبب بنتا ہے۔ یہ مرض انسان سے
              انسان میں براہ راست نہیں پھیلتا ہے۔ ہانگ کانگ میں، پرنسپل ویکٹر ایڈس ایجپٹائی نہیں ملا
              ہے، لیکن ایڈس البوپکٹس ہے، یہ بھی بیماری کو پھیلا سکتا ہے، جو کہ ہانگ کانگ میں پایا
              جانے والا ایک عام مچھر ہے۔{'\n'}
              {'\n'}
              <Text style={{ fontFamily: 'NotoNastaliqBold' }}>انکیوبیشن مدت</Text>
              {'\n'}
              {'\n'}
              انکیوبیشن مدت کی حد 3 – 14 ، عام طور پر 4 – 7 دن ہے۔
            </TextUrdu>
          </View>
          <View style={{ ...styles.textContainer, paddingVertical: 10 }}>
            <TextUrdu style={{ ...styles.title, fontSize: 28 }}>ڈینگی پھیلانے والے مچھر</TextUrdu>
            <Text style={{ ...styles.title, fontSize: 22, paddingVertical: 20 }}>
              Aedes Aegypti
            </Text>
            <Image
              style={{ ...styles.image, width: 280, height: 270 }}
              source={require('../../assets/images/mosquito-1.png')}
            />
          </View>
          <View style={{ ...styles.textContainer, paddingVertical: 10 }}>
            <Text style={{ ...styles.title, fontSize: 22, paddingVertical: 20 }}>
              Aedes albopictus
            </Text>
            <Image
              style={{ ...styles.image, width: 280, height: 270 }}
              source={require('../../assets/images/mosquito-2.png')}
            />
          </View>
          <View style={{ ...styles.textContainer, paddingVertical: 20 }}>
            <TextUrdu
              style={{ ...styles.title, textAlign: 'center', fontSize: 28, paddingVertical: 50 }}>
              ڈینگی وائرس کی منتقلی اور افزائش
            </TextUrdu>
            <Image
              style={{ ...styles.image, width: 280, height: 240 }}
              source={require('../../assets/images/Dengue-virus-transmission-1.jpg')}
            />
            <Image
              style={{ ...styles.image, width: 280, height: 240, marginVertical: 40 }}
              source={require('../../assets/images/Dengue-virus-transmission.jpg')}
            />
          </View>
          <View style={styles.textContainer}>
            <TextUrdu style={{ ...styles.title, fontSize: 28 }}>ڈینگی بخار کی علامات</TextUrdu>
            <TextUrdu style={{ ...styles.text }}>
              ڈینگی بخار کی علامات اکثر معتدل ہوتی ہیں، تاہم شدید بیماری کی صورت میں ڈینگی
              بخارانتہائی خطرناک اور ممکنہ طور پر جان لیوا ثابت ہو سکتا ہے۔ ڈینگی فلو جیسی علامات کا
              سبب بنتا ہے جو اکثر 7-2 دن تک مریض کو متاثر کرتی ہیں۔ مریض کو بخار ڈینگی کے مچھر کے
              کاٹنے کے 10-4 دن کے درمیان ہوتا ہے۔ ڈینگی بخار کی علامات درج ذیل ہیں:{'\n'}
              {'\n'}
              تیز بخار {'\n'}سر میں شدید درد {'\n'}آنکھوں کے پیچھے درد{'\n'} پٹھوں، ہڈیوں یا جوڑوں
              کا درد{'\n'} جلد پر خارش{'\n'} متلی اور قے{'\n'}
              {'\n'}
              اگر آپ کو انفیکشن کے تین سے سات دنوں کے دوران ڈینگی کی کوئی شدید علامات ظاہر ہوں تو
              ہسپتال میں داخل ہونا ضروری ہو سکتا ہے۔ ڈینگی کی شدید علامات یہ ہیں:{'\n'}
              {'\n'}
              پیٹ میں شدید درد{'\n'} مسلسل قے آنا{'\n'} سانس کے مسائل {'\n'}مسوڑھوں یا ناک سے خون
              بہنا{'\n'}قے میں خون کی موجودگی{'\n'} بے چینی یا تھکاوٹ{'\n'}
              {'\n'}
              نوٹ: شدید علامات یا ڈینگی سے متعلق پیچیدگیوں کی صورت میں فوری طور پر ڈاکٹر سے رجوع
              کریں
            </TextUrdu>
            <Image
              style={{ ...styles.image, width: 280, height: 300, marginVertical: 40 }}
              source={require('../../assets/images/symptoms.jpg')}
            />
          </View>
          <View style={styles.textContainer}>
            <TextUrdu style={{ ...styles.title, fontSize: 28 }}>ڈینگی بخار کا علاج</TextUrdu>
            <TextUrdu style={{ ...styles.text, paddingTop: 20, textAlign: 'right' }}>
              اگر آپ میں ڈینگی کی علامات ظاہر ہوں تو آپ کو فوری طور پر ڈاکٹر سے رجوع کرنا چاہیے۔ اگر
              آپ کو ہلکی علامات ہیں، تو آپ کو گھریلو علاج کا مشورہ دیا جائے گا۔ شدید بیماری کی صورت
              میں آپ کو ہسپتال میں داخلے کی ضرورت پڑھ سکتی ہے۔ علاج کے دوران:{'\n'}
              {'\n'}
              زیادہ سے زیادہ آرام کریں۔{'\n'} صحت مند اور غذائیت سے بھرپور کھانا کھائیں۔{'\n'} نمکول
              یا او آر ایس کا استعمال کریں اور پانی زیادہ پئیں۔{'\n'}
              {'\n'}
              {'\n'}
              <TextUrdu style={{ fontFamily: 'NotoNastaliqBold' }}>
                نوٹ: ماہرین ڈینگی بخار کے دوران آئبوپروفین اور اسپرین جیسی ادویات لینے سے مناع کرتے
                ہیں۔ تمام ادویات ڈاکٹر کے مشورے کے بعد استعمال کریں۔
              </TextUrdu>
            </TextUrdu>
          </View>
          <View style={styles.textContainer}>
            <TextUrdu style={{ ...styles.title, fontSize: 28, textAlign: 'center' }}>
              ڈینگی سے بچاؤ کے لئے احتیاطی تدابیر
            </TextUrdu>
            <TextUrdu style={{ ...styles.text, paddingTop: 20, textAlign: 'right' }}>
              اگر آپ میں ڈینگی کی علامات ظاہر ہوں تو آپ کو فوری طور پر ڈاکٹر سے رجوع کرنا چاہیے۔ اگر
              آپ کو ہلکی علامات ہیں، تو آپ کو گھریلو علاج کا مشورہ دیا جائے گا۔ شدید بیماری کی صورت
              میں آپ کو ہسپتال میں داخلے کی ضرورت پڑھ سکتیاپنے گھر میں کیڑے مار دوا کا چھڑکاؤ کریں۔
              یہ چھڑکاؤ اندھیرے کونوں میں۔ خاص طور پر کریں، جیسے بستر کے نیچے، الماریوں کے پیچھے،
              درختوں کے نیچے، وغیرہ۔{'\n'}
              {'\n'} گھر کی کھڑکیوں اور دروازوں کو بند رکھیں۔{'\n'}
              {'\n'} مچھروں کو اندر آنے سے روکنے کے لئے گھر کے اندر مچھر بھگا ٴو کوائلز اور میٹ کا
              استعمال کریں۔{'\n'}
              {'\n'}
              اپنے گھر کے اندر یا اس کے اردگرد موجود پانی کو جمع ہونے نہ دیں۔{'\n'}
              {'\n'}
              مویشیوں کے برتن، فوارے، پودوں، وغیرہ میں باقاعدگی سے پانی نکالیں اور تبدیل کریں۔{'\n'}
              {'\n'}
              مچھروں کو داخل ہونے سے روکنے کے لئے پانی کے ٹینکوں کو ڈھانپیں۔{'\n'}
              {'\n'}
              چھت پر یا گھر کے ارد گرد ڈرین پائپوں کو صاف کریں تاکہ پانی کے بہاؤ کو بغیر کسی رکاوٹ
              کے یقینی بنایا جا سکے۔{'\n'}
              {'\n'}
              اپنی گلیوں کو صاف رکھیں اور اپنے گھر کے باہر ایسی چیز نہ رکھیں جس میں پانی جمع ہو سکے۔
              {'\n'}
              {'\n'} اپنے کوڑے کو مناسب طریقے سے ٹھکانے لگائیں۔{'\n'}
              {'\n'} اپنے محلے کے پانی کی نالیوں میں کچرا یا فضلہ نہ پھینکیں۔{'\n'}
              {'\n'} اپنے پڑوس کی باقاعدگی سے نگرانی کریں اور کھڑے پانی کو نکالیں۔
            </TextUrdu>
          </View>
          <View style={styles.buttonContainer}>
            <Button color="green" title="Contact us" onPress={() => router.push('/contact')} />
            <Button color="green" title="About us" onPress={() => router.push('/about')} />
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingBottom: 40,
  },
  button: {},
  safeViewContainer: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#00000000',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000000',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#00000000',
    paddingVertical: 15,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#00000000',
    paddingVertical: 20,
  },
  image: {
    width: 220,
    height: 220,
  },
  title: {
    fontFamily: 'Lato',
    fontSize: 22,
    fontWeight: 'normal',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
