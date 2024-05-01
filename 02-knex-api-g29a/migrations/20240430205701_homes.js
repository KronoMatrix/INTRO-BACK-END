/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
/* Aquí colocaremos toda la lógica de creación de tablas, actualizacion de campos, etc.  */
  return knex.schema.hasTable('homes').then((exists) => {
    if (!exists) {
      // Si la tabla no existe, entonces la creo
      return knex.schema.createTable('homes', (table) => {
        // Aquí coloco los atributos de la tabla
        // Sintaxis: table.tipo_de_dato('nombre_del_campo').restricciones
        table.increments('house_id').primary() // en knex usamos increments en lugar de serial como tipo de dato para llave primaria
        table.string('title').notNullable() // notNullable no puede quedar nulo/vacío.
        table.string('description')
        table.integer('guest')
        table.string('address')
        table.decimal('rental_price', 10, 2) // 10 digitos en total, 2 decimales
        table.boolean('active').notNullable().defaultTo(true)
        table.timestamp('created_at').defaultTo(knex.fn.now()) // knex.fn.now() es una funcion de knex para obtener lafecha y hora actual
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

}
