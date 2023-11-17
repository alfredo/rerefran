import { phraseList } from "./phraseList";

export const getStartPhrase = (phrase) => {
  return phraseList[Math.floor(Math.random() * phraseList.length)][0];
};

export const getEndPhrase = (phrase) => {
  return phraseList[Math.floor(Math.random() * phraseList.length)][1];
};
