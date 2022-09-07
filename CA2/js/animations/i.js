// This file is for the front animation on index.html

var count = 0
var differentCodes = [ // Main
    "print(\"Hello, World!\")",
    "cout << \"你好, 世界!\" << endl;",
    "puts \"こんにちは, 世界!\"",
    "Console.WriteLine(\"नमस्ते, दुनिया!\");",
    "print(\"안녕하세요, 월드입니다!\")",
    "System.out.println(\"Hallo, Welt!\");",
    "println(\"Bonjour, le monde!\")",
    "fmt.Println(\"مرحبا بالعالم\")",
    "print!(\"Ciao, Mondo!\");",
    "console.log(\"Hola, Mundo!\");",
];
var differentSub = [ // Top
    "language = \"English\" ",
    "string language = \"Chinese\"; ",
    "language = \"Japanese\" ",
    "string language = \"Hindi\";",
    "var language = \"Korean\" ",
    "String language = \"German\"; ",
    "var language = \"French\" ",
    "var language string = \"Arabic\"",
    "let language = \"Italian\"",
    "var language = \"Spanish\"; ",
];
var differentLangs = [ // Bottom
    "Python",
    "C++",
    "Ruby",
    "C#",
    "Swift",
    "Java",
    "Kotlin",
    "Go",
    "Rust",
    "JavaScript",
];

// Toggle between different codes
setInterval(animate,2000);

// Function to enter the whole animation
function animate() {
    if (count > 9) {
        count = 0
    }
    var code = "<div class='fs-5  '>";
    code += changeTop(count);
    code += "</div>";

    code += "<div class='fs-1  '>";
    code += changeMain(count);
    code += "</div>";

    code += "<div class=' ' style='font-size: 90%; color: grey'>";
    code += changeBottom(count);
    code += "</div>";

    count++;
    document.getElementById("ani").innerHTML = code;
}

// Change between texts
function changeMain(i) {
    var art = differentCodes[i];
    return art;
}
function changeTop(i) {
    var art = differentSub[i];
    return art;
}
function changeBottom(i) {
    var art = differentLangs[i];
    return art;
}

