'use strict'

const Person = use('App/Model/Person')

class PersonController {

  * index(request, response) {
    // const person = yield Person.all()

    const people = [
      {
        name: 'Jose',
        lastname: 'Eduardo',
        age: 29
      },
      {
        name: 'Loana',
        lastname: 'Sousa',
        age: 28
      },
      {
        name: 'Cecilia',
        lastname: 'Lopes',
        age: 22
      }
    ]
    yield response.sendView('personAll',{
      people: people
    })
  }

  * create(request, response) {
    yield response.sendView('personCreate')
  }

  * store(request, response) {
    //
  }

  * show(request, response) {
    response.send(request.get())
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = PersonController
