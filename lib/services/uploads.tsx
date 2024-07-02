
const baseUrl = "https://ts-labs-admin-0ff0c6162225.herokuapp.com/api/";
const apiKey = "94608fcf8e62dfe7b03350273aa9b6492fbb1a45de578cdf47bfe6a229b8818c7b9adaa727f612c83ec275f1a2e43267a561bf704d12e18f9380259b1cd8a2f0d1b62006ec64a4fcaf2cc9ffd23d4a0bd2a303b839f62390139236cb094ff6c0b5ed93949a52305342fd016d31438e7f63cbe0706658a358d8bdf405535cb704"

class UploadService {

    store = async (file: File) => {

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