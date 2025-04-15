const MAX_ATTEMPTS = 3;
const DELAY = 1000;

export async function retryFetch(url: string, attempts = 0): Promise<any> {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    console.log('data==', data);
    return data;
  } catch (err) {
    if (attempts >= MAX_ATTEMPTS) throw err;
    await new Promise(resolve => setTimeout(resolve, DELAY));
    return retryFetch(url, attempts + 1);
  }
}

