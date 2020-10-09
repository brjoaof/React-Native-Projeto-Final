import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    texto: {
        color: 'white',
        fontSize: 36,
        fontFamily: 'Alegreya-BlackItalic',
    },
    container2: {
        alignItems: 'baseline',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    texto1: {
        fontSize: 21,
        fontFamily: 'Alegreya-Bold',
    },
    textoinput: {
        borderRadius: 10,
        paddingBottom: 0,
        backgroundColor: 'white',
        width: '100%',
        fontSize: 21,
        fontFamily: 'Alegreya-Regular',
    },
    texto2: {
        fontSize: 21,
        fontFamily: 'Alegreya-Bold',
        paddingTop: 5,
    },
    container3: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    picker: {
        height: 50,
        width: '60%',
    },
    container4: {
        flex: 1,
        alignItems: 'baseline',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    button: {
        height: 50,
        fontSize: 28,
        fontFamily: 'Alegreya-BlackItalic',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
    },
    texto3: {
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
        fontFamily: 'Alegreya-BlackItalic',
    },
});
export default styles;