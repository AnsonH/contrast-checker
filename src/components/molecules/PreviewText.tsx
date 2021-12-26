import styled from "styled-components";

type PreviewTextProps = {
  children: string;
  title: string;
  largeText?: boolean;
};

const Container = styled.div<{ largeText: boolean }>`
  margin-bottom: 4rem;
  font-size: ${(props) => (props.largeText ? "18pt" : "16px")};
`;

const Text = styled.p`
  color: var(--foreground);
`;

const Title = styled(Text)`
  margin-bottom: 1.5rem;
  font-weight: bold;
`;

function PreviewText({ children, title, largeText = false }: PreviewTextProps) {
  return (
    <Container largeText={largeText}>
      <Title>{title}</Title>
      <Text>{children}</Text>
    </Container>
  );
}

export default PreviewText;
