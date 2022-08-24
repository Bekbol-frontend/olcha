const fetchTest = async () => {
    const response = await fetch(`http://localhost:5000/telefony`)
    const data = await response.json();
    console.log(data);
}

fetchTest();