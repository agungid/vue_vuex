<template>
  <div class="navbar">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link :to="{ name: 'Hello' }" class="navbar-brand">Vue & Feathers</router-link>
        </div>
        <ul class="nav navbar-nav">
          <li><router-link :to="{ name: 'Users' }">Users</router-link></li>
        </ul>
      </div><!-- /.container-fluid -->
    </nav>
  </div>
</template>