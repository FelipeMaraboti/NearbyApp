import { useRef } from "react";

import { Text, useWindowDimensions } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { s } from "./styles";

import { Place, PlaceProps } from "../place";
import { router } from "expo-router";

type Props = {
    data: PlaceProps[]
}

export function Places({ data } : Props) {
    const dimensions = useWindowDimensions()
    const bottomSheetRef = useRef<BottomSheet>(null)

    const snapPoints = {
        min: 90,
        max: dimensions.height - 170
    }

    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={[snapPoints.min, snapPoints.max]}
            handleIndicatorStyle={s.indicator}
            enableOverDrag={false}
            
        >
            <BottomSheetFlatList 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={ ({item}) => (
                    <Place 
                        data={item} 
                        onPress={ () => router.navigate(`/market/${item.id}` as "/market/[id]") }
                    /> 
                )}
                    contentContainerStyle={s.content}
                ListHeaderComponent={() => 
                    <Text style={s.title}>Explore locais perto de você</Text>
                }
                showsVerticalScrollIndicator={false}
            />
        </BottomSheet>
    )
}

