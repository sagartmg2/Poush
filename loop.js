
/* for - loop */


/* 
output
    Leanne Graham's email is  Sincere@april.biz
    Ervin Howell 's email is xxx...
*/


let users = [
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]



// console.log(2);
// console.log(3);
/* 
    loop 
        - for loop  // if we know number of iterations
        - while loop  // if we know certain condition 
        - do while loop
*/

console.log("length ", users.length);

// for (starting point; condition; mutator) {
for (let i = 1; i <= 3; i++) {
    // console.log(i);
}

for (let index = 0; index < users.length; index++) {
    console.log(users[index].name + "'s email is " + users[index].email)
}

// console.log(users[0].name + "'s email is " + users[0].email)
// console.log(users[1].name + "'s email is " + users[1].email)
// console.log(users[2].name + "'s email is " + users[2].email)

