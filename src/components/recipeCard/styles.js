import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: colors.white,
        padding: 10,
        width: width * 0.7,
        marginBottom: 32,
        marginTop: 46,
        marginRight: 16,
        //IOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        //ANDROID
        elevation: 9,
    },
    title: {
        fontSize: 14,
        color: colors.grey,
        fontWeight: 'bold',
        flex: 1
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8
    },
    footerText: {
        fontSize: 11,
        color: colors.lightGrey2,
    },
    authorImage: {
        width: 25,
        height: 25,
        borderRadius: 20,
        marginRight: 8,
        backgroundColor: colors.lightGrey
    },
    timerIcon: {
        width: 17,
        height: 17,
        marginRight: 8
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginTop: -40
    }
});

export default styles;