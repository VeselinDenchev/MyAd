const baseUrl = 'https://localhost:7282/api/account';

export async function loginUser(userData) {
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        body: userData,
    });

    const result = await response.json();

    return result;
}