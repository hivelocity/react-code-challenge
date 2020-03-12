import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 800px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 25px;
  margin-bottom: 15px;
  border-left: 2px solid ${props => (props.status === 'active' ? '#00be6a' : 'red')};
  transition: 0.2s;
  background-color: #eeeeee;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const DeviceName = styled.span`
  font-size: 20px;
  color: #666;
`;

export const DeviceStatusIcon = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.status === 'active' ? '#00be6a' : 'red')};
`;

export const DeviceStatusLabel = styled.span`
  color: #999;
`;

export const DeviceStatusContent = styled.span`
  display: flex;
  align-items: center;
`;
