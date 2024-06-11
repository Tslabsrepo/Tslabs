
const baseUrl = "'https://ts-labs-admin-0ff0c6162225.herokuapp.com/api/";

class ProjectService {

    store = async (data: any) => {

        await fetch(baseUrl + 'projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.PROJECT_API_KEY
            },
            body: JSON.stringify({
                data,
            }),
        })
    }
}

const projectService = new ProjectService;

export default projectService;