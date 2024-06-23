import { useState } from 'react';

export const FaceAuthApp = () => {
  const [isAuthorized, setAuth] = useState(false);
  const [image, setImage] = useState(null);

  const handleLogin = async () => {
    if (!image) {
      return alert('Por favor, selecione uma imagem.');
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data) {
        setAuth(true);
      } else {
        alert('não autorizado.');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file || !file.type.match('image/*')) {
      return alert('Use um tipo válido de imagem, por favor.');
    }

    setImage(file);
  };

  return (
    <>
      <h1>Face Auth App</h1>
      {!isAuthorized && (
        <>
          <input type='file' accept='image/*' onChange={handleImageChange} />
          <button onClick={handleLogin}>Scan facial</button>
        </>
      )}
      {isAuthorized && <h1>Autorizado! Bem-vindo!</h1>}
    </>
  );
};
