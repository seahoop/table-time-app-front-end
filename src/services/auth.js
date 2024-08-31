const BASE_URL = import.meta.env.VITE_ENVIRONMENT === 'production' ? import.meta.env.VITE_PRODUCTION : import.meta.env.VITE_DEVELOPMENT

const handleResponse = async (response) => {
    const json = await response.json()
    if (!response.ok) {
        throw new Error(json.error)
    }
    return json
}

export const getUser = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
    const user = JSON.parse(atob(token.split('.')[1]));
    return user;
}

export const getVisitorType = () => {
    const visitorType = localStorage.getItem('visitorType')
    if (!visitorType) {
        return 'guest'
    } else return visitorType
}

const storeTokenAndGetUser = async (token) => {
    localStorage.setItem('token', token)
    const user = JSON.parse(atob(token.split(".")[1]))
    return user
}

export const customerSignUp = async (formData) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/customers/signup`,
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            }
        )
        const data = await handleResponse(response)
        const customer = await storeTokenAndGetUser(data.token)
        localStorage.setItem('visitorType', 'customer')
        return customer

    } catch (error) {
        console.error('Customer Sign Up Error:', error)
        throw error
    }
}

export const customerSignIn = async (formData) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/customers/signin`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })

        const data = await handleResponse(response)
        const customer = await storeTokenAndGetUser(data.token)
        localStorage.setItem('visitorType', 'customer')
        return customer

    } catch (error) {
        console.error('Customer Sign In Error: ', error)
        throw error
    }
}

export const restaurantSignUp = async (formData) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/restaurants/signup`,
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            }
        )

        const data = await handleResponse(response)
        const restaurant = await storeTokenAndGetUser(data.token)
        localStorage.setItem('visitorType', 'restaurant')
        return restaurant

    } catch (error) {
        console.error('Restaurant Sign Up Error:', error)
        throw error
    }
}

export const restaurantSignIn = async (formData) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/restaurants/signin`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })

        const data = await handleResponse(response)
        const restaurant = await storeTokenAndGetUser(data.token)
        localStorage.setItem('visitorType', 'restaurant')
        return restaurant

    } catch (error) {
        console.error('Restaurant Sign In Error: ', error)
        throw error
    }
}

export const signout = () => {
    localStorage.removeItem("token")
    localStorage.setItem('visitorType', 'guest')
}