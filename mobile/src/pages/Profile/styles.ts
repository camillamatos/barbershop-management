import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
  width: 186px;
  height: 186px;
  align-self: center;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 12px;
  top: 50px;
`;
