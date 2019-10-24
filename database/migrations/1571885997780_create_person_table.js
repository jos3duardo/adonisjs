'use strict'

const Schema = use('Schema')

class PeopleTableSchema extends Schema {

  up () {
    this.create('people', (table) => {
      table.increments()
      table.string('name')
      table.string('lastname')
      table.integer('age')
      table.timestamps()
    })
  }

  down () {
    this.drop('people')
  }

}

module.exports = PeopleTableSchema
