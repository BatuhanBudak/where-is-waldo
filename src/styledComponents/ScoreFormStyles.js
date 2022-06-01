import styled from "styled-components";

export const Group = styled.form`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
`;

export const Label = styled.div`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #9b9b9b;
`;

export const SuccessTitle = styled.h3`
  font-size: 1.25rem;
  color: goldenrod;
  margin-block: 1rem;
`;

export const ScoreInput = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: #fff;
  padding: 0.4rem 0;
  background: transparent;
  transition: border-color 0.2s;
  &::placeholder {
    color: transparent;
  }
  &:placeholder-shown ~ ${Label} {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
  &:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }
  &:focus ~ ${Label} {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #11998e;
    font-weight: 700;
  }
  &:required,
  &:invalid {
    box-shadow: none;
  }
`;

export const SubmitButton = styled.button`
  font-family: inherit;
  cursor: pointer;
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 0.3em 1.25em;
  border: none;
  color: #fff;
  background: linear-gradient(to right, #00b09b, #96c93d);
  transition: transform 0.3s ease;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  margin-block: 1rem;
  width: 100%;
`;
