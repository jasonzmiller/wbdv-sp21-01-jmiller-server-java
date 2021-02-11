var $usernameFld
var $passwordFld
var $firstNameFld
var $lastNameFld
var $roleFld
var $addUserBtn
var $updateUserBtn
var $tableBody
var adminUserService = new AdminUserServiceClient()
var selectedUser

var users = []

/*{username: 'webbmcfrogg4', password: '1cozylilypad', firstname: 'Webb', lastname: 'McFroggington', role: 'FACULTY'},
    {username: 'froggy', password: 'froggy2', firstname: 'Sir', lastname: 'Froggy', role: 'FACULTY'},
    {username: 'froglady', password: 'ladybug', firstname: 'Madame', lastname: 'Froggy', role: 'FACULTY'}*/

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
    if ($usernameFld.val().length != 0 & $passwordFld.val().length != 0 &
        $firstNameFld.val().length != 0 & $lastNameFld.val().length != 0){
        adminUserService.createUser(user)
            .then(function (actualUser) {
                users.push(actualUser)
                renderUsers(users)
            })
    }
}

function deleteUser(event) {
    var deleteBtn = $(event.currentTarget)
    var theIndex = deleteBtn.attr("id")
    var theID = users[theIndex]._id
    adminUserService.deleteUser(theID)
        .then(function (status) {
            users.splice(theIndex, 1)
            renderUsers(users)
        })
}

function selectUser(event) {
    var selectBtn = $(event.currentTarget)
    var theID = selectBtn.attr("id")
    selectedUser = users.find(user => user._id === theID)
    $usernameFld.val(selectedUser.username)
    $passwordFld.val(selectedUser.password)
    $firstNameFld.val(selectedUser.firstname)
    $lastNameFld.val(selectedUser.lastname)
    $roleFld.val(selectedUser.role)
}

function updateUser() {
    selectedUser.username = $usernameFld.val()
    selectedUser.password = $passwordFld.val()
    selectedUser.firstname = $firstNameFld.val()
    selectedUser.lastname = $lastNameFld.val()
    selectedUser.role = $roleFld.val()
    adminUserService.updateUser(selectedUser._id, selectedUser)
        .then(function (status) {
            var index = users.findIndex(user => user._id === selectedUser._id)
            users[index] = selectedUser
            renderUsers(users)
        })
    $usernameFld.val("")
    $passwordFld.val("")
    $firstNameFld.val("")
    $lastNameFld.val("")
}

function renderUsers(users) {
    $tableBody.empty()
    for (var i = 0; i < users.length; i++) {
        var user = users[i]
        $tableBody
            .append(`
            <tr>
                <td>${user.username}</td>
                <td class="webb-password-hidden">${user.password}</td>
                <td>${user.firstname}</td>
                <td>${user.lastname}</td>
                <td>${user.role}</td>
                <td class="text-right">
                    <button class="webb-btn-delete-user webb-btn-textonly"
                            id="${i}">
                        <i class="fa-2x fa fa-times"></i>
                    </button>
                    <button class="webb-btn-select-user webb-btn-textonly"
                            id="${user._id}">
                        <i class="fa-2x fa fa-pencil-alt"></i>
                    </button>
                </td>
            </tr>
        `)
    }
    $(".webb-btn-delete-user")
        .click(deleteUser)
    $(".webb-btn-select-user")
        .click(selectUser)
}

function findAllUsers() {
    // TODO
}


function findUserById() {
    // TODO
}

function init() {
    $usernameFld = $(".webb-username-fld")
    $passwordFld = $(".webb-password-fld")
    $firstNameFld = $(".webb-first-name-fld")
    $lastNameFld = $(".webb-last-name-fld")
    $roleFld = $(".webb-role-fld")
    $addUserBtn = $(".webb-btn-create-user")
    $updateUserBtn = $(".webb-btn-update-user")
    $tableBody = $("tbody")
    selectedUser = null

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

    $updateUserBtn.click(updateUser)

    adminUserService.findAllUsers()
        .then(function (actualUsersFromSerer) {
            users = actualUsersFromSerer
            renderUsers(users)
        })
}
$(init)

