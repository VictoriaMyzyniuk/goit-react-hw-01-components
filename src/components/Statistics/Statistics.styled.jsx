import styled from '@emotion/styled';

// export const ProfileCard = styled.li`

// `;

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticWrapper = styled.section`
  width: 300px;
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-top: 20px;
  /* padding: 20px; */
  /* padding: 40px; */
`;

export const StatisticList = styled.ul`
  padding: 0;
  margin: 0;
  height: 50px;
  display: flex;
  list-style: none;
  align-items: center;
  /* border: 1px solid black; */
`;

export const SectionHeader = styled.h2`
  width: 100%;
  height: 60px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dfdede;
  margin: 0;
`;

export const StatItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60px;

  text-align: center;

  background-color: ${props => getRandomHexColor()};
`;

export const LabelEl = styled.span`
  font-size: 12px;
`;

export const PercentEl = styled.span`
  font-size: 20px;
`;
