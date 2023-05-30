import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }:{focused: boolean}) => <TabBarIcon name="home" color={colorScheme==="light"?focused && 'green' || 'gray': focused && 'green' || 'white'} />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ focused }:{focused: boolean}) => <TabBarIcon name="phone" color={colorScheme==="light"?focused && 'green' || 'gray': focused && 'green' || 'white'} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ focused }:{focused: boolean}) => <TabBarIcon name="info-circle" color={colorScheme==="light"?focused && 'green' || 'gray': focused && 'green' || 'white'}  />,
        }}
      />
    </Tabs>
  );
}
