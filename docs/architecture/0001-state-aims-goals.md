# 1. State project Aims/Goals

Date: 2017-03-16
Author: Zach Smith
Revision: 0.0
Contributors: Jason Young, Sheldon Morris, David Mote

## Status

x Proposed

## Context:
Experience with previous EDC systems has revealed many recurrent problems

Foremost, the precise technological needs of a given study are typically not
clear until a study is already underway. This leads to scenarios where either
software adjustments are required or staff must follow less than optimal
workflows.

Making changes to a system under part-11 guidelines requires a risk assessment
and potentially, a revalidation of components after adjustments have been made.
Due to the integrated nature of most software systems, this process is
challenging and costly.

Validation often requires a complete revaluation of the entire system. The risk
associated with a given change is rarely transparent. This discourages
innovation resulting in systems built on aging technology and out of
date design principles.

Ultimately, electronic systems that have beneficial work flows tend to be
prohibitively expensive and systems that are cheap tend to be difficult to
adjust under proper change control. These factors limit technological innovation
and inhibit scientific workflows.

Recent innovations (Graphql, API oriented architecture, frontend/backend
segregation) provide opprotunities to create a system where risk is more
transparent, changes are more isolated, and complete overhauls including
component replacements are workable without complete system redesigns.

Creation of a new LIMS system under this paradigm creates a opprounity to
explore the feasibility of these goals.

With all of this in mind the following requirements are proposed

Requirements:
1) Completed before study launch
2) Web based
3) Title 21 CFR Part-11 Compliant
4) Open Source under MIT license
5) Designed so that assessing risk is straightforward
6) Designed so that making future additions has a low barrier of entry
7) Designed with API structure so that components can be subsituted or replaced
   as the end user sees fit

## Decisions

License: MIT

Tech Stack:

Backend: Django REST Framework (http://www.django-rest-framework.org/) BSD License
Frontend: React (https://reactjs.org/) MIT License
API language: GraphQL (https://graphql.org/) MIT License
Database: Postgresql (https://www.postgresql.org/) PostgreSQL License (BSD/MIT-like)
State Management: TBD

Backend Development Stack:
Docker: MIT/BSD/Apache 2.0

## Rationale

License: The ultimate aim for the project is to provide a cheap/free open source
solution that does not prohibit commerical use. MIT and BSD licenses allow
permissive (code can be edited/modified) use to the end user.

Backend/Front end segregation: By creating seperate spaces for frontend and
backend develop and well defined APIs between the two, each component can
theoretically be replaced should a better alternative present itself

Backend: A few prospective clients already utilize Django REST Framework
Additionally Django REST has extensive documentation and community support as
well as several batteries included features (Authentication/Permissions) which
will speed up development.

Frontend: React is a major winner in the javascript front end space.
It contains a small and flexible API that critically self-contained to the view

GraphQL: Unlike other REST API solutions, GraphQL provides only the isolated
portions of data that are requested. It will be critical to isolate
interactions between the backend and frontend to a minimal footprint so that
risk assessments have reduced in scope, increased transparency and are easier to
execute.

Docker: Docker will allow for backend development without physical hardware
beyond a typical laptop. Production deployment will not be executed with docker
however, the option will be available.

## Consequences

All of the technologies listed favor Linux operating environments
The choice of Django REST favors python for backend development
The choice of GraphQL and React favors javascript for frontend development



