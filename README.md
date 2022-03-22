# express-jsonserver-api

This repository will help you to create a basic express restful service with json-server.

<br/>
First clone repository

```bash
$ git clone https://github.com/Geeks-Vegeta/express-jsonserver-api.git
```

<br/>
Install packages

```bash
$ npm install
```

<br/>
Run the following script.

```bash
$ npm run dev
```

<br/>
######Expressjs API Docs.
<details>
<summary>All Users</summary>

```bash
GET 
/alluser
```
</details>


<details>
<summary>Add New User</summary>

```bash
POST 
/adduser
req.body{
    id:12,
    name:"shreyas"
}
```
</details>


<details>
<summary>Get a specific user</summary>

```bash
GET 
/user/12
```
</details>

<details>
<summary>Update a specific user</summary>

```bash
PUT 
/update/12
req.body{
    name:"jhon"
}
```
</details>

<details>
<summary>Delete a specific user</summary>

```bash
DELETE 
/delete/12
```
</details>

<br/>
######Test Following API
To test following apis just run the following commands.

First run json server
```bash
$ npm run jsonserver
```

Then run test command.
```bash
$ npm test
```