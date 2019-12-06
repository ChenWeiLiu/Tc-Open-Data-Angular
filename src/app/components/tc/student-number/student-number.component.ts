import {Component, OnInit, ViewChild} from '@angular/core';
import {StudentNumber} from '../../../services/student-number/student-number';
import {TcStudentNumberService} from '../../../services/student-number/tc-student-number.service';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import {MatDialog} from '@angular/material/dialog';
import {StudentNumberDialogComponent} from './student-number-dialog/student-number-dialog.component';

@Component({
  selector: 'app-student-number',
  templateUrl: './student-number.component.html',
  styleUrls: ['./student-number.component.css']
})
export class StudentNumberComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  dataSource = new MatTableDataSource<any>();

  studentNumbers: StudentNumber[];
  totalCount: any;

  constructor(
    public dialog: MatDialog,
    private studentNUmberServer: TcStudentNumberService
  ) {
  }

  ngOnInit() {
    this.getStudentNumber();
  }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.target.value.trim().toLowerCase();
  }

  getStudentNumber(): void {
    this.studentNUmberServer.getStudentNumbers()
      .subscribe(x => {
        this.studentNumbers = [];
        for (const xx in x) {
          if (xx) {
            this.dataSource.data.push(x[xx]);
          }
        }
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });


  }

  openDialog(dataes: any): void {
    this.dialog.open(
      StudentNumberDialogComponent,
      {
        width: '250px',
        data: {
          student: dataes
        },
      }
    );
  }


}

