class UsersController {
    /* 
        BOAS PRÁTICAS
        - Controller pode ter no máximo 5 [funcões ou métodos]
            - index - GET listar vários registros.
            - show - GET para exibir um registro específico.
            - create - POST para criar um registro.
            - update - PUT para atualizar um registro.
            - delete - DELETE para remover um registro.
    */

    create (request, response) {
        const { name, year, sex } = request.body

        response.json({name, year, sex}) // recebendo a requisição no tipo JSON
    }
};

module.exports = UsersController;