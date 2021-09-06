import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100%;
    display: block;
    padding: 10px;
    margin-top: 20px;
`

const Button = ({getCat}) => {
    return (
        <StyledButton onClick={getCat}>Get cat</StyledButton>
    );
}

export default Button;