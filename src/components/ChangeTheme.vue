<template lang="html">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <h3>Selecciona un tema</h3>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <div>
                <div class="col-md-4">
                  <div @click="$emit('close')" class="palet"  v-on:click="change_color(1);" style="background:rgb(236, 236, 236);"></div>
                </div>
                <div class="col-md-4">
                  <div @click="$emit('close')" class="palet"  v-on:click="change_color(2);" style="background:rgb(112, 119, 128);"></div>
                </div>
                <div class="col-md-4">
                  <div @click="$emit('close')" class="palet"  v-on:click="change_color(3);" style="background:#ef94f5;"></div>
                </div><br><br><br><br><br><br>
              </div>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button @click="$emit('close')" class="btn btn-default" data-dismiss="modal">Listo</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
 export default {
     name: 'theme',
     data () {
         return {
             
         }
     },
     methods: {
         change_color(a){
             if (a == 1) {
                 var color = "#fff";
             }
             if (a == 2) {
                 var color = "rgb(112, 119, 128)";
             }
             if (a == 3) {
                 var color = "#ef94f5";
             }
             $('.modal').modal("hide");
             $('.text').attr('style', 'color:' + color+';font-family: "Crimson Text", serif;');
         }
     }
 }
</script>

<style lang="css">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 800px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
