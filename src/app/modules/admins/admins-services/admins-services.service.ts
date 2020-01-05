import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminsServicesService {

  constructor() { }

  public getAdminsList(): Observable<any> {
    const adminList = [
      {
        adminPicUrl: 'assets/images/admins/admin1.png',
        adminName: 'Theresa Fox',
        phoneNumber: '704.555.0127',
        employeeNumber: 771,
        projects: 'All Project',
        adminPrevilege: 'Super Admin'
      }, {
        adminPicUrl: 'assets/images/admins/admin2.png',
        adminName: 'Connie Cooper',
        phoneNumber: '201.555.0124',
        employeeNumber: 514,
        projects: 'All Project',
        adminPrevilege: 'Limited'
      }, {
        adminPicUrl: 'assets/images/admins/admin3.png',
        adminName: 'Pat Nguyen',
        phoneNumber: '603.555.0123',
        employeeNumber: 822,
        projects: 'All Project',
        adminPrevilege: 'Limited'
      },
      {
        adminPicUrl: 'assets/images/admins/admin4.png',
        adminName: 'Rosemary Bell',
        phoneNumber: '239.555.0108',
        employeeNumber: 810,
        projects: 'All Project',
        adminPrevilege: 'Limited'
      },
      {
        adminPicUrl: 'assets/images/admins/admin5.png',
        adminName: 'Darlene Richards',
        phoneNumber: '702.555.0122',
        employeeNumber: 903,
        projects: 'All Project',
        adminPrevilege: 'Limited'
      },
      {
        adminPicUrl: 'assets/images/admins/admin6.png',
        adminName: 'Harold Pena',
        phoneNumber: '229.555.0109',
        employeeNumber: 179,
        projects: 'Super Admin',
        adminPrevilege: 'Limited'
      },
      {
        adminPicUrl: 'assets/images/admins/admin7.png',
        adminName: 'Greg Hawkins',
        phoneNumber: '225.555.0118',
        employeeNumber: 524,
        projects: 'All Project',
        adminPrevilege: 'Limited'
      },
      {
        adminPicUrl: 'assets/images/admins/admin8.png',
        adminName: 'Jacob Mckinney',
        phoneNumber: '414.555.0132',
        employeeNumber: 981,
        projects: 'All Project',
        adminPrevilege: 'Limited'
      }
    ];

    return of(adminList);

  }
}
