import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import {Container} from '../../../Layout'
import DataService from "../../service/DataService";

const Blog = () => {
    const [posts, setPosts] = useState([])
    const service = new DataService()

    useEffect(() => {
        let mounted = true
        mounted && service
            .getAllPosts()
            .then(json => setPosts(json))
        return () => {
            mounted = false
        }
    }, [])

    return (
        <Container>
            <h1 className="text-center">Blog Main Page</h1>
            <ul className="list-unstyled">
                {posts && posts.map(({id, title}) => {
                    return (
                        <li key={id}>
                            <Link to={`/blog/${id}`}>{ title }</Link>
                        </li>
                    )
                })}
            </ul>
        </Container>
    )
}

export default Blog