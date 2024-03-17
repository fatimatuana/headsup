<template>
<v-app-bar
  :elevation="0"
     app
      dark
      style="background-color: transparent;"
    >
    <!-- {{text}} -->
    <div style="width:100px;">    <v-img src="/img/heads-up-title-ic.png"></v-img></div> 
    <v-btn v-if="!text" to="/" 
    medium
              icon
               >
              <v-icon>mdi-arrow-left-thick</v-icon>
            </v-btn>
    <v-spacer></v-spacer>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
              <v-icon color="grey" class="mr-2" v-bind="attrs"
          v-on="on">mdi-information-outline</v-icon>
      </template>
      <v-card>
        <v-card-title class="headline">
          Impressum
        </v-card-title>
        <v-card-text>Fatima Tuana Sirinyurt<br>&#169;	2024 </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="gray darken-1"
            text
            @click="dialog = false;"
          >
            Schließen
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>



       <v-dialog
      v-model="dialogSettings"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
              <v-icon color="grey"  class="mr-2" v-bind="attrs"
          v-on="on">mdi-cog-outline</v-icon>
      </template>
      <v-card>
        <v-card-title class="headline">
          Einstellungen
        </v-card-title>
        <v-card-text>
          
           <v-switch
      v-model="switch1"
      inset
      color="black"
      :label="`Zeitanzeige`"
    ></v-switch>
    </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="gray darken-1"
            text
            @click="chgItem()"
          >
            Schließen
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-app-bar>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                 
            },        },
        data() {
            return {
                  dialog: false,
                  dialogSettings: false,
                  switch1: true
            }
        },
   
        methods: {
            chgItem () {
                window.localStorage.setItem("showProgressCircular",this.switch1);
                this.dialogSettings = false;
              }
        }
        , created () {
          this.switch1 =  window.localStorage.getItem("showProgressCircular") == "true" ? true : false;
        },
    }
</script>
