<template>
  <div id="app">
    <hd></hd>
    <router-view/>
  </div>
</template>

<script>
  import hd from "./components/common/header.vue"
  export default {
    name: 'app',
    components:{
      hd
    }
  }
</script>

<style>
  .clearfix:after {clear: both; content: ""; display: block;}
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,
  form,fieldset,input,textarea,p,blockquote,th,td{
    padding: 0;
    margin: 0;
  }
  a {text-decoration: none; color: #5c5c5c;}
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  fieldset,img {
    border: 0;
  }

  address,caption,cite,code,dfn,em,strong,th,var{
    font-weight: normal;
    font-style: normal;
  }

  ol,ul {
    list-style: none;
  }

  caption,th {
    text-align: left;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    font-size: 100%;
  }

  q:before,q:after {
    content:'';
  }

  abbr,acronym {
    border:0;
  }
  @media screen and (max-width: 320px) {html{font-size:10px}}
  @media screen and (min-width:321px) and (max-width:376px){html{font-size:11px}}
  @media screen and (min-width:376px) and (max-width:435px){html{font-size:12px}}
  @media screen and (min-width:435px) and (max-width:640px){html{font-size:15px}}
  @media screen and (min-width:640px) and (max-width:720px){html{font-size:20px}}
  @media screen and (min-width:720px) and (max-width:750px){html{font-size:22.5px}}
  @media screen and (min-width:750px) and (max-width:800px){html{font-size:23.5px}}
  @media screen and (min-width:800px){html{font-size:25px}}
  html,body{background: #f2f2f2}
</style>
