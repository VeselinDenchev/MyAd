const baseUrl = 'https://localhost:7282/api/review'; 

export async function getAllProductReviews(productId) {
    const response = await fetch(`${baseUrl}/product/${productId}/all`);
    const reviews =  await response.json();

    console.log(reviews);

    return reviews;
}

export async function addReview(productId, reviewData, token) {
    const response = await fetch(`${baseUrl}/product/${productId}/add`, {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: reviewData,
    });

    const review = response.json();

    return review;
}

export async function updateReview(reviewId, reviewData, token) {
    const response = await fetch(`${baseUrl}/update/${reviewId}`, {
        method: 'PUT',
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: reviewData,
    });

    const review = response.json();

    return review;
}

export async function deleteReview(reviewId, token) {
    const response = await fetch(`${baseUrl}/delete/${reviewId}`, {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${token}`
        },
    });

    const review = response.text();

    return review;
}