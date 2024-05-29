




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
    image1.src = image2.value;
    console.log(data);
    localStorage.setItem('userName', data.userName);


    
    for(let i = 0; i < data.length; i++){
        let yourName = document.createElement('h4');
        let image11 = document.createElement('img');

        yourName.innerText = `your name: ${data[i].userName}`;
        image11.src = `${data[i].image2}`;
  
    }
}









  let url = 'https://665736849f970b3b36c864e7.mockapi.io/logIn';

  async function logOut(){
        let data1 = await fetch(url);
        let data2 = await data1.json();
    
        for(let i = 0; i < data2.length; i++){
            let yourName1 = document.createElement('h4');
            let image111 = document.createElement('img');
            let btn1 = document.createElement('button');
            btn1.className = 'btn1';
            btn1.innerText = 'Delete';
            btn1.addEventListener('click', deleteData);
            yourName1.innerText = `your name: ${data2[i].userName}`;
            image111.src = data2[i].image2; 
            document.body.append(yourName1);
            document.body.append(image111);
            document.body.append(btn1);

        }

    }

    logOut()


    let url2 = 'https://665736849f970b3b36c864e7.mockapi.io/logIn';



    const myDataObject = { id: 1 };

    const deleteData = async ( ) =>{
       const response = await fetch(url2, {
           method: 'DELETE', 
           headers: {
             'Content-Type': 'application/json'
           },
           body: JSON.stringify(myDataObject)
       });
       
      const data = await response.json( );
      let btn1 = document.getElementById('btn1');


       console.log(data);
    };
    deleteData( );

















