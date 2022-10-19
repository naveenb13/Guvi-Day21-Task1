async function dogs() {
    try {
        let res = await fetch("https://dog.ceo/api/breeds/image/random");
        let res1 = await res.json();
        console.log(res1.message);
        

        let response = res1.message;
        var filename= response.split('/')

        document.getElementById("result").innerHTML = `<img src=${response} alt="A Dog's Image" width="600px" height="500px" class="image1"/>`
        document.getElementById("title1").innerText = `${filename[4]}`
    }
    catch (error) {
        console.log(error);
    }
}

