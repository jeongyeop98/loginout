var loginForm = document.getElementById('login')
var logoutForm = document.getElementById('logout')
var login_success = document.getElementById('login_success')
var input_id = document.getElementById('input_id')
var input_pw = document.getElementById('input_pw')
var login_btn = document.getElementById('login_btn')
var logout_btn = document.getElementById('logout_btn')
var logout_content = document.getElementById('logout_content')
var user_id_list = document.querySelectorAll('.user_id')

var user = {
  id : "jack",
  pw : "1234"
}

login_btn.addEventListener('click', function() {
  var id = input_id.value
  var pw = input_pw.value
  if (!id) {
    console.log("ID를 입력해주세요")
    return false
  } else if (!pw) {
    console.log("PASSWORD를 입력해주세요")
    return false
  }
  if (id !== user.id || pw !== user.pw) {
    console.log("ID 또는 비밀번호가 정확하지 않습니다")
  } else if (id === user.id && pw === user.pw) {
    console.log("Login Success!")
    loginForm.style.display = "none"
    login_success.style.display = "block"
    user_id_list.forEach(function(user_id) {
      user_id.innerHTML = user.id
    })
  }
})


logout_btn.addEventListener('click', function() {
  console.log("Logout Success!")
  login_success.style.display = "none"
  loginForm.style.display = "block"
  logout_content.style.display = "block"
  input_id.value = ""
  input_pw.value = ""
  user_id_list.forEach(function(user_id) {
    user_id.innerHTML = user.id
  })
})
