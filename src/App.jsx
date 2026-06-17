// import React from 'react'
// import { useState } from 'react';

// const App = () => {
//   const name = "Pawan Sharma";
//   const a = 100;

//   const add = (x, y) => {
//     return x + y;
//   };

//   const [no, setNo] = useState(0);
//   console.log("Hello, World!")
//   //create object in react 
//   const data = { name: "Pawan Sharma", age: 25 };
//   //create array in react
//   let friends = ["Alice", "Bob", "Charlie"];

//   friends = [123, 234, 345];
//   friends = friends.map((friend,i)=> {
//     console.log("My Friend:", friends[2], "\n")
//     return friend * 2

//   })
//   console.log(friends)
//   return (
//     <>
//     <div>{name}{10*20}</div>
//     <div>name</div>
//     {a > 50 && <div>a is greater than 50</div>}
//     {a > 150 ? <div>a is truthy</div> : <div>a is falsy</div>}
//     <div>{add(10, 20)}</div>
//     <div>{data.name}</div>
//     <div>{data.age}</div>
//     {/* <div>
//       {friends.map((friend) => (
//         <div key={friend}>{friend}</div>
//       ))}
//     </div> */}

//     {[1,2,3,4,5].map((num) => {
//       return num % 2 === 0 ? <div key={num}>{num}</div> : null
//     })}

//     <button onClick={()=> setNo(no + 10)}>Add</button>
//     <button onClick={()=> setNo(no - 10)}>Subtract</button>
//     <div>{no}</div>
//     </>
    
//   )
// }

// export default App

// import { useState } from "react";
// import React from "react";

// function App() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <input 
//         type="text" 
//         onChange={(e) => setName(e.target.value)} 
//       />
//       <h2>Your Name: {name}</h2>
//     </div>
//   );
// }

// export default App

/* ❌ Remove import React from "react"; */
function App() {
  return (
    <>
      <Navbar />
      {/* <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> */}
    </>
  );
}

/* Components */

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Portfolio</h2>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

// function Hero() {
//   return (
//     <section className="hero">
//       <h1>Pawan Sharma</h1>
//       <p>Full Stack Developer & Trainer</p>
//       <button>Hire Me</button>
//     </section>
//   );
// }

// function About() {
//   return (
//     <section id="about" className="section">
//       <h2>About Me</h2>
//       <p>
//         I am a passionate Full Stack Developer and Trainer with experience
//         in React, Python, Flask, and Mobile Application Development.
//       </p>
//     </section>
//   );
// }

// function Skills() {
//   return (
//     <section id="skills" className="section">
//       <h2>Skills</h2>
//       <div className="skills">
//         <span>HTML</span>
//         <span>CSS</span>
//         <span>JavaScript</span>
//         <span>React</span>
//         <span>Python</span>
//         <span>Flask</span>
//         <span>Flutter</span>
//       </div>
//     </section>
//   );
// }

// function Projects() {
//   return (
//     <section id="projects" className="section">
//       <h2>Projects</h2>
//       <div className="projects">
//         <div className="card">
//           <h3>Portfolio Website</h3>
//           <p>Single page React portfolio using CDN.</p>
//         </div>
//         <div className="card">
//           <h3>Training Management System</h3>
//           <p>Web app for managing students and courses.</p>
//         </div>
//         <div className="card">
//           <h3>Mobile App</h3>
//           <p>Flutter-based cross platform application.</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Contact() {
//   return (
//     <section id="contact" className="section">
//       <h2>Contact Me</h2>
//       <form className="contact-form">
//         <input type="text" placeholder="Your Name" />
//         <input type="email" placeholder="Your Email" />
//         <textarea placeholder="Your Message"></textarea>
//         <button type="button">Send</button>
//       </form>
//     </section>
//   );
// }

// function Footer() {
//   return (
//     <footer className="footer">
//       <p>© 2026 Pawan Sharma | All Rights Reserved</p>
//     </footer>
//   );
// }

export default App;