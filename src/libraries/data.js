// The data management uses https://getpantry.cloud/
// The id of the pantry is 00244aa6-72b3-4199-9aa2-26eb154b67f1

const PANTRY_ID = '00244aa6-72b3-4199-9aa2-26eb154b67f1';

const baskets = ['userAccounts'];

// Creates a new basket
export const createBasket = async (basketName) => {
    const response = await fetch(`https://getpantry.cloud/apiv1/pantry/${PANTRY_ID}/basket/${basketName}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    });

    if (!response.ok) {
        throw new Error('Failed to create basket');
    }

    const data = await response.json();
    return data;
};

// Reads the data from the basket
export const readBasketData = async (basketName) => {
    const response = await fetch(`https://getpantry.cloud/apiv1/pantry/${PANTRY_ID}/basket/${basketName}`);

    if (!response.ok) {
        throw new Error('Failed to fetch basket data');
    }

    const data = await response.json();
    return data;
};

// Writes the data to the basket
export const writeBasketData = async (basketName, data) => {
    const response = await fetch(`https://getpantry.cloud/apiv1/pantry/${PANTRY_ID}/basket/${basketName}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Failed to write data to basket');
    }

    const responseData = await response.json();
    return responseData;
};

