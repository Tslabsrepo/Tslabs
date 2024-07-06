import { apiKey, baseUrl } from "./defaults";

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