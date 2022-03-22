const request = require('supertest');

const app = require('../app');


describe('Initial Endpoint', () => {
    test('just check response', async () => {

    const res = await request(app).get('/');

    expect(res.statusCode).toEqual(200);
  })
})


describe("Get All Users", ()=>{
    test('should return all json users', async () =>{

        const res = await request(app).get('/alluser');
        expect(res.statusCode).toEqual(200);
    })
})


describe("add new user", ()=>{
    test('should return all json users', async () =>{

        const res = await request(app).post('/adduser').send(
            {
                id:2,
                name:"jhon"
            }
        );
        expect(res.statusCode).toEqual(201);
    })
})


describe('get a particular user', ()=>{

    test('should return a specific user', async()=>{

        const res = await request(app).get('/user/2');
        expect(res.statusCode).toEqual(200);
    })
})


describe('update username', ()=>{

    test('should rename a given user', async()=>{

        const res = await request(app).put('/update/2').send({
            name:"jhon"
        })
        expect(res.statusCode).toEqual(200);
    })
})


describe('delete user', ()=>{
    test('should delete given user', async()=>{

        const res = await request(app).delete('/delete/2');
        expect(res.statusCode).toEqual(200);
    })
})