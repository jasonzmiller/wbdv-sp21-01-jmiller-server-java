var $usernameFld
var $passwordFld
var $firstNameFld
var $lastNameFld
var $roleFld
var $addUserBtn
var $tableBody

var users = [
    /*{username: 'webbmcfrogg4', password: '1cozylilypad', firstname: 'Webb', lastname: 'McFroggington', role: 'FACULTY'},
    {username: 'froggy', password: 'froggy2', firstname: 'Sir', lastname: 'Froggy', role: 'FACULTY'},
    {username: 'froglady', password: 'ladybug', firstname: 'Madame', lastname: 'Froggy', role: 'FACULTY'}*/
]

function addUser() {
    createUser({
        username: $usernameFld.val(),
        password: $passwordFld.val(),
        firstname: $firstNameFld.val(),
        lastname: $lastNameFld.val(),
        role: $roleFld.val()
    })
    $usernameFld.val("")
    $passwordFld.val("")
    $firstNameFld.val("")
    $lastNameFld.val("")
}

function createUser(user) {
    users.push(user)
    renderUsers(users)
}

function deleteCourse(event) {
    var deleteBtn = $(event.currentTarget)
    var theID = deleteBtn.attr("id")
    users.splice(theID, 1)
    renderUsers(users)
}

function renderUsers(users) {
    $tableBody.empty()
    for (var i = 0; i < users.length; i++) {
        var user = users[i]
        $tableBody
            .prepend(`
            <tr>
                <td>${user.username}</td>
                <td>${user.password}</td>
                <td>${user.firstname}</td>
                <td>${user.lastname}</td>
                <td>${user.role}</td>
                <td class="text-right">
                    <button class="webb-btn-delete-user webb-btn-textonly"
                            id="${i}">
                        <i class="fa-2x fa fa-times"></i>
                    </button>
                    <button class="webb-btn-textonly">
                        <i class="fa-2x fa fa-pencil-alt"></i>
                    </button>
                </td>
            </tr>
        `)
    }
    $(".webb-btn-delete-user")
        .click(deleteCourse)
}

function init() {
    $usernameFld = $(".webb-username-fld")
    $passwordFld = $(".webb-password-fld")
    $firstNameFld = $(".webb-first-name-fld")
    $lastNameFld = $(".webb-last-name-fld")
    $roleFld = $(".webb-role-fld")
    $addUserBtn = $(".webb-btn-create-user")
    $tableBody = $("tbody")

    $addUserBtn.click(() => {
            createUser({
                username: $usernameFld.val(),
                password: $passwordFld.val(),
                firstname: $firstNameFld.val(),
                lastname: $lastNameFld.val(),
                role: $roleFld.val()
            })
            $usernameFld.val("")
            $passwordFld.val("")
            $firstNameFld.val("")
            $lastNameFld.val("")
        }
    )
}
$(init)

