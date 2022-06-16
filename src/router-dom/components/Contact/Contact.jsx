import {Container} from '../../../Layout'
import WithRequireAuth from "../../hoc/WithRequireAuth";

const Contact = () => {
    return (
        <Container>
            <h1 className="text-center">Contact Page</h1>
        </Container>
    )
}

export default WithRequireAuth(Contact)