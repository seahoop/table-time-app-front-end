
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

export const showARestaurant = async ({ restaurantId }) => {
    const response = await fetch(`${BASE_URL}/restaurants/${restaurantId}`)
    const restaurantToView = await response.json()
    return restaurantToView
}