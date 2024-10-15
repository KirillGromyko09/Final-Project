export class StorageService {
  static storageTypes = Object.freeze({
    session: "session",
    local: "local",
  });
  #storage = null;
  #key = null;

  constructor(storageType, key) {
    if (storageType === StorageService.storageTypes.local)
      this.#storage = localStorage;
    if (storageType === StorageService.storageTypes.session)
      this.#storage = sessionStorage;
    this.#key = key;
  }

  getUserData() {
    try {
      const userData = this.#storage.getItem("userData");
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error("Помилка при отриманні даних із storage:", error);
      return null;
    }
  }

  saveUserData(userData) {
    try {
      this.#storage.setItem("userData", JSON.stringify(userData));
    } catch (error) {
      console.error("Помилка при збереженні даних у storage:", error);
    }
  }
  saveUserEmail(userEmail) {
    try {
      this.#storage.setItem("userEmail", JSON.stringify(userEmail));
    } catch (error) {
      console.error("Помилка при збереженні даних у storage:", error);
    }
  }

  getCartItems() {
    try {
      const items = this.#storage.getItem("cartItems");
      return items && items !== "" ? JSON.parse(items) : [];
    } catch (error) {
      console.error("Помилка при отриманні даних зі storage:", error);
      return [];
    }
  }
  // saveCartItems(items) {
  //   try {
  //     if (typeof items === "object") {
  //       this.#storage.setItem("cartItems", JSON.stringify(items));
  //     } else {
  //       console.error(
  //         "Некорректные данные для сохранения в localStorage",
  //         items,
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Ошибка при сохранении данных в localStorage:", error);
  //   }
  // }
  saveCartItems(key, items) {
    try {
      const validItems = items.map((item) => ({
        ...item,
        oldPrice: parseFloat(item.oldPrice),
        newPrice: parseFloat(item.newPrice),
        discount: parseFloat(item.discount),
      }));
      localStorage.setItem(key, JSON.stringify(validItems));
    } catch (error) {
      console.error("Ошибка при сохранении данных в localStorage:", error);
    }
  }
}
const storageService = new StorageService(
  StorageService.storageTypes.local,
  "local",
);

export default storageService;
