import { Component, OnInit } from '@angular/core';
import { RutesService } from '../../services/rutes.service';

@Component({
  selector: 'app-general-menu',
  templateUrl: './general-menu.component.html',
  styleUrls: ['./general-menu.component.css']
})
export class GeneralMenuComponent implements OnInit {

  menus = [];
  constructor(private rutes: RutesService) {

  }

  ngOnInit() {
    this.get_data_menu();
  }



  get_data_menu() {
    this.rutes.getPrincipalMenu().subscribe(res => {
      console.log("res -->", res);
      for (var i = 0; i < res.length; i++) {
        this.menus.push({
          "name": res[i].title,
          "url": res[i].url,
          "id": res[i].object_id,
        })
      }
    });

    console.log("menus", this.menus);
  }

}
