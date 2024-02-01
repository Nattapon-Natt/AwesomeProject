// const url_endpoint = "http://localhost/mylaravel8/public/api/book";
// const url_endpoint = "http://192.168.1.157/mylaravel8/public/api/book";
// const url_endpoint = "https://www.ckartisan.com/api/file";
// const url_endpoint = "http://192.168.1.17:8000/api/file";
// const url_endpoint = "http://localhost:8000/api/file";
// const url_endpoint = "http://192.168.1.17:8000/api/file";
const url_endpoint = "https://www.ckartisan.com/api/file";
// import { APP_URL } from "@env";
// const url_endpoint = APP_URL+"/api/book";
// import * as mime from "mime";
import mime from "mime";

const upload = async (item) => {
    try {
        // for (let key in item) {
        //   //if (key == "image") continue;
        //   data.append(key, item[key]);
        // }
        if (item.image.split(":")[0] == "file") {
            //CREATE FORM DATA
            let data = new FormData();
            //ATTACHED FILE
            data.append("image", {
                uri: item.image,
                name: item.image.split("/").pop(),
                type: mime.getType(item.image),
            });

            let body = {
                method: "POST",
                // body: JSON.stringify(item),
                body: data,
                // headers: { "Content-Type": "application/json" },
                headers: { "Content-Type": "multipart/form-data" },
            };
            let response = await fetch(url_endpoint, body);
            let result = await response.json();
            return result;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
    }
};

export default { upload };