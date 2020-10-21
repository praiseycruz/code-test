import React from 'react'
import { connect } from 'react-redux'
import { Container, Image, Row, Col, Table, Card } from 'react-bootstrap'
import { MainWrapper } from './styled_components/MainStyle'
import '../../assets/css/global.css'

import data from '../../data/data.json'
import artists from '../../data/artists.json'

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        let dataDisplay = data.map((value, key) => {
            return (
                <Col sm={12} md={4} lg={3}>
                    <Card id={key} bg="dark" text="white">
                        <Card.Header>{value.songTitle}</Card.Header>
                        <Card.Body>
                            <Card.Img variant="top" src={value.songCover} />
                        </Card.Body>
                        <Card.Footer>{value.songArtist}</Card.Footer>
                    </Card>
                </Col>
            )
        })

        let artistsDisplay = artists.map((value, key) => {
            return (
                <Col sm={12} md={4} lg={2}>
                    <Card id={key} bg="dark" text="white">
                        <Card.Img variant="top" src={value.img} />
                        <span className="artist-name">{value.artist}</span>
                    </Card>
                </Col>
            )
        })

        return(
            <MainWrapper>
                <Container>
                    <div className="top-songs">
                        <h2 className="main-title">Popular Songs</h2>
                        <Row>
                            {dataDisplay}
                        </Row>
                    </div>

                    <div className="top-artists">
                        <h2 className="main-title artists">Popular Artists</h2>
                        <Row>
                            {artistsDisplay}
                        </Row>
                    </div>
                </Container>
            </MainWrapper>
        )
    }
}

function mapStateToProps(state) {
  const { } = state
  return {

  }
}

const connectedMain = connect(mapStateToProps)(Main)
export { connectedMain as Main }
