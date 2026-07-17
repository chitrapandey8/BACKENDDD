//Nodejs in Global
// console.log(__dirname);

// ///require helps to import  code from other module
// console.log(require);

// //process -- it is an process, that give imformatoon about other process
// console.log(process);


//module in nodejs -- is resuable piece of code 

///node js two ways to perform import export
//older way - common js --- module.exports , require for importing
//newer -ES mpdeling  -- wrtting export export for exporting in front of what in wahat i wan tto export

///In common js modelling export import is done by 'module' global variabel

function linearSearch(){
    console.log("hello");
}
exports.linearSearch = linearSearch

// export default linearSearch

// module.exports = {
//     linearSearch
// } 