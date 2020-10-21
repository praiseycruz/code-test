import styled from 'styled-components'

export const MainWrapper = styled.div`
    font-family: 'Montserrat', sans-serif;
    margin: 0 0 25px;

    .main-title {
        color: #09fdfd;
        font-size: 25px;

        &.artists {
            margin-top: 50px;
        }
    }

    .top-songs {
        .card {
            margin: 15px 0;
            transition: transform .2s;
            background-color: #2F3C4E !important;

            .card-header {
                font-size: 16px;
                padding: 12px;
                display: flex;
                align-items: center;
            }

            .card-body {
                padding: 12px;

                .card-subtitle {
                    font-size: 14px;
                }
            }

            .card-footer {
                font-size: 13px;
                padding: 12px 8px;
                text-align: center;
            }

            @media screen and (min-width: 1200px) {
                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }

    .top-artists {
        .card {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 15px 0;
            transition: transform .2s;
            background-color: transparent !important;
            border: none;

            .card-img-top {
                border-radius: 50%;
                height: 130px;
                width: 130px;
            }

            .artist-name {
                margin-top: 10px;
            }
        }
    }
`;
