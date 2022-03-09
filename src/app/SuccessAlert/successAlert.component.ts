import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
'selector' :'app-successAlert',
'template' : `
<div class="container">
    <div class="row">
    <div class="message" role="alert">
    {{message}}
  </div>   
        </div>
</div>

`,
'styles' :[`.message{ color : green;}
.container{background-color:yellow;}
`]
// 'styleUrls' : ['./successAlert.component.css']
})

export class SuccessAlert{

    message = "This is a success alert—check it out!"
}