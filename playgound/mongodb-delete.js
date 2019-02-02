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


//deletemany
//db.collection('Todos').deleteMany({text: 'waking late morning'}).then((result) => {
//console.log(result);

//});

//deleteone
/*db.collection('Todos').deleteOne({text: 'waking late morning'}).then((result) => {
    console.log(result);
});*/  

//findoneanddelete
/*db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
});*/  

db.collection('users').findOneAndDelete({
    _id: new ObjectID("5c540e55240c731ac55f3428")
}).then((results) => {
    console.log(JSON.stringify(results,undefined,2));
}); 
  client.close();
});
