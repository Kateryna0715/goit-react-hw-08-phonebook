import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

export const FormTitle = styled.h2`
  text-align: center;
  color: #333333;
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #000000;
  font-weight: 500;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  font-size: 16px;
  box-sizing: border-box;
  border: 2px solid #cccccc;
  border-radius: 4px;
  outline: transparent;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border-color: #007bff;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #ffffff;
  font-size: 18px;
  padding: 8px 18px;
  border-radius: 6px;
  transition: box-shadow 0.3s ease 0s, background-color 0.3s ease 0s;

  &:hover,
  &:focus {
    background-color: #024ac5;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
  }
`;

export const ButtonLink = styled.button`
  display: block;
  text-align: center;
  margin: 20px auto;
  padding: 0;
  color: #007bff;
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #024ac5;
  }
`;

export const PasswordToggleContainer = styled.div`
  position: relative;
`;

export const PasswordInputField = styled(InputField)`
  display: flex;
`;

export const PasswordToggleIcon = styled.span`
  position: absolute;
  z-index: 2;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
`;
