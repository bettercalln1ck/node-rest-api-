//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

var obj=new ObjectID();
console.log(obj);



//var user = {name: 'nikhil',age:25};
//var {name}=user;
//console.log(name);

MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,client) => {
if(err) {
  return console.log('Unable to connect to MongoDb server');
}
console.log('Connected to MongoDb server');
const db=client.db('TodoAPP')

 db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  },(err,result) => {
    if(err) {
      return console.log('Unable to insert todo',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });

/*  db.collection('users').insertOne({
   name:'Andrew',
   age: 25,
   location: 'india'
  },(err,result) => {
    if(err) {
      return console.log('unable to insert users',err);
    }
    console.log(result.ops[0]._id.getTimestamp());
  });*/
  client.close();
});
