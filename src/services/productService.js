const baseUrl = 'https://localhost:7282/api/product';

export async function getAllProducts() {
    console.log("entered");

    const response = await fetch('https://localhost:7282/api/product/all');

    console.log(response);

    const products =  await response.json();

    console.log(products);

    return products;
}

export async function getProduct(productId) {
    const response = await fetch(`${baseUrl}/${productId}`);
    const regions =  await response.json();

    return regions;
}

export async function addProduct(productData, modelId) {
    const response = await fetch(`${baseUrl}/model/${modelId}/add`, {
        method: 'POST',
        body: productData,
    });

    const result = await response.json();

    return result;
}

export async function updateProduct(productId, modelId = '', productData) {
    const response = await fetch(`${baseUrl}/update/${productId}` + (modelId === '') ? '' : `/${modelId}`, {
        method: 'PUT',
        body: productData,
    });

    const result = await response.json();

    return result;
}

export async function deleteProduct(productId) {
    const response = await fetch(`${baseUrl}/delete/${productId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    });

    const result = await response.json();

    return result;
}