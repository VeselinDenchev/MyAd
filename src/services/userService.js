const baseUrl = 'https://localhost:7282/api/account';

export async function getUserEmails() {
    const response = await fetch(`${baseUrl}/getUserEmails`);
    const products =  await response.json();

    return products;
}

export async function login(userData) {
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        body: userData,
    });

    const result = await response.json();

    return result;
}

export async function register(userData) {
    const response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        body: userData,
    });

    const result = await response.json(); 

    return result;
}