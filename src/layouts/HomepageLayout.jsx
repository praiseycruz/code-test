import React from 'react'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

export class HomepageLayout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
                <Header />
                <Main />
                <Footer />
            </>
        )
    }
}
