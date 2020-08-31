/*function delFunc() {
    let del = event.target;
    $(".confirmDel").on("click", delRow);
    function delRow() {
        del.parentElement.parentElement.remove();
    } 
} */
/*
    $.ajax({
        url: "http://localhost:3000/users",
        dataType: "json",
    }).done(function(users) {
        console.log(users);

        let htmlString = '';
        for (let i = 0; i < users.length; i++) {
            htmlString += 
            `<tr>
                <td>Micheal Jordan</td>
                <td>1999</td>
                <td>mj19@gmail.com</td>
                <td>0912-834-75</td>
                <td>
                    <a href="update.html">
                        <i class="far fa-edit"></i> Sửa dữ liệu
                    </a> |
                    <a href="#" data-toggle="modal" data-target="#delete" onclick="delFunc()">
                        <i class="far fa-trash-alt"></i> Xóa
                    </a>
                </td>
            </tr>
            <tr>
                <td>Micheal Owen</td>
                <td>1998</td>
                <td>m0w98@gmail.com</td>
                <td>0922-234-275</td>
                <td>
                    <a href="update.html">
                        <i class="far fa-edit"></i> Sửa dữ liệu
                    </a> |
                    <a href="#" data-toggle="modal" data-target="#delete" onclick="delFunc()">
                        <i class="far fa-trash-alt"></i> Xóa
                    </a>
                </td>
            </tr>
            <tr>
                <td>Gordan Ramset</td>
                <td>1992</td>
                <td>gr92@gmail.com</td>
                <td>0932-334-075</td>
                <td>
                    <a href="update.html">
                        <i class="far fa-edit"></i> Sửa dữ liệu
                    </a> |
                    <a href="#" data-toggle="modal" data-target="#delete" onclick="delFunc()">
                        <i class="far fa-trash-alt"></i> Xóa
                    </a>
                </td>
            </tr>
            <tr>
                <td>Vinson Tandale</td>
                <td>1995</td>
                <td>vintan@gmail.com</td>
                <td>0933-333-333</td>
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
        }
    });
*/
$.ajax({
    url: "http://localhost:3000/users",
    dataType: "json",
}).done(function(users) {
    console.log(users);
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

