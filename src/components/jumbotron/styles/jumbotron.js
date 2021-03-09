import styled from 'styled-components/macro'; 
// macro gives us the component name nicely when you inspect the page


export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ direction }) => direction};
    justify-content: center;
    max-width: 1100px;
    margin: auto;
    width: 100%

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;
