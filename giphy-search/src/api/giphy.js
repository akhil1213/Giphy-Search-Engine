const axios = require('axios')
const API_KEY = 'HknRGYMBKr38XMczEwVTRE1eYG2G4m3a'

const getGiphies = (query) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&limit=5&rating=g`)
    .then((res) => {
        const data = res.data['data']
        console.log(data)
        return data
        // console.log(data[0].images.downsized_medium.url)
    }).catch((err) =>{
        return err
    })
}

exports.getGiphies = getGiphies;


// axios({
//     method: 'get',
//     url: 'api.giphy.com/v1/gifs/search',
//     api_key:API_KEY,    // 4 seconds timeout
//     q:'cheeseburgers',
//     limit:20,
//     rating:'g',//g, pg, pg-13, r.
//     lang:'en',
//   })
//   .then(response => {console.log('response')})
//   .catch(error => console.error('error'))