
/* cosa */
const toBuyList = [
    "paperella di gomma + responsive"
    , "moment-ACT"
    , "guanti scalda mani da tastiera"
    , "brugola n.8"
    , "12 ore di sonno"
]

/* dove */
const ulList_el = document.querySelector(".list");
console.log(ulList_el)


/* come */

let i = 0
//finchè 
while (i < toBuyList.length) {

    //creo li
    const li = document.createElement("li");

    //appendo gli elementi della lista
    li.append(toBuyList[i]);
    console.log(li);

    //li stamppo nell'ul
    ulList_el.append(li)
    i++
}
