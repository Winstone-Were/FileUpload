import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-ios-kit'
import React from 'react'
import DocumentPicker from 'react-native-document-picker';

export default function App() {

  const onDocumentPress = async()=>{
    try{

      let URL = 'http://10.0.2.2:3001/fileupload'

      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles]
      });

      console.log(
        res
      );

      let data = new FormData();
      data.append('file', res[0]);

      const fileUploadResponse = await fetch(URL, {
        method:'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: data
      });

    }catch(err){
       console.log(err);
    }
  }

  return (
    <View style={styles.container}>
      <Button rounded inverted onPress={()=> onDocumentPress() }>
        Upload Document
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  input: { marginVertical: 5, borderRadius: 0, backgroundColor: 'white', height: 50, borderBottomColor: 'white' },
  row: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-between",
  },
  textContainer: { alignContent: 'center', alignItems: 'center' }
});