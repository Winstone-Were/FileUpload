import { StyleSheet, Text, View, Button } from 'react-native'
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
    <View>
      <Button
        title='Upload File'
        onPress={()=> onDocumentPress()}
      />
    </View>
  )
}

const styles = StyleSheet.create({})