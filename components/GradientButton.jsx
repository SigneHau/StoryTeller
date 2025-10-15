
import React from "react";
import { Pressable, Text, View} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const GradientButton = ({ colors, onPress, text }) => {
    return (
        <View className="flex-1 justify-center items-center bg-gray-100">
      <Pressable
        onPress={onPress}
        className="w-[65%] h-20 rounded-2xl overflow-hidden">

          
        <LinearGradient
          colors={colors}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          className="flex-1 justify-center items-center rounded-2xl">


          <Text className="text-white text-lg font-semibold text-center">
            {text}
          </Text>
        </LinearGradient>
      </Pressable>
    </View>
    );
}

// export default function GradientButton({ colors, onPress, text }) {
//     return (
//         <TouchableOpacity
//             onPress={onPress}

//             style={styles.buttonWrapper}

//         >
            
//             <LinearGradient
//                 colors={colors}
//                 start={{ x: 0, y: 0.5 }}
//                 end={{ x: 1, y: 0.5 }}
//                 style={styles.gradient}

//             >
//                 <Text style={styles.buttonText}>
//                     {text}
//                 </Text>
//             </LinearGradient>
//         </TouchableOpacity>
//     );
// }

// const styles = StyleSheet.create({

//         buttonWrapper: {
        
//         width: '70%',
//         marginVertical: 15, // Giver luft over og under knappen
        
//         borderRadius: 20,
        
//         // Sørg for, at gradienten er centreret, hvis width < 100%
//         alignItems: 'center', 
//         justifyContent: 'center',
//     },
//     gradient: {
//         width: '100%',
//         paddingVertical: 20, // Gør knappen højere
//         paddingHorizontal: 15, 
//         alignItems: 'center',
//         justifyContent: 'center', 
//         borderRadius: 20, 
//     },

//     buttonText: {
//         color: 'white', 
//         fontWeight: 'bold',
//         fontSize: 14, 
//     },
// });