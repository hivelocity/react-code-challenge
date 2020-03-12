import styled from 'styled-components';

export default styled.div`
  background-color: ${props => props.isOn ? 'green' : 'red' };
  border-radius: 50%;
  height: 18px;
  width: 18px;
`;