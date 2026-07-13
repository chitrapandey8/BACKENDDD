///what is runtime environment---runtime provide extra capabilities ti js like extra fucnton likes settimout, setinterval also these are not inherit part of javascript., browsers are runtime environmetn to js browsers provide extra capabilties like settimeout, etc etc becoz of nodejs we were able to reacjh to interbnal recourses of our system by the fuction provided by js so we can use it just put of frontend
//js is a programming language
//js is cross platform means if i writwe a code in js i can be able to run it anywhere 
//nodejs is open source , cross platform , runtime envirmont, open source means publicly avialbale

//nodejs encosyatem has b8 engine, libary
//v8 engine -- make js code possible to run in a machine.
//components of v* engine
//---parseTree--takes the code , tokenits it &and extracts Ast (abstrct syntax)
///Intepreter-- ignition
//Complier--turbofan,(before tubofan its crankshaft) it an optimisation complier, it make hgihly optimised machine code, it can also fall back to 

//v8 engigne also provide gc(garbage collection) capabilites.---Orinoco , younf is new created object (itis generally done in young ones, or do teen baar gc ki cycle ko compass kar deta voh old mai shift ho jata), there is older meneory also 
//ignition interpreter converts ast to byte code(byte code is portable which make js java corss platform, its an intermediate type of code)


//how programs that we write excutew on our machines?

/////////////how exactly computer run a software?///////////////

//when we run a program it becomes a process an it stays in ram, program stays in hard disk.
//1 cpu can have many core -- one core is a single computing unit
//lets dicuss how a single core cpu works, a core can excutes a single process
//program counter --- points to the process the cpu is excuting

//context switcing--multi tasking

//i can achine parallel processsing by multiple cores only.

//cleint  -- process requesting for a request
//server -- process accepting the request.


////////////threads////////////////
//threads are light weight process. threds are also handled by context swithcing
//creating threads is not expensive, threads share alot of process.
//how threads are lightweights?
//imporoving capavlibities -- verticall scaling more cores.