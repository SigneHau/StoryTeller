import { Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GenreRadioCard } from "../../components/GenreRadioCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { KeyWordInput } from "../../components/KeyWordInput";
import { Maskot } from "../../components/Maskot"


type CategoryKey = "pirate" | "wizard-hat" | "space" | "horse";

export default function CreateStory() {
  const [selectedGenre, setSelectedGenre] = useState<CategoryKey | null>(null);

  return (
    <SafeAreaView edges={['bottom']}>
      <ScrollView>
        <View className='min-h-full bg-[#f7f4f2]'>
          <Text>Create story</Text>

          {/* Dette er vores maskot */}
          <Maskot />

          {/* Dette er valg af genre */}
          <Text className="text-2l font-semibold mb-4">Vælg en genre</Text>
          <View className="flex-row flex-wrap justify-center">
            <GenreRadioCard
              title="Sørøver"
              icon={<MaterialCommunityIcons name="skull-crossbones" size={60} color="black" />}
              selected={selectedGenre === "pirate"}
              onSelect={() => setSelectedGenre("pirate")}
            />

            {/* Dette er genrekortene hvor du kan vælge den runde prik i hjørnet */}
            <GenreRadioCard
              title="Fantasi"
              icon={<MaterialCommunityIcons name="wizard-hat" size={60} color="black" />}
              selected={selectedGenre === "wizard-hat"}
              onSelect={() => setSelectedGenre("wizard-hat")}
            />

            <GenreRadioCard
              title="Rummet"
              icon={<MaterialCommunityIcons name="rocket" size={60} color="black" />}
              selected={selectedGenre === "space"}
              onSelect={() => setSelectedGenre("space")}
            />

            <GenreRadioCard
              title="Eventyr"
              icon={<MaterialCommunityIcons name="horse" size={60} color="black" />}
              selected={selectedGenre === "horse"}
              onSelect={() => setSelectedGenre("horse")}
            />
          </View>

          {/* Dette er inputfelt hvor brugeren kan indtaste nøgleord*/}
          <KeyWordInput
            title="Skriv max 3 nøgleord"

          />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}