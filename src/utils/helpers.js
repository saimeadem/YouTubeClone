import axios from "axios"

const options = {

    params: {
        geo: 'TR',
        lang: 'tr',
    },
    headers: {
        'X-RapidAPI-Key': '5914ca3586mshd0138071e7f0dc0p1aab19jsn7b05f9ad4ba7',
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com',
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