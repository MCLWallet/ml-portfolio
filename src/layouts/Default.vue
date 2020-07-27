<template>
  <div class="layout">
    <slot/>
  </div>
</template>



<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>


<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background-color: #fffffe;
  transition: .3s ease-in;
}
.dark-mode {
  background-color: #001534;
} 

.dark-mode,
.dark-mode .logo,
.dark-mode .dark-mode-button svg g path  {
  color: #fffffe;
}


.layout {
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
@media print {
  .dark-mode {
    background-color: #fffffe;
  } 
  .dark-mode,
  .dark-mode .logo,
  .dark-mode .dark-mode-button svg g path  {
    color: #001534;
  }
}

</style>
