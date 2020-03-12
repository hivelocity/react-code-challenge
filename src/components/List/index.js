import React from "react";
import { Container, Content, StatusOn, StatusOff } from "./style";

export default function List(props) {
  const { name, status } = props;
  return (
    <Container>
      <Content>
        <span>{name}</span>
      </Content>
      {status ? (
        <Content>
          <StatusOn />
          <span>ON</span>
        </Content>
      ) : (
        <Content>
          <StatusOff />
          <span>OFF</span>
        </Content>
      )}
    </Container>
  );
}
