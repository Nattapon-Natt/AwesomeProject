import React, { useEffect, useLayoutEffect,useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { KeyboardAvoidingView, View, ScrollView, Text, Button, TextInput } from "react-native";
import BookStorage from "../../storages/BookStorage";
import UploadArea from "../../components/week11/UploadArea";
export default function BookForm() {
    const [id, setId] = useState("_" + Math.random().toString(36).substring(2, 9));
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const route = useRoute();
    const { item } = route.params;
    const navigation = useNavigation();
    useLayoutEffect(() => { navigation.setOptions({ title: item ? "edit" : "create" }); }, [navigation]);
    
    const onLoad = async()=> {
      if (item) {
        let book = await BookStorage.readItemDetail(item);
        setId(book.id);
        setName(book.name);
        setPrice(book.price.toString());
        setImage(book.image);
      }
    };
    useEffect(() => { onLoad(); }, []);
      const saveBook = async () => {
        //A NEW ITEM
        let new_data = { id: id, name: name, price: price, image: image };
        //SAVE
        await BookStorage.writeItem(new_data);
        //REDIRECT TO
        navigation.navigate("Book");
      };
    
    return (
        <KeyboardAvoidingView style={{ flex: 1, padding: 20 }}>
            <ScrollView>
                <Text>ชื่อหนังสือ</Text>
                <TextInput placeholder="Enter name ..." value={name} onChangeText={(text) => setName(text)} />
                <Text>ราคา</Text>
                <TextInput placeholder="Enter price ..." value={price} onChangeText={(text) => setPrice(text)} />
                <Text>ลิงค์รูปภาพ</Text>
                <TextInput placeholder="Enter image URL ..." value={image} onChangeText={(text) => setImage(text)} />
                <UploadArea image={image} setImage={setImage} />
            </ScrollView>
            <Button title="SAVE" color="tomato"onPress={saveBook} />
        </KeyboardAvoidingView>
    );
}