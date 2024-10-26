import { Slot } from "expo-router";
import "../global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts } from "expo-font";
import { View } from "react-native";
import '@/i18n';


export default function App() {
    const [fontsLoaded] = useFonts({
        'Averta-Regular': require('../assets/fonts/Averta-Regular.otf'),
        'Averta-Bold': require('../assets/fonts/Averta-Bold.otf'),
        'Averta-Semibold': require('../assets/fonts/Averta-Semibold.otf'),
      });
    
      if (!fontsLoaded) {
        return <View />;
      }
  return (
    <GluestackUIProvider>
      <Slot />
    </GluestackUIProvider>
  );
}
