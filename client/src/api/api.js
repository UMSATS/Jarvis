// A general asynchronous function to fetch data from an endpoint
export const fetchData = async (endpoint) => {
    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("API Fetch Error:", error);
        throw error;
    }
};
