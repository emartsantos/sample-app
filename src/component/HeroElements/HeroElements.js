import styled from "styled-components";

export const HeroWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: teal; */

    
    &:before {
        content: '';
        background: rgba(0,0,0,0.4);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
    
    @media screen and (max-width:900px) {
        margin: 6rem 0 0 0;
        line-height: 4rem;

        &:before {
            top: 6rem;
        }
    }

    @media screen and (max-width:540px) {
        margin: 8rem 0 0 0;
        line-height: 4rem;

        &:before {
            top: 8rem;
        }
    }
`

export const HVideo = styled.div`
    width: 100%;
    height: 100vh;

`

export const HeroPWrapper = styled.div`
    max-width: 900px;
    margin-block: auto;
    text-align: center;
    padding: 2em 2em;
    position: absolute;
`

export const HeroTitle = styled.h1`
    font-weight: 800;
    color: #fff;
    text-align: center;
    font-size: clamp(4rem, 8vw, 5.5rem);

    @media screen and (max-width: 768px) {
        margin: 2rem 0;
    }

`

export const HeroContent = styled.p`
    color:#fff;
    font-size: clamp(2rem, 8vw, 2.5rem);
    line-height: clamp(1rem, 8vw, 3rem);

`