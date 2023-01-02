 async function getData(url : string ) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;

    } catch (error) {
      return [];
    }
}

export {
  getData
}