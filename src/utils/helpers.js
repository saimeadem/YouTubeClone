import axios from "axios"

const options = {

    params: {
        geo: 'TR',
        lang: 'tr',
    },
    headers: {
        ----your APİ----
    },
};

axios.defaults.baseURL='https://yt-api.p.rapidapi.com';
export const getData = async (url) => {
    try{
        const response = await axios.get(url,options);
        return response
    }catch(err){
        console.log("Verileri çekerken hata oluştu ")
    }
};
