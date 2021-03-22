// import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import SearchBar from './components/SearchBar'
import ImageGallery from './components/ImageGallery'
import Button from './components/Button'
// import Loader from './components/Loader'
import Modal from './components/Modal'
import * as axios from 'axios'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'


const apiKey = '20377131-0ebe9e49bfd56e929e88257a9'
class App extends Component {

  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    showModal: false,
    imageSrc: '',
    isLoading: false
    // isLoadMore: false,
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages()
    }
  }
  
  onSearchQuery = (query) => {
    this.setState({ searchQuery: query, currentPage: 1, images: [] });
    this.toggleLoader();
  }

  fetchImages = () => {
    const {currentPage, searchQuery} = this.state
    return axios.get(`https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.data).then(data => data.hits)
      .then((pictures) => {
        this.setState(prevState => ({
          ...prevState,
          images: [...prevState.images, ...pictures],
          currentPage: prevState.currentPage + 1,
        }))
      }).then(() => {
        this.onSmoothScroll();
        this.toggleLoader()
      })
  }

  toggleLoader = () => {
    this.setState(({isLoading}) => ({
      isLoading: !isLoading,
    }))
  }
  onSmoothScroll = () => {
    if (this.state.currentPage > 2) {
      setTimeout(() => {
        window.scrollTo({
            top: 1000000,
            behavior: 'smooth'
        })
      }, 500)
    }
  }
  toggleModal = (src) => {
    this.setState(({ showModal, imageSrc }) => ({
      showModal: !showModal, 
      imageSrc: src,
    }))
  }
  render() {
    const { images, isLoading, showModal, imageSrc, searchQuery } = this.state;

    return (
    <div className="App">
        <SearchBar
          onSubmit={this.onSearchQuery} />
        <ImageGallery
          images={images}
          toggleModal={this.toggleModal}
        />
        {images.length > 0 && !isLoading && <Button toggleLoader={this.toggleLoader} fetchImages={this.fetchImages} />}
        {this.state.isLoading &&
          <div className='loader'><Loader type="BallTriangle" color="#000080" height={40} width={40} /></div>}
        {showModal &&
          <Modal
            toggleModal={this.toggleModal}>
          <img
            src={imageSrc}
            alt=""
          />
          </Modal>}
        {images.length === 0 && searchQuery.length > 0 && !isLoading && <div className='emptyPage'>
          <p>Oops, nothing found</p>
        </div>}
    </div>
  )
  }
}

export default App;
