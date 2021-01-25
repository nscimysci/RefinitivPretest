import { Component, VERSION } from "@angular/core";
import { RestService } from "./service/rest.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name = "Question 2 : Angular V." + VERSION.major;
  searchText = '';

  dataSource: any[] = [];
  dataSourceShow: any[] = [];

  constructor(private service: RestService) { }

  ngOnInit(): void {

    this.service.getData().then(data => {
      this.dataSource = data;
      this.dataSourceShow = this.dataSource;
    });

  }

  getSearch(arg: string) {

    this.dataSourceShow = this.dataSource.filter(x =>
      x.toLowerCase().includes(`${arg.toLowerCase()}`)
    );

  }
}
