import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

const Home = () => {
    return (
        <>
            <Jumbotron>
                <Container>
                    <h1 className="bannerheader">Welcome!</h1>
                    <p className="bannertext">
                        You have landed to the cheapest sheep shop ever.
                    </p>
                    <Button className="bannerbutton" variant="primary" href="products">
                        Shop shop-pety-shop
                    </Button>
                </Container>
            </Jumbotron >
        </>
    );
};

export default Home;