changeThisPageFunc = function() {
    myMain = document.querySelector("main")
    myMain.innerHTML = "<h1> “© 2023 AP Comp Sci Rosslyn Academy. All Rights Reserved.      </h1>"
    myMain.style.height ="50px"
    myMain.style.width ="50%"
}



savetime = function() {
    t = document.querySelector("#timetable")
    trow = document.createElement("tr")
    td = document.createElement("td")
    contents = document.createTextNode(Date())
    td.appendChild(contents)
    trow.appendChild(td)
    t.appendChild(trow)
 }