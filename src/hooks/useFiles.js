
// Import Document Picker
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';

import {useDispatch} from 'react-redux';
import {setFileInfo} from '../slices/components/filePickerSlice';

export default () => {
    const dispatch = useDispatch()

    const handleSelectFile = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [
                    DocumentPicker.types.images,
                    DocumentPicker.types.doc,
                    DocumentPicker.types.docx,
                    DocumentPicker.types.pdf,
                    DocumentPicker.types.ppt,
                    DocumentPicker.types.pptx,
                    DocumentPicker.types.zip,
                    DocumentPicker.types.xls,
                    DocumentPicker.types.xlsx,
                    DocumentPicker.types.plainText,
                ],
            });

            //Setting the state to save single file attributes
            dispatch(setFileInfo(
                {
                    path: res[0].uri,
                    type: res[0].type,
                    name: res[0].name,
                    size: res[0].size,
                    encrypted: await RNFS.readFile(res[0].uri, 'base64')
                })
            )
        } catch (err) {
            //Handling any exception (If any)
            if (DocumentPicker.isCancel(err)) dispatch(setFileInfo({}))
            else {
                dispatch(setFileInfo({}))
                throw err
            };
        }
    };

    return {handleSelectFile};
}