async function fetchData() {
    try {
      
      let  response = await fetch('https://api.example.com/data');
     
      let dataa = await response.json();
      console.log(dataa);
    } catch (error) {
      console.log('data');
      console.error('Error fetching data:', error);
    }
  }


 fetchData() 