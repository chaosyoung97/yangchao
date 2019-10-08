
import $ from 'jQuery'

$(function(){ 
    $('li:odd').css('backgroundColor','lightblue')
    $('li:even').css('backgroundColor',function(){
        return '#'+'#fff'
    })
})