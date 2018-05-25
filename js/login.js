

function checkPassword() {
  var password=$('#txtPassword').val();
  if(password.length==0){
    alert('密码不能为空');
    return false;
  }else {
    if(password.length<6){
      alert('请将密码增加到六位或以上');
      return false;
    }else {
      return true;
    }
  }
}

function checkUser() {
  var email=$('#txtEmail').val();

  if(email.length==0){
    alert('用户名不能为空');
    return false;
  }else {

      return true;

  }
}

$('#btnLogin2').click(function () {
  if(checkUser()&& checkPassword()){
    var email=$('#txtEmail').val();
    var password=$('#txtPassword').val();
    var name=$('#txtEmail').val();

    var user={"userId":email,"userPassword":password,'nickName':name};

    $.ajax(
      {
        url:'data/users.json',
        type:'get',
        dataType:'json',
        data:user,
        success:function (response) {
          var uu;
          for(var i=0;i<response.length;i++){
            if(response[i].userId==email||response[i].nickName==name){
              uu=response[i];
            }
          }

          if(uu){
            if(uu.userPassword==password){
              sessionStorage.setItem('userId',email);
              sessionStorage.setItem('nickName',uu.nickName);
              $('#btn-login').replaceWith(`<button type="button" class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#div-tanchukuang" id="btn-login">${email}</button>`);
            }else {
              alert('用户名或密码错误');
            }
          }else {

            alert('用户不存在');

          }

        },
        error:function (err) {
          console.log(err);
        }
      }
    )
  }

});