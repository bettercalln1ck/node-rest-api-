//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

//var obj=new ObjectID();
//console.log(obj);





MongoClient.connect('mongodb://localhost:27017/Todoapp',(err,client) => {
if(err) {
  return console.log('Unable to connect to MongoDb server');
}
console.log('Connected to MongoDb server');
const db=client.db('TodoAPP')

/*db.collection('Todos').find({
  _id: new ObjectID('5c5563cfaf420ba7f2a5cbc2')
}).toArray().then((docs) => {
console.log('Todos');
console.log(JSON.stringify(docs,undefined,2));
},(err) => {
  console.log('Unable to pass todos',err);

});*/

/*db.collection('Todos').find().count().then((count) => {
console.log('Todos count:'+count);
console.log(JSON.stringify(docs,undefined,2));
},(err) => {
  console.log('Unable to pass todos',err);

});*/

db.collection('users').find({name: "nikhil"}).count().then((count) => {
console.log('users count:'+count);
console.log(JSON.stringify(docs,undefined,2));
},(err) => {
  console.log('Unable to pass todos',err);

});
db.collection('users').find({name: "nikhil"}).toArray().then((docs) => {
console.log('users with my name');
console.log(JSON.stringify(docs,undefined,2));
},(err) => {
  console.log('Unable to pass todos',err);

});
 client.close();
});
