import { Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GradientButton } from '../components/GradientButton'
import { SecondaryButton } from '../components/SecondaryButton'
import { StoryCard } from "../components/StoryCard";

export default function Home() {
  return (
    // Only need bottom safearea since navbar already is withing safe area and this view is rendered below
    <SafeAreaView edges={['bottom']}>
      <ScrollView>
        <View className='min-h-full bg-[#F5EFFF]'>
          <Text>Home</Text>

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
          

          <GradientButton
            text="Tryk på mig"
            colors={["#9f16dfd7", "#f0a70aff"]}
            onPress={() => console.log("Du har trykket på mig")}
          />

          <SecondaryButton
            text="Begynd"
            onPress={() => alert("Du trykkede på knappen!")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}