// Approach - write a fuction which fetch api and pass a parameter having no of retry like 2 or 3 
// whatevr you want to have no of retry option, and if there is any error check retry is more then 0 then call the same fuction
// which you are using to fetch api by passing retry-1, like a recursive function.

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
