import { getFirestore, collection, addDoc } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
  const db = getFirestore(nuxtApp.$firebaseApp);
  const emailsRef = collection(db, "emails");

  nuxtApp.provide('db', db);
  nuxtApp.provide('emailsRef', emailsRef);
});