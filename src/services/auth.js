import axios from "axios"
const BASE_URL = import.meta.env.VITE_ENVIRONMENT === 'production' ? import.meta.env.VITE_PRODUCTION : import.meta.env.VITE_DEVELOPMENT

export const customerSignUp = async (formData) => {
    try {
        const response = await fetch(`${BASE_URL}/customers/signup`,
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            }
        )

        const json = await response.json()

        if (json.error) {
            throw new Error(json.error)
        }

        if (json.token) {
            localStorage.setItem('token', json.token)
            return json
        }

    } catch (error) {
        console.error(error)
        throw error
    }
}

export const customerSignIn = async (formData) => {
    try {
        const response = await fetch(`${BASE_URL}/customers/signin`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })

        const json = await response.json()

        if (json.error) {
            throw new Error(json.error)
        }

        if (json.token) {
            localStorage.setItem('token', json.token)

            const user = JSON.parse(atob(json.token.split(".")[1]))

            return user
        }

    } catch (error) {
        console.error(error)
        throw error
    }
} 

