import { useState, useContext, createContext, useRef } from "react";
const AuthContext = createContext(null);

export const AuthImg = ({ children }) => {
  // Image Trigger Input button
  const triggerClick = useRef(null);
  const clickElement = (ref) => {
    ref.current.dispatchEvent(
      new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
        buttons: 1,
      })
    );
  };

  // Upload Image
  const [Image, setImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setImage(base64);
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <AuthContext.Provider
      value={{ Image, uploadImage, triggerClick, clickElement, setImage }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useImg = () => {
  return useContext(AuthContext);
};
