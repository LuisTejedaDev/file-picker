import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import {useSelector} from "react-redux";
import {useFiles} from "../hooks";
import {selectFileInfo} from "../slices/components/filePickerSlice";
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

export default () => {

    const fileInfo = useSelector(selectFileInfo)
    const {handleSelectFile} = useFiles()

    return(
        <View style={{height: 'auto', alignSelf: 'stretch', backgroundColor: '#f1f1f1', borderWidth: 1, borderColor: '#DADADA', borderRadius: 4, overflow: 'hidden'}}>
            <TouchableOpacity
                onPress={() => handleSelectFile()}
                style={styles.container}>
                    <View style={{height: 45, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                        
                        <View style={styles.iconContainer}>
                            <Material name={
                                fileInfo.hasOwnProperty('name')
                                ? 
                                    fileInfo?.name?.includes('.pdf') 
                                        ? 'file-pdf-box' 
                                        : (fileInfo?.name?.includes('.docx') || fileInfo?.name?.includes('.doc')) 
                                            ? 'file-word' 
                                            : (fileInfo?.name?.includes('png') || fileInfo?.name?.includes('jpeg') || fileInfo?.name?.includes('jpg')) 
                                                ? 'file-image' 
                                                : (fileInfo?.name?.includes('.xls') || fileInfo?.name?.includes('.xlsx')) 
                                                    ? 'file-excel' 
                                                    : 'file-powerpoint-box'
                                    : 'upload'
                            } size={19} color={'#fff'} />
                        </View>

                        <View style={styles.fileNameContainer}>
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#383838'}}>{!fileInfo?.name ? 'Seleccionar Documento' : fileInfo.name.length > 20 ? `${fileInfo?.name?.substring(0, 20)}...` : fileInfo.name}</Text>
                        </View>

                        <View
                            style={{width: 'auto', height: 33, marginHorizontal: 5, borderRadius: 6, paddingHorizontal: 11, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3A5FCD'}}>
                            <Text style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>Seleccionar</Text>
                        </View>
                        
                    </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        alignSelf: 'stretch',
        backgroundColor: '#fff'
    },
    iconContainer: {
        height: '100%',
        width: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3A5FCD'
    },
    fileNameContainer: {
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        paddingLeft: 10
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})