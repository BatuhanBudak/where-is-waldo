import styled from "styled-components";

export const StyledSection = styled.section`
  margin-block: 0.5rem;
  color: white;
  width: 100%;
`;
export const HighScoreLabel = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  border-bottom: 1px solid;
  padding-bottom: 0.6rem;
  color: gold;
`;
export const ScoresOList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-block: 1rem;
  gap: 0.2rem;
  font-size: 1.2rem;
  list-style: none;
  width: inherit;
  color: white;
`;
export const ScoreListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;
export const ScoreSpan = styled.span`
  color: lime;
`;
