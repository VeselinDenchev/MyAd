const baseUrl = 'https://localhost:7282/api/brand';

export default async function getAllBrands() {
    const response = await fetch(`${baseUrl}/all`);
    const products =  await response.json();

    return products;
}