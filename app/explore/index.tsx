import { Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CategorySelector } from "../../components/CategorySelector";
import { KeyWordInput } from "../../components/KeyWordInput";
import { StoryCard } from "../../components/StoryCard";



export default function Explore() {
  type CategoryKey = "pirate" | "wizard-hat" | "space" | "horse";
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
              title="Den lilla uovervindelige elefant"
              imageUrl="https://media.istockphoto.com/id/867387008/photo/a-cute-blue-cartoon-elephant.jpg?s=2048x2048&w=is&k=20&c=NdAs19PCVJI0jtjpVwYd5YwVvEScJluuOI8S7RW4cpg="
            />

            <StoryCard
              title="En fortryllede hat"
              imageUrl="https://media.istockphoto.com/id/467285011/vector/cartoon-old-australian-hat.jpg?s=2048x2048&w=is&k=20&c=es2Ww6DEfNSUsc96BIOEd_FGVyhTrikXp3ZwKkL2V8g="
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}