import { Component, OnInit } from '@angular/core';
import { AdminsServicesService } from '../../../admins-services/admins-services.service';

@Component({
  selector: 'app-admins-list',
  templateUrl: './admins-list.component.html',
  styleUrls: ['./admins-list.component.scss']
})
export class AdminsListComponent implements OnInit {
  public adminsList: any[];
  constructor(public adminsServicesService: AdminsServicesService) {
    this.adminsList = [];
  }

  ngOnInit() {
    this.adminsServicesService.getAdminsList().subscribe((response) => {
      this.adminsList = response;
    });
  }

}
