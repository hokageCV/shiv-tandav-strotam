const audio0 = new Audio("assets/bell0.mp3");
const audio1 = new Audio("assets/bell1.mp3");
const audio2 = new Audio("assets/bell2.mp3");

const playAudio = (sound: HTMLAudioElement) => sound.play();

export const playAudio0 = () => playAudio(audio0);
export const playAudio1 = () => playAudio(audio1);
export const playAudio2 = () => playAudio(audio2);
