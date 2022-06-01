import styled from "styled-components"

export const DialogueWrapper = styled.div`
  display: flex;
  max-width: 45rem;
  min-height: 300px;
  padding: 3rem;
  border-radius: 20px;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 0.2rem;
  background: linear-gradient(to bottom, #232526, #414345);
  font-family: "Oswald", sans-serif;
`;
export const MissonStatusLabel = styled.h2`
  font-weight: 500;
  letter-spacing: 2px;
  font-size: 2rem;
  margin-block: 1rem;
  color: ${({ gameWon }) => (gameWon ? "limegreen" : "red")};
`;
export const MissionFailTitles = styled.h3`
  margin-block: 1rem;
  font-size: 1.3rem;
  letter-spacing: 1px;
  color: gold;
`;
export const MissionFailQuestion = styled.h3`
  margin-block: 1rem;
  font-size: 1.3rem;
  letter-spacing: 1px;
  color: white;
`;
export const RestartButton = styled.button`
  font-family: inherit;
  cursor: pointer;
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 0.3em 1.25em;
  border: none;
  color: #fff;
  background: linear-gradient(to right, #ed213a, #93291e);
  transition: transform 0.3s ease;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  width: 100%;
`;