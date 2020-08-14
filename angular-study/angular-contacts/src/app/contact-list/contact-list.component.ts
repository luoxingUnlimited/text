import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  // 初始化
  public contacts: any

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getContacts()
  }

  getContacts () {
    this.http.get('http://localhost:3000/contacts')
    .toPromise()
    .then(data => {
      this.contacts = data
    })
    .catch(err => {
      console.log(err)
    })
  }

  deleteContactById(id) {
    if (!window.confirm('您确定要删除该项吗？')) {
      return
    }
    this.http.delete(`http://localhost:3000/contacts/${id}`)
    .toPromise()
    .then(data => {
      this.getContacts()
    })
    .catch(err => {
      console.log(err)
    })
  }
}
