import { all } from "axios"

const BASE_URL = import.meta.env.VITE_ENVIRONMENT === 'production' ? import.meta.env.VITE_PRODUCTION : import.meta.env.VITE_DEVELOPMENT

export const showRestaurants = async () => {
    try {
        const response = await fetch(`${BASE_URL}/`)
        const allRestaurants = await response.json()
        if (!response.ok) {
            throw new Error(`Issue Getting All Restaurants`)
        }
        return allRestaurants
    } catch (error) {
        
    }
}

export const showMyRestaurant = async () => {
    
}