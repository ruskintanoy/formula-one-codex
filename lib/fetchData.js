

export async function getData(endpoint) {
    const res = await fetch(`https://f1api.dev${endpoint}`);
  
    if (!res.ok) {
      throw new Error('Failed to fetch data from F1 API');
    }
  
    return res.json();
  }
  