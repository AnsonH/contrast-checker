import { memo } from "react";
import styled from "styled-components";
import { MdCheck, MdClose } from "react-icons/md";
import { bp } from "../../styles/breakpoints";

type RatingProps = {
  pass: boolean;
};

const Container = styled.div<{ pass: boolean }>`
  display: flex;
  align-items: center;
  color: ${(props) => (props.pass ? "var(--green)" : "var(--light-red)")};
`;

const Text = styled.p`
  margin-left: 0.3rem;
  font-size: 2.4rem;
  font-weight: 600;

  @media (max-width: ${bp.md}) {
    font-size: 2.2rem;
  }
`;

function Rating({ pass }: RatingProps) {
  return (
    <Container pass={pass}>
      {pass ? <MdCheck size={28} /> : <MdClose size={28} />}
      <Text>{pass ? "Pass" : "Fail"}</Text>
    </Container>
  );
}

export default memo(Rating);
