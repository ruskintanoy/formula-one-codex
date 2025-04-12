

export async function getData(endpoint) {
    const res = await fetch(`https://f1api.dev${endpoint}`);
  
    if (!res.ok) {
      throw new Error('Failed to fetch data from F1 API');
    }
  
    return res.json();
  }
  
export async function getWikiData(title) {
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${title}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch Wikipedia Data");
    }
    return res.json();
  }
  