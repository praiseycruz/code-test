import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { HeaderWrapper } from './styled_components/HeaderStyle'

export class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <HeaderWrapper>
                <Container>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">
                            <h1>Coding Test</h1>
                        </Navbar.Brand>
                    </Navbar>
                </Container>
            </HeaderWrapper>
        )
    }
}
