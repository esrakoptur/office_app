export const getItem = (key) => {
const value = localStorage.getItem(key)
return value
}

export const setItem = (key, value) => {
    localStorage.setItem(key, value)
}