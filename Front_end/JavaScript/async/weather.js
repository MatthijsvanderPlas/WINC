username='stardash_vanderplas'
password='v17OsxqYO2'
let headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

fetch('https://login.meteomatics.com/api/v1/token', {
    method: 'GET', headers: headers
}).then(function (resp) {
    return resp.json();
}).then(function (data) {
    var token = data.access_token;
    console.log('token', token);
}).catch(function (err) {
    console.log('something went wrong', err);
});

