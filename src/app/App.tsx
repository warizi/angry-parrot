import "./app.css";
import {
  Button,
  ButtonSize,
  ButtonType,
} from "@shared/components/button";
import {
  Input,
  InputWithLabel,
  LabelPosition,
} from "@shared/components/input";
import Container from "./layout/Container";

function App() {
  return (
    <Container>
      <Button>만들기</Button>
      <Button type={ButtonType.Outlined}>취소</Button>
      <Button
        type={ButtonType.Filled}
        size={ButtonSize.Large}
      >
        저장
      </Button>
      <Input
        placeholder="제목을 입력해주세요."
        errorText="비밀번호를 입력해주세요."
        isError
      />
      <InputWithLabel
        label="제목"
        labelPosition={LabelPosition.Top}
        htmlFor="title"
        placeholder="제목을 입력해주세요."
        errorText="비밀번호를 입력해주세요."
        isError={true}
      />
      <InputWithLabel
        label="제목"
        labelPosition={LabelPosition.Left}
        htmlFor="title"
        placeholder="제목을 입력해주세요."
        errorText="비밀번호를 입력해주세요."
        isError={true}
        style={{ marginLeft: 10 }}
      />
      <InputWithLabel
        label="제목"
        labelPosition={LabelPosition.Left}
        htmlFor="title"
        placeholder="제목을 입력해주세요."
        errorText="비밀번호를 입력해주세요."
        style={{ marginLeft: 10 }}
      />
    </Container>
  );
}

export default App;
