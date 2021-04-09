import React from 'react';
import { Container } from 'react-bootstrap';

export default function Error() {
    return (
        <Container fluid className='text-center'>
            We're sorry, looks like we couldn't recover that page
            <br />
            head <a href='/'>home</a>?
        </Container>
    )
};
