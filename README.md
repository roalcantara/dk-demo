# dk-demo

[Docker][10] [Compose][11] [Nodejs][9] and [MongoDB][12] (via [mongoose][13]) example

[![MIT license](https://img.shields.io/badge/License-MIT-brightgreen.svg)](LICENSE)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)][2]
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)][5]
[![Editor Config](https://img.shields.io/badge/Editor%20Config-1.0.1-crimson.svg)][4]
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)][3]

## Install

  ```sh
  git clone https://github.com/roalcantara/dk-demo.git
  ```

### Dependencies

- [git][6]
- [gitlint][7]
- [pre-commit][8]
- [Docker][10]

## Usage

- Run `make` to see all available commands
- Run `make docker/build` to build or rebuild services
- Run `make docker/build/dev` to build or rebuild services `(DEVELOPMENT)`
- Run `make docker/up` to start the containers
  1. Setup [Mongo][12] db container at `localhost:27017`
  2. Setup [NopdeJs][9] api container at `localhost:3001`
  3. Setup [React][14] app container at `localhost:3000`
- Run `make docker/upd` to start the containers `(DEAMON)`
- Run `make docker/up/dev` to start the containers `(DEVELOPMENT)`
- Run `make docker/down` to stop and remove containers, networks
- Run `make docker/cleanup` to stop and remove all containers, networks, and all images used by any service in docker-compose.yml file

## Architecture

  ```mermaid
  sequenceDiagram
      app->>+api: http://localhost:3001/api/tasks
      api->>+mongodb: mongodb://root:123456@localhost:27017/demo_db
      mongodb-)api: tasks
      api-->>-app: tasks
  ```

## Acknowledgements

- [Standard Readme][5]
- [Conventional Commits][7]

## Contributing

- Bug reports and pull requests are welcome on [GitHub][0]
- Do follow [Editor Config][4] rules.
- Do follow [Git lint][7] rules.
- Everyone interacting in the project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [Contributor Covenant][2] code of conduct.

## License

The project is available as open source under the terms of the [MIT][1] [License](LICENSE)

## References

- [Node.js® is an open-source, cross-platform JavaScript runtime environment][9]
- [Docker Compose Node.js Express and MongoDB example][15]
- [Node.js, Express & MongoDb: Build a CRUD Rest Api example][16]
- [Server side Pagination in Node.js with MongoDB and Mongoose][17]
- [Node.js + MongoDB: User Authentication & Authorization with JWT][18]
- [MongoDB One-to-One relationship tutorial with Mongoose examples][19]
- [MongoDB One-to-Many Relationship tutorial with Mongoose examples][20]
- [MongoDB Many-to-Many Relationship with Mongoose examples][21]
- [Simple Docker, Node, & TypeScript Setup | Code Hot Reloading While Running a Docker Container][22]

[0]: https://github.com/roalcantara/dk-demo "dk-demo"
[1]: https://opensource.org/licenses/MIT "Open Source Initiative"
[2]: https://contributor-covenant.org "A Code of Conduct for Open Source Communities"
[3]: https://conventionalcommits.org "Conventional Commits"
[4]: https://editorconfig.org "EditorConfig"
[5]: https://github.com/RichardLitt/standard-readme "Standard Readme"
[6]: https://git-scm.com "Git"
[7]: https://jorisroovers.com/gitlint "git commit message linter"
[8]: https://pre-commit.com "A framework for managing and maintaining multi-language pre-commit hooks"
[9]: https://nodejs.org/ "Node.js® is an open-source, cross-platform JavaScript runtime environment"
[10]: http://docker.com "Develop faster. Run anywhere"
[11]: https://docs.docker.com/compose/ "Docker Compose: Overview"
[12]: https://mongodb.com "Build faster. Build smarter.​​"
[13]: https://mongoosejs.com/ "elegant mongodb object modeling for node.js"
[14]: https://reactjs.org "A JavaScript library for building user interfaces"
[15]: https://bezkoder.com/docker-compose-nodejs-mongodb "Docker Compose Node.js Express and MongoDB example"
[16]: https://bezkoder.com/node-express-mongodb-crud-rest-api/ "Node.js, Express & MongoDb: Build a CRUD Rest Api example"
[17]: https://bezkoder.com/node-js-mongodb-pagination/https://bezkoder.com/node-js-mongodb-pagination/ "Server side Pagination in Node.js with MongoDB and Mongoose"
[18]: https://bezkoder.com/node-js-mongodb-auth-jwt/ "Node.js + MongoDB: User Authentication & Authorization with JWT"
[19]: https://bezkoder.com/mongoose-one-to-one-relationship-example/ "MongoDB One-to-One relationship tutorial with Mongoose examples"
[20]: https://bezkoder.com/mongoose-one-to-many-relationship/ "MongoDB One-to-Many Relationship tutorial with Mongoose examples"
[21]: https://bezkoder.com/mongodb-many-to-many-mongoose/ "MongoDB Many-to-Many Relationship with Mongoose examples"
[22]: https://youtu.be/3o_DEJ9tB5A "Simple Docker, Node, & TypeScript Setup | Code Hot Reloading While Running a Docker Container"
