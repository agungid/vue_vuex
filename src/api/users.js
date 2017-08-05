import axios from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:3031/'
});



function getUsersApi(cb) {
	api.get('users')
	.then((response) => {
		cb(response.data) //callback
	})
	.catch((error) => {
    console.log(error);
  })
}

function saveDataApi(data, cb) {
	api.post('users', data)
  .then(function (response) {
    cb(response)
  })
  .catch(function (error) {
    console.log(error);
  })
}

function updateData(iduser, data, cb) {
  api.patch('users/'+iduser, data)
  .then((response) => {
    cb({status:201})
  })
  .catch((error) => {
    console.log(error)
  })
}

function deleteData(iduser, cb) {
  api.delete('users/'+iduser)
  .then((response) => {
    cb(response)
  })
  .catch((error) => {
    console.log(error)
  })
}

//const getUsers = (response) =>  response.data

export default {
  getUsers: (cb) => getUsersApi(cb),
  saveUser: (data, cb) => saveDataApi(data, cb),
  updateUser: (iduser, data, cb) => updateData(iduser, data, cb),
  deleteUser: (iduser, cb) => deleteData(iduser, cb)
}