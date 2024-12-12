import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    container: {
        height: 120,
        width: '100%',
        padding: 8,
        borderWidth: 1,
        borderColor: colors.gray[200],
        borderRadius: 12,
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center',
    },
    image: {
        height: 104,
        width: 116,
        backgroundColor: colors.gray[200],
        borderRadius: 8,
    },
    content: {
        flex: 1,
        gap: 4,
    },
    name: {
        fontFamily: fontFamily.medium,
        fontSize: 14,
        color: colors.gray[600],
    },
    description: {
        fontFamily: fontFamily.regular,
        fontSize: 12,
        color: colors.gray[500],
    },
    footer: {
        flexDirection: 'row',
        gap: 7,
        marginTop: 10,
    },
    tickets: {
        fontFamily: fontFamily.regular,
        fontSize: 12,
        color: colors.gray[400],
    }
})