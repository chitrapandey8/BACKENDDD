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

//What is threading behaviour of node?

//apche, NGINX is web server-- web server delivers static contents, while applicatin server is for dynamic contenst
//early apache used to create a new process to handle new request
//later improvements happned apache improved it by intoducing a single per request instead of a whole process.
//NGINX worked on an non blocking event driven architecture (very close to what nodejs does).


//what we we encounter biilions ofr eequest we cant be just creting biilions of process

///what neginx does that we dont create process for every process, what it does instead, we limit the no of processes we have , it has a master process, and worker process which does not create new new process, 
//ngnix ensures if we have x number of cores , then it will create x no of wroker process. each worker process is a single threaded , woker process emit an new event upon reciving a request.

//high I/O vc High Processing

//i/O -- reading files, making network requests.
//high processing -- needs gpus like traing a ml model


//some request can be hight IO, 
//some operations in nodejs works on multi threads , some on single threads.

//node js has LIBUV---aagr do core hai toh nodeja js do request keliye do thread banayega ek single core ko dega
//libuv create a pool threads, intilly it has 4, 2 for one core,  but we can increae it , for high processing nodejs rely on lubuv
//libuv allows nodejs to be single thrread yet handle thousands of concureentn operation.
//high processing uses thrreads pooling, i/o not uses thres pooling.

///libuv libarary --powers async processing in nodejs.
//file i/o & simlar operation -- for exaple libuv has fs libaary
//a pool of worker threads to handle thread specfic cpu tasks.
//facilitates creation of child process
//provides fully functional event loop.



//libuv has handles && requests in libuv--- long live object used for async operations like , these stays in memeory , unless explicity closed(persist object), 
//requests in libuv -- short lived objects (exist only till the duration of operation).

//How the event loop in nodejs works
//----Promises
//----
//----
//a tick is nodejs to excution of a microtask before the next iteration of the loop starts. one complete excution of event loop/
//event loop checks nextqueue first then, micro, macro task queue
//process.nexttick -- gets callback gets excuted before next tick.

//macro task contians multiple queues
///macro queue checks first timers first liek settimot/setinterval it maintians a timer queue as seperate, timer queue is minheap
//callbacks in microtask qeue is excuted after the micro task queue.
//second after timer is i/o queue.
//poll
//afater i/o there is pooling then there is check queue then close queue. -- close quee when u have to close any callback


