import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

/* CSS RESET */

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* CSS RESET */ 

:root {
		--color1: #FFFFFF;
		--color2: #5BC0BE;
		--color3: #3A506B;
        --color4: #1C2541;
        --color5: #0B132B;
	}


body {
    font-size: 1rem;
	font-family: 'DM Sans', sans-serif;
    background-color: var(--color5);
}

@media (min-width: 1024px) {
    body {
        font-size: 1.25rem;
    }
}

h1 {
    color: var(--color2);
    font-size: 2.5rem;
}

h2 {
    color: var(--color2);
    padding: 0 1rem;
    max-width: 60ch;
    margin: 1rem auto;
    font-weight: bold;
    font-size: 1.5rem;
}

p {
    color: var(--color1);
    padding: 0.75rem 1rem;
    max-width: 60ch;
    margin: auto;
}

span, li {
    color: var(--color1)
}

a {
    color: var(--color2);
}
`

export default GlobalStyles