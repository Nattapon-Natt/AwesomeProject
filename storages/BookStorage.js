import AsyncStorage from "@react-native-async-storage/async-storage";
const STORAGE_KEY = "@books";

const readItems = async () => {
    try {
        let string_value = await AsyncStorage.getItem(STORAGE_KEY);
        let items = string_value != null ? JSON.parse(string_value) : [];
        return items;
    } catch (error) {
        console.log(error);
    }
};

const readItemDetail = async (item) => {
    try {
        let string_value = await AsyncStorage.getItem(STORAGE_KEY);
        let items = string_value != null ? JSON.parse(string_value) : [];
        //CHECK IF id exist in array
        let index = items.findIndex((p_item) => p_item.id == item.id);
        return items[index];
    } catch (error) {
        console.log(error);
    }
};

const removeItem = async (item) => {
    try {
        //READ ALL
        let string_value = await AsyncStorage.getItem(STORAGE_KEY);
        let items = string_value != null ? JSON.parse(string_value) : [];
        //CHECK IF ITEM EXISTS    
        let index = items.findIndex((p_item) => p_item.id == item.id);
        if (index > -1) {
            //REMOVE
            items.splice(index, 1);
        }
        //WRITE
        string_value = JSON.stringify(items);
        await AsyncStorage.setItem(STORAGE_KEY, string_value);
    } catch (error) {
        console.log(error);
    }
};
const writeItem = async (item) => {
    // console.log("PRESS!!");
    try {
        //READ ALL
        let string_value = await AsyncStorage.getItem(STORAGE_KEY);
        let items = string_value != null ? JSON.parse(string_value) : [];
        //CHECK IF id exist in array
        let index = items.findIndex((p_item) => p_item.id == item.id);
        if (index > -1) {
            //UPDATE
            items[index] = item;
        } else {
            //INSERT AT THE FRONT
            items.unshift(item);
        }
        //WRITE
        string_value = JSON.stringify(items);
        await AsyncStorage.setItem(STORAGE_KEY, string_value);
    } catch (error) {
        console.log(error);
    }
};

export default { readItems, readItemDetail, removeItem, writeItem };
