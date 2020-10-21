export function authHeader() {

    // return authorization header with jwt token
    //var token = JSON.parse(localStorage.getItem('token'));
    var token = JSON.parse(localStorage.getItem('profitfarmers.token'));
    return (token!=null) ? { 'Authorization': `Bearer ${token.token}` } : {};
}


export function authHeaderJSON() {

  var token = JSON.parse(localStorage.getItem('profitfarmers.token'));
  var newHeader = {};
  if( token!=null) {
    newHeader = {
      'Authorization': `Bearer ${token.token}`,
      'Content-Type': 'application/json'
    };
  }


  return newHeader;

}

export function authHeaderFile() {

  var token = JSON.parse(localStorage.getItem('profitfarmers.token'));
  var newHeader = {};
  if( token!=null) {
    newHeader = {
      'Authorization': `Bearer ${token.token}`
    };
  }


  return newHeader;
}
