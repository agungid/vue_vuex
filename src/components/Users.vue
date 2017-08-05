<template>
	<div class="users">
		<h1>Lists User</h1><button class="btn" v-show="!form_add" @click="formAdd(true)">Tambah Data</button><hr>
		<div class="jumbotron" v-show="form_add">
			<form action="#" @submit.prevent="saveUser(user)">
				<p>Nama: <input type="text" v-model="user.name" class="input-sm"></p>
				<p>Adress: <input type="text" v-model="user.address" class="input-sm"></p>
				<p>Email: <input type="text" v-model="user.email" class="input-sm"></p>
				<p>
					<button class="btn btn-success" type="submit">Simpan</button> 
					<button class="btn btn-danger" @click="formAdd(false)">Batal</button></p>
			</form>
			<p>{{ messages }}</p>
		</div>
		
		<div v-for="user in users">
			<div v-if="form_edit == user.id">
				<form action="#" @submit.prevent="updateUser(user)">
					<p>Nama: <input type="text" v-model="user.name"></p>
					<p>Alamat: <input type="text" v-model="user.address"></p>
					<p>Email: <input type="text" v-model="user.email"></p>
					<p>
						<input type="submit" class="btn btn-success btn-sm" value="Perbaharui"> | 
						<input type="button" @click="formEdit(null)" class="btn btn-danger btn-sm" value="Batal">
					</p>
				</form>
			</div>
			<div v-else>
				<p>Nama: {{ user.name }}</p>
				<p>Alamat : {{ user.address }}</p>
				<p>Email: {{ user.email }}</p>
				<p>
					<input type="button" @click="formEdit(user.id)" class="btn btn-warning btn-sm" value="Edit">
					<input type="button" @click="destroy(user.id)" class="btn btn-danger btn-sm" value="Hapus">
				</p>
			</div>
			<hr>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'users',

		data () {
			return {
				user:{
					id: '',
					name: '',
					address: '',
					email: ''
				}
			}
		},
		computed: mapGetters({
			users: 'allUsers',
			form_add: 'formAdd',
			messages: 'messages',
			form_edit: 'formEdit'
		}),

		methods: mapActions([
			'formAdd',
			'saveUser',
			'formEdit',
			'updateUser',
			'destroy'
		]),

		created() {
	  	this.$store.dispatch('getAllUsers')
		}
	}
</script>