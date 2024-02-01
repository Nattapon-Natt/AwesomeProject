import React, { useEffect } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import File from "../../helpers/File";
import FileService from "../../services/FileService";

export default function ImagePickerModal(props) {

    const onLoad = async () => { await File.requestPermission(); };
    useEffect(() => { onLoad(); }, []);

    const pickImage = async (mode) => {
        let result = null;
        switch (mode) {
            case "camera":
                result = await File.getFromCamera();
                break;
            case "media":
                result = await File.getFromGallery();
                break;
        }
        // console.log(result);
        if (!result.canceled) {
            console.log(result);
            // let new_uri = result.assets[0].uri;
            // let new_uri = await File.save(result.assets[0].uri);
            // SAVE TO SERVER
            let new_uri = "";
            let data = await FileService.upload({"image" : result.assets[0].uri});
            if(data){ new_uri = data.uri; }

            props.setImage(new_uri);
        }
    };


    return (
        <Modal transparent={true} visible={props.modalVisible} onRequestClose={() => { props.setModalVisible(false); }} >
            <TouchableOpacity
                style={{ flex: 1, justifyContent: "center", backgroundColor: "rgba(0,0,0,0.5)", }}
                onPress={() => { props.setModalVisible(false); }}
            >
                <View style={{ margin: 20, backgroundColor: "white", padding: 15 }}>
                    <TouchableOpacity style={{ padding: 15 }} onPress={() => {
                        // pickImage("camera"); 
                        setTimeout(async function () { await pickImage("camera"); }, 100);
                        props.setModalVisible(false);
                    }} >
                        <Text> Take Photo ...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 15 }} onPress={() => {
                        // pickImage("media");
                        setTimeout(async function () { await pickImage("media"); }, 100)
                        props.setModalVisible(false);
                    }} >
                        <Text> Pick from gallery ...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 15 }} onPress={() => { props.setModalVisible(false); }} >
                        <Text>Remove Photo</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Modal>
    );
}


