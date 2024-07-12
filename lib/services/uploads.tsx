import { apiKey, baseUrl } from "./defaults";

class UploadService {

    store = async (file: File) => {

        const formdata = new FormData();
        formdata.append("files", file);

        return await fetch(baseUrl + 'upload', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + apiKey
            },
            body: formdata,
        })
    }
}

const uploadService = new UploadService;

export default uploadService;