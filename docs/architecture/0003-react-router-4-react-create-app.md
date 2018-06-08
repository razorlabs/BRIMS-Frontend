# 3. Adopting React Router 4 and Temporarily utilizing React create app

**Date:** 2018-06-08<br>
<br>
**Author:** Zach Smith <br>
**Revision:** 0.0 <br>

## Status

x Proposed
x Accepted

## Context:

A large amount of time is being spent on webpack and solving webpack related operations issues. 
Rather than focusing on webpack, it is more beneficial to focus on front end development. 
React Create App is a facebook repo that contains scripts that obfuscate and handle a large amount of webpack configuration
React Router 4 is the latest version of the client side routing application. There are backward compatible breaking changes.
However after some community overview, it seems that React Router 4 is easier to maintain than 3. 
There will likely be breaking changes with React Router 5, however it is not as of this point mature enough to warrant a tech switch.
At the moment the current webpack configuration is running into CORS issues (Content Security Policy blockages). 
Also of note, when exact path / is used for client side paths, it breaks backend static file serving (which also attempt to serve at /). 


**Requirements:**
1) Front End development with react begins before backend development

2) The json-server package is utilized to mock a backend API

## Decisions

React Router 4 is adopted for client side routing. React Create App is temporarily used to advance front end development

## Rationale

React Router 4 is the latest stable client side routing, proported to 

React Create App manages webpack configuration, CORS and other typical javascript issues allowing development to focus on the front end

## Consequences

*1)* React Router 4 will be used for development. It is not backwards compatible with react router 3. React router 5 may have breaking changes

*2)* It may be necessary in the future to roll back to a webpack configuration for production bundling. 

