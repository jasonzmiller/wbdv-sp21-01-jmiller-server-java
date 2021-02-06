var addUserBtn
var users = [
    {username: 'webbmcfrogg4', password: '1cozylilypad', firstname: 'Webb', lastname: 'McFroggington', role: 'FACULTY'},
    {username: 'froggy', password: 'froggy2', firstname: 'Sir', lastname: 'Froggy', role: 'FACULTY'},
    {username: 'froggy', password: 'froggy2', firstname: 'Sir', lastname: 'Froggy', role: 'FACULTY'}
]

console.log(users)

var tableBody = $("tbody")

function renderUsers(users) {
    tableBody.empty()
    for (var i = 0; i < users.length; i++) {
        var user = users[i]
        tableBody
            .prepend(`
            <tr>
                <td>${user.username}</td>
                <td>${user.password}</td>
                <td>${user.firstname}</td>
                <td>${user.lastname}</td>
                <td>${user.role}</td>
                <td class="text-right">
                    <button class="webb-btn-textonly">
                        <i class="fa-2x fa fa-times"></i>
                    </button>
                    <button class="webb-btn-textonly">
                        <i class="fa-2x fa fa-pencil-alt"></i>
                    </button>
                </td>
            </tr>
        `)
    }
}
renderUsers(users)

function init() {
    var addUserBtn = $(".webb-btn-create-user")
}

/*
function renderCourses(courses) {
    theTableBody.empty()
    for (var i = 0; i < courses.length; i++) {
        var course = courses[i]
        theTableBody
            .prepend(`
    <tr>
        <td>${course.title}</td>
        <td>${course.seats}</td>
        <td>${course.semester}</td>
        <td>
            <button class="wbdv-delete" id="${i}">Delete</button>
            <button>Select</button>
        </td>
    </tr>
  `)
    }
    jQuery(".wbdv-delete")
        .click(function (event) {
            console.log(event.target)
        })
}
renderCourses(courses)*/
