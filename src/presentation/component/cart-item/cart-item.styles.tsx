import styled from 'styled-components';

export const RemoveItemButton = styled.button`
    border: 0;
    background: red;
    color: white;
    position: absolute;
    top: -10px;
    left: -10px;
    border-radius: 50%;
    cursor: pointer;
    padding: 5px;
`

export const ProductImage = styled.img`
    width: 100%;
    border: 0;
    max-height: 120px;
`;

export const ProductName = styled.p`
    font-size: 18px;
    margin-top: 0;
    font-weight: bold;
`;

export const ProductUnitPrice = styled.span`
    color: red;
    font-weight: bold;
`

export const ButtonQuantity = styled.button`
    width: 30px;
    height: 30px;
`

export const InputQuantity = styled.input`
    width: 30px;
    height: 28px;
    border: 0;
    text-align: center;
`

interface ColumnProps {width?: string;}

export const Column = styled.div<ColumnProps>`
    width: ${props => props.width};
    position: relative;
`;

export const Wrapper = styled.div`
    padding: 20px;
    background: #f6f6f6;
    display: flex;
    flex: 1;
    align-items:top;
    gap: 20px;
    max-height: 75px;
`;