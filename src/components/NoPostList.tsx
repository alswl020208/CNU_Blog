import NOTHING_HERE_IMG from '../assets/NOTHING_HERE.jpg';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NoPostList = () => {
  return (
    <Wrapper>
      <img src={NOTHING_HERE_IMG} alt="nothing" style={{ width: '30rem' }} />
      <h1>실전코딩 수강</h1>
      <h2>2023.03 ~ 2023.06</h2>
      <h2>과제 한번도 빼지 않고, 제출함!</h2>
      <h1>영상처리 수강</h1>
      <h2>3학년1학기 과목으로 정말 재밌게 들었다! 교수님 최고 :)</h2>
      <h1>SQLD 자격증 취득 (예정)</h1>
      <h2>06.10일 시험 예정.. 곡 취득하고 말겠다!</h2>
    </Wrapper>
  );
};

export default NoPostList;
