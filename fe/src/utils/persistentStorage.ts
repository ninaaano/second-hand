export class PersistentStorage {
  public key;

  constructor(key: string) {
    this.key = key;
  }

  set(value: unknown) {
    console.log('set', value);
    window.localStorage.setItem(this.key, JSON.stringify(value));
  }

  get() {
    const rawValue = window.localStorage.getItem(this.key);
    if (!rawValue) {
      return null;
    }

    return JSON.parse(rawValue);
  }

  delete() {
    window.localStorage.removeItem(this.key);
  }
}
