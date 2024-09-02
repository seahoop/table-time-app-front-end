const BASE_URL = import.meta.env.VITE_ENVIRONMENT === 'production' ? import.meta.env.VITE_PRODUCTION : import.meta.env.VITE_DEVELOPMENT

const handleResponse = async (response) => {
    const json = await response.json()
    if (!response.ok) {
        throw new Error(json.error)
    }
    return json
}

export const getRestaurantPage = async (userId, restaurantId) => {
    const response = await fetch(`${BASE_URL}/customers/${userId}/restaurants/${restaurantId}`)
    const restaurant = await handleResponse(response)
    return restaurant
}