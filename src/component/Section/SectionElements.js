import styled from "styled-components";

export const Wrapper = styled.div`
    background: teal;
`

export const ContentWrapper = styled.div`
    max-width: 1200px;
    padding: 2rem;
    margin: auto;
    padding: 5rem 0;
`
export const ContentTitle = styled.h1`
    text-align: center;
    color: #fff;
    font-size: 4rem;
    padding: 0 0 4rem;
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 3rem 0;
    align-items: center;
    gap: 4rem;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`
export const Content = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    flex: 1;
    text-align: center;
    color: #fff;
    font-size: 3rem;
    
    @media screen and (max-width: 900px) {
        text-align: justify;
    }
`

export const ImageWrapper = styled.div`
    width: 50rem;
    height: auto;
    text-align: center;
    padding: 2rem 0;

    @media screen and (max-width: 900px) {
        width: 100%;
        height: auto;
    }
`

export const ImageBg = styled.img`
    width: 50rem;
    height: 50em;
    object-fit: contain;
    background-repeat: no-repeat;

    @media screen and (max-width: 900px) {
        width: 100%;
        height: auto;
    }
`

export const Container = styled.div`
    padding: 2rem;
`
