const { read } = require('fs');

console.log("hejsan");
//uppgift 1
function echo(req, res) {
    res.send(req.body);
}



const echo2 = (req, res) => res.send(req.body)

//uppgift 2
const add = (a, b) => a + b;

function add2(a, b) {
    let sum = a + b
    return sum;
}
console.log(add2(10, 15));

//uppgift 3
//3. När är det passande att använda async-programmering?
// När man inte vet hur lång tid det kommer ta att få data. tex hämta data från en databas

//4 API:et Jsonplaceholder innehåller ett flertal endpoints. Skriv några kodexempel på hur man
//kan använda API:et genom att använda ’fetch’.

let posts = 'https://jsonplaceholder.typicode.com/posts/1';
let photos = 'https://jsonplaceholder.typicode.com/photos';




function fetchSomeData(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data, " hejaaa"))

}



async function postSomeData() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'test',
            body: 'ett försök',
            userId: 99,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
};

postSomeData();
fetchSomeData(posts)

//5 

class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// Skapar ett object som sätter ett namn och en ålder

let missan = new Cat("missan", 14)

console.log(missan.name, "heter denna katten")

//6

//Name: Elsa Age: 2 och Name: Gustav Age: 1

//7
let cat = "Kalle"
console.log(this, "<---")

//ett globalt tomt object module.exports

//8

let users = []

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function menu() {
    readline.question(`Please enter your command  `, command => {
        let switchCmd = command.split(" ")
        switch (switchCmd[0]) {
            case 'register':
                registerUser(switchCmd[1], switchCmd[2]);
                break;
            case 'login':
                loginUser(switchCmd[1], switchCmd[2]);
                break;
            case 'list':
                listAllUsers();
                break;
            case 'remove':
                removeUser(switchCmd[1], switchCmd[2]);
                break;
            case 'logout':
                logoutUser(switchCmd[1], switchCmd[2]);
                break;
            case 'check':
                checkUser(switchCmd[1]);
                break;
            case 'end':
                console.log("Program is end, whay ju kill me")
                readline.close();
                break;
            default:
                console.log("Please enter a valid command");
                menu();

        }
        //readline.close();
    });
}

function checkUser(name) {
    const usersFound = users.find(({ username }) => username === name)
    console.log(usersFound)
    menu();
}


function listAllUsers() {
    if (users.length < 1) {
        console.log("No users registered!!!!!")
    } else {
        users.forEach(user => console.log(user.username, user.loggedIn));
    }
    menu();
}

function registerUser(name, pw) {
    users.push({ username: name, password: pw, loggedIn: false })
    console.log("User: ", name, " has been registered")
    menu()
}

function logoutUser(name, pw) {
    const loggedInUser = [];
    users.filter(user => { if (user.loggedIn == true && user.username === name && user.password === pw) { loggedInUser.push(user) } })
    if (loggedInUser.length > 0) {
        loggedInUser[0].loggedIn = false;
        console.log(name, " have now logged out")
    } else {
        console.log("This user is not logged in")
    }
    menu()
}

function removeUser(name, pw) {
    let count = 0;
    let userToRemove = { startIndex: 0, endIndex: 0 };
    users.filter(user => {
        count++;
        if (user.username === name && user.password === pw) {
            userToRemove.startIndex = count
            userToRemove.endIndex = count + 1
            users = users.slice(userToRemove.startIndex, userToRemove.endIndex)
        }
    })
    if (count < 1) console.log("No user found")
    menu();
}

function loginUser(name, pw) {
    const loggedInUser = users.find(({ loggedIn }) => loggedIn === true);
    const foundUser = users.find(({ username, password }) => username === name && password === pw)

    if (loggedInUser) {
        console.log("Someone is already logged in")
    }
    else if (foundUser != undefined) {
        users.find(user => user.username === name && user.password === pw).loggedIn = true;
        console.log("You have logged in")
    }
    else {
        console.log("Wrong username or password, try again")
    }
    menu()
}

menu();