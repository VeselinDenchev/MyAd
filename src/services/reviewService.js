const baseUrl = 'https://localhost:7282/api/review'; 

export async function getAllProductReviews(productId) {
    const response = await fetch(`${baseUrl}/product/${productId}/all`);
    const reviews =  await response.json();

    return reviews;
}