'use strict'

const Person = use('App/Model/Person')

class PersonController {

  * index(request, response) {
    const people = yield Person.all()

    yield response.sendView('personAll',{
      people: people
    })
  }

  * create(request, response) {
    yield response.sendView('personCreate')
  }

  * store(request, response) {
    const data = request.only('name','lastname','age')
    yield Person.create(data)

    response.redirect('/person')
  }

  * show(request, response) {

    const id = request.param('id')
    const person = yield Person.find(id)

    if (person){
      yield response.sendView('personShow',{
        person
      })
      return
    }
    response.notFound()
  }

  * edit(request, response) {
    const id = request.param('id')
    const person = yield Person.find(id)

    if (person){
      yield response.sendView('personUpdate',{
        person
      })
      return
    }
    response.notFound()
  }

  * update(request, response) {
    const person = yield Person.findBy('id', response.param('id'))
    const data = request.only('name','lastname','age','id')
    person.fill(data)

    yield person.save()

    response.redirect('/person')
  }

  * destroy(request, response) {
    //
  }

}

module.exports = PersonController
