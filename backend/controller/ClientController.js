var clientModel = require("../model/ClientModel");

class ClientController {
  
  save(request, response) {
    
    let client = request.body;

    clientModel.save(client)
    .then(newClient => {
      response.status(200).send(newClient);
    })
    .catch(err => {
        response.status(500).send({ motivo: err });
    });
  }

  list(request, response) {

    clientModel.list()
    .then(clients => {
      response.status(200).send(clients);
    })
    .catch(err => {
        response.status(500).send({ motivo: err });
    });
  }

  remove(request, response) {
    
    let json = request.body;

    let id = json["_id"];

    clientModel.remove(id)
    .then(removed => {
      response.status(200).send(removed);
    })
    .catch(err => {
        response.status(500).send({ motivo: err });
    });
  }

  update(request, response) {
    
    let current = request.body;

    clientModel.update(current)
    .then(updated => {
      response.status(200).send(updated);
    })
    .catch(err => {
      response.status(500).send({ motivo: err });
    });
  }
}

var client = new ClientController();

module.exports = client;