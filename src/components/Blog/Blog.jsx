import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import React from "react";

const Blog = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="mb-[480px]">
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </AccordionHeader>
        <AccordionBody>
          <span className="text-xl font-serif font-semibold">
            Access token:
          </span>{" "}
          <br />
          An access token is a credential that grants a client application the
          ability to access a protected resource on behalf of a user. Access
          tokens are typically short-lived, with expiration times ranging from
          minutes to hours. This is to help protect the security of the
          resources being accessed. <br />
          <span className="text-xl font-serif font-semibold">
            Refresh token:
          </span>{" "}
          <br />
          A refresh token is a credential that allows a client application to
          obtain a new access token without prompting the user to log in again.
          Refresh tokens typically have longer expiration times than access
          tokens, and can be used to obtain new access tokens for as long as the
          users session is active. <br />
          <span className="text-xl font-serif font-semibold">
            How access tokens and refresh tokens work:
          </span>{" "}
          <br />
          When a client application wants to access a protected resource, it
          first needs to obtain an access token from the authorization server.
          The client application can do this by authenticating with the
          authorization server on behalf of the user. Once the client
          application is authenticated, the authorization server will issue an
          access token to the client application. The client application can
          then use the access token to access the protected resource. When the
          access token expires, the client application can use the refresh token
          to obtain a new access token. <br />
          <span className="text-xl font-serif font-semibold">
            Where to store access tokens and refresh tokens on the client-side:
          </span>{" "}
          <br />
          Access tokens and refresh tokens should be stored securely on the
          client-side. This means that they should be encrypted and stored in a
          location that is not accessible to attackers. <br />
          One good place to store access tokens is in the client applications
          memory. This allows the client application to quickly access the
          access token when it needs to make a request to the protected
          resource. However, it is important to note that access tokens should
          not be stored in plain text in memory.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          What is express js? What is Nest JS?
        </AccordionHeader>
        <AccordionBody>
          <span className="text-xl font-serif font-semibold">Express js:</span>{" "}
          <br />
          Express.js is a minimal and flexible Node.js web application framework
          that provides a robust set of features for building web and mobile
          applications. It is fast, unopinionated, and easy to learn. Express.js
          is not a full-fledged framework, but rather a set of tools that
          developers can use to build their own custom frameworks. This makes it
          a good choice for developers who want to have more control over the
          architecture of their applications. <br />
          <span className="text-xl font-serif font-semibold">
            Nest js:
          </span>{" "}
          <br />
          Nest.js is a progressive Node.js framework for building efficient and
          scalable server-side applications. It is built on top of Express.js,
          but it provides a number of additional features, such as dependency
          injection, testing support, and support for microservices. Nest.js is
          opinionated, meaning that it has a specific way of doing things. This
          can make it more difficult to learn than Express.js, but it also makes
          it easier to build well-structured and maintainable applications.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Explain my code...
        </AccordionHeader>
        <AccordionBody>
          Explain my code...
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default Blog;
