import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledFooter>
      <Link href={"/"}>Spotlight</Link>
      <Link href={"/art-pieces"}>Pieces</Link>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  height: 30px;
  width: 100%;
  background-color: grey;
  position: fixed;
  bottom: 0px;
`;
