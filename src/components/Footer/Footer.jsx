import React from 'react'
import { FooterWrapper } from './styled_components/FooterStyle'

export class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <FooterWrapper>
                <p>Copyright © 2020 Coding Test</p>
            </FooterWrapper>
        )
    }
}
