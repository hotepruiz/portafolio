export const audioHover = () => {
  const sonido = new Audio('src/assets/audio/hover.wav');
  sonido.play();

  console.log("hola")
};

export const audioSelect = () => {
  const sonido = new Audio('src/assets/audio/select2.wav');
  sonido.volume = 0.5;
  sonido.play();
};