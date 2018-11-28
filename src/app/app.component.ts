import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 // @ViewChild('myCanvas') myCanvas: ElementRef;
  BarChart:any=[];
 // Chart:Chart;
  title = 'pracApp';
  student = [
    { id: 1, fname: "Abc", lname: "test", mark: 50 },
    { id: 2, fname: "Abc1", lname: "test1", mark: 60 },
    { id: 3, fname: "Abc2", lname: "test2", mark: 90 },
    { id: 4, fname: "Abc3", lname: "test3", mark: 20 },
    { id: 5, fname: "Abc4", lname: "test4", mark: 10 },
    { id: 6, fname: "Abc5", lname: "test5", mark: 60 },
    { id: 7, fname: "Abc6", lname: "test6", mark: 55 },
    { id: 8, fname: "Abc7", lname: "test7", mark: 59 },
    { id: 9, fname: "Abc9", lname: "test9", mark: 65 },
    { id: 10, fname: "Abc8", lname: "test10", mark: 75 },
  ];

  age = [10, 20, 52, 52, 21, 32, 14, 1, 5, 15, 12, 16, 20, 74, 21, 62];
  ngAfterViewInit(){
   // this.myCanvas.nativeElement.width=400;
   // this.myCanvas.nativeElement.height=400;
   // console.log("test",<HTMLCanvasElement>this.myCanvas.nativeElement)
   
  }
  ngOnInit() {

    //charts.js start //
    this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [9, 7, 3, 5, 2, 10],
          backgroundColor: [ 'red','Blue','Yellow','Green','Purple','Orange'],
          borderColor: [ 'red','Blue','Yellow','Green','Purple','Orange'],
          borderWidth: 1
        }]

      },
        options: {
          title:{
              text:"barchart",
              display:true
          },
          scales: {
            yAxes: [{
              ticks: {
                suggestedMin: 0,
                suggestedMax: 50
               // beginAtZero: true
              }
            }]
          }
        }
      });

      
    //charts.js ends//



    this.student.forEach((element) => {
      //  console.log("forEach",element.mark)
    });
    let agelimit = [];

    agelimit = this.age.filter(ag => ag >= 20);
    //console.log("agelimits",agelimit)

    let filterid = this.student.filter(stdid => stdid.id > 5) //filter the data using condition
    // console.log("idfilter",filterid)

    let filterData = this.student.filter(fildata => (fildata.id >= 3 && fildata.id <= 7) && (fildata.mark >= 55 && fildata.mark <= 60))

    // console.log("fildata",filterData)

    // let ageSort = this.age.sort((a, b) => a > b ? 1 : -1)
    //console.log("ageSort",ageSort)

    let studMap = this.student.map(s => s.id + " " + '[' + s.fname + ']');//creating new array and manage inside content of array
    // console.log(studMap)

    let reduceage = this.age.reduce((total, a) => total + a, 0);
    // console.log("reduceage", reduceage)

    let combineAll = this.age
      .map(m => m)
      .filter(f => f >= 20)
      .sort((a, b) => a - b)
      .reduce((total, r) => total + r, 0)
    console.log("combineAll", combineAll)
  }

 

}
