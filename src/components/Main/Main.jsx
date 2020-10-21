import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap'
import { MainWrapper, SpinnerWrapper } from './styled_components/MainStyle'
import '../../assets/css/global.css'
import jQuery from 'jquery'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            artists: [],
            data: []
        }
    }

    async componentDidMount() {
        // fetch songs data
        await fetch('./data/songs.json')
            .then(response => response.json())
            .then(response => {
                setTimeout(() =>{
                    this.setState({ data: response })
                    jQuery('.main-wrapper').addClass('fade-in')
                }, 3000)
        })

        /// fetch artists data
        await fetch('./data/artists.json')
            .then(response => response.json())
            .then(response => {
                setTimeout(() =>{
                    this.setState({ artists: response })
                }, 3000)
        });
    }

    render() {
        let { data, artists } = this.state

        let dataDisplay = null
        let artistsDisplay = null

        let defaultLoading = (
            <SpinnerWrapper>
                <Spinner animation="border" role="status" variant="light">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </SpinnerWrapper>
        )

        if (data.length !== 0 && artists.length !== 0) {
            dataDisplay = data.map((value, key) => {
                return (
                    <Col sm={12} md={4} lg={3} key={key}>
                        <Card bg="dark" text="white">
                            <Card.Header>{value.songTitle}</Card.Header>
                            <Card.Body>
                                <Card.Img variant="top" src={value.songCover} />
                            </Card.Body>
                            <Card.Footer>{value.songArtist}</Card.Footer>
                        </Card>
                    </Col>
                )
            })

            artistsDisplay = artists.map((value, key) => {
                return (
                    <Col sm={12} md={4} lg={2} key={key}>
                        <Card bg="dark" text="white">
                            <Card.Img variant="top" src={value.img} />
                            <span className="artist-name">{value.artist}</span>
                        </Card>
                    </Col>
                )
            })
        } else {
            dataDisplay = defaultLoading
            artistsDisplay = defaultLoading
        }

        return(
            <MainWrapper className="main-wrapper">
                <Container>
                    <div className="top-songs">
                        <h2 className="main-title">Popular Songs</h2>
                        <Row>
                            { dataDisplay }
                        </Row>
                    </div>

                    <div className="top-artists">
                        <h2 className="main-title artists">Popular Artists</h2>
                        <Row>
                            { artistsDisplay }
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
