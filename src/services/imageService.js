const baseUrl = 'https://localhost:7282/image';

export async function getAllProductImageFullNames(productId) {
    const response = await fetch(`${baseUrl}/all/${productId}`);
    const regions =  await response.json();

    return regions;
}

export async function getRegionImage(imageId)  {
    const response = await fetch(`${baseUrl}/${imageId}`);
    const image =  await response.blob();

    return image;
}