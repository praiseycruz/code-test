import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    font-family: 'Montserrat', sans-serif;
    overflow: hidden;

    .navbar {
        padding: 20px 0;
        background-color: transparent !important;

        .navbar-brand {
            color: #fff;
        }

        @media screen and (min-width: 320px) and (max-width: 766px) {
            .navbar-brand {
                width: 100%;
                text-align: center;
            }
        }
    }
`;
