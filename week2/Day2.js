///tcp/ip --these models define the steps for most, of the protocols to work where once machine has to commmunicate with other machines.
//when a client has to raise a request it reads tp go through % layer (has to TCp/Ip).
//Client                         //Server

//client and server ke beech mai tcp connection stalize hota hai
// we deal wiht the apllication layer only, transport layer only if we are working on operating system.
///for an http request we need to have tcp comminucation setup.


//Application      ----how the user interaction of user should work, all protocols like HTTP, HTTPS , FTP tc all of these exists and are controlled in application layer. this is the place where most of the code of the project is present           
//Transport        ----Application layer sends the data to transport layer,data collected on the aplication layer is passed on to the transport layer.Trasport layer exist on the Os.if request from AP is comming from reliable protovolis going to depend on TCP protocol, and for non reliable ones they depend on UDP. on Transport Layer we only have two protocols UDP, TCP.
//Network          ----This is the #rd lalyer in the stack. data collected in transport layer is passed on to nwtwork layer., logic of network layer exists in Os kernel, How to route ur packets, how to rote ur packets.                                                                                                                                  
//Data Link        ----
//Physical

//every process has a port number.