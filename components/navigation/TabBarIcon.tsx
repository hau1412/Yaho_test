import React from 'react';
import * as LucideIcons from 'lucide-react-native';
import { View, StyleSheet } from 'react-native';
import { VStack } from '../ui/vstack';

type LucideIconName = keyof typeof LucideIcons;

type TabBarIconProps = {
  name: LucideIconName;
  color: string;
  focused: boolean;
  style?: object;
  size?: number;
};

export function TabBarIcon({ name, color, focused, style, size = 22, ...rest }: TabBarIconProps) {
  const IconComponent = LucideIcons[name] as React.ComponentType<{ color: string; size: number }>;

  if (!IconComponent) {
    console.error(`Icon "${name}" does not exist in Lucide icon set`);
    return null;
  }

  return (
    <VStack style={styles.container}>
      {/* Active Indicator */}
      {focused && <View style={styles.activeIndicator} />}
      
      {/* Icon */}
      <IconComponent
        color={color}
        size={size}
        style={[{ marginBottom: 0 }, style, { opacity: focused ? 1 : 2 }]}
        {...rest}
      />
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIndicator: {
    width: 30,
    height: 2,
    borderRadius: 4,
    backgroundColor: 'blue',
    marginBottom: 4,
  },
});
