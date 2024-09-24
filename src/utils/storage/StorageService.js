export class StorageService {
  constructor(useSession = false) {
    this.storage = useSession ? sessionStorage : localStorage;
  }

  getUserData() {
    try {
      const userData = this.storage.getItem("userData");
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error("Помилка при отриманні даних із storage:", error);
      return null;
    }
  }

  saveUserData(userData) {
    try {
      this.storage.setItem("userData", JSON.stringify(userData));
    } catch (error) {
      console.error("Помилка при збереженні даних у storage:", error);
    }
  }

  getCartItems() {
    try {
      const items = this.storage.getItem("cartItems");
      return items ? JSON.parse(items) : [];
    } catch (error) {
      console.error("Помилка при отриманні даних із storage:", error);
      return [];
    }
  }

  saveCartItems(items) {
    try {
      this.storage.setItem("cartItems", JSON.stringify(items));
    } catch (error) {
      console.error("Помилка при збереженні даних у storage:", error);
    }
  }

  setUseSessionStorage(useSession) {
    this.storage = useSession ? sessionStorage : localStorage;
  }
}
