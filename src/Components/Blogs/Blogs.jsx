import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-sky-600 text-3xl font-bold mt-16">
          Q: What is Context API?
        </h1>
        <p className="text-xl font-light text-gray-500">
          Context API is basically a component structure to avoid the trouble of
          Proructure to avoid the trouble of "Prop Drilling". This feature was
          introduced in version 16.3 of React library. <br />
          Using Context API, we create a global variable to transfer data
          component to component. Generally, it lets us use a state which can be
          accessed in the entire React Application. As a result, we don't need
          to necessarily send state or data as a prop from the grand component
          to the parent or even child component. In Context API, we have to use
          CreateContext() function which returns a consumer and a provider. We
          have to set the provider as the parent component of all possible
          children components which need the specific state. Besides, we have to
          set the consumer as the children component of the Provider component
          which will share the specific state among its children components. In
          a nutshell, it's a better substitution for "prop drilling" which is a
          more complex and difficult way of sharing states in React.
        </p>
      </div>
      <div>
        <h1 className="text-sky-600 text-3xl font-bold mt-8">
          Q: What is Semantic Tag?
        </h1>
        <p className="text-xl font-light text-gray-500">
          Semantic Tags are meaningful tags, introduced in HTML 5, that enable
          us to build a meaningful markup layout for a webpage. It provides
          meaning to the web page rather than just representation. For example,
          the <code>p</code> tag indicates the enclosed text is a paragraph. It
          is semantic as well as presentation because people will instantly
          understand that it is a paragraph and any browser will render the code
          efficiently. On the other hand, the non-semantic tags only define how
          they should look and don't provide any meaning to the markup.
          <br/> Semantic tags aid in communication to the browses
          by giving additional information to the documents. Every semantic tag
          has its intrinsic value which helps the browser engine to recognize
          the code correctly. Also, semantic tags make code clearer and easy to
          maintain for developers. Moreover, it helps websites be accessible to
          people who depend on screen readers to navigate websites.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
