import { Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CategorySelector } from "../../components/CategorySelector";
import { KeyWordInput } from "../../components/KeyWordInput";
import { StoryCard } from "../../components/StoryCard";
import { SecondaryButton } from '../../components/SecondaryButton';


type CategoryKey = "pirate" | "wizard-hat" | "space" | "horse";

export default function Explore() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(null);

  return (
    <SafeAreaView edges={['bottom']}>
      <ScrollView>
        <View className='min-h-full bg-[#eafaf9]'>
          <Text>Explore</Text>

          <KeyWordInput
            title="Søg efter en historie"

          />
          <Text className="text-2l font-semibold mt-10 mb-4">Vælg en genre</Text>
          {/* Grid af kategorier */}
          <View className="flex-row flex-wrap justify-center">
            <CategorySelector
              title="Sørøver"
              selected={selectedCategory === "pirate"}
              onSelect={() => setSelectedCategory("pirate")}
            />
            <CategorySelector
              title="Fantasi"
              selected={selectedCategory === "wizard-hat"}
              onSelect={() => setSelectedCategory("wizard-hat")}
            />
            <CategorySelector
              title="Rummet"
              selected={selectedCategory === "space"}
              onSelect={() => setSelectedCategory("space")}
            />
            <CategorySelector
              title="Eventyr"
              selected={selectedCategory === "horse"}
              onSelect={() => setSelectedCategory("horse")}
            />
          </View>

          <Text className="text-2l font-semibold mt-10 mb-6">Vælg andres historier</Text>
          <View className="flex-row flex-wrap justify-center">
            <StoryCard
              title="Den uovervindelige Bozz "
              imageUrl="https://images.unsplash.com/photo-1581557991964-125469da3b8a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG95fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
            />

            <StoryCard
              title="En fortryllede kran"
              imageUrl="https://images.unsplash.com/photo-1558852842-e7540873e69a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHBsYXklMjBjYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400"
            />
          </View>

           <SecondaryButton
                      text="Begynd"
                      onPress={() => alert("Du trykkede på knappen!")}
                    />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}