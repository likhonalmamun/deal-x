import React from "react";

const Blogs = () => {
  return (
    <div className="my-10 p-10 ">
      <div className="my-10">
        <h1 className="bg-[#2b2d42] py-4 px-3 text-2xl font-semibold text-white">
          <span className="text-[#d90429] font-bold">Q1 : </span> What are the
          different ways to manage a state in a React application?
        </h1>
        <p className="py-5 px-5 italic bg-[#edf2f4] border-2 border-[#2b2d42] rounded-br-[50px]">
          <span className="font-bold">ANS : </span>
          There is many ways in React App for managing states .
          <li>
            Local state : We can declare a state locally to use in a single
            component .
          </li>
          <li>
            Lifted state : We can declare a state in the parent component and
            share it by props to use the state in multiple child elements. .
          </li>
          <li>
            Context : We can use useContext hook for using some state in
            multiple components inside the context provider without porp
            drilling .
          </li>
          <li>
            useRef : We can access DOM elements and information related to them
            by useRef hook . It can access or update properties without
            rerendering the component .
          </li>
          <li>
            Browser storage : We can store some special types of data in web
            storage for accessing those data even after shut down or if the
            window is closed . For example we can store data in local storage or
            HTTP only cookies .
          </li>
          <li>
            URL : We can keep or access some specific data through the URL !!
            React router is very useful for this . We can access the params in
            any particular route without prop drilling or declaring any state .
          </li>
        </p>
      </div>
      <div className="my-10">
        <h1 className="bg-[#2b2d42] rounded-tl-[40px] py-4 px-5 text-2xl font-semibold text-white">
          <span className="text-[#d90429] font-bold">Q2 : </span> How does
          prototypical inheritance work?
        </h1>
        <p className="py-5 px-5 italic bg-[#edf2f4] border-2 border-[#2b2d42] ">
          <span className="font-bold">ANS : </span>
          There is a hidden property in every JS object named [[prototype]]. It
          contains all the methods and properties of that object . Prototypical
          inheritance is the method of sharing some property or method from an
          object to another . When we set an object as a prototype of another
          object , it shares the methods and properties of the prototype object
          . When we try to access any property from an object that have not been
          defined , it searches it in the prototype object . Then it looks for
          the prototype object of that prototype object . It works like a chain
          until it finds the property .If it can not find the property at the
          end of chain , it returns undefined . That's how prototypical
          inheritance works .
        </p>
      </div>
      <div className="my-10">
        <h1 className="bg-[#2b2d42] py-4 px-3 text-2xl font-semibold text-white">
          <span className="text-[#d90429] font-bold">Q3 : </span> What is a unit
          test? Why should we write unit tests?
        </h1>
        <p className="py-5 px-5 italic bg-[#edf2f4] border-2 border-[#2b2d42] rounded-br-[50px]">
          <span className="font-bold">ANS : </span>
          Unit test is a method of testing smallest components(It can be
          function , object , part of code or any method ) of any software
          during the development phase by the developers . It validates every
          small units if they are working as expected or not . Unit testing is a
          component of TDD . It is useful for ensuring the accuracy of coding .
          If developers writes unit test , they can find bugs or flaw of their
          code in the initial stage. They can easily correct them . Otherwise
          ,developers have to spend too much time and effort to find the error
          or fix the error after the developing is completed. Unit test saves
          developers from that sufferings and makes the software more efficient
          .
        </p>
      </div>
      <div className="my-10">
        <h1 className="bg-[#2b2d42] rounded-tl-[40px] py-4 px-5 text-2xl font-semibold text-white">
          <span className="text-[#d90429] font-bold">Q4 : </span> React vs.
          Angular vs. Vue?
        </h1>
        <p className="py-5 px-5 italic bg-[#edf2f4] border-2 border-[#2b2d42] ">
          <span className="font-bold">ANS : </span> <br />
          React.js : React is a frond end framework library of javascript which
          is developed by facebook and initially published in 2013 . It is easy
          to learn and use . From present to far in coming years, React's future
          seems so bright . The demand of skill on React in the job market is
          unbeatable . It is enough old to be a mature framework library . It
          regularly getting updated . It is best for simplicity and flexibility
          of using other frameworks together . <br />
          Angular : Angular is also a front end framework library published by
          google developers in 2010 . It the most mature framework library . It
          is based on Typescript . The demand of skill on Angular is slightly
          less than React in the job market. The learning curve of angular can
          be a little hard for beginners . It is also getting updated by the
          time .<br />
          Vue.js : Vue is initially published by Evan you in 2014. There is no
          giant company behind it's development . It is the newest member in
          this group . However it is getting popular day by day . It is similar
          to react , easy to learn and use . It gives you flexibility of
          development .
        </p>
      </div>
    </div>
  );
};

export default Blogs;
