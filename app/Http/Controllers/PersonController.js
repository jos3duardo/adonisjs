'use strict'

const Person = use('App/Model/Person')

class PersonController {

  * index(request, response) {
    const people = yield Person.all()

    yield response.sendView('personAll',{
      people: people.toJSON()
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
    const id = request.param('id')
    const person = yield Person.find(id)

    if (person){
      person.name = request.only('name')
      person.lastname = request.only('lastname')
      person.age = request.only('age')

      response.redirect('/person')

      return
    }

    response.notFound()

    //
    // const person = yield Person.findBy('id', request.param('id'))
    // const data = request.only('name','lastname','age','id')
    // person.fill(data)
    //
    // yield person.save()
    //
    // response.redirect('/person')
  }

  * destroy(request, response,id) {
      const person = yield Person.findBy('id', id)

      yield person.delete()

      response.redirect('/person')
  }

}

module.exports = PersonController
