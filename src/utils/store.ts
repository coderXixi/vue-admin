export interface IData {
  expire?: number,
  [key: string]: any

}



export default {
  set(key: string, data: IData) {
    if (data.expire) {
      data.expire = new Date().getTime() + data.expire * 1000
    }
    localStorage.setItem(key, JSON.stringify(data))
  },
  get(key: string): IData | null {
    const value = localStorage.getItem(key);
    if (value) {
      const data = JSON.parse(value);
      if (data?.expire) {
        if (data.expire < new Date().getTime()) {
          localStorage.removeItem(key)
          return null
        }
        return data
      }
    }
    return null
  }

}