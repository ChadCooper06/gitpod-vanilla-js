const { default: axios } = require("axios")

/*const todos = axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
        console.log('response.data', response.data);
        return response.data
    })
    .catch((error) => {
        console.log('You didn\'t succeed!', error);
    })
    .then((data) => {
        console.log('data', data)
    })
    console.log({todos});
*/
function todoList() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.data)
    .catch((error) => {console.log('You didn\'t succeed!', error)
    .then((data) => data)
        todos(data)
    })
}
    console.log({todos})


    async function myFetch(){
        let resp = await axios.get(url);
        if (!resp) {
            console.log(resp.status);
        }
        let photos = resp.data
        console.log(photos)

        for(let i=1, i<10; i++){
            const li= document.createElement("li")
            myList.appendChild(li)
            li.textContent += albums[albums.length -i].title;
        }
    }



    /*
    function updateList(todos) {

    const myList = document.querySelector('#myList');
    const ul = document.createElement('ul');
    ul.setAttribute('id', 'list')
    myList.appendChild(ul)
        for(let i=1; i<10; i++) {
            const li = document.createElement('li')
            ul.appendChild(li)
            li.textContent = todos;
        }
    
    console.log({myList})
    
}
*/

//EXAMPLE!!!!!

//function to display something-async to make it wait for the 
//inner function to finish
/*
async function myDisplay() {

//this needs to finish before myDisplay() can resolve
  let myPromise = new Promise(function(resolve, reject) {
    resolve("Full size header!!");
  });
  
  //the await here tells this to wait for myPromise to replace the innerHTML
  document.getElementById("demo").innerHTML = await myPromise;
}
//call the function you created
myDisplay();
*/



    //console.log(myList.data);

        
  

