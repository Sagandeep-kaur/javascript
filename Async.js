async function fetchData() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/1');

    let dataa = await response.json();

    console.log(dataa);
  } catch (error) {
    console.log('data');
    console.error('Error fetching data:', error);
  }
}

fetchData();
