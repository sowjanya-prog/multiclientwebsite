import React from "react";

const About = () => {
return (
	<div>
	<h1>
    MULTI-CLIENT WEBSITE OFFERING SERVICES OR GOODS </h1>
<p>
Here merchants are your primary customers. 
Merchants must be able to sign up at the site and create a page for themselves that display a list of their services and the pricing. 
The users who are customers to your customers should be able to sign up as users and purchase goods or services from the merchants.  
There should be a standard checkout process throughout which is integrated into a payment gateway system.
<p>
Building End-to-End Multi-Client Service Oriented Applications is not a project with a very, very focused technology. This is something that everybody is going to get something out of. This is going to take you through the building of a Service Oriented Application, a complete application from beginning to end covering every layer in the architecture. We're going to cover everything from the database and the data access layer through the business tiers all the way into the service layer, all of the entities on the business side of the wire into the client side of the wire, all the entities there, all of the proxy layers, the different UIs. Yes, there are going to be multiple UIs here. We're going to cover web technologies and we're going to cover desktop technologies. 
but a lot of people still ask okay now what do I do? How do I implement this? How do I wire it all together? Well, this project answers that question by demonstrating not only how to use the technology, but also patterns of implementation and connectivity that let us to see how all the layers talk to each other and how the application comes together from beginning to end 
They solve a lot of common problems that come up during application development. Some of these involve some abstraction patterns like factories, abstract factories, and strategy patterns, and also developed some pretty cool lambda expression techniques that save us a lot of code repetition in many areas.  
All of the layers that going to be developing during this application are going to all follow SOLID principles. This is going to allow for really good code manageability and extensibility, and, of course, testability. Testability is going to be pretty important. we going to be writing unit tests at several layers of the application and show you exactly how they work and how we do it. We  also going to be incorporating Dependency Injection throughout from beginning to end. You're going to see dependency injection usage from the data layer all the way up to the service layer, and this is a place where it's commonly not know to be used very often in the WCF service layer. We going to show you how you use dependency injection there to inject dependencies into WCF services. we going to show you how you can DI aware your proxy classes and inject them in whatever UIs or whatever clients are going to use the proxy classes. So, you're going to see quite a lot of dependency injection usage. And, of course, setting up the app to use dependency injection is going to be the most important thing in order to ensure that the code is all testable. 
</p>

</p>
	</div>
);
};

export default About;
