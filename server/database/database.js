var mysql = require('mysql');

class Database {
  constructor(host,user,password) {
    this.hosts = host;
    this.users = user;
    this.passwords = password;
  }

  connectDatabase(){
    this.conn = mysql.createConnection({
      host: this.hosts,
      user:this.users,
      password:this.passwords
    })
  }

  isConnected(){
    return this.conn.connect(function(err) {
      return !err;
    });
  }


}
