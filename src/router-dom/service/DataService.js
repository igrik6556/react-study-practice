import React from "react";

class DataService extends React.Component {
    BASE_URL = 'https://jsonplaceholder.typicode.com'

    getAllPosts = async () => {
        return await fetch(`${this.BASE_URL}/posts/`)
            .then(data => data.json())
    }

    getPost = async (id) => {
        return await fetch(`${this.BASE_URL}/posts/${id}`)
            .then(data => data.json())
    }
}

export default DataService