




let userName = document.getElementById('userName');
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let password = document.getElementById('password');
let btn = document.getElementById('btn');


console.log(userName);
console.log(password);
console.log(btn);


async function logIn(){
    let url = 'https://665736849f970b3b36c864e7.mockapi.io/logIn';
    let response = await fetch(
        url, {
        method: 'POST',
        body: JSON.stringify({
           
            userName: userName.value,
            password:  password.value,
            // image1: image1.value,
            image2: image2.value,




          }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    let data = await response.json();
    let yourName = document.getElementById('y-name');
    yourName.innerText = `your name: ${data.userName}`;
    // image1.src = 'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=600';
    image1.src = image2.value;
    console.log(data);
    localStorage.setItem('userName', data.userName);

}