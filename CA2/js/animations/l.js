// This file is for the front animation on languages.html

var count = 0
var differentCodes = [ // Main
    "print(\"Programming Languages\")",
    "cout << \"编程语言\" << endl;",
    "puts \"プログラミング言語\"",
    "Console.WriteLine(\"प्रोग्रामिंग की भाषाएँ\");",
    "print(\"프로그래밍 언어들\")",
    "System.out.println(\"Sprachen\");",
    "println(\"Langages de programmation\")",
    "fmt.Println(\"لغات البرمجة\")",
    "print!(\"Langages\");",
    "console.log(\"Idiomas\");",
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

// Turn Div to Variable
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

