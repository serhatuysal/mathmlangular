import { Component,OnInit, EventEmitter, Output } from '@angular/core';
import Editor from '../../../../ckeditor5';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.css']
})
export class CkeditorComponent {
  @Output() contentChange = new EventEmitter<string>();
  public Editor = Editor;

  
  public onReady(editor: ClassicEditor) {
    console.log('CKEditor5 Angular Component is ready to use!', editor);
    
  }
  onContentChange({ editor }: ChangeEvent) {
  // console.log("here data" , editor.data.get());
  this.contentChange.emit(editor.data.get());
  }
}
