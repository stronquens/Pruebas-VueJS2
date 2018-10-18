
export default {
    auth: false,
    loggedIn: function (){
        return this.auth;
    },
    login: function (auth) {
        this.auth = auth;
    }
}