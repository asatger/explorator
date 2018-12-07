import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ElementRef } from '@angular/core';

/**
 * Generated class for the ChecklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@IonicPage()
@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html',
})
export class ChecklistPage {
todos: string[] = [];
    todo: string;

    materials: string[] = [];
    material: string;
    


    constructor(public navCtrl: NavController) {

    }

    addTodo() {
      if (this.todo!="" && this.todo!=null){
        this.todos.push(this.todo);
        this.todo = "";
      } 
    }

    addMaterial() {
      if (this.material!="" && this.material!=null){
        this.materials.push(this.material);
        this.material = "";
      }
    }

    delete(item,items) {
        var index = items.indexOf(item, 0);
        if (index > -1) {
            items.splice(index, 1);
        }
    }

    check(slidingItem) {
  }


  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChecklistPage');
  }
  

}
