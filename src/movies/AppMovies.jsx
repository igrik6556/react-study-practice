import React from "react";
import { MainTmpl } from "./hoc";
import { Container } from "../Layout";
import Search from "./Search";
import Movies from "./Movies";
import Loader from "./Loader";

import './AppMovies.css'

const API_KEY = process.env.REACT_APP_OMDBAPI_KEY

class AppMovies extends React.Component {
    state = {
        search: '',
        filter: '',
        movies: null,
        requestError: null,
        loading: false
    };

    URL_BASE = `https://www.omdbapi.com/?apikey=${API_KEY}`;

    handlerChangeInput = (e) => {
        const t = e.target
        this.setState({
            [t.name]: t.value
        })
    }

    handlerClickSearch = (e) => {
        e.preventDefault()
        this.setState({
            loading: true
        })
        const requestUrl = `${this.URL_BASE}&s=${this.state.search}&type=${this.state.filter}`
        fetch(requestUrl)
            .then(data => data.json())
            .then(json => {
                if (json.Response === "True") {
                    this.setState({
                        movies: json.Search,
                        requestError: null,
                        loading: false
                    })
                } else {
                    this.setState({
                        movies: null,
                        requestError: json.Error,
                        loading: false
                    })
                }
            })
    }


    render() {
        const {search, filter, movies, requestError, loading} = this.state
        const moviesComponent = loading ? <Loader /> : <Movies movies={movies} requestError={requestError} />

        return (
            <MainTmpl>
                <Container>
                    <Search search={search}
                            filter={filter}
                            handlerChangeInput={this.handlerChangeInput}
                            handlerClickSearch={this.handlerClickSearch} />
                    {moviesComponent}
                </Container>
            </MainTmpl>
        )
    }
}

export default AppMovies