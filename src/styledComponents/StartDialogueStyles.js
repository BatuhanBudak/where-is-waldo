import styled from "styled-components";

export const StartGridDiv = styled.div`
  display: grid;
  grid-template-areas:
    "a a a a a"
    "b c c c d"
    "b c c c d"
    "b c c c d"
    "e e e e e";
  grid-template-columns: repeat(5, auto);
  h1:nth-child(1) {
    grid-area: b;
    writing-mode: vertical-lr;
    text-orientation: upright;
  }
  h1:nth-child(2) {
    grid-area: a;
  }
  h1:nth-child(3) {
    grid-area: d;
    writing-mode: vertical-lr;
    text-orientation: upright;
  }
  h1:nth-child(4) {
    grid-area: e;
  }
`;

export const StyledTitle = styled.h1`
  font-family: "Oswald";
  font-size: 3rem;
  letter-spacing: 1px;
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const SpanWithMargin = styled.span`
  margin-inline: 1.5rem;
`;

export const DialogueWrapper = styled.div`
  display: flex;
  width: 45rem;
  height: 32rem;
  overflow: hidden;
  grid-area: c;
`;
export const BackgroundBlock = styled.div`
  width: 55%;
  background-image: url(/static/media/the-loc-nar.314cec99f414807b7e27.jpg);
  background-position: center;
  background-size: cover;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 45%;
  padding-inline: 1rem;
  font-family: "Oswald", sans-serif;
  background: #c9d6ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #e2e2e2,
    #c9d6ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #e2e2e2,
    #c9d6ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
export const ImageDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImageName = styled.h2`
  font-weight: 500;
  letter-spacing: 3px;
  font-size: 2rem;
`;
export const ImageAuthor = styled.h2`
  font-weight: 400;
  letter-spacing: 3px;
  margin-top: -0.25em;
  font-size: 0.875rem;
  font-style: italic;
`;

export const StartButton = styled.button`
  font-family: inherit;
  cursor: pointer;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 0.3em 1.25em;
  border: none;
  border-radius: 1em;
  color: #fff;
  background: linear-gradient(to right, #ed213a, #93291e);
  transition: transform 0.3s ease;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
