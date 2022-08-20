const baseUrl = 'https://localhost:7282/api/order';

export async function getAllUserOrders(token) {
    const response = await fetch(`${baseUrl}/all`, {
        headers: {
            "Authorization": `Bearer ${token}`
        },
    });
    
    const result = await response.json();

    return result;
}

export async function createOrder(orderData, token) {
    const response = await fetch(`${baseUrl}/add`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: orderData,
        });
        
    const result = await response.json();
    
    return result;
}