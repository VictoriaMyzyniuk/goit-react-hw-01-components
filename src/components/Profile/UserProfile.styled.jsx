import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 300px;

  background-color: #dfdede;
  font-size: 20px;
  border-radius: 5px;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  padding: 40px;
`;
export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
export const GeneralInfo = styled.p`
  margin: 0;
  margin-bottom: 15px;

  &:nth-of-type(1) {
    color: black;
    font-size: 24px;
    font-weight: 500;
  }
  &:last-child {
    margin: 0;
  }
`;

export const StatsList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
  display: flex;
  background-color: #928d8d;
`;

export const StatsItem = styled.li`
  color: #3e3c3c;
  width: calc(100% / 3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 5px;

  &:nth-of-type(2) {
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
  }
`;

export const StatsInfo = styled.span`
  margin: 0;
  color: black;
  font-weight: 500;
`;
