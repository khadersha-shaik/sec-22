
let scanButton = document.getElementById('scanButton')
let result= document.getElementById('result')
function getname(){
let urlInput = document.getElementById('urlInput').value;
for(let i=0;i<5;i++){
    let h1=document.createElement("h1");
h1.textContent=urlInput;
result.appendChild(h1);
}
console.log("function working")
} 










// scanButton.addEventListener('click', () => {
// const options = {
//                                 method: 'POST',
//                                 headers: {

//                                     accept: 'application/json',
//                                     'x-apikey': '08226c716547a3a439189d66d7f7b416bc42cdde86b3f6d72ea81b5ed763f79c',
//                                     'content-type': 'application/x-www-form-urlencoded'
//                                 },
//                                 body: `url=${scan}`
//                             };


//                         })




