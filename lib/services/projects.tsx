
const baseUrl = "https://ts-labs-admin-0ff0c6162225.herokuapp.com/api/";
const apiKey = "94608fcf8e62dfe7b03350273aa9b6492fbb1a45de578cdf47bfe6a229b8818c7b9adaa727f612c83ec275f1a2e43267a561bf704d12e18f9380259b1cd8a2f0d1b62006ec64a4fcaf2cc9ffd23d4a0bd2a303b839f62390139236cb094ff6c0b5ed93949a52305342fd016d31438e7f63cbe0706658a358d8bdf405535cb704";

class ProjectService {

    headers: any = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
    }

    store = async (data: any) => {

        return await fetch(baseUrl + 'projects', {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                data,
            }),
        })
    }

    getAll = async () => {

        return await fetch(baseUrl + 'projects', {
            method: 'GET',
            headers: this.headers,
        })
    }

    getById = async (id: number) => {

        return await fetch(baseUrl + 'projects/' + id, {
            method: 'GET',
            headers: this.headers,

        })
    }
}

const projectService = new ProjectService;

export default projectService;