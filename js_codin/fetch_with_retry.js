async function fetchApi(url, retry = 3, delay=1000) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error("its now able get the data");
    }
    return response;
  } catch (error) {
    if (retry > 0) {
      console.warn("You can try again");
      await new Promise((resolve) => setTimeout(resolve, delay));
      return fetchApi(uri,retry-1, delay);
    } else {
        throw new Error("there is some issue")
    }
  }
}

fetchApi("https://xyz")
.then(data=>data.json())
.then(data=>console.log(data));
