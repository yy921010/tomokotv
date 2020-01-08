import { AES, enc } from 'crypto-js'

export default {
  install (Vue, opt = {}) {
    const LOCAL_STORAGE = window.localStorage
    const SESSION_STORAGE = window.sessionStorage

    let json = {}
    let tobeLocalSavedJson = {}
    let tobeSessionSavedJson = {}

    const SessionManger = {
      put (key, value, isPersist = false) {
        if (!value) {
          SessionManger.remove(key)
          return
        }
        json[key] = value
        if (isPersist) {
          tobeLocalSavedJson[key] = value
        } else {
          tobeSessionSavedJson[key] = value
        }
        SessionManger.saveStorage()
      },
      get (key) {
        if (!(key in json)) {
          try {
            let value = SESSION_STORAGE.getItem(key) || LOCAL_STORAGE.getItem(key)
            if (value) {
              json[key] = JSON.parse(AES.decrypt(value, key)
                .toString(enc.Utf8))
            }
          } catch (e) {
            console.error(`localStorage access denied!`)
            return null
          }
        }
        return json[key] || null
      },
      remove (key) {
        delete json[key]
        delete tobeSessionSavedJson[key]
        delete tobeLocalSavedJson[key]

        try {
          SESSION_STORAGE.removeItem(key)
          LOCAL_STORAGE.removeItem(key)
        } catch (e) {
          console.error(`localStorage access denied!`)
        }
      },

      clear (isPersist) {
        try {
          SESSION_STORAGE.clear()
        } catch (f) {
          console.error('localStorage access denied')
        }
        if (isPersist) {
          try {
            LOCAL_STORAGE.clear()
          } catch (f) {
            console.error('session Storage access denied')
          }
        }
        tobeLocalSavedJson = {}
        tobeSessionSavedJson = {}
        json = {}
      },

      saveStorage () {
        SessionManger.saveToStorage(tobeLocalSavedJson, LOCAL_STORAGE)
        SessionManger.saveToStorage(tobeSessionSavedJson, SESSION_STORAGE)
        tobeLocalSavedJson = {}
        tobeSessionSavedJson = {}
      },

      saveToStorage (jsons, storage) {
        Object.keys(jsons).forEach(key => {
          const value = jsons[key]
          let encryptValue = AES.encrypt(JSON.stringify(value), key)
          try {
            storage.setItem(key, encryptValue)
          } catch (e) {
            console.error(`localStorage access denied!`)
          }
        })
      }
    }

    Vue.prototype.$session = SessionManger
  }
}
