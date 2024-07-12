import { apiKey, baseUrl } from "./defaults";

class UploadService {

    store = async (file: any) => {

        const formdata = new FormData();
        formdata.append("files", file);

        let response = await fetch(baseUrl + 'upload', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + apiKey
            },
            body: formdata,
        });

        let response_body = await response.json();

        return response_body;
    }
}

const uploadService = new UploadService;

export default uploadService;