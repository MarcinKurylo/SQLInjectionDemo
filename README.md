# SQLInjectionDemo
### Simple website created to demonstrate SQLInjection attacs

Every security feature is disabled in order to show vulnerabilities of websites with forms connected to databases.

Employed regular expressions to provide very basic protection.

### Attack examples

* Add user to database: ";INSERT INTO users(username,password) SELECT "thief", "password
* Change admin password: ";UPDATE users SET password="password" WHERE username="admin
* Delete records from database: ";DELETE FROM users WHERE "a"="a
