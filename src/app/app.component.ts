import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prediction-front';
  CHAS = 0;
  RM = 6.575;
  TAX = 296.0;
  PTRATIO = 15.3;
  B = 396.9;
  LSTAT = 4.98;
  prediction: any;

  constructor(private httpClient: HttpClient) {
  }

  public makePrediction(): void {
    const url = 'http://localhost:8000/predict';
    this.httpClient.post(url, {
      CHAS: {
        0: this.CHAS
      },
      RM: {
        0: this.RM
      },
      TAX: {
        0: this.TAX
      },
      PTRATIO: {
        0: this.PTRATIO
      },
      B: {
        0: this.B
      },
      LSTAT: {
        0: this.LSTAT
      }
    }).subscribe((response: any) => {
        console.log(this.CHAS);
        this.prediction = response.prediction;
      },
      error => {
        console.log(error);
      });
  }
}
