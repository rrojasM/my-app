import axios from "axios"

export const getRecipesList = async (tags = null, size) => {

    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: { from: '0', size: size || '20', tags },
        headers: {
            'X-RapidAPI-Key': '0a41a10924msh0162673df202aaep18aad8jsn3e686b46c693',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };

    return await axios.request(options)
}