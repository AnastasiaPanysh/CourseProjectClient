import { initializeApp } from 'firebase/app';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

// Здесь примеры использования функций
export const fileRef = storageRef(storage, 'путь/к/файлу.jpg');

// Загрузка файла в Firebase Storage
export async function uploadFile(file: Blob | ArrayBuffer | Uint8Array) {
  try {
    await uploadBytes(fileRef, file);
    console.log('Файл успешно загружен');
  } catch (error) {
    console.error('Ошибка при загрузке файла:', error);
  }
}

// Получение URL для загруженного файла
export async function getFileDownloadURL() {
  try {
    const downloadURL = await getDownloadURL(fileRef);
    console.log('Ссылка на файл:', downloadURL);
  } catch (error) {
    console.error('Ошибка при получении ссылки на файл:', error);
  }
}
