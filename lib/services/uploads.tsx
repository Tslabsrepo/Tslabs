
const baseUrl = "https://ts-labs-admin-0ff0c6162225.herokuapp.com/api/";
const apiKey = "76791007567712142fd395851246388b7810d43f20b1e23df6dbc58ff1302562594ddd20f3a916f6efac9c0fa599a455a1426edfea927977417a88d798d0b75cee08ba4109f4405ed1b343faf83ec5abfc6288c8bf16d1d320809f19ffd2430a36ce0ac958a2fcb0e8b0a1313af194684c91715f07002adc2a4a1bed7a7a3ea9"

class UploadService {

    store = async (file) => {

        const formdata = new FormData();
        formdata.append("files", file);

        await fetch(baseUrl + 'upload', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + apiKey //process.env.PROJECT_API_KEY
            },
            body: formdata,
        })
    }
}

const uploadService = new UploadService;

export default uploadService;