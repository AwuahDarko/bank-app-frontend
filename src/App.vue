<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 
html5doctor.com Reset Stylesheet
v1.6.1
Last Updated: 2010-09-17
Author: Richard Clark - http://richclarkdesign.com 
Twitter: @rich_clark
*/

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    /* font-size:100%; */
    vertical-align:baseline;
    background:transparent;
}

body {
    line-height:1;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section { 
	display:block;
}

nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

/* change colours to suit your needs */
ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

/* change colours to suit your needs */
mark {
    background-color:#ff9;
    color:#000; 
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}


/* change border colour to suit your needs */
hr {
    display:block;
    height:1px;
    border:0;   
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}

body{
  font-family: 'Roboto', sans-serif, 'Open Sans';
  font-size: 14px;
  overflow-x: hidden;
}

.bk-row{
  display: flex;
}

.bk-col{
  display: flex;
  flex-direction: column;
}

.bk-gap-1{
  gap: 10px;
}

.bk-gap-1-5{
  gap: 15px;
}

.bk-gap-2{
  gap: 20px;
}

.bk-wrap{
  flex-wrap: wrap;
}

.bk-no-wrap{
  flex-wrap: nowrap;
}

.bk-align-right{
  justify-content: flex-end;
}

.bk-align-left{
  justify-content: flex-end;
}

.bk-align-center{
  justify-content: center;
}

.bk-space-around{
  justify-content: space-around;
}

.bk-space-evenly{
  justify-content: space-evenly;
}

.bk-space-btn{
  justify-content: space-between;
}

.bk-v-align-center{
  align-items: center;
}

.bk-v-align-left{
  align-items: flex-end;
}

.bk-v-align-right{
  align-items: flex-start;
}

.bk-align-self-right{
  align-self: flex-end;
}

.bk-white-text{
  color: #fff;
}

.bm-burger-button{
  top: 20px !important;
  left: 10px !important;
  height: 20px !important;
  width: 25px !important;
  position: relative;
}

.bm-menu{
  background-color: #000 !important;
}

</style>
