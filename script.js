let visible = document.getElementById('password-input')

function alterVisiblePassword() {
  if (visible.type === 'password') {
    visible.type = 'text'
  } else {
    visible.type = 'password'
  }
}

function toggleBackgroundImage() {
  if (visible.type === 'password') {
    document.getElementById('button-eye-password').style.backgroundImage =
      'url(./images/eye.svg)'
  } else {
    document.getElementById('button-eye-password').style.backgroundImage =
      'url(./images/eye-active.svg)'
  }
}
