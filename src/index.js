// src/index.js

// ฟังก์ชันตัวอย่าง
function add(a, b) {
    return a + b;
}

// ฟังก์ชันตัวอย่าง
function subtract(a, b) {
    return a - b;
}

// ฟังก์ชันใหม่
function multiply(a, b) {
    return a * b;
}

// ฟังก์ชันใหม่
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// ฟังก์ชันใหม่สำหรับการสร้างผู้ใช้
function createUser(name, email) {
    return fetch("https://63772c9a5c477765121615ba.mockapi.io/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Success:", data);
        return data;
    })
    .catch((error) => {
        console.error("Error:", error);
        throw error;
    });
}

// ทำการ export ฟังก์ชัน
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    createUser
};
