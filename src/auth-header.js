export default function authHeader() {
    let user = localStorage.getItem('token');
    if (user ) {
        console.log(user)
      return { 
        'Content-Type' : 'application/json',
        'Authorization': `${user}` };
    } else {
      return {};
    }
  }