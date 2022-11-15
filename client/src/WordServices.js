import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  where,
  query
} from "firebase/firestore";

import { auth } from "./firebase-config";

const wordCollectionRef = collection(db, "words");

class WordDataService {
  addWords = (newWord) => {
    console.log(newWord);
    return addDoc(wordCollectionRef, newWord);
  };
  updateWords = (id, updatedWord) => {
    const wordDoc = doc(db, "words", id);
    return updateDoc(wordDoc, updatedWord);
  };
  deleteWord = (id) => {
    const wordDoc = doc(db, "words", id);
    return deleteDoc(wordDoc);
  };
  getAllWords = () => {
    const data = query(
      collection(db, "words"),
      where("uid", "==", auth.currentUser.uid)
    );
    return getDocs(data);
  };
  getWord = (id) => {
    const wordDoc = doc(db, "words", id);
    return getDoc(wordDoc);
  };
}

export default new WordDataService();
