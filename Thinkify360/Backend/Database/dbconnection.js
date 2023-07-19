   const { default: mongoose } = require('mongoose');
const mongodb = require('mongoose');

   const url = "mongodb+srv://konetidinakar:Newtask1234@cluster0.zzs7epc.mongodb.net/?retryWrites=true&w=majority";


const connection =    ()=>{

const data = mongoose.connect(url);

if(data){
    console.log('database connection established Successfully')
}else{
    console.log('database connection was not established Successfully')
}

}


connection();