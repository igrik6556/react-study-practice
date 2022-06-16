import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { Triangle } from  'react-loader-spinner'

import {Container} from '../../../Layout'
import DataService from "../../service/DataService";

const BlogDetails = () => {
    const [post, setPost] = useState({})
    const [loader, setLoader] = useState(true)
    const urlParams = useParams()

    const service = new DataService()

    useEffect(() => {
        let mounted = true
        mounted && service
            .getPost(urlParams.id)
            .then(remotePost => {
                setPost({...post, ...remotePost})
                setLoader(false)
            })
        return () => {
            mounted = false
        }
    }, []);

    return (
        <Container>
            {loader ?
                <Triangle
                  height="100"
                  width="100"
                  color='blue'
                  ariaLabel='loading'
                /> :
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </>}
        </Container>
    )
}

export default BlogDetails