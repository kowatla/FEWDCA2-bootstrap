// This file is for the front animation on thesidetrails.html

var count = 0
var differentCodes = [ // Main
    "print(\"Side Quests\")",
    "cout << \"支线任务\" << endl;",
    "puts \"サイドクエスト\"",
    "Console.WriteLine(\"भीतर छिपे सवाल\");",
    "print(\"사이드 퀘스트\")",
    "System.out.println(\"Nebenmissionen\");",
    "println(\"quêtes secondaires\")",
    "fmt.Println(\"مرحبا بالعالم\")",
    "print!(\"missioni secondarie\");",
    "console.log(\"misiones secundarias\");",
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

