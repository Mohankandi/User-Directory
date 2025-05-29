import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  filterText = '';

  users = [
    { name: 'John', email: 'John@example.com', joined: new Date('2024-02-01'), photo: 'https://randomuser.me/api/portraits/men/11.jpg' },
    { name: 'Anjali Rao', email: 'anjali@example.com', joined: new Date('2023-11-10'), photo: 'https://randomuser.me/api/portraits/women/22.jpg' },
    { name: 'David Chen', email: 'david@example.com', joined: new Date('2022-08-25'), photo: 'https://randomuser.me/api/portraits/men/33.jpg' }
  ];

  get filteredUsers() {
    return this.users.filter(user =>
      user.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
