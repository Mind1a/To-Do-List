import styled from "styled-components";

export const Registration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: black;
`;

export const RegistrationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 588px;
  height: 688px;
  background: #ffffff;
  border-radius: 4px;
  margin-top: 40px;
  @media (max-width: 590px) {
    width: auto;
  }
`;

export const RegistrationTitle = styled.h1`
  margin-top: 33px;
  color: #000000;
  font-size: 48px;
  font-weight: 600;
`;

export const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PhotoTitle = styled.span`
  color: #000000;
  font-size: 22px;
  margin-top: 50px;
`;

export const UploadImgIcon = styled.img`
  width: 44px;
  height: 40px;
`;

export const PhotoUpload = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 122px;
  height: 122px;
  background-color: #e6ebff;
  border-radius: 50%;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background-color: #5efc8d;
  }
`;

export const InputTitle = styled.span`
  color: #000000;
  font-size: 22px;
  margin-top: 55px;
`;

export const InputFill = styled.input`
  width: 487px;
  height: 76px;
  background-color: #e6ebff;
  border-radius: 4px;
  margin-top: 17px;
  padding-left: 25px;
  font-size: 22px;
  border: none;
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 590px) {
    width: auto;
  }
`;

export const RegistrationLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RegistrationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 258px;
  height: 66px;
  border-radius: 4px;
  background-color: rgba(94, 252, 141, 1);
  color: rgba(0, 0, 0, 1);
  border: none;
  font-size: 32px;
  margin: 76px 0px 63px 0px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;

// UploadImgIcon.defaultProps = {
//   src: "assets/svg/photoFill.svg",
// };
