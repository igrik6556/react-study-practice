import {Container} from "../Layout";

const Header = () => {
    return (
        <header className="header bg-grad-green">
            <Container classes="py-3">
                <p className="h2 mb-0">React Movies</p>
            </Container>
        </header>
    )
}

export default Header