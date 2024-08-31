const BASE_URL = import.meta.env.VITE_NODE_ENV === 'production' ? import.meta.env.VITE_PRODUCTION : import.meta.env.VITE_DEVELOPMENT



export const getUser = () => {
    const token = localStorage.getItem("token")
    if (!token) return null
    const user = JSON.parse(atob(json.token.split('')[1]))
    return user
}

export const signout = () => {
    localStorage.removeItem("token")
}