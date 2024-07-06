import { apiKey, baseUrl } from "./defaults";

class CategoriesService {

    headers: any = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
    }

    getAll = async () => {

        try {
            const response = await fetch(baseUrl + 'project-categories', {
                method: 'GET',
                headers: this.headers,
            })

            if (!response.ok) {
                console.log("Error occured");
                return null;
            }

            const data = await response.json();

            return data?.data;

        } catch (error: any) {
            console.log(error.message);
            return null;

        }
    }


}

const categoriesService = new CategoriesService;

export default categoriesService;