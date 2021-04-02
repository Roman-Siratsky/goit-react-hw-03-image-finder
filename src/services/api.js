import axios from 'axios'

const apiKey = '20377131-0ebe9e49bfd56e929e88257a9'

export default function fetchPictures(searchQuery, currentPage) {
    return axios.get(`https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.data).then(data => data.hits)
  }