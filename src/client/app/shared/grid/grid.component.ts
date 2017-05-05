import { Component,OnInit,ElementRef,ContentChild,ContentChildren,TemplateRef,ViewChild,Input,QueryList } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sd-grid',
  templateUrl: 'grid.component.html',
  styleUrls: ['grid.component.css']
})
export class GridComponent implements OnInit{
rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];
    @Input()
    @ContentChildren(TemplateRef) children: QueryList<any>;
    @ContentChild('tmplA') child: TemplateRef<any>;
    // @ViewChild('editTmpl') editTmpl: TemplateRef<any>;

    ngOnInit() {
        console.log(this.child);
        console.log(this.children);
    }
    ngAfterViewInit(){
        console.log(this.child);

        this.children._results.forEach(b=>{
            console.log(b);
        });
    }
 }

