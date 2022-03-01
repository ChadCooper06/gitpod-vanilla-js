






/*
const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(response => {
        console.log(response.status);
     return response.data;
   })
   //use defensive programming here to make sure you dont screw up
    .catch(error => {console.error(error);
   })
   .then(json => {
       //update state
       //use the data
        console.table(json.data);
        console.log(this);
   })
};
   getUsers();

   //if we fetch
const myFetch = ()=> {

   fetch('https://reqres.in/api/users')
   .then(response => {
       console.log(response);
       return response.json();
   })
   .then(json => {
       console.table(json.data);
       console.log("fetch this", this)
   });
}
//getUsers();
myFetch()
*/

//can add create user function that allows information to be added to this

//delete uses the id and removes the data

//create li to create the info and add it to the DOM