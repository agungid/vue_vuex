import usersApi from '../../api/users'
import * as mutationType from '../mutation_types'
//initial state
const state = {
	all: [],
	form_add: false,
	message: null,
	form_edit: null
}

//initial getters
const getters = {
	allUsers: state => {
		return state.all.sort((a,b) =>{
			return a['id'] < b['id']
		})
	},
	formAdd: state => state.form_add,
	messages: state => state.message,
	formEdit: state => state.form_edit
}

const actions = {
	//get data from api
	getAllUsers ({commit}) {
		usersApi.getUsers(users => {
			commit(mutationType.SHOW_ALL_USER, users)
		})
	},
	//event hid/show form
	formAdd ({commit}, bool) {
		commit(mutationType.FORM_ADD, bool)
	},
	//save data
	saveUser (context, data) {
		usersApi.saveUser(data, (resp) => {
			if (resp.status === 201) {
				state.message = "Data berhasil disimpan"
				context.dispatch('getAllUsers')
				setTimeout(() => {
					context.dispatch('formAdd', false)
				},100)
			}
		})
	},
	//form update
	formEdit (context, iduser) {
		context.commit(mutationType.FORM_EDIT, iduser)
	},
	//update user
	updateUser (context, user) {
		usersApi.updateUser(user.id, user, (resp) => {
			if (resp.status === 201) {
				context.dispatch('getAllUsers')
				context.dispatch('formEdit', null)
			}
		})
	},
	//delete
	destroy (context, iduser) {
		let conf = confirm("Apa anda yakin ingin menghapus item ini?")
		if (conf) {
			usersApi.deleteUser(iduser, (resp) => {
				if (resp.status == 200) {}
				context.dispatch('getAllUsers')
			})
		}
	}
}

//initial mutation
const mutations = {
	[mutationType.SHOW_ALL_USER] (state, users) {
		state.all = users
	},

	[mutationType.FORM_ADD] (state, bool) {
		state.form_add = bool
	},

	[mutationType.FORM_EDIT] (state, iduser) {
		state.form_edit = iduser
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}