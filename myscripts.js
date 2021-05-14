function sayHello () {
    this.textContent = "said it";
    var name = document.getElementById("name").value;
    var message = "hello " + name;
    document.getElementById("content").textContent = message;

if (name === "student") {
    title = "hello " + name;
    document.getElementById("title").textContent = title;
    
}
};
document.querySelector("button").onclick = sayHello;
