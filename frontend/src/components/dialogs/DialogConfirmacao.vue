<template>
  <v-dialog v-model="dialog" :max-width="options.width" @keydown.esc="nao" persistent >
    <v-card>
      <v-toolbar dark :color="options.color" dense flat>
        <v-toolbar-title class="white--text">{{ titulo }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text v-show="!!mensagem">{{ mensagem }}</v-card-text>
      <v-card-actions class="pt-0">
        <v-spacer></v-spacer>
        <v-btn color="grey" flat="flat" @click.native="nao">Não</v-btn>
        <v-btn color="primary darken-1" flat="flat" @click.native="sim" data-cy="confirm">Sim</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  
  export default {
    
    data: () => ({
      dialog: false,
      resolve: null,
      reject: null,
      mensagem: null,
      titulo: null,
      options: {
        color: 'primary',
        width: 290
      }
    }),

    methods: {
      open(titulo, mensagem, options) {
        this.dialog = true
        this.titulo = titulo
        this.mensagem = mensagem
        this.options = Object.assign(this.options, options);

        return new Promise((resolve, reject) => {
          this.resolve = resolve
          this.reject = reject
        })
      },

      sim() {
        this.resolve(true)
        this.dialog = false
      },
      
      nao() {
        this.resolve(false)
        this.dialog = false
      }
    }
  }
</script>