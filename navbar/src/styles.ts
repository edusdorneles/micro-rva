import styled from "styled-components";

export const NavbarContainer = styled.div`
    background: var(--primary-color);
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);

    .container {
        height: 65px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 768px) {
            justify-content: center;
        }
    }
`;

export const NavbarTitle = styled.h1`
    font-size: var(--font-size-large);
    font-weight: bold;
    color: white;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const NavbarLinks = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NavbarLink = styled.div`
    font-size: var(--font-size-medium);
    transition: var(--transition);
    height: 100%;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: var(--secondary-color);
    }

    img {
        width: 20px;
        margin-right: 5px;
    }
`;
