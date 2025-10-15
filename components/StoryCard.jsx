import React from "react";
import { View, Text, Image } from "react-native";

export const StoryCard = ({ title, imageUrl }) => {
  return (
   
     <View className="flex-1 justify-center items-center bg-gray-100">
    <View className="bg-white rounded-xl p-5 m-2 items-center w-[180px] h-[280px]">
      
      {/* Billede: Fast størrelse, afrunding, margin-bund. */}
      <Image 
        source={{ uri: imageUrl }} 
        className="w-[180px] h-[150px] rounded-lg mb-2.5" 
      />
      
      {/* Titel: Typografi og margin. */}
      <Text className="text-sm font-bold mb-1.5">{title}</Text>
      </View>
    </View>
  );
};