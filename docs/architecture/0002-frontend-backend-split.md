# 2. Frontend Backend Repo Split

**Date:** 2018-03-28<br>
<br>
**Author:** Zach Smith <br>
**Revision:** 0.0 <br>
**Contributors:** Jason Young, Sheldon Morris, David Mote <br>

## Status

x Proposed

## Context:
Backend and Frontend development will be segregated between Django Rest and
React. Frontend development will proceed for rapid development feedback and
to prevent retrospective backend demands that may be required for functionality
adjustments.

The Frontend API endpoints can be mocked via json-server
(https://github.com/typicode/json-server)

This being the case, I will being frontend development with the assumption that
the repos will be split (frontend/backend) properly in the future.

Assuming this carries forward in the future, other organization will be able to
utilize the frontend with their own custom backend API solution (and visa
versa). This will also encourage true segregation of interests between both
endpoints.

**Requirements:**
1) Front End development with react begins before backend development

2) The json-server package is utilized to mock a backend API

## Decisions

Front end development begins first

## Rationale

Front end development first allows for rapid user feedback and prevents locking
in any backend decisions that are costly to change later.

Seperate repos encourage true segregation of interests between frontend/backend
allowing for flexibility in the future

## Consequences

*1)* Frontend development with react should proceed with the json-server library

*2)* Repo segregation can be rolled back in the future (at any point before backend
development proceeds)


