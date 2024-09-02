import { apiKey, baseUrl } from "./defaults";

class ProjectService {

    headers: any = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
    }

    store = async (data: any) => {

        const response = await fetch(baseUrl + 'projects', {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                data,
            }),
        })

        return response.json();
    }

    getAll = async () => {

        return await fetch(baseUrl + 'projects?populate=*', {
            method: 'GET',
            headers: this.headers,
        })
    }

    getById = async (id: number) => {

        return await fetch(baseUrl + 'projects/' + id + '?populate=*', {
            method: 'GET',
            headers: this.headers,

        })
    }


    filter = (selectedCategories: any, searchTerm: string | null, project: iProject) => {

        var record_exists = true;

        if (selectedCategories.length > 0) {

            selectedCategories.forEach(category => {
                let project_categories = project?.attributes?.project_categories.data;

                let values = project_categories?.filter((project_category) => project_category?.attributes?.categoryName == category);

                if (values.length <= 0) {
                    record_exists = false;
                }
            });
        }


        if (searchTerm && !(project?.attributes?.projectTitle?.toLowerCase().includes(searchTerm.toLowerCase()) || project?.category?.toLowerCase()?.includes(searchTerm.toLowerCase()))) {
            record_exists = false;
        }

        return record_exists;
    };
}

const projectService = new ProjectService;

export default projectService;