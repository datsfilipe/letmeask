import styled from "styled-components";

const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid ${props => props.theme.borderBottom};
`;

const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  >img {
    max-height: 45px;
  }

  > div {
    display: flex;
    gap: 16px;

    button {
      height: 40px;
    }
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  border: 0;
  padding: 16px;
  border-radius: 0px;
  background-color: ${props => props.theme.textareaBg};
  color: ${props => props.theme.color};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  resize: vertical;
  min-height: 130px;
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  >span {
    font-size: 14px;
    color: #737380;
    font-weight: 500;

    button {
      background-color: transparent;
      border: 0;
      color: #835afd;
      text-decoration: underline;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span {
    margin-left: 8px;
    color: #737380;
    font-weight: 500;
    font-size: 14px;
  }
`;

const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

const RoomTitle = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  color: ${props => props.theme.color};
`;

const Span = styled.span`
  margin-left: 16px;
  background-color: #e559f9;
  border-radius: 9999px;
  padding: 8px 16px;
  color: #fff;
  font-size: 14px;
`;

const QuestionsList = styled.div`
  margin-top: 32px;
`;

export { Header, Content, Main, RoomTitle, H1, Span, UserInfo, Textarea, FormFooter, QuestionsList }
