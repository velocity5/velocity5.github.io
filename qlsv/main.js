/*function delFunc() {
    let del = event.target;
    $(".confirmDel").on("click", delRow);
    function delRow() {
        del.parentElement.parentElement.remove();
    } 
} */
/* re-direct page */
$(".btn-back").on("click", () => {
    location.href = "index.html";
})
$("#add").on("click", () => {
    location.href = "create.html";
})
/* get data by ajax*/
$.ajax({
    url: "http://localhost:3000/users",
    dataType: "json",
}).done(function(users) {
    let htmlString = '';
        for (let i = 0; i < users.length; i++) {
            htmlString += 
            `<tr id="tableRow">
                <td>${users[i].name}</td>
                <td>${users[i].birthday}</td>
                <td>${users[i].email}</td>
                <td>${users[i].phone}</td>
                <td>
                    <a href="update.html">
                        <i class="far fa-edit"></i> Sửa dữ liệu
                    </a> |
                    <a href="#" data-toggle="modal" data-target="#delete" onclick="delFunc()">
                        <i class="far fa-trash-alt"></i> Xóa
                    </a>
                </td>
            </tr>
              `
            $(".th-dark").append(htmlString);
    }
});


