import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
		--color1: #FFFFFF;
		--color2: #5BC0BE;
		--color3: #3A506B;
        --color4: #1C2541;
        --color5: #0B132B;
	}

html {
    height: 100%;
}

body {
    min-height: 100vh;
	min-width: 100vw;
    margin: 0;
    font-size: 1rem;
	font-family: 'DM Sans', sans-serif;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background: linear-gradient(
    60deg,
    hsl(225deg 59% 11%) 0%,
    hsl(223deg 55% 12%) 31%,
    hsl(222deg 51% 13%) 50%,
    hsl(222deg 48% 15%) 62%,
    hsl(221deg 45% 16%) 70%,
    hsl(220deg 42% 18%) 76%,
    hsl(219deg 40% 19%) 81%,
    hsl(219deg 39% 20%) 85%,
    hsl(218deg 37% 22%) 88%,
    hsl(217deg 36% 23%) 90%,
    hsl(216deg 34% 25%) 92%,
    hsl(216deg 33% 26%) 94%,
    hsl(215deg 32% 28%) 96%,
    hsl(214deg 31% 29%) 97%,
    hsl(214deg 30% 31%) 99%,
    hsl(213deg 30% 32%) 100%
    );
}

h1 {
    color: var(--color2);
}

h2 {
    color: var(--color2);
    padding: 0 1rem;
}

p {
    color: var(--color1);
    padding: 0 1rem;
    text-align: center;
}

`

export default GlobalStyles