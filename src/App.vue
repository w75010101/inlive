<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  .clearfix:after {clear: both; content: ""; display: block;}
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,
  form,fieldset,input,textarea,p,blockquote,th,td{
    padding: 0;
    margin: 0;
  }

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
  html{font-size:10px}
  @media screen and (min-width:321px) and (max-width:375px){html{font-size:11px}}
  @media screen and (min-width:376px) and (max-width:414px){html{font-size:12px}}
  @media screen and (min-width:415px) and (max-width:639px){html{font-size:15px}}
  @media screen and (min-width:640px) and (max-width:719px){html{font-size:20px}}
  @media screen and (min-width:720px) and (max-width:749px){html{font-size:22.5px}}
  @media screen and (min-width:750px) and (max-width:799px){html{font-size:23.5px}}
  @media screen and (min-width:800px){html{font-size:25px}}
  html,body{background: #f2f2f2}
</style>
