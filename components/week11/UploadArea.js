import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import ImagePickerModal from "./ImagePickerModal";
import DisplayImage from "./DisplayImage";

export default function UploadArea(props) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <TouchableOpacity onPress={() => { setModalVisible(true); }} >
                <DisplayImage image={props.image} />
            </TouchableOpacity>
            <ImagePickerModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                image={props.image}
                setImage={props.setImage}
            />
        </View>
    );
}



