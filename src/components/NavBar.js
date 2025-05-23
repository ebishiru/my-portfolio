import { NavLink } from "react-router-dom";
import styled from "styled-components"

const NavBar = () => {
    return (
        <NavBarContainer>
            <StyledNavLink to="/"><li>Home</li></StyledNavLink>
            <StyledNavLink to="/About"><li>About</li></StyledNavLink>
            <StyledNavLink to="Projects"><li>Projects</li></StyledNavLink>
            <StyledNavLink to="Contact"><li>Contact</li></StyledNavLink>
        </NavBarContainer>
    )
}

const NavBarContainer = styled.ol`
    display: flex;
    justify-content: flex-end;
    & li::marker {
        color: var(--color2);
    }
`

const StyledNavLink = styled(NavLink)`
    padding: 1rem;
    text-decoration: none;
    color: var(--color1);
    transition: all 0.5s ease-in-out;
    &.active, &:hover {
        color: var(--color2);
    }
`
export default NavBar