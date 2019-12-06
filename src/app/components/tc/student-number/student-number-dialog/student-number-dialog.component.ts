import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-student-number-dialog',
  templateUrl: './student-number-dialog.component.html',
  styleUrls: ['./student-number-dialog.component.css']
})
export class StudentNumberDialogComponent implements OnInit {


  get studentNumber() {
    const studentNumberArray: any[] = [];
    for (const schoolClass in this.data.student) {
      if (this.data.student.hasOwnProperty(schoolClass)) {
        const tempdata = {
          schoolClassName: schoolClass,
          boy: this.data.student[schoolClass].boy,
          girl: this.data.student[schoolClass].girl,
          total: this.data.student[schoolClass].total,
        };
        studentNumberArray.push(tempdata);
      }
    }
    return studentNumberArray;
  }

  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
  }

  ngOnInit() {
  }

  // doPost() {
  //   this.dialog.open(AddPostConfirmDialogComponent, {
  //     data: {
  //       title: this.title
  //     }
  //   });
  // }
  //
  // move() {
  //   this.dialogRef.updatePosition({
  //     top: '0',
  //     left: '0'
  //   });
  // }
}
