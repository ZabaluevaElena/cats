import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
    display: block;
    margin: 30px auto;
    max-width: 100%;
    max-height: 200px;
`
const Image = ({url}) => {
    return (
        <StyledImage src={url} alt="cats_img"></StyledImage>
    );
}

export default Image;