// import { Tabs } from 'expo-router';
// import React from 'react';

// import { HapticTab } from '@/components/haptic-tab';
// import { IconSymbol } from '@/components/ui/icon-symbol';
// import { Colors } from '@/constants/theme';
// import { useColorScheme } from '@/hooks/use-color-scheme';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//         tabBarButton: HapticTab,
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <IconSymbol size={24} name="house.fill" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="recipe"
//         options={{
//           title: 'Recipe',
//           tabBarIcon: ({ color }) => <IconSymbol size={24} name="book.fill" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="saved"
//         options={{
//           title: 'Saved',
//           tabBarIcon: ({ color }) => <IconSymbol size={24} name="bookmark.fill" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="accounts"
//         options={{
//           title: 'Accounts',
//           tabBarIcon: ({ color }) => <IconSymbol size={24} name="person.fill" color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }

import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
  <Label>{''}</Label>
        <Icon sf="house.fill" drawable="custom_android_drawable" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="recipe">
        <Icon sf="book.fill" drawable="custom_recipe_drawable" />
  <Label>{''}</Label>
      </NativeTabs.Trigger>
      
      <NativeTabs.Trigger name="saved">
        <Icon sf="bookmark.fill" drawable="custom_saved_drawable" />
        <Label>{''}</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="accounts" role='search'>
        <Icon sf="person.fill" drawable="custom_account_drawable" />
        <Label>{''}</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
