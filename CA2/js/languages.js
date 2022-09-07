

// Check frequently
// setInterval(animate,2000);

var blur = true;
// For magic button
function magic() {
    var code = "<button type=\"button\" class=\"btn\"><img id=\"spin\" onclick=\"reveal()\" class=\"icons\" src=\"../svgs&pics/key.png\" height=\"20\"\"></button>"
    code += "\tClick to show Review"

    document.getElementById("magic").innerHTML = code;
}

// Unveals blur
function reveal() {
    showpy()
    showjs()
    showj()
}

// Hide py
function hidepy() {

    var code = "<div class=\"card\" style=\"filter: blur(20px)\">"; // Starting Tag
    
    // Card Header
    code += "<div class=\"card-header\">";
    code += "<div class=\"bd-example\">";
    code += "<div class=\"progress\">"

    code += "<div class=\"progress-bar tintGreen\" role=\"progressbar\" aria-label=\"Segment one - default example\" style=\"width: 67.34%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\">Approve(67.34%)</div>"

    code += "<div class=\"progress-bar tintRed\" role=\"progressbar\" aria-label=\"Segment one - default example\" style=\"width: 32.66%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\">Disapprove(32.66%)</div>"

    code += "</div>";
    code += "</div>";
    code += "</div>";


    // Card Body
    code += "<div class=\"card-body\">"

    code += "<h5 class=\"card-title fs-1\"><span class=\"highlight\">Python</span></h5>"
    code += "<p class=\"card-text\">Pythons design philosophy emphasizes code readability with the use of significant indentation. It is extremely beginner freindly and is used widely across the industry for developing apps but more commonly for data analytics.</p>"

    code += "</div>";


    // Card Footer
    code += "<div class=\"card-footer\">"
    code += "<p>"
    code += "<button class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\".multi-collapse\" aria-expanded=\"false\" aria-controls=\"multiCollapseExample1 multiCollapseExample2\">Show Characteristics</button>"
    code += "</p>"

    code += "<div class=\"row\">"

    code += "</div>"

    code += "<div class=\"col\">"
    code += "<div class=\"collapse multi-collapse\" id=\"multiCollapseExample1\">"

    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Dynamically Typed</h5>"
    code += "Dynamic type checking is the process of verifying the type safety of a program at runtime. Implementations of dynamically type-checked languages generally associate each runtime object with a type tag (i.e., a reference to a type) containing its type information."
    code += "</div>"

    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Strongly Typed</h5>"
    code += "\"Strong typing\" generally refers to use of programming language types in order to both capture invariants of the code, and ensure its correctness, and definitely exclude certain classes of programming errors."
    code += "</div>"
    code += "</div>"
    code += "</div>"

    code += "<div class=\"col\">"
    
    code += "<div class=\"collapse multi-collapse\" id=\"multiCollapseExample1\">"
    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Object-oriented paradigm</h5>"
    code += "With perfect encapsulation, one of the distinguishing features of OOP, the only way that another object or user would be able to access the data is via the object's methods. Thus, an object's inner workings may be changed without affecting any code that uses the object."
        
    code += "</div>"

    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Procedural paradigm</h5>"
    code += "That is, they describe, step by step, exactly the procedure that should, according to the particular programmer at least, be followed to solve a specific problem."
    
    code += "</div>"
    code += "</div>"
    code += "</div>"

    code += "</div>"


    code += "</div>";
    document.getElementById("py").innerHTML = code;
}
// Show py
function showpy() {

    var code = "<div class=\"card\">"; // Starting Tag
    
    // Card Header
    code += "<div class=\"card-header\">";
    code += "<div class=\"bd-example\">";
    code += "<div class=\"progress\">"

    code += "<div class=\"progress-bar tintGreen\" role=\"progressbar\" aria-label=\"Segment one - default example\" style=\"width: 67.34%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\">Approve(67.34%)</div>"

    code += "<div class=\"progress-bar tintRed\" role=\"progressbar\" aria-label=\"Segment one - default example\" style=\"width: 32.66%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\">Disapprove(32.66%)</div>"

    code += "</div>";
    code += "</div>";
    code += "</div>";


    // Card Body
    code += "<div class=\"card-body\">"

    code += "<h5 class=\"card-title fs-1\"><span class=\"highlight\">Python</span></h5>"
    code += "<p class=\"card-text\">Pythons design philosophy emphasizes code readability with the use of significant indentation. It is extremely beginner freindly and is used widely across the industry for developing apps but more commonly for data analytics.</p>"

    code += "</div>";


    // Card Footer
    code += "<div class=\"card-footer\">"
    code += "<p>"
    code += "<button class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\".multi-collapse\" aria-expanded=\"false\" aria-controls=\"multiCollapseExample1 multiCollapseExample2\">Show Characteristics</button>"
    code += "</p>"

    code += "<div class=\"row\">"

    code += "</div>"

    code += "<div class=\"col\">"
    code += "<div class=\"collapse multi-collapse\" id=\"multiCollapseExample1\">"

    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Dynamically Typed</h5>"
    code += "Dynamic type checking is the process of verifying the type safety of a program at runtime. Implementations of dynamically type-checked languages generally associate each runtime object with a type tag (i.e., a reference to a type) containing its type information."
    code += "</div>"

    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Strongly Typed</h5>"
    code += "\"Strong typing\" generally refers to use of programming language types in order to both capture invariants of the code, and ensure its correctness, and definitely exclude certain classes of programming errors."
    code += "</div>"
    code += "</div>"
    code += "</div>"

    code += "<div class=\"col\">"
    
    code += "<div class=\"collapse multi-collapse\" id=\"multiCollapseExample1\">"
    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Object-oriented paradigm</h5>"
    code += "With perfect encapsulation, one of the distinguishing features of OOP, the only way that another object or user would be able to access the data is via the object's methods. Thus, an object's inner workings may be changed without affecting any code that uses the object."
        
    code += "</div>"

    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Procedural paradigm</h5>"
    code += "That is, they describe, step by step, exactly the procedure that should, according to the particular programmer at least, be followed to solve a specific problem."
    
    code += "</div>"
    code += "</div>"
    code += "</div>"

    code += "</div>"


    code += "</div>";
    document.getElementById("py").innerHTML = code;
}

// Hide js
function hidejs() {

    var code = "<div class=\"card\" style=\"filter: blur(20px)\">"; // Starting Tag
    
    // Card Header
    code += "<div class=\"card-header\">";
    code += "<div class=\"bd-example\">";
    code += "<div class=\"progress\">"

    code += "<div class=\"progress-bar tintGreen\" role=\"progressbar\" aria-label=\"Segment one - default example\" style=\"width: 61.46%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\">Approve(61.46%)</div>"

    code += "<div class=\"progress-bar tintRed\" role=\"progressbar\" aria-label=\"Segment one - default example\" style=\"width: 38.54%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\">Disapprove(38.54%)</div>"

    code += "</div>";
    code += "</div>";
    code += "</div>";


    // Card Body
    code += "<div class=\"card-body\">"

    code += "<h5 class=\"card-title fs-1\"><span class=\"highlight\">JavaScript</span></h5>"
    code += "<p class=\"card-text\">JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.</p>"

    code += "</div>";


    // Card Footer
    code += "<div class=\"card-footer\">"
    code += "<p>"
    code += "<button class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\".multi-collapse\" aria-expanded=\"false\" aria-controls=\"multiCollapseExample1 multiCollapseExample2\">Show Characteristics</button>"
    code += "</p>"

    code += "<div class=\"row\">"

    code += "</div>"

    code += "<div class=\"col\">"
    code += "<div class=\"collapse multi-collapse\" id=\"multiCollapseExample1\">"

    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Dynamically Typed</h5>"
    code += "Dynamic type checking is the process of verifying the type safety of a program at runtime. Implementations of dynamically type-checked languages generally associate each runtime object with a type tag (i.e., a reference to a type) containing its type information."
    code += "</div>"

    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Weakly Typed</h5>"
    code += "\"Weak typing\" generally refers to the lack of use of types in order to both capture invariants of the code, and ensure its correctness, and results in certain classes of programming errors."
    code += "</div>"
    code += "</div>"
    code += "</div>"

    code += "<div class=\"col\">"
    
    code += "<div class=\"collapse multi-collapse\" id=\"multiCollapseExample1\">"
    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Object-oriented paradigm</h5>"
    code += "With perfect encapsulation, one of the distinguishing features of OOP, the only way that another object or user would be able to access the data is via the object's methods. Thus, an object's inner workings may be changed without affecting any code that uses the object."
        
    code += "</div>"

    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Procedural paradigm</h5>"
    code += "That is, they describe, step by step, exactly the procedure that should, according to the particular programmer at least, be followed to solve a specific problem."
    
    code += "</div>"
    code += "</div>"
    code += "</div>"

    code += "</div>"


    code += "</div>";
    document.getElementById("js").innerHTML = code;
}
// Show js
function showjs() {

    var code = "<div class=\"card\">"; // Starting Tag
    
    // Card Header
    code += "<div class=\"card-header\">";
    code += "<div class=\"bd-example\">";
    code += "<div class=\"progress\">"

    code += "<div class=\"progress-bar tintGreen\" role=\"progressbar\" aria-label=\"Segment one - default example\" style=\"width: 61.46%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\">Approve(61.46%)</div>"

    code += "<div class=\"progress-bar tintRed\" role=\"progressbar\" aria-label=\"Segment one - default example\" style=\"width: 38.54%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\">Disapprove(38.54%)</div>"

    code += "</div>";
    code += "</div>";
    code += "</div>";


    // Card Body
    code += "<div class=\"card-body\">"

    code += "<h5 class=\"card-title fs-1\"><span class=\"highlight\">JavaScript</span></h5>"
    code += "<p class=\"card-text\">JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.</p>"

    code += "</div>";


    // Card Footer
    code += "<div class=\"card-footer\">"
    code += "<p>"
    code += "<button class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\".multi-collapse\" aria-expanded=\"false\" aria-controls=\"multiCollapseExample3 multiCollapseExample4\">Show Characteristics</button>"
    code += "</p>"

    code += "<div class=\"row\">"

    code += "</div>"

    code += "<div class=\"col\">"
    code += "<div class=\"collapse multi-collapse\" id=\"multiCollapseExample3\">"

    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Dynamically Typed</h5>"
    code += "Dynamic type checking is the process of verifying the type safety of a program at runtime. Implementations of dynamically type-checked languages generally associate each runtime object with a type tag (i.e., a reference to a type) containing its type information."
    code += "</div>"

    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Weakly Typed</h5>"
    code += "\"Weak typing\" generally refers to the lack of use of types in order to both capture invariants of the code, and ensure its correctness, and results in certain classes of programming errors."
    code += "</div>"
    code += "</div>"
    code += "</div>"

    code += "<div class=\"col\">"
    
    code += "<div class=\"collapse multi-collapse\" id=\"multiCollapseExample4\">"
    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Object-oriented paradigm</h5>"
    code += "With perfect encapsulation, one of the distinguishing features of OOP, the only way that another object or user would be able to access the data is via the object's methods. Thus, an object's inner workings may be changed without affecting any code that uses the object."
        
    code += "</div>"

    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Procedural paradigm</h5>"
    code += "That is, they describe, step by step, exactly the procedure that should, according to the particular programmer at least, be followed to solve a specific problem."
    
    code += "</div>"
    code += "</div>"
    code += "</div>"

    code += "</div>"


    code += "</div>";
    document.getElementById("js").innerHTML = code;
}

// Hide j
function hidej() {

    var code = "<div class=\"card\" style=\"filter: blur(20px)\">"; // Starting Tag
    
    // Card Header
    code += "<div class=\"card-header\">";
    code += "<div class=\"bd-example\">";
    code += "<div class=\"progress\">"

    code += "<div class=\"progress-bar tintGreen\" role=\"progressbar\" aria-label=\"Segment one - default example\" style=\"width: 45.75%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\">Approve(45.75%)</div>"

    code += "<div class=\"progress-bar tintRed\" role=\"progressbar\" aria-label=\"Segment one - default example\" style=\"width: 54.25%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\">Disapprove(54.25%)</div>"

    code += "</div>";
    code += "</div>";
    code += "</div>";


    // Card Body
    code += "<div class=\"card-body\">"

    code += "<h5 class=\"card-title fs-1\"><span class=\"highlight\">Java</span></h5>"
    code += "<p class=\"card-text\">Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>"

    code += "</div>";


    // Card Footer
    code += "<div class=\"card-footer\">"
    code += "<p>"
    code += "<button class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\".multi-collapse\" aria-expanded=\"false\" aria-controls=\"multiCollapseExample1 multiCollapseExample2\">Show Characteristics</button>"
    code += "</p>"

    code += "<div class=\"row\">"

    code += "</div>"

    code += "<div class=\"col\">"
    code += "<div class=\"collapse multi-collapse\" id=\"multiCollapseExample1\">"

    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Staticaly Typed</h5>"
    code += "Static type checking is the process of verifying the type safety of a program based on analysis of a program's text (source code). If a program passes a static type checker, then the program is guaranteed to satisfy some set of type safety properties for all possible inputs."
    code += "</div>"

    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Strongly Typed</h5>"
    code += "\"Strong typing\" generally refers to use of programming language types in order to both capture invariants of the code, and ensure its correctness, and definitely exclude certain classes of programming errors."
    code += "</div>"
    code += "</div>"
    code += "</div>"

    code += "<div class=\"col\">"
    
    code += "<div class=\"collapse multi-collapse\" id=\"multiCollapseExample1\">"
    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Object-oriented paradigm</h5>"
    code += "With perfect encapsulation, one of the distinguishing features of OOP, the only way that another object or user would be able to access the data is via the object's methods. Thus, an object's inner workings may be changed without affecting any code that uses the object."
        
    code += "</div>"

    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Concurrent paradigm</h5>"
    code += "Concurrent computing is a form of computing in which several computations are executed concurrently—during overlapping time periods—instead of sequentially—with one completing before the next starts."
    
    code += "</div>"
    code += "</div>"
    code += "</div>"

    code += "</div>"


    code += "</div>";
    document.getElementById("j").innerHTML = code;
}
// Hide j
function showj() {

    var code = "<div class=\"card\">"; // Starting Tag
    
    // Card Header
    code += "<div class=\"card-header\">";
    code += "<div class=\"bd-example\">";
    code += "<div class=\"progress\">"

    code += "<div class=\"progress-bar tintGreen\" role=\"progressbar\" aria-label=\"Segment one - default example\" style=\"width: 45.75%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\">Approve(45.75%)</div>"

    code += "<div class=\"progress-bar tintRed\" role=\"progressbar\" aria-label=\"Segment one - default example\" style=\"width: 54.25%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\">Disapprove(54.25%)</div>"

    code += "</div>";
    code += "</div>";
    code += "</div>";


    // Card Body
    code += "<div class=\"card-body\">"

    code += "<h5 class=\"card-title fs-1\"><span class=\"highlight\">Java</span></h5>"
    code += "<p class=\"card-text\">Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>"

    code += "</div>";


    // Card Footer
    code += "<div class=\"card-footer\">"
    code += "<p>"
    code += "<button class=\"btn btn-primary\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\".multi-collapse\" aria-expanded=\"false\" aria-controls=\"multiCollapseExample1 multiCollapseExample2\">Show Characteristics</button>"
    code += "</p>"

    code += "<div class=\"row\">"

    code += "</div>"

    code += "<div class=\"col\">"
    code += "<div class=\"collapse multi-collapse\" id=\"multiCollapseExample1\">"

    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Staticaly Typed</h5>"
    code += "Static type checking is the process of verifying the type safety of a program based on analysis of a program's text (source code). If a program passes a static type checker, then the program is guaranteed to satisfy some set of type safety properties for all possible inputs."
    code += "</div>"

    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Strongly Typed</h5>"
    code += "\"Strong typing\" generally refers to use of programming language types in order to both capture invariants of the code, and ensure its correctness, and definitely exclude certain classes of programming errors."
    code += "</div>"
    code += "</div>"
    code += "</div>"

    code += "<div class=\"col\">"
    
    code += "<div class=\"collapse multi-collapse\" id=\"multiCollapseExample1\">"
    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Object-oriented paradigm</h5>"
    code += "With perfect encapsulation, one of the distinguishing features of OOP, the only way that another object or user would be able to access the data is via the object's methods. Thus, an object's inner workings may be changed without affecting any code that uses the object."
        
    code += "</div>"

    code += "<div class=\"card card-body col-md-12\">"
    code += "<h5 class=\"card-title fs-5\">Concurrent paradigm</h5>"
    code += "Concurrent computing is a form of computing in which several computations are executed concurrently—during overlapping time periods—instead of sequentially—with one completing before the next starts."
    
    code += "</div>"
    code += "</div>"
    code += "</div>"

    code += "</div>"


    code += "</div>";
    document.getElementById("j").innerHTML = code;
}

magic()
hidepy()
hidejs()
hidej()
