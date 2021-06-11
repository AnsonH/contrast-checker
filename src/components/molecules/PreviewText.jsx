import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  margin-bottom: 4rem;
  font-size: ${(props) => (props.isLargeText ? "18pt" : "16px")};
`;

const Text = styled.p`
  color: var(--foreground);
`;

const Title = styled(Text)`
  margin-bottom: 1.5rem;
  font-weight: bold;
`;

function PreviewText({ children, title, largeText = false }) {
  return (
    <Container isLargeText={largeText}>
      <Title>{title}</Title>
      <Text>{children}</Text>
    </Container>
  );
}

PreviewText.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string,
  largeText: PropTypes.bool,
};

export default PreviewText;
