import { Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GradientButton } from '../components/GradientButton'
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
              title="Robot vennerne på jagt"
              imageUrl="https://images.unsplash.com/photo-1681767098264-902c31f26760?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjMwfHx0b3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400"
            />

            <StoryCard
              title="Ninus på eventyr"
              imageUrl="https://images.unsplash.com/photo-1567169866456-a0759b6bb0c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzkyfHx0b3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400"
            />
            
          </View>
          

          <GradientButton
            text="Tryk på mig"
            colors={["#9f16dfd7", "#f0a70aff"]}
            onPress={() => console.log("Du har trykket på mig")}
          />

         
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}