import styled from "styled-components";

const Title = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Serif JP", serif;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  font-size: 60px;
  color: #f3f3f3;
`;

const TitleContainer: React.VFC = () => <Title>文字に靠れる</Title>;

export default TitleContainer;
