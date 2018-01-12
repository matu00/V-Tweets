<template lang="html">
  <transition name="modal">
     <div class="modal-mask">
       <div class="modal-wrapper">
         <div class="modal-container">

           <div class="modal-header">
             <slot name="header">
               <h3 class="modal-title">Configuración</h3>
             </slot>
           </div>

           <div class="modal-body">
             <slot name="body">
               <div class="col-md-6">
                 <label align="center">Configure su Región</label>
                 <select class="form-control" v-model="$root.region" name="region" id="reg">
                   <option value="1" selected>Global</option>
                   <option value="332471" >Argentina</option>
                 </select>
               </div>
               <div class="col-md-6">
                 <label>#Hashtag</label> <i class="fa fa-question-circle" aria-hidden="true"  data-toggle="tooltip" data-placement="right" title="Escriba un hashtag que desee seguir." style="font-size: 13px;"></i><br>
                   <div class="col-md-9">
                     <div class="input-group">
                       <div class="input-group-addon">
                         <span class="fa fa-hashtag"></span>
                       </div>
                       <input class="form-control" v-model="tag" v-bind:value="$root.ActiveHast">
                     </div>
                   </div>
                   <div class="col-md-3">
                     <a href="#" class="btn btn-primary" v-on:click="$root.tweets(tag)" @click="$emit('close')"> Seguir</a>
                   </div>
               </div><br><br><br><br>
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
        name: 'config',
        data () {
            return {
                tag: null
            }
        },
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

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
